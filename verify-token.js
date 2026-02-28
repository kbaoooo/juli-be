const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const https = require('https');
require('dotenv').config();

const token = process.argv[2];

if (!token) {
    console.error('Usage: node verify-token.js <token>');
    process.exit(1);
}

// Decode the token header first
const decodedToken = jwt.decode(token, { complete: true });
if (!decodedToken) {
    console.error('Could not decode token');
    process.exit(1);
}

console.log('Token header:', JSON.stringify(decodedToken.header));
const kid = decodedToken.header.kid;
const alg = decodedToken.header.alg;
console.log(`Algorithm: ${alg}, KID: ${kid}\n`);

// Try multiple JWKS endpoints
const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

const endpoints = [
    `${supabaseUrl}/auth/v1/jwks`,
    `${supabaseUrl}/auth/v1/.well-known/jwks.json`,
    `${supabaseUrl}/.well-known/jwks.json`,
    `${supabaseUrl}/auth/v1/keys`,
];

async function tryEndpoint(uri) {
    return new Promise((resolve) => {
        const url = new URL(uri);
        const options = {
            hostname: url.hostname,
            path: url.pathname,
            headers: {
                'apiKey': anonKey,
                'Authorization': `Bearer ${anonKey}`
            }
        };
        https.get(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`  ${uri}`);
                console.log(`  Status: ${res.statusCode}`);
                console.log(`  Response: ${data.substring(0, 200)}`);
                resolve({ status: res.statusCode, data });
            });
        }).on('error', (err) => {
            console.log(`  ${uri} - Error: ${err.message}`);
            resolve({ status: 0, data: '' });
        });
    });
}

async function main() {
    console.log('--- Probing JWKS endpoints ---');
    for (const ep of endpoints) {
        await tryEndpoint(ep);
        console.log('');
    }

    // Now try using jwks-rsa with each endpoint
    console.log('\n--- Trying jwks-rsa verification ---');
    for (const ep of endpoints) {
        try {
            const client = jwksClient({
                jwksUri: ep,
                requestHeaders: {
                    'apiKey': anonKey,
                    'Authorization': `Bearer ${anonKey}`
                }
            });
            const key = await client.getSigningKey(kid);
            const signingKey = key.getPublicKey();
            const verified = jwt.verify(token, signingKey, { algorithms: [alg] });
            console.log(`SUCCESS with ${ep}!`);
            console.log('Payload:', JSON.stringify(verified, null, 2));
            return;
        } catch (err) {
            console.log(`FAILED with ${ep}: ${err.message}`);
        }
    }
}

main();
