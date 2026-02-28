
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ai_insights
 * 
 */
export type ai_insights = $Result.DefaultSelection<Prisma.$ai_insightsPayload>
/**
 * Model collection_items
 * 
 */
export type collection_items = $Result.DefaultSelection<Prisma.$collection_itemsPayload>
/**
 * Model collections
 * 
 */
export type collections = $Result.DefaultSelection<Prisma.$collectionsPayload>
/**
 * Model contents_tags
 * 
 */
export type contents_tags = $Result.DefaultSelection<Prisma.$contents_tagsPayload>
/**
 * Model notes
 * 
 */
export type notes = $Result.DefaultSelection<Prisma.$notesPayload>
/**
 * Model saved_contents
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type saved_contents = $Result.DefaultSelection<Prisma.$saved_contentsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model usage_logs
 * 
 */
export type usage_logs = $Result.DefaultSelection<Prisma.$usage_logsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model workspace_members
 * 
 */
export type workspace_members = $Result.DefaultSelection<Prisma.$workspace_membersPayload>
/**
 * Model workspaces
 * 
 */
export type workspaces = $Result.DefaultSelection<Prisma.$workspacesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_plan: {
  free: 'free',
  pro: 'pro',
  team: 'team'
};

export type user_plan = (typeof user_plan)[keyof typeof user_plan]


export const workspace_role: {
  owner: 'owner',
  editor: 'editor',
  viewer: 'viewer'
};

export type workspace_role = (typeof workspace_role)[keyof typeof workspace_role]

}

export type user_plan = $Enums.user_plan

export const user_plan: typeof $Enums.user_plan

export type workspace_role = $Enums.workspace_role

export const workspace_role: typeof $Enums.workspace_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ai_insights
 * const ai_insights = await prisma.ai_insights.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ai_insights
   * const ai_insights = await prisma.ai_insights.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ai_insights`: Exposes CRUD operations for the **ai_insights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_insights
    * const ai_insights = await prisma.ai_insights.findMany()
    * ```
    */
  get ai_insights(): Prisma.ai_insightsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection_items`: Exposes CRUD operations for the **collection_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collection_items
    * const collection_items = await prisma.collection_items.findMany()
    * ```
    */
  get collection_items(): Prisma.collection_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collections`: Exposes CRUD operations for the **collections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collections.findMany()
    * ```
    */
  get collections(): Prisma.collectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contents_tags`: Exposes CRUD operations for the **contents_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents_tags
    * const contents_tags = await prisma.contents_tags.findMany()
    * ```
    */
  get contents_tags(): Prisma.contents_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.notesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saved_contents`: Exposes CRUD operations for the **saved_contents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_contents
    * const saved_contents = await prisma.saved_contents.findMany()
    * ```
    */
  get saved_contents(): Prisma.saved_contentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usage_logs`: Exposes CRUD operations for the **usage_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usage_logs
    * const usage_logs = await prisma.usage_logs.findMany()
    * ```
    */
  get usage_logs(): Prisma.usage_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace_members`: Exposes CRUD operations for the **workspace_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspace_members
    * const workspace_members = await prisma.workspace_members.findMany()
    * ```
    */
  get workspace_members(): Prisma.workspace_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaces`: Exposes CRUD operations for the **workspaces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspaces.findMany()
    * ```
    */
  get workspaces(): Prisma.workspacesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ai_insights: 'ai_insights',
    collection_items: 'collection_items',
    collections: 'collections',
    contents_tags: 'contents_tags',
    notes: 'notes',
    saved_contents: 'saved_contents',
    tags: 'tags',
    usage_logs: 'usage_logs',
    users: 'users',
    workspace_members: 'workspace_members',
    workspaces: 'workspaces'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ai_insights" | "collection_items" | "collections" | "contents_tags" | "notes" | "saved_contents" | "tags" | "usage_logs" | "users" | "workspace_members" | "workspaces"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ai_insights: {
        payload: Prisma.$ai_insightsPayload<ExtArgs>
        fields: Prisma.ai_insightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_insightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_insightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>
          }
          findFirst: {
            args: Prisma.ai_insightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_insightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>
          }
          findMany: {
            args: Prisma.ai_insightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>[]
          }
          create: {
            args: Prisma.ai_insightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>
          }
          createMany: {
            args: Prisma.ai_insightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ai_insightsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>[]
          }
          delete: {
            args: Prisma.ai_insightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>
          }
          update: {
            args: Prisma.ai_insightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>
          }
          deleteMany: {
            args: Prisma.ai_insightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_insightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ai_insightsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>[]
          }
          upsert: {
            args: Prisma.ai_insightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_insightsPayload>
          }
          aggregate: {
            args: Prisma.Ai_insightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_insights>
          }
          groupBy: {
            args: Prisma.ai_insightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_insightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_insightsCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_insightsCountAggregateOutputType> | number
          }
        }
      }
      collection_items: {
        payload: Prisma.$collection_itemsPayload<ExtArgs>
        fields: Prisma.collection_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.collection_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.collection_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>
          }
          findFirst: {
            args: Prisma.collection_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.collection_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>
          }
          findMany: {
            args: Prisma.collection_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>[]
          }
          create: {
            args: Prisma.collection_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>
          }
          createMany: {
            args: Prisma.collection_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.collection_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>[]
          }
          delete: {
            args: Prisma.collection_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>
          }
          update: {
            args: Prisma.collection_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>
          }
          deleteMany: {
            args: Prisma.collection_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.collection_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.collection_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>[]
          }
          upsert: {
            args: Prisma.collection_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collection_itemsPayload>
          }
          aggregate: {
            args: Prisma.Collection_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection_items>
          }
          groupBy: {
            args: Prisma.collection_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Collection_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.collection_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Collection_itemsCountAggregateOutputType> | number
          }
        }
      }
      collections: {
        payload: Prisma.$collectionsPayload<ExtArgs>
        fields: Prisma.collectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.collectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.collectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>
          }
          findFirst: {
            args: Prisma.collectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.collectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>
          }
          findMany: {
            args: Prisma.collectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>[]
          }
          create: {
            args: Prisma.collectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>
          }
          createMany: {
            args: Prisma.collectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.collectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>[]
          }
          delete: {
            args: Prisma.collectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>
          }
          update: {
            args: Prisma.collectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>
          }
          deleteMany: {
            args: Prisma.collectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.collectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.collectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>[]
          }
          upsert: {
            args: Prisma.collectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectionsPayload>
          }
          aggregate: {
            args: Prisma.CollectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollections>
          }
          groupBy: {
            args: Prisma.collectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.collectionsCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionsCountAggregateOutputType> | number
          }
        }
      }
      contents_tags: {
        payload: Prisma.$contents_tagsPayload<ExtArgs>
        fields: Prisma.contents_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contents_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contents_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>
          }
          findFirst: {
            args: Prisma.contents_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contents_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>
          }
          findMany: {
            args: Prisma.contents_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>[]
          }
          create: {
            args: Prisma.contents_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>
          }
          createMany: {
            args: Prisma.contents_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contents_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>[]
          }
          delete: {
            args: Prisma.contents_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>
          }
          update: {
            args: Prisma.contents_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>
          }
          deleteMany: {
            args: Prisma.contents_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contents_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contents_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>[]
          }
          upsert: {
            args: Prisma.contents_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contents_tagsPayload>
          }
          aggregate: {
            args: Prisma.Contents_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContents_tags>
          }
          groupBy: {
            args: Prisma.contents_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contents_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.contents_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Contents_tagsCountAggregateOutputType> | number
          }
        }
      }
      notes: {
        payload: Prisma.$notesPayload<ExtArgs>
        fields: Prisma.notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findFirst: {
            args: Prisma.notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findMany: {
            args: Prisma.notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          create: {
            args: Prisma.notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          createMany: {
            args: Prisma.notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          delete: {
            args: Prisma.notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          update: {
            args: Prisma.notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          deleteMany: {
            args: Prisma.notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          upsert: {
            args: Prisma.notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.notesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      saved_contents: {
        payload: Prisma.$saved_contentsPayload<ExtArgs>
        fields: Prisma.saved_contentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_contentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_contentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>
          }
          findFirst: {
            args: Prisma.saved_contentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_contentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>
          }
          findMany: {
            args: Prisma.saved_contentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>[]
          }
          create: {
            args: Prisma.saved_contentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>
          }
          createMany: {
            args: Prisma.saved_contentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.saved_contentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>[]
          }
          delete: {
            args: Prisma.saved_contentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>
          }
          update: {
            args: Prisma.saved_contentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>
          }
          deleteMany: {
            args: Prisma.saved_contentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saved_contentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.saved_contentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>[]
          }
          upsert: {
            args: Prisma.saved_contentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_contentsPayload>
          }
          aggregate: {
            args: Prisma.Saved_contentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_contents>
          }
          groupBy: {
            args: Prisma.saved_contentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_contentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_contentsCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_contentsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      usage_logs: {
        payload: Prisma.$usage_logsPayload<ExtArgs>
        fields: Prisma.usage_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usage_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usage_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>
          }
          findFirst: {
            args: Prisma.usage_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usage_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>
          }
          findMany: {
            args: Prisma.usage_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>[]
          }
          create: {
            args: Prisma.usage_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>
          }
          createMany: {
            args: Prisma.usage_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usage_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>[]
          }
          delete: {
            args: Prisma.usage_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>
          }
          update: {
            args: Prisma.usage_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>
          }
          deleteMany: {
            args: Prisma.usage_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usage_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usage_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>[]
          }
          upsert: {
            args: Prisma.usage_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usage_logsPayload>
          }
          aggregate: {
            args: Prisma.Usage_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsage_logs>
          }
          groupBy: {
            args: Prisma.usage_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usage_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.usage_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Usage_logsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      workspace_members: {
        payload: Prisma.$workspace_membersPayload<ExtArgs>
        fields: Prisma.workspace_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspace_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspace_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          findFirst: {
            args: Prisma.workspace_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspace_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          findMany: {
            args: Prisma.workspace_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>[]
          }
          create: {
            args: Prisma.workspace_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          createMany: {
            args: Prisma.workspace_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspace_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>[]
          }
          delete: {
            args: Prisma.workspace_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          update: {
            args: Prisma.workspace_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          deleteMany: {
            args: Prisma.workspace_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspace_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspace_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>[]
          }
          upsert: {
            args: Prisma.workspace_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          aggregate: {
            args: Prisma.Workspace_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace_members>
          }
          groupBy: {
            args: Prisma.workspace_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workspace_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspace_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Workspace_membersCountAggregateOutputType> | number
          }
        }
      }
      workspaces: {
        payload: Prisma.$workspacesPayload<ExtArgs>
        fields: Prisma.workspacesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findFirst: {
            args: Prisma.workspacesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findMany: {
            args: Prisma.workspacesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          create: {
            args: Prisma.workspacesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          createMany: {
            args: Prisma.workspacesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspacesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          delete: {
            args: Prisma.workspacesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          update: {
            args: Prisma.workspacesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          deleteMany: {
            args: Prisma.workspacesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspacesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspacesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          upsert: {
            args: Prisma.workspacesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          aggregate: {
            args: Prisma.WorkspacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaces>
          }
          groupBy: {
            args: Prisma.workspacesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacesCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    ai_insights?: ai_insightsOmit
    collection_items?: collection_itemsOmit
    collections?: collectionsOmit
    contents_tags?: contents_tagsOmit
    notes?: notesOmit
    saved_contents?: saved_contentsOmit
    tags?: tagsOmit
    usage_logs?: usage_logsOmit
    users?: usersOmit
    workspace_members?: workspace_membersOmit
    workspaces?: workspacesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CollectionsCountOutputType
   */

  export type CollectionsCountOutputType = {
    collection_items: number
  }

  export type CollectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection_items?: boolean | CollectionsCountOutputTypeCountCollection_itemsArgs
  }

  // Custom InputTypes
  /**
   * CollectionsCountOutputType without action
   */
  export type CollectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionsCountOutputType
     */
    select?: CollectionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionsCountOutputType without action
   */
  export type CollectionsCountOutputTypeCountCollection_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collection_itemsWhereInput
  }


  /**
   * Count Type Saved_contentsCountOutputType
   */

  export type Saved_contentsCountOutputType = {
    collection_items: number
    contents_tags: number
    notes: number
  }

  export type Saved_contentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection_items?: boolean | Saved_contentsCountOutputTypeCountCollection_itemsArgs
    contents_tags?: boolean | Saved_contentsCountOutputTypeCountContents_tagsArgs
    notes?: boolean | Saved_contentsCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * Saved_contentsCountOutputType without action
   */
  export type Saved_contentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_contentsCountOutputType
     */
    select?: Saved_contentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Saved_contentsCountOutputType without action
   */
  export type Saved_contentsCountOutputTypeCountCollection_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collection_itemsWhereInput
  }

  /**
   * Saved_contentsCountOutputType without action
   */
  export type Saved_contentsCountOutputTypeCountContents_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contents_tagsWhereInput
  }

  /**
   * Saved_contentsCountOutputType without action
   */
  export type Saved_contentsCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    contents_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents_tags?: boolean | TagsCountOutputTypeCountContents_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountContents_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contents_tagsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    collections: number
    saved_contents: number
    usage_logs: number
    workspace_members: number
    workspaces: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | UsersCountOutputTypeCountCollectionsArgs
    saved_contents?: boolean | UsersCountOutputTypeCountSaved_contentsArgs
    usage_logs?: boolean | UsersCountOutputTypeCountUsage_logsArgs
    workspace_members?: boolean | UsersCountOutputTypeCountWorkspace_membersArgs
    workspaces?: boolean | UsersCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collectionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSaved_contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_contentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsage_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usage_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
  }


  /**
   * Count Type WorkspacesCountOutputType
   */

  export type WorkspacesCountOutputType = {
    collections: number
    saved_contents: number
    tags: number
    usage_logs: number
    workspace_members: number
  }

  export type WorkspacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | WorkspacesCountOutputTypeCountCollectionsArgs
    saved_contents?: boolean | WorkspacesCountOutputTypeCountSaved_contentsArgs
    tags?: boolean | WorkspacesCountOutputTypeCountTagsArgs
    usage_logs?: boolean | WorkspacesCountOutputTypeCountUsage_logsArgs
    workspace_members?: boolean | WorkspacesCountOutputTypeCountWorkspace_membersArgs
  }

  // Custom InputTypes
  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspacesCountOutputType
     */
    select?: WorkspacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collectionsWhereInput
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountSaved_contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_contentsWhereInput
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountUsage_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usage_logsWhereInput
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountWorkspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_membersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ai_insights
   */

  export type AggregateAi_insights = {
    _count: Ai_insightsCountAggregateOutputType | null
    _avg: Ai_insightsAvgAggregateOutputType | null
    _sum: Ai_insightsSumAggregateOutputType | null
    _min: Ai_insightsMinAggregateOutputType | null
    _max: Ai_insightsMaxAggregateOutputType | null
  }

  export type Ai_insightsAvgAggregateOutputType = {
    confidence: number | null
  }

  export type Ai_insightsSumAggregateOutputType = {
    confidence: number | null
  }

  export type Ai_insightsMinAggregateOutputType = {
    id: string | null
    content_id: string | null
    summary: string | null
    confidence: number | null
    created_at: Date | null
  }

  export type Ai_insightsMaxAggregateOutputType = {
    id: string | null
    content_id: string | null
    summary: string | null
    confidence: number | null
    created_at: Date | null
  }

  export type Ai_insightsCountAggregateOutputType = {
    id: number
    content_id: number
    summary: number
    hook: number
    format: number
    angle: number
    idea_suggestions: number
    confidence: number
    raw_analysis: number
    created_at: number
    _all: number
  }


  export type Ai_insightsAvgAggregateInputType = {
    confidence?: true
  }

  export type Ai_insightsSumAggregateInputType = {
    confidence?: true
  }

  export type Ai_insightsMinAggregateInputType = {
    id?: true
    content_id?: true
    summary?: true
    confidence?: true
    created_at?: true
  }

  export type Ai_insightsMaxAggregateInputType = {
    id?: true
    content_id?: true
    summary?: true
    confidence?: true
    created_at?: true
  }

  export type Ai_insightsCountAggregateInputType = {
    id?: true
    content_id?: true
    summary?: true
    hook?: true
    format?: true
    angle?: true
    idea_suggestions?: true
    confidence?: true
    raw_analysis?: true
    created_at?: true
    _all?: true
  }

  export type Ai_insightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_insights to aggregate.
     */
    where?: ai_insightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_insights to fetch.
     */
    orderBy?: ai_insightsOrderByWithRelationInput | ai_insightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_insightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_insights
    **/
    _count?: true | Ai_insightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_insightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_insightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_insightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_insightsMaxAggregateInputType
  }

  export type GetAi_insightsAggregateType<T extends Ai_insightsAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_insights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_insights[P]>
      : GetScalarType<T[P], AggregateAi_insights[P]>
  }




  export type ai_insightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_insightsWhereInput
    orderBy?: ai_insightsOrderByWithAggregationInput | ai_insightsOrderByWithAggregationInput[]
    by: Ai_insightsScalarFieldEnum[] | Ai_insightsScalarFieldEnum
    having?: ai_insightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_insightsCountAggregateInputType | true
    _avg?: Ai_insightsAvgAggregateInputType
    _sum?: Ai_insightsSumAggregateInputType
    _min?: Ai_insightsMinAggregateInputType
    _max?: Ai_insightsMaxAggregateInputType
  }

  export type Ai_insightsGroupByOutputType = {
    id: string
    content_id: string
    summary: string
    hook: JsonValue
    format: JsonValue
    angle: JsonValue
    idea_suggestions: JsonValue
    confidence: number
    raw_analysis: JsonValue
    created_at: Date
    _count: Ai_insightsCountAggregateOutputType | null
    _avg: Ai_insightsAvgAggregateOutputType | null
    _sum: Ai_insightsSumAggregateOutputType | null
    _min: Ai_insightsMinAggregateOutputType | null
    _max: Ai_insightsMaxAggregateOutputType | null
  }

  type GetAi_insightsGroupByPayload<T extends ai_insightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_insightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_insightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_insightsGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_insightsGroupByOutputType[P]>
        }
      >
    >


  export type ai_insightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    summary?: boolean
    hook?: boolean
    format?: boolean
    angle?: boolean
    idea_suggestions?: boolean
    confidence?: boolean
    raw_analysis?: boolean
    created_at?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ai_insights"]>

  export type ai_insightsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    summary?: boolean
    hook?: boolean
    format?: boolean
    angle?: boolean
    idea_suggestions?: boolean
    confidence?: boolean
    raw_analysis?: boolean
    created_at?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ai_insights"]>

  export type ai_insightsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    summary?: boolean
    hook?: boolean
    format?: boolean
    angle?: boolean
    idea_suggestions?: boolean
    confidence?: boolean
    raw_analysis?: boolean
    created_at?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ai_insights"]>

  export type ai_insightsSelectScalar = {
    id?: boolean
    content_id?: boolean
    summary?: boolean
    hook?: boolean
    format?: boolean
    angle?: boolean
    idea_suggestions?: boolean
    confidence?: boolean
    raw_analysis?: boolean
    created_at?: boolean
  }

  export type ai_insightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content_id" | "summary" | "hook" | "format" | "angle" | "idea_suggestions" | "confidence" | "raw_analysis" | "created_at", ExtArgs["result"]["ai_insights"]>
  export type ai_insightsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }
  export type ai_insightsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }
  export type ai_insightsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }

  export type $ai_insightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_insights"
    objects: {
      saved_contents: Prisma.$saved_contentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content_id: string
      summary: string
      hook: Prisma.JsonValue
      format: Prisma.JsonValue
      angle: Prisma.JsonValue
      idea_suggestions: Prisma.JsonValue
      confidence: number
      raw_analysis: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["ai_insights"]>
    composites: {}
  }

  type ai_insightsGetPayload<S extends boolean | null | undefined | ai_insightsDefaultArgs> = $Result.GetResult<Prisma.$ai_insightsPayload, S>

  type ai_insightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_insightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_insightsCountAggregateInputType | true
    }

  export interface ai_insightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_insights'], meta: { name: 'ai_insights' } }
    /**
     * Find zero or one Ai_insights that matches the filter.
     * @param {ai_insightsFindUniqueArgs} args - Arguments to find a Ai_insights
     * @example
     * // Get one Ai_insights
     * const ai_insights = await prisma.ai_insights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_insightsFindUniqueArgs>(args: SelectSubset<T, ai_insightsFindUniqueArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_insights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_insightsFindUniqueOrThrowArgs} args - Arguments to find a Ai_insights
     * @example
     * // Get one Ai_insights
     * const ai_insights = await prisma.ai_insights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_insightsFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_insightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_insights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_insightsFindFirstArgs} args - Arguments to find a Ai_insights
     * @example
     * // Get one Ai_insights
     * const ai_insights = await prisma.ai_insights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_insightsFindFirstArgs>(args?: SelectSubset<T, ai_insightsFindFirstArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_insights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_insightsFindFirstOrThrowArgs} args - Arguments to find a Ai_insights
     * @example
     * // Get one Ai_insights
     * const ai_insights = await prisma.ai_insights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_insightsFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_insightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_insights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_insightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_insights
     * const ai_insights = await prisma.ai_insights.findMany()
     * 
     * // Get first 10 Ai_insights
     * const ai_insights = await prisma.ai_insights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_insightsWithIdOnly = await prisma.ai_insights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ai_insightsFindManyArgs>(args?: SelectSubset<T, ai_insightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_insights.
     * @param {ai_insightsCreateArgs} args - Arguments to create a Ai_insights.
     * @example
     * // Create one Ai_insights
     * const Ai_insights = await prisma.ai_insights.create({
     *   data: {
     *     // ... data to create a Ai_insights
     *   }
     * })
     * 
     */
    create<T extends ai_insightsCreateArgs>(args: SelectSubset<T, ai_insightsCreateArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_insights.
     * @param {ai_insightsCreateManyArgs} args - Arguments to create many Ai_insights.
     * @example
     * // Create many Ai_insights
     * const ai_insights = await prisma.ai_insights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_insightsCreateManyArgs>(args?: SelectSubset<T, ai_insightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ai_insights and returns the data saved in the database.
     * @param {ai_insightsCreateManyAndReturnArgs} args - Arguments to create many Ai_insights.
     * @example
     * // Create many Ai_insights
     * const ai_insights = await prisma.ai_insights.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ai_insights and only return the `id`
     * const ai_insightsWithIdOnly = await prisma.ai_insights.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ai_insightsCreateManyAndReturnArgs>(args?: SelectSubset<T, ai_insightsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ai_insights.
     * @param {ai_insightsDeleteArgs} args - Arguments to delete one Ai_insights.
     * @example
     * // Delete one Ai_insights
     * const Ai_insights = await prisma.ai_insights.delete({
     *   where: {
     *     // ... filter to delete one Ai_insights
     *   }
     * })
     * 
     */
    delete<T extends ai_insightsDeleteArgs>(args: SelectSubset<T, ai_insightsDeleteArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_insights.
     * @param {ai_insightsUpdateArgs} args - Arguments to update one Ai_insights.
     * @example
     * // Update one Ai_insights
     * const ai_insights = await prisma.ai_insights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_insightsUpdateArgs>(args: SelectSubset<T, ai_insightsUpdateArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_insights.
     * @param {ai_insightsDeleteManyArgs} args - Arguments to filter Ai_insights to delete.
     * @example
     * // Delete a few Ai_insights
     * const { count } = await prisma.ai_insights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_insightsDeleteManyArgs>(args?: SelectSubset<T, ai_insightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_insightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_insights
     * const ai_insights = await prisma.ai_insights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_insightsUpdateManyArgs>(args: SelectSubset<T, ai_insightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_insights and returns the data updated in the database.
     * @param {ai_insightsUpdateManyAndReturnArgs} args - Arguments to update many Ai_insights.
     * @example
     * // Update many Ai_insights
     * const ai_insights = await prisma.ai_insights.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ai_insights and only return the `id`
     * const ai_insightsWithIdOnly = await prisma.ai_insights.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ai_insightsUpdateManyAndReturnArgs>(args: SelectSubset<T, ai_insightsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ai_insights.
     * @param {ai_insightsUpsertArgs} args - Arguments to update or create a Ai_insights.
     * @example
     * // Update or create a Ai_insights
     * const ai_insights = await prisma.ai_insights.upsert({
     *   create: {
     *     // ... data to create a Ai_insights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_insights we want to update
     *   }
     * })
     */
    upsert<T extends ai_insightsUpsertArgs>(args: SelectSubset<T, ai_insightsUpsertArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_insightsCountArgs} args - Arguments to filter Ai_insights to count.
     * @example
     * // Count the number of Ai_insights
     * const count = await prisma.ai_insights.count({
     *   where: {
     *     // ... the filter for the Ai_insights we want to count
     *   }
     * })
    **/
    count<T extends ai_insightsCountArgs>(
      args?: Subset<T, ai_insightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_insightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_insightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ai_insightsAggregateArgs>(args: Subset<T, Ai_insightsAggregateArgs>): Prisma.PrismaPromise<GetAi_insightsAggregateType<T>>

    /**
     * Group by Ai_insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_insightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ai_insightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_insightsGroupByArgs['orderBy'] }
        : { orderBy?: ai_insightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ai_insightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_insightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_insights model
   */
  readonly fields: ai_insightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_insights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_insightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saved_contents<T extends saved_contentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, saved_contentsDefaultArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ai_insights model
   */
  interface ai_insightsFieldRefs {
    readonly id: FieldRef<"ai_insights", 'String'>
    readonly content_id: FieldRef<"ai_insights", 'String'>
    readonly summary: FieldRef<"ai_insights", 'String'>
    readonly hook: FieldRef<"ai_insights", 'Json'>
    readonly format: FieldRef<"ai_insights", 'Json'>
    readonly angle: FieldRef<"ai_insights", 'Json'>
    readonly idea_suggestions: FieldRef<"ai_insights", 'Json'>
    readonly confidence: FieldRef<"ai_insights", 'Float'>
    readonly raw_analysis: FieldRef<"ai_insights", 'Json'>
    readonly created_at: FieldRef<"ai_insights", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ai_insights findUnique
   */
  export type ai_insightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * Filter, which ai_insights to fetch.
     */
    where: ai_insightsWhereUniqueInput
  }

  /**
   * ai_insights findUniqueOrThrow
   */
  export type ai_insightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * Filter, which ai_insights to fetch.
     */
    where: ai_insightsWhereUniqueInput
  }

  /**
   * ai_insights findFirst
   */
  export type ai_insightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * Filter, which ai_insights to fetch.
     */
    where?: ai_insightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_insights to fetch.
     */
    orderBy?: ai_insightsOrderByWithRelationInput | ai_insightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_insights.
     */
    cursor?: ai_insightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_insights.
     */
    distinct?: Ai_insightsScalarFieldEnum | Ai_insightsScalarFieldEnum[]
  }

  /**
   * ai_insights findFirstOrThrow
   */
  export type ai_insightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * Filter, which ai_insights to fetch.
     */
    where?: ai_insightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_insights to fetch.
     */
    orderBy?: ai_insightsOrderByWithRelationInput | ai_insightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_insights.
     */
    cursor?: ai_insightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_insights.
     */
    distinct?: Ai_insightsScalarFieldEnum | Ai_insightsScalarFieldEnum[]
  }

  /**
   * ai_insights findMany
   */
  export type ai_insightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * Filter, which ai_insights to fetch.
     */
    where?: ai_insightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_insights to fetch.
     */
    orderBy?: ai_insightsOrderByWithRelationInput | ai_insightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_insights.
     */
    cursor?: ai_insightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_insights.
     */
    skip?: number
    distinct?: Ai_insightsScalarFieldEnum | Ai_insightsScalarFieldEnum[]
  }

  /**
   * ai_insights create
   */
  export type ai_insightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * The data needed to create a ai_insights.
     */
    data: XOR<ai_insightsCreateInput, ai_insightsUncheckedCreateInput>
  }

  /**
   * ai_insights createMany
   */
  export type ai_insightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_insights.
     */
    data: ai_insightsCreateManyInput | ai_insightsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_insights createManyAndReturn
   */
  export type ai_insightsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * The data used to create many ai_insights.
     */
    data: ai_insightsCreateManyInput | ai_insightsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ai_insights update
   */
  export type ai_insightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * The data needed to update a ai_insights.
     */
    data: XOR<ai_insightsUpdateInput, ai_insightsUncheckedUpdateInput>
    /**
     * Choose, which ai_insights to update.
     */
    where: ai_insightsWhereUniqueInput
  }

  /**
   * ai_insights updateMany
   */
  export type ai_insightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_insights.
     */
    data: XOR<ai_insightsUpdateManyMutationInput, ai_insightsUncheckedUpdateManyInput>
    /**
     * Filter which ai_insights to update
     */
    where?: ai_insightsWhereInput
    /**
     * Limit how many ai_insights to update.
     */
    limit?: number
  }

  /**
   * ai_insights updateManyAndReturn
   */
  export type ai_insightsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * The data used to update ai_insights.
     */
    data: XOR<ai_insightsUpdateManyMutationInput, ai_insightsUncheckedUpdateManyInput>
    /**
     * Filter which ai_insights to update
     */
    where?: ai_insightsWhereInput
    /**
     * Limit how many ai_insights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ai_insights upsert
   */
  export type ai_insightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * The filter to search for the ai_insights to update in case it exists.
     */
    where: ai_insightsWhereUniqueInput
    /**
     * In case the ai_insights found by the `where` argument doesn't exist, create a new ai_insights with this data.
     */
    create: XOR<ai_insightsCreateInput, ai_insightsUncheckedCreateInput>
    /**
     * In case the ai_insights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_insightsUpdateInput, ai_insightsUncheckedUpdateInput>
  }

  /**
   * ai_insights delete
   */
  export type ai_insightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    /**
     * Filter which ai_insights to delete.
     */
    where: ai_insightsWhereUniqueInput
  }

  /**
   * ai_insights deleteMany
   */
  export type ai_insightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_insights to delete
     */
    where?: ai_insightsWhereInput
    /**
     * Limit how many ai_insights to delete.
     */
    limit?: number
  }

  /**
   * ai_insights without action
   */
  export type ai_insightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
  }


  /**
   * Model collection_items
   */

  export type AggregateCollection_items = {
    _count: Collection_itemsCountAggregateOutputType | null
    _min: Collection_itemsMinAggregateOutputType | null
    _max: Collection_itemsMaxAggregateOutputType | null
  }

  export type Collection_itemsMinAggregateOutputType = {
    id: string | null
    content_id: string | null
    collection_id: string | null
  }

  export type Collection_itemsMaxAggregateOutputType = {
    id: string | null
    content_id: string | null
    collection_id: string | null
  }

  export type Collection_itemsCountAggregateOutputType = {
    id: number
    content_id: number
    collection_id: number
    _all: number
  }


  export type Collection_itemsMinAggregateInputType = {
    id?: true
    content_id?: true
    collection_id?: true
  }

  export type Collection_itemsMaxAggregateInputType = {
    id?: true
    content_id?: true
    collection_id?: true
  }

  export type Collection_itemsCountAggregateInputType = {
    id?: true
    content_id?: true
    collection_id?: true
    _all?: true
  }

  export type Collection_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collection_items to aggregate.
     */
    where?: collection_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collection_items to fetch.
     */
    orderBy?: collection_itemsOrderByWithRelationInput | collection_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: collection_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collection_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collection_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned collection_items
    **/
    _count?: true | Collection_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Collection_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Collection_itemsMaxAggregateInputType
  }

  export type GetCollection_itemsAggregateType<T extends Collection_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection_items[P]>
      : GetScalarType<T[P], AggregateCollection_items[P]>
  }




  export type collection_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collection_itemsWhereInput
    orderBy?: collection_itemsOrderByWithAggregationInput | collection_itemsOrderByWithAggregationInput[]
    by: Collection_itemsScalarFieldEnum[] | Collection_itemsScalarFieldEnum
    having?: collection_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Collection_itemsCountAggregateInputType | true
    _min?: Collection_itemsMinAggregateInputType
    _max?: Collection_itemsMaxAggregateInputType
  }

  export type Collection_itemsGroupByOutputType = {
    id: string
    content_id: string
    collection_id: string
    _count: Collection_itemsCountAggregateOutputType | null
    _min: Collection_itemsMinAggregateOutputType | null
    _max: Collection_itemsMaxAggregateOutputType | null
  }

  type GetCollection_itemsGroupByPayload<T extends collection_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Collection_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Collection_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Collection_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Collection_itemsGroupByOutputType[P]>
        }
      >
    >


  export type collection_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    collection_id?: boolean
    collections?: boolean | collectionsDefaultArgs<ExtArgs>
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection_items"]>

  export type collection_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    collection_id?: boolean
    collections?: boolean | collectionsDefaultArgs<ExtArgs>
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection_items"]>

  export type collection_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    collection_id?: boolean
    collections?: boolean | collectionsDefaultArgs<ExtArgs>
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection_items"]>

  export type collection_itemsSelectScalar = {
    id?: boolean
    content_id?: boolean
    collection_id?: boolean
  }

  export type collection_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content_id" | "collection_id", ExtArgs["result"]["collection_items"]>
  export type collection_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | collectionsDefaultArgs<ExtArgs>
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }
  export type collection_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | collectionsDefaultArgs<ExtArgs>
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }
  export type collection_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | collectionsDefaultArgs<ExtArgs>
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }

  export type $collection_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "collection_items"
    objects: {
      collections: Prisma.$collectionsPayload<ExtArgs>
      saved_contents: Prisma.$saved_contentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content_id: string
      collection_id: string
    }, ExtArgs["result"]["collection_items"]>
    composites: {}
  }

  type collection_itemsGetPayload<S extends boolean | null | undefined | collection_itemsDefaultArgs> = $Result.GetResult<Prisma.$collection_itemsPayload, S>

  type collection_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<collection_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Collection_itemsCountAggregateInputType | true
    }

  export interface collection_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collection_items'], meta: { name: 'collection_items' } }
    /**
     * Find zero or one Collection_items that matches the filter.
     * @param {collection_itemsFindUniqueArgs} args - Arguments to find a Collection_items
     * @example
     * // Get one Collection_items
     * const collection_items = await prisma.collection_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends collection_itemsFindUniqueArgs>(args: SelectSubset<T, collection_itemsFindUniqueArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {collection_itemsFindUniqueOrThrowArgs} args - Arguments to find a Collection_items
     * @example
     * // Get one Collection_items
     * const collection_items = await prisma.collection_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends collection_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, collection_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_itemsFindFirstArgs} args - Arguments to find a Collection_items
     * @example
     * // Get one Collection_items
     * const collection_items = await prisma.collection_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends collection_itemsFindFirstArgs>(args?: SelectSubset<T, collection_itemsFindFirstArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_itemsFindFirstOrThrowArgs} args - Arguments to find a Collection_items
     * @example
     * // Get one Collection_items
     * const collection_items = await prisma.collection_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends collection_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, collection_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collection_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collection_items
     * const collection_items = await prisma.collection_items.findMany()
     * 
     * // Get first 10 Collection_items
     * const collection_items = await prisma.collection_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collection_itemsWithIdOnly = await prisma.collection_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends collection_itemsFindManyArgs>(args?: SelectSubset<T, collection_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection_items.
     * @param {collection_itemsCreateArgs} args - Arguments to create a Collection_items.
     * @example
     * // Create one Collection_items
     * const Collection_items = await prisma.collection_items.create({
     *   data: {
     *     // ... data to create a Collection_items
     *   }
     * })
     * 
     */
    create<T extends collection_itemsCreateArgs>(args: SelectSubset<T, collection_itemsCreateArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collection_items.
     * @param {collection_itemsCreateManyArgs} args - Arguments to create many Collection_items.
     * @example
     * // Create many Collection_items
     * const collection_items = await prisma.collection_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends collection_itemsCreateManyArgs>(args?: SelectSubset<T, collection_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collection_items and returns the data saved in the database.
     * @param {collection_itemsCreateManyAndReturnArgs} args - Arguments to create many Collection_items.
     * @example
     * // Create many Collection_items
     * const collection_items = await prisma.collection_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collection_items and only return the `id`
     * const collection_itemsWithIdOnly = await prisma.collection_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends collection_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, collection_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collection_items.
     * @param {collection_itemsDeleteArgs} args - Arguments to delete one Collection_items.
     * @example
     * // Delete one Collection_items
     * const Collection_items = await prisma.collection_items.delete({
     *   where: {
     *     // ... filter to delete one Collection_items
     *   }
     * })
     * 
     */
    delete<T extends collection_itemsDeleteArgs>(args: SelectSubset<T, collection_itemsDeleteArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection_items.
     * @param {collection_itemsUpdateArgs} args - Arguments to update one Collection_items.
     * @example
     * // Update one Collection_items
     * const collection_items = await prisma.collection_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends collection_itemsUpdateArgs>(args: SelectSubset<T, collection_itemsUpdateArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collection_items.
     * @param {collection_itemsDeleteManyArgs} args - Arguments to filter Collection_items to delete.
     * @example
     * // Delete a few Collection_items
     * const { count } = await prisma.collection_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends collection_itemsDeleteManyArgs>(args?: SelectSubset<T, collection_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collection_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collection_items
     * const collection_items = await prisma.collection_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends collection_itemsUpdateManyArgs>(args: SelectSubset<T, collection_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collection_items and returns the data updated in the database.
     * @param {collection_itemsUpdateManyAndReturnArgs} args - Arguments to update many Collection_items.
     * @example
     * // Update many Collection_items
     * const collection_items = await prisma.collection_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collection_items and only return the `id`
     * const collection_itemsWithIdOnly = await prisma.collection_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends collection_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, collection_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collection_items.
     * @param {collection_itemsUpsertArgs} args - Arguments to update or create a Collection_items.
     * @example
     * // Update or create a Collection_items
     * const collection_items = await prisma.collection_items.upsert({
     *   create: {
     *     // ... data to create a Collection_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection_items we want to update
     *   }
     * })
     */
    upsert<T extends collection_itemsUpsertArgs>(args: SelectSubset<T, collection_itemsUpsertArgs<ExtArgs>>): Prisma__collection_itemsClient<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collection_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_itemsCountArgs} args - Arguments to filter Collection_items to count.
     * @example
     * // Count the number of Collection_items
     * const count = await prisma.collection_items.count({
     *   where: {
     *     // ... the filter for the Collection_items we want to count
     *   }
     * })
    **/
    count<T extends collection_itemsCountArgs>(
      args?: Subset<T, collection_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Collection_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Collection_itemsAggregateArgs>(args: Subset<T, Collection_itemsAggregateArgs>): Prisma.PrismaPromise<GetCollection_itemsAggregateType<T>>

    /**
     * Group by Collection_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends collection_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collection_itemsGroupByArgs['orderBy'] }
        : { orderBy?: collection_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, collection_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollection_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the collection_items model
   */
  readonly fields: collection_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collection_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collection_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collections<T extends collectionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, collectionsDefaultArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saved_contents<T extends saved_contentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, saved_contentsDefaultArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the collection_items model
   */
  interface collection_itemsFieldRefs {
    readonly id: FieldRef<"collection_items", 'String'>
    readonly content_id: FieldRef<"collection_items", 'String'>
    readonly collection_id: FieldRef<"collection_items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * collection_items findUnique
   */
  export type collection_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * Filter, which collection_items to fetch.
     */
    where: collection_itemsWhereUniqueInput
  }

  /**
   * collection_items findUniqueOrThrow
   */
  export type collection_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * Filter, which collection_items to fetch.
     */
    where: collection_itemsWhereUniqueInput
  }

  /**
   * collection_items findFirst
   */
  export type collection_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * Filter, which collection_items to fetch.
     */
    where?: collection_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collection_items to fetch.
     */
    orderBy?: collection_itemsOrderByWithRelationInput | collection_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collection_items.
     */
    cursor?: collection_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collection_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collection_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collection_items.
     */
    distinct?: Collection_itemsScalarFieldEnum | Collection_itemsScalarFieldEnum[]
  }

  /**
   * collection_items findFirstOrThrow
   */
  export type collection_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * Filter, which collection_items to fetch.
     */
    where?: collection_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collection_items to fetch.
     */
    orderBy?: collection_itemsOrderByWithRelationInput | collection_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collection_items.
     */
    cursor?: collection_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collection_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collection_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collection_items.
     */
    distinct?: Collection_itemsScalarFieldEnum | Collection_itemsScalarFieldEnum[]
  }

  /**
   * collection_items findMany
   */
  export type collection_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * Filter, which collection_items to fetch.
     */
    where?: collection_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collection_items to fetch.
     */
    orderBy?: collection_itemsOrderByWithRelationInput | collection_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing collection_items.
     */
    cursor?: collection_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collection_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collection_items.
     */
    skip?: number
    distinct?: Collection_itemsScalarFieldEnum | Collection_itemsScalarFieldEnum[]
  }

  /**
   * collection_items create
   */
  export type collection_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a collection_items.
     */
    data: XOR<collection_itemsCreateInput, collection_itemsUncheckedCreateInput>
  }

  /**
   * collection_items createMany
   */
  export type collection_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collection_items.
     */
    data: collection_itemsCreateManyInput | collection_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * collection_items createManyAndReturn
   */
  export type collection_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many collection_items.
     */
    data: collection_itemsCreateManyInput | collection_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * collection_items update
   */
  export type collection_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a collection_items.
     */
    data: XOR<collection_itemsUpdateInput, collection_itemsUncheckedUpdateInput>
    /**
     * Choose, which collection_items to update.
     */
    where: collection_itemsWhereUniqueInput
  }

  /**
   * collection_items updateMany
   */
  export type collection_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collection_items.
     */
    data: XOR<collection_itemsUpdateManyMutationInput, collection_itemsUncheckedUpdateManyInput>
    /**
     * Filter which collection_items to update
     */
    where?: collection_itemsWhereInput
    /**
     * Limit how many collection_items to update.
     */
    limit?: number
  }

  /**
   * collection_items updateManyAndReturn
   */
  export type collection_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * The data used to update collection_items.
     */
    data: XOR<collection_itemsUpdateManyMutationInput, collection_itemsUncheckedUpdateManyInput>
    /**
     * Filter which collection_items to update
     */
    where?: collection_itemsWhereInput
    /**
     * Limit how many collection_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * collection_items upsert
   */
  export type collection_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the collection_items to update in case it exists.
     */
    where: collection_itemsWhereUniqueInput
    /**
     * In case the collection_items found by the `where` argument doesn't exist, create a new collection_items with this data.
     */
    create: XOR<collection_itemsCreateInput, collection_itemsUncheckedCreateInput>
    /**
     * In case the collection_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collection_itemsUpdateInput, collection_itemsUncheckedUpdateInput>
  }

  /**
   * collection_items delete
   */
  export type collection_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    /**
     * Filter which collection_items to delete.
     */
    where: collection_itemsWhereUniqueInput
  }

  /**
   * collection_items deleteMany
   */
  export type collection_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collection_items to delete
     */
    where?: collection_itemsWhereInput
    /**
     * Limit how many collection_items to delete.
     */
    limit?: number
  }

  /**
   * collection_items without action
   */
  export type collection_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
  }


  /**
   * Model collections
   */

  export type AggregateCollections = {
    _count: CollectionsCountAggregateOutputType | null
    _min: CollectionsMinAggregateOutputType | null
    _max: CollectionsMaxAggregateOutputType | null
  }

  export type CollectionsMinAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    name: string | null
    description: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type CollectionsMaxAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    name: string | null
    description: string | null
    created_by: string | null
    created_at: Date | null
  }

  export type CollectionsCountAggregateOutputType = {
    id: number
    workspace_id: number
    name: number
    description: number
    created_by: number
    created_at: number
    _all: number
  }


  export type CollectionsMinAggregateInputType = {
    id?: true
    workspace_id?: true
    name?: true
    description?: true
    created_by?: true
    created_at?: true
  }

  export type CollectionsMaxAggregateInputType = {
    id?: true
    workspace_id?: true
    name?: true
    description?: true
    created_by?: true
    created_at?: true
  }

  export type CollectionsCountAggregateInputType = {
    id?: true
    workspace_id?: true
    name?: true
    description?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type CollectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collections to aggregate.
     */
    where?: collectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionsOrderByWithRelationInput | collectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: collectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned collections
    **/
    _count?: true | CollectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionsMaxAggregateInputType
  }

  export type GetCollectionsAggregateType<T extends CollectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateCollections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollections[P]>
      : GetScalarType<T[P], AggregateCollections[P]>
  }




  export type collectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collectionsWhereInput
    orderBy?: collectionsOrderByWithAggregationInput | collectionsOrderByWithAggregationInput[]
    by: CollectionsScalarFieldEnum[] | CollectionsScalarFieldEnum
    having?: collectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionsCountAggregateInputType | true
    _min?: CollectionsMinAggregateInputType
    _max?: CollectionsMaxAggregateInputType
  }

  export type CollectionsGroupByOutputType = {
    id: string
    workspace_id: string
    name: string
    description: string
    created_by: string
    created_at: Date
    _count: CollectionsCountAggregateOutputType | null
    _min: CollectionsMinAggregateOutputType | null
    _max: CollectionsMaxAggregateOutputType | null
  }

  type GetCollectionsGroupByPayload<T extends collectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionsGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionsGroupByOutputType[P]>
        }
      >
    >


  export type collectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    collection_items?: boolean | collections$collection_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
    _count?: boolean | CollectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collections"]>

  export type collectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collections"]>

  export type collectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collections"]>

  export type collectionsSelectScalar = {
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type collectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspace_id" | "name" | "description" | "created_by" | "created_at", ExtArgs["result"]["collections"]>
  export type collectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection_items?: boolean | collections$collection_itemsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
    _count?: boolean | CollectionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type collectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type collectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }

  export type $collectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "collections"
    objects: {
      collection_items: Prisma.$collection_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      workspaces: Prisma.$workspacesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspace_id: string
      name: string
      description: string
      created_by: string
      created_at: Date
    }, ExtArgs["result"]["collections"]>
    composites: {}
  }

  type collectionsGetPayload<S extends boolean | null | undefined | collectionsDefaultArgs> = $Result.GetResult<Prisma.$collectionsPayload, S>

  type collectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<collectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionsCountAggregateInputType | true
    }

  export interface collectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collections'], meta: { name: 'collections' } }
    /**
     * Find zero or one Collections that matches the filter.
     * @param {collectionsFindUniqueArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends collectionsFindUniqueArgs>(args: SelectSubset<T, collectionsFindUniqueArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {collectionsFindUniqueOrThrowArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends collectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, collectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsFindFirstArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends collectionsFindFirstArgs>(args?: SelectSubset<T, collectionsFindFirstArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsFindFirstOrThrowArgs} args - Arguments to find a Collections
     * @example
     * // Get one Collections
     * const collections = await prisma.collections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends collectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, collectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collections.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionsWithIdOnly = await prisma.collections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends collectionsFindManyArgs>(args?: SelectSubset<T, collectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collections.
     * @param {collectionsCreateArgs} args - Arguments to create a Collections.
     * @example
     * // Create one Collections
     * const Collections = await prisma.collections.create({
     *   data: {
     *     // ... data to create a Collections
     *   }
     * })
     * 
     */
    create<T extends collectionsCreateArgs>(args: SelectSubset<T, collectionsCreateArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {collectionsCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collections = await prisma.collections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends collectionsCreateManyArgs>(args?: SelectSubset<T, collectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {collectionsCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collections = await prisma.collections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionsWithIdOnly = await prisma.collections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends collectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, collectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collections.
     * @param {collectionsDeleteArgs} args - Arguments to delete one Collections.
     * @example
     * // Delete one Collections
     * const Collections = await prisma.collections.delete({
     *   where: {
     *     // ... filter to delete one Collections
     *   }
     * })
     * 
     */
    delete<T extends collectionsDeleteArgs>(args: SelectSubset<T, collectionsDeleteArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collections.
     * @param {collectionsUpdateArgs} args - Arguments to update one Collections.
     * @example
     * // Update one Collections
     * const collections = await prisma.collections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends collectionsUpdateArgs>(args: SelectSubset<T, collectionsUpdateArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {collectionsDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends collectionsDeleteManyArgs>(args?: SelectSubset<T, collectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collections = await prisma.collections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends collectionsUpdateManyArgs>(args: SelectSubset<T, collectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {collectionsUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collections = await prisma.collections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collections and only return the `id`
     * const collectionsWithIdOnly = await prisma.collections.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends collectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, collectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collections.
     * @param {collectionsUpsertArgs} args - Arguments to update or create a Collections.
     * @example
     * // Update or create a Collections
     * const collections = await prisma.collections.upsert({
     *   create: {
     *     // ... data to create a Collections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collections we want to update
     *   }
     * })
     */
    upsert<T extends collectionsUpsertArgs>(args: SelectSubset<T, collectionsUpsertArgs<ExtArgs>>): Prisma__collectionsClient<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collections.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends collectionsCountArgs>(
      args?: Subset<T, collectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionsAggregateArgs>(args: Subset<T, CollectionsAggregateArgs>): Prisma.PrismaPromise<GetCollectionsAggregateType<T>>

    /**
     * Group by Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends collectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collectionsGroupByArgs['orderBy'] }
        : { orderBy?: collectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, collectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the collections model
   */
  readonly fields: collectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection_items<T extends collections$collection_itemsArgs<ExtArgs> = {}>(args?: Subset<T, collections$collection_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends workspacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspacesDefaultArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the collections model
   */
  interface collectionsFieldRefs {
    readonly id: FieldRef<"collections", 'String'>
    readonly workspace_id: FieldRef<"collections", 'String'>
    readonly name: FieldRef<"collections", 'String'>
    readonly description: FieldRef<"collections", 'String'>
    readonly created_by: FieldRef<"collections", 'String'>
    readonly created_at: FieldRef<"collections", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * collections findUnique
   */
  export type collectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * Filter, which collections to fetch.
     */
    where: collectionsWhereUniqueInput
  }

  /**
   * collections findUniqueOrThrow
   */
  export type collectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * Filter, which collections to fetch.
     */
    where: collectionsWhereUniqueInput
  }

  /**
   * collections findFirst
   */
  export type collectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * Filter, which collections to fetch.
     */
    where?: collectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionsOrderByWithRelationInput | collectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collections.
     */
    cursor?: collectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collections.
     */
    distinct?: CollectionsScalarFieldEnum | CollectionsScalarFieldEnum[]
  }

  /**
   * collections findFirstOrThrow
   */
  export type collectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * Filter, which collections to fetch.
     */
    where?: collectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionsOrderByWithRelationInput | collectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collections.
     */
    cursor?: collectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collections.
     */
    distinct?: CollectionsScalarFieldEnum | CollectionsScalarFieldEnum[]
  }

  /**
   * collections findMany
   */
  export type collectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * Filter, which collections to fetch.
     */
    where?: collectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionsOrderByWithRelationInput | collectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing collections.
     */
    cursor?: collectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collections.
     */
    skip?: number
    distinct?: CollectionsScalarFieldEnum | CollectionsScalarFieldEnum[]
  }

  /**
   * collections create
   */
  export type collectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a collections.
     */
    data: XOR<collectionsCreateInput, collectionsUncheckedCreateInput>
  }

  /**
   * collections createMany
   */
  export type collectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collections.
     */
    data: collectionsCreateManyInput | collectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * collections createManyAndReturn
   */
  export type collectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * The data used to create many collections.
     */
    data: collectionsCreateManyInput | collectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * collections update
   */
  export type collectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a collections.
     */
    data: XOR<collectionsUpdateInput, collectionsUncheckedUpdateInput>
    /**
     * Choose, which collections to update.
     */
    where: collectionsWhereUniqueInput
  }

  /**
   * collections updateMany
   */
  export type collectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collections.
     */
    data: XOR<collectionsUpdateManyMutationInput, collectionsUncheckedUpdateManyInput>
    /**
     * Filter which collections to update
     */
    where?: collectionsWhereInput
    /**
     * Limit how many collections to update.
     */
    limit?: number
  }

  /**
   * collections updateManyAndReturn
   */
  export type collectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * The data used to update collections.
     */
    data: XOR<collectionsUpdateManyMutationInput, collectionsUncheckedUpdateManyInput>
    /**
     * Filter which collections to update
     */
    where?: collectionsWhereInput
    /**
     * Limit how many collections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * collections upsert
   */
  export type collectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the collections to update in case it exists.
     */
    where: collectionsWhereUniqueInput
    /**
     * In case the collections found by the `where` argument doesn't exist, create a new collections with this data.
     */
    create: XOR<collectionsCreateInput, collectionsUncheckedCreateInput>
    /**
     * In case the collections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collectionsUpdateInput, collectionsUncheckedUpdateInput>
  }

  /**
   * collections delete
   */
  export type collectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    /**
     * Filter which collections to delete.
     */
    where: collectionsWhereUniqueInput
  }

  /**
   * collections deleteMany
   */
  export type collectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collections to delete
     */
    where?: collectionsWhereInput
    /**
     * Limit how many collections to delete.
     */
    limit?: number
  }

  /**
   * collections.collection_items
   */
  export type collections$collection_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    where?: collection_itemsWhereInput
    orderBy?: collection_itemsOrderByWithRelationInput | collection_itemsOrderByWithRelationInput[]
    cursor?: collection_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Collection_itemsScalarFieldEnum | Collection_itemsScalarFieldEnum[]
  }

  /**
   * collections without action
   */
  export type collectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
  }


  /**
   * Model contents_tags
   */

  export type AggregateContents_tags = {
    _count: Contents_tagsCountAggregateOutputType | null
    _min: Contents_tagsMinAggregateOutputType | null
    _max: Contents_tagsMaxAggregateOutputType | null
  }

  export type Contents_tagsMinAggregateOutputType = {
    id: string | null
    content_id: string | null
    tag_id: string | null
  }

  export type Contents_tagsMaxAggregateOutputType = {
    id: string | null
    content_id: string | null
    tag_id: string | null
  }

  export type Contents_tagsCountAggregateOutputType = {
    id: number
    content_id: number
    tag_id: number
    _all: number
  }


  export type Contents_tagsMinAggregateInputType = {
    id?: true
    content_id?: true
    tag_id?: true
  }

  export type Contents_tagsMaxAggregateInputType = {
    id?: true
    content_id?: true
    tag_id?: true
  }

  export type Contents_tagsCountAggregateInputType = {
    id?: true
    content_id?: true
    tag_id?: true
    _all?: true
  }

  export type Contents_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contents_tags to aggregate.
     */
    where?: contents_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contents_tags to fetch.
     */
    orderBy?: contents_tagsOrderByWithRelationInput | contents_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contents_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contents_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contents_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contents_tags
    **/
    _count?: true | Contents_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contents_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contents_tagsMaxAggregateInputType
  }

  export type GetContents_tagsAggregateType<T extends Contents_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateContents_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContents_tags[P]>
      : GetScalarType<T[P], AggregateContents_tags[P]>
  }




  export type contents_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contents_tagsWhereInput
    orderBy?: contents_tagsOrderByWithAggregationInput | contents_tagsOrderByWithAggregationInput[]
    by: Contents_tagsScalarFieldEnum[] | Contents_tagsScalarFieldEnum
    having?: contents_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contents_tagsCountAggregateInputType | true
    _min?: Contents_tagsMinAggregateInputType
    _max?: Contents_tagsMaxAggregateInputType
  }

  export type Contents_tagsGroupByOutputType = {
    id: string
    content_id: string
    tag_id: string
    _count: Contents_tagsCountAggregateOutputType | null
    _min: Contents_tagsMinAggregateOutputType | null
    _max: Contents_tagsMaxAggregateOutputType | null
  }

  type GetContents_tagsGroupByPayload<T extends contents_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contents_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contents_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contents_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Contents_tagsGroupByOutputType[P]>
        }
      >
    >


  export type contents_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    tag_id?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contents_tags"]>

  export type contents_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    tag_id?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contents_tags"]>

  export type contents_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    tag_id?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contents_tags"]>

  export type contents_tagsSelectScalar = {
    id?: boolean
    content_id?: boolean
    tag_id?: boolean
  }

  export type contents_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content_id" | "tag_id", ExtArgs["result"]["contents_tags"]>
  export type contents_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type contents_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type contents_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $contents_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contents_tags"
    objects: {
      saved_contents: Prisma.$saved_contentsPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content_id: string
      tag_id: string
    }, ExtArgs["result"]["contents_tags"]>
    composites: {}
  }

  type contents_tagsGetPayload<S extends boolean | null | undefined | contents_tagsDefaultArgs> = $Result.GetResult<Prisma.$contents_tagsPayload, S>

  type contents_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contents_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contents_tagsCountAggregateInputType | true
    }

  export interface contents_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contents_tags'], meta: { name: 'contents_tags' } }
    /**
     * Find zero or one Contents_tags that matches the filter.
     * @param {contents_tagsFindUniqueArgs} args - Arguments to find a Contents_tags
     * @example
     * // Get one Contents_tags
     * const contents_tags = await prisma.contents_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contents_tagsFindUniqueArgs>(args: SelectSubset<T, contents_tagsFindUniqueArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contents_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contents_tagsFindUniqueOrThrowArgs} args - Arguments to find a Contents_tags
     * @example
     * // Get one Contents_tags
     * const contents_tags = await prisma.contents_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contents_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, contents_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contents_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contents_tagsFindFirstArgs} args - Arguments to find a Contents_tags
     * @example
     * // Get one Contents_tags
     * const contents_tags = await prisma.contents_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contents_tagsFindFirstArgs>(args?: SelectSubset<T, contents_tagsFindFirstArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contents_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contents_tagsFindFirstOrThrowArgs} args - Arguments to find a Contents_tags
     * @example
     * // Get one Contents_tags
     * const contents_tags = await prisma.contents_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contents_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, contents_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contents_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents_tags
     * const contents_tags = await prisma.contents_tags.findMany()
     * 
     * // Get first 10 Contents_tags
     * const contents_tags = await prisma.contents_tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contents_tagsWithIdOnly = await prisma.contents_tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contents_tagsFindManyArgs>(args?: SelectSubset<T, contents_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contents_tags.
     * @param {contents_tagsCreateArgs} args - Arguments to create a Contents_tags.
     * @example
     * // Create one Contents_tags
     * const Contents_tags = await prisma.contents_tags.create({
     *   data: {
     *     // ... data to create a Contents_tags
     *   }
     * })
     * 
     */
    create<T extends contents_tagsCreateArgs>(args: SelectSubset<T, contents_tagsCreateArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents_tags.
     * @param {contents_tagsCreateManyArgs} args - Arguments to create many Contents_tags.
     * @example
     * // Create many Contents_tags
     * const contents_tags = await prisma.contents_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contents_tagsCreateManyArgs>(args?: SelectSubset<T, contents_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents_tags and returns the data saved in the database.
     * @param {contents_tagsCreateManyAndReturnArgs} args - Arguments to create many Contents_tags.
     * @example
     * // Create many Contents_tags
     * const contents_tags = await prisma.contents_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents_tags and only return the `id`
     * const contents_tagsWithIdOnly = await prisma.contents_tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contents_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, contents_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contents_tags.
     * @param {contents_tagsDeleteArgs} args - Arguments to delete one Contents_tags.
     * @example
     * // Delete one Contents_tags
     * const Contents_tags = await prisma.contents_tags.delete({
     *   where: {
     *     // ... filter to delete one Contents_tags
     *   }
     * })
     * 
     */
    delete<T extends contents_tagsDeleteArgs>(args: SelectSubset<T, contents_tagsDeleteArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contents_tags.
     * @param {contents_tagsUpdateArgs} args - Arguments to update one Contents_tags.
     * @example
     * // Update one Contents_tags
     * const contents_tags = await prisma.contents_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contents_tagsUpdateArgs>(args: SelectSubset<T, contents_tagsUpdateArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents_tags.
     * @param {contents_tagsDeleteManyArgs} args - Arguments to filter Contents_tags to delete.
     * @example
     * // Delete a few Contents_tags
     * const { count } = await prisma.contents_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contents_tagsDeleteManyArgs>(args?: SelectSubset<T, contents_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contents_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents_tags
     * const contents_tags = await prisma.contents_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contents_tagsUpdateManyArgs>(args: SelectSubset<T, contents_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents_tags and returns the data updated in the database.
     * @param {contents_tagsUpdateManyAndReturnArgs} args - Arguments to update many Contents_tags.
     * @example
     * // Update many Contents_tags
     * const contents_tags = await prisma.contents_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents_tags and only return the `id`
     * const contents_tagsWithIdOnly = await prisma.contents_tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contents_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, contents_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contents_tags.
     * @param {contents_tagsUpsertArgs} args - Arguments to update or create a Contents_tags.
     * @example
     * // Update or create a Contents_tags
     * const contents_tags = await prisma.contents_tags.upsert({
     *   create: {
     *     // ... data to create a Contents_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contents_tags we want to update
     *   }
     * })
     */
    upsert<T extends contents_tagsUpsertArgs>(args: SelectSubset<T, contents_tagsUpsertArgs<ExtArgs>>): Prisma__contents_tagsClient<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contents_tagsCountArgs} args - Arguments to filter Contents_tags to count.
     * @example
     * // Count the number of Contents_tags
     * const count = await prisma.contents_tags.count({
     *   where: {
     *     // ... the filter for the Contents_tags we want to count
     *   }
     * })
    **/
    count<T extends contents_tagsCountArgs>(
      args?: Subset<T, contents_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contents_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contents_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contents_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contents_tagsAggregateArgs>(args: Subset<T, Contents_tagsAggregateArgs>): Prisma.PrismaPromise<GetContents_tagsAggregateType<T>>

    /**
     * Group by Contents_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contents_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contents_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contents_tagsGroupByArgs['orderBy'] }
        : { orderBy?: contents_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contents_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContents_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contents_tags model
   */
  readonly fields: contents_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contents_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contents_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saved_contents<T extends saved_contentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, saved_contentsDefaultArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contents_tags model
   */
  interface contents_tagsFieldRefs {
    readonly id: FieldRef<"contents_tags", 'String'>
    readonly content_id: FieldRef<"contents_tags", 'String'>
    readonly tag_id: FieldRef<"contents_tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contents_tags findUnique
   */
  export type contents_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * Filter, which contents_tags to fetch.
     */
    where: contents_tagsWhereUniqueInput
  }

  /**
   * contents_tags findUniqueOrThrow
   */
  export type contents_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * Filter, which contents_tags to fetch.
     */
    where: contents_tagsWhereUniqueInput
  }

  /**
   * contents_tags findFirst
   */
  export type contents_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * Filter, which contents_tags to fetch.
     */
    where?: contents_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contents_tags to fetch.
     */
    orderBy?: contents_tagsOrderByWithRelationInput | contents_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contents_tags.
     */
    cursor?: contents_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contents_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contents_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contents_tags.
     */
    distinct?: Contents_tagsScalarFieldEnum | Contents_tagsScalarFieldEnum[]
  }

  /**
   * contents_tags findFirstOrThrow
   */
  export type contents_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * Filter, which contents_tags to fetch.
     */
    where?: contents_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contents_tags to fetch.
     */
    orderBy?: contents_tagsOrderByWithRelationInput | contents_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contents_tags.
     */
    cursor?: contents_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contents_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contents_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contents_tags.
     */
    distinct?: Contents_tagsScalarFieldEnum | Contents_tagsScalarFieldEnum[]
  }

  /**
   * contents_tags findMany
   */
  export type contents_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * Filter, which contents_tags to fetch.
     */
    where?: contents_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contents_tags to fetch.
     */
    orderBy?: contents_tagsOrderByWithRelationInput | contents_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contents_tags.
     */
    cursor?: contents_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contents_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contents_tags.
     */
    skip?: number
    distinct?: Contents_tagsScalarFieldEnum | Contents_tagsScalarFieldEnum[]
  }

  /**
   * contents_tags create
   */
  export type contents_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a contents_tags.
     */
    data: XOR<contents_tagsCreateInput, contents_tagsUncheckedCreateInput>
  }

  /**
   * contents_tags createMany
   */
  export type contents_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contents_tags.
     */
    data: contents_tagsCreateManyInput | contents_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contents_tags createManyAndReturn
   */
  export type contents_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many contents_tags.
     */
    data: contents_tagsCreateManyInput | contents_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * contents_tags update
   */
  export type contents_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a contents_tags.
     */
    data: XOR<contents_tagsUpdateInput, contents_tagsUncheckedUpdateInput>
    /**
     * Choose, which contents_tags to update.
     */
    where: contents_tagsWhereUniqueInput
  }

  /**
   * contents_tags updateMany
   */
  export type contents_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contents_tags.
     */
    data: XOR<contents_tagsUpdateManyMutationInput, contents_tagsUncheckedUpdateManyInput>
    /**
     * Filter which contents_tags to update
     */
    where?: contents_tagsWhereInput
    /**
     * Limit how many contents_tags to update.
     */
    limit?: number
  }

  /**
   * contents_tags updateManyAndReturn
   */
  export type contents_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * The data used to update contents_tags.
     */
    data: XOR<contents_tagsUpdateManyMutationInput, contents_tagsUncheckedUpdateManyInput>
    /**
     * Filter which contents_tags to update
     */
    where?: contents_tagsWhereInput
    /**
     * Limit how many contents_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * contents_tags upsert
   */
  export type contents_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the contents_tags to update in case it exists.
     */
    where: contents_tagsWhereUniqueInput
    /**
     * In case the contents_tags found by the `where` argument doesn't exist, create a new contents_tags with this data.
     */
    create: XOR<contents_tagsCreateInput, contents_tagsUncheckedCreateInput>
    /**
     * In case the contents_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contents_tagsUpdateInput, contents_tagsUncheckedUpdateInput>
  }

  /**
   * contents_tags delete
   */
  export type contents_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    /**
     * Filter which contents_tags to delete.
     */
    where: contents_tagsWhereUniqueInput
  }

  /**
   * contents_tags deleteMany
   */
  export type contents_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contents_tags to delete
     */
    where?: contents_tagsWhereInput
    /**
     * Limit how many contents_tags to delete.
     */
    limit?: number
  }

  /**
   * contents_tags without action
   */
  export type contents_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
  }


  /**
   * Model notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesMinAggregateOutputType = {
    id: string | null
    content_id: string | null
    text: string | null
    created_at: Date | null
  }

  export type NotesMaxAggregateOutputType = {
    id: string | null
    content_id: string | null
    text: string | null
    created_at: Date | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    content_id: number
    text: number
    created_at: number
    _all: number
  }


  export type NotesMinAggregateInputType = {
    id?: true
    content_id?: true
    text?: true
    created_at?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    content_id?: true
    text?: true
    created_at?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    content_id?: true
    text?: true
    created_at?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to aggregate.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
    orderBy?: notesOrderByWithAggregationInput | notesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: string
    content_id: string
    text: string
    created_at: Date
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    text?: boolean
    created_at?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    text?: boolean
    created_at?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    text?: boolean
    created_at?: boolean
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectScalar = {
    id?: boolean
    content_id?: boolean
    text?: boolean
    created_at?: boolean
  }

  export type notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content_id" | "text" | "created_at", ExtArgs["result"]["notes"]>
  export type notesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }
  export type notesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }
  export type notesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_contents?: boolean | saved_contentsDefaultArgs<ExtArgs>
  }

  export type $notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notes"
    objects: {
      saved_contents: Prisma.$saved_contentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content_id: string
      text: string
      created_at: Date
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type notesGetPayload<S extends boolean | null | undefined | notesDefaultArgs> = $Result.GetResult<Prisma.$notesPayload, S>

  type notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notes'], meta: { name: 'notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {notesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notesFindUniqueArgs>(args: SelectSubset<T, notesFindUniqueArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notesFindUniqueOrThrowArgs>(args: SelectSubset<T, notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notesFindFirstArgs>(args?: SelectSubset<T, notesFindFirstArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notesFindFirstOrThrowArgs>(args?: SelectSubset<T, notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notesFindManyArgs>(args?: SelectSubset<T, notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {notesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends notesCreateArgs>(args: SelectSubset<T, notesCreateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {notesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notesCreateManyArgs>(args?: SelectSubset<T, notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {notesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notesCreateManyAndReturnArgs>(args?: SelectSubset<T, notesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {notesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends notesDeleteArgs>(args: SelectSubset<T, notesDeleteArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {notesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notesUpdateArgs>(args: SelectSubset<T, notesUpdateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {notesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notesDeleteManyArgs>(args?: SelectSubset<T, notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notesUpdateManyArgs>(args: SelectSubset<T, notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {notesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notesUpdateManyAndReturnArgs>(args: SelectSubset<T, notesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {notesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends notesUpsertArgs>(args: SelectSubset<T, notesUpsertArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends notesCountArgs>(
      args?: Subset<T, notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notesGroupByArgs['orderBy'] }
        : { orderBy?: notesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notes model
   */
  readonly fields: notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saved_contents<T extends saved_contentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, saved_contentsDefaultArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notes model
   */
  interface notesFieldRefs {
    readonly id: FieldRef<"notes", 'String'>
    readonly content_id: FieldRef<"notes", 'String'>
    readonly text: FieldRef<"notes", 'String'>
    readonly created_at: FieldRef<"notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notes findUnique
   */
  export type notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findUniqueOrThrow
   */
  export type notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findFirst
   */
  export type notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findFirstOrThrow
   */
  export type notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findMany
   */
  export type notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes create
   */
  export type notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to create a notes.
     */
    data: XOR<notesCreateInput, notesUncheckedCreateInput>
  }

  /**
   * notes createMany
   */
  export type notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes createManyAndReturn
   */
  export type notesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes update
   */
  export type notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to update a notes.
     */
    data: XOR<notesUpdateInput, notesUncheckedUpdateInput>
    /**
     * Choose, which notes to update.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes updateMany
   */
  export type notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes updateManyAndReturn
   */
  export type notesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes upsert
   */
  export type notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The filter to search for the notes to update in case it exists.
     */
    where: notesWhereUniqueInput
    /**
     * In case the notes found by the `where` argument doesn't exist, create a new notes with this data.
     */
    create: XOR<notesCreateInput, notesUncheckedCreateInput>
    /**
     * In case the notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notesUpdateInput, notesUncheckedUpdateInput>
  }

  /**
   * notes delete
   */
  export type notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter which notes to delete.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes deleteMany
   */
  export type notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * notes without action
   */
  export type notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
  }


  /**
   * Model saved_contents
   */

  export type AggregateSaved_contents = {
    _count: Saved_contentsCountAggregateOutputType | null
    _min: Saved_contentsMinAggregateOutputType | null
    _max: Saved_contentsMaxAggregateOutputType | null
  }

  export type Saved_contentsMinAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    url: string | null
    source: string | null
    title: string | null
    created_by: string | null
    thumbnail_url: string | null
    transcript: string | null
    created_at: Date | null
  }

  export type Saved_contentsMaxAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    url: string | null
    source: string | null
    title: string | null
    created_by: string | null
    thumbnail_url: string | null
    transcript: string | null
    created_at: Date | null
  }

  export type Saved_contentsCountAggregateOutputType = {
    id: number
    workspace_id: number
    url: number
    source: number
    title: number
    created_by: number
    thumbnail_url: number
    metadata: number
    transcript: number
    created_at: number
    _all: number
  }


  export type Saved_contentsMinAggregateInputType = {
    id?: true
    workspace_id?: true
    url?: true
    source?: true
    title?: true
    created_by?: true
    thumbnail_url?: true
    transcript?: true
    created_at?: true
  }

  export type Saved_contentsMaxAggregateInputType = {
    id?: true
    workspace_id?: true
    url?: true
    source?: true
    title?: true
    created_by?: true
    thumbnail_url?: true
    transcript?: true
    created_at?: true
  }

  export type Saved_contentsCountAggregateInputType = {
    id?: true
    workspace_id?: true
    url?: true
    source?: true
    title?: true
    created_by?: true
    thumbnail_url?: true
    metadata?: true
    transcript?: true
    created_at?: true
    _all?: true
  }

  export type Saved_contentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_contents to aggregate.
     */
    where?: saved_contentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_contents to fetch.
     */
    orderBy?: saved_contentsOrderByWithRelationInput | saved_contentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_contentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_contents
    **/
    _count?: true | Saved_contentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_contentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_contentsMaxAggregateInputType
  }

  export type GetSaved_contentsAggregateType<T extends Saved_contentsAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_contents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_contents[P]>
      : GetScalarType<T[P], AggregateSaved_contents[P]>
  }




  export type saved_contentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_contentsWhereInput
    orderBy?: saved_contentsOrderByWithAggregationInput | saved_contentsOrderByWithAggregationInput[]
    by: Saved_contentsScalarFieldEnum[] | Saved_contentsScalarFieldEnum
    having?: saved_contentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_contentsCountAggregateInputType | true
    _min?: Saved_contentsMinAggregateInputType
    _max?: Saved_contentsMaxAggregateInputType
  }

  export type Saved_contentsGroupByOutputType = {
    id: string
    workspace_id: string
    url: string
    source: string
    title: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonValue
    transcript: string | null
    created_at: Date
    _count: Saved_contentsCountAggregateOutputType | null
    _min: Saved_contentsMinAggregateOutputType | null
    _max: Saved_contentsMaxAggregateOutputType | null
  }

  type GetSaved_contentsGroupByPayload<T extends saved_contentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_contentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_contentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_contentsGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_contentsGroupByOutputType[P]>
        }
      >
    >


  export type saved_contentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    url?: boolean
    source?: boolean
    title?: boolean
    created_by?: boolean
    thumbnail_url?: boolean
    metadata?: boolean
    transcript?: boolean
    created_at?: boolean
    ai_insights?: boolean | saved_contents$ai_insightsArgs<ExtArgs>
    collection_items?: boolean | saved_contents$collection_itemsArgs<ExtArgs>
    contents_tags?: boolean | saved_contents$contents_tagsArgs<ExtArgs>
    notes?: boolean | saved_contents$notesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
    _count?: boolean | Saved_contentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_contents"]>

  export type saved_contentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    url?: boolean
    source?: boolean
    title?: boolean
    created_by?: boolean
    thumbnail_url?: boolean
    metadata?: boolean
    transcript?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_contents"]>

  export type saved_contentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    url?: boolean
    source?: boolean
    title?: boolean
    created_by?: boolean
    thumbnail_url?: boolean
    metadata?: boolean
    transcript?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_contents"]>

  export type saved_contentsSelectScalar = {
    id?: boolean
    workspace_id?: boolean
    url?: boolean
    source?: boolean
    title?: boolean
    created_by?: boolean
    thumbnail_url?: boolean
    metadata?: boolean
    transcript?: boolean
    created_at?: boolean
  }

  export type saved_contentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspace_id" | "url" | "source" | "title" | "created_by" | "thumbnail_url" | "metadata" | "transcript" | "created_at", ExtArgs["result"]["saved_contents"]>
  export type saved_contentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_insights?: boolean | saved_contents$ai_insightsArgs<ExtArgs>
    collection_items?: boolean | saved_contents$collection_itemsArgs<ExtArgs>
    contents_tags?: boolean | saved_contents$contents_tagsArgs<ExtArgs>
    notes?: boolean | saved_contents$notesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
    _count?: boolean | Saved_contentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type saved_contentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type saved_contentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }

  export type $saved_contentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_contents"
    objects: {
      ai_insights: Prisma.$ai_insightsPayload<ExtArgs> | null
      collection_items: Prisma.$collection_itemsPayload<ExtArgs>[]
      contents_tags: Prisma.$contents_tagsPayload<ExtArgs>[]
      notes: Prisma.$notesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      workspaces: Prisma.$workspacesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspace_id: string
      url: string
      source: string
      title: string | null
      created_by: string
      thumbnail_url: string
      metadata: Prisma.JsonValue
      transcript: string | null
      created_at: Date
    }, ExtArgs["result"]["saved_contents"]>
    composites: {}
  }

  type saved_contentsGetPayload<S extends boolean | null | undefined | saved_contentsDefaultArgs> = $Result.GetResult<Prisma.$saved_contentsPayload, S>

  type saved_contentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saved_contentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_contentsCountAggregateInputType | true
    }

  export interface saved_contentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_contents'], meta: { name: 'saved_contents' } }
    /**
     * Find zero or one Saved_contents that matches the filter.
     * @param {saved_contentsFindUniqueArgs} args - Arguments to find a Saved_contents
     * @example
     * // Get one Saved_contents
     * const saved_contents = await prisma.saved_contents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saved_contentsFindUniqueArgs>(args: SelectSubset<T, saved_contentsFindUniqueArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_contents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saved_contentsFindUniqueOrThrowArgs} args - Arguments to find a Saved_contents
     * @example
     * // Get one Saved_contents
     * const saved_contents = await prisma.saved_contents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saved_contentsFindUniqueOrThrowArgs>(args: SelectSubset<T, saved_contentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_contentsFindFirstArgs} args - Arguments to find a Saved_contents
     * @example
     * // Get one Saved_contents
     * const saved_contents = await prisma.saved_contents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saved_contentsFindFirstArgs>(args?: SelectSubset<T, saved_contentsFindFirstArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_contents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_contentsFindFirstOrThrowArgs} args - Arguments to find a Saved_contents
     * @example
     * // Get one Saved_contents
     * const saved_contents = await prisma.saved_contents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saved_contentsFindFirstOrThrowArgs>(args?: SelectSubset<T, saved_contentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_contentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_contents
     * const saved_contents = await prisma.saved_contents.findMany()
     * 
     * // Get first 10 Saved_contents
     * const saved_contents = await prisma.saved_contents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saved_contentsWithIdOnly = await prisma.saved_contents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saved_contentsFindManyArgs>(args?: SelectSubset<T, saved_contentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_contents.
     * @param {saved_contentsCreateArgs} args - Arguments to create a Saved_contents.
     * @example
     * // Create one Saved_contents
     * const Saved_contents = await prisma.saved_contents.create({
     *   data: {
     *     // ... data to create a Saved_contents
     *   }
     * })
     * 
     */
    create<T extends saved_contentsCreateArgs>(args: SelectSubset<T, saved_contentsCreateArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_contents.
     * @param {saved_contentsCreateManyArgs} args - Arguments to create many Saved_contents.
     * @example
     * // Create many Saved_contents
     * const saved_contents = await prisma.saved_contents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saved_contentsCreateManyArgs>(args?: SelectSubset<T, saved_contentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saved_contents and returns the data saved in the database.
     * @param {saved_contentsCreateManyAndReturnArgs} args - Arguments to create many Saved_contents.
     * @example
     * // Create many Saved_contents
     * const saved_contents = await prisma.saved_contents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saved_contents and only return the `id`
     * const saved_contentsWithIdOnly = await prisma.saved_contents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends saved_contentsCreateManyAndReturnArgs>(args?: SelectSubset<T, saved_contentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saved_contents.
     * @param {saved_contentsDeleteArgs} args - Arguments to delete one Saved_contents.
     * @example
     * // Delete one Saved_contents
     * const Saved_contents = await prisma.saved_contents.delete({
     *   where: {
     *     // ... filter to delete one Saved_contents
     *   }
     * })
     * 
     */
    delete<T extends saved_contentsDeleteArgs>(args: SelectSubset<T, saved_contentsDeleteArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_contents.
     * @param {saved_contentsUpdateArgs} args - Arguments to update one Saved_contents.
     * @example
     * // Update one Saved_contents
     * const saved_contents = await prisma.saved_contents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saved_contentsUpdateArgs>(args: SelectSubset<T, saved_contentsUpdateArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_contents.
     * @param {saved_contentsDeleteManyArgs} args - Arguments to filter Saved_contents to delete.
     * @example
     * // Delete a few Saved_contents
     * const { count } = await prisma.saved_contents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saved_contentsDeleteManyArgs>(args?: SelectSubset<T, saved_contentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_contentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_contents
     * const saved_contents = await prisma.saved_contents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saved_contentsUpdateManyArgs>(args: SelectSubset<T, saved_contentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_contents and returns the data updated in the database.
     * @param {saved_contentsUpdateManyAndReturnArgs} args - Arguments to update many Saved_contents.
     * @example
     * // Update many Saved_contents
     * const saved_contents = await prisma.saved_contents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saved_contents and only return the `id`
     * const saved_contentsWithIdOnly = await prisma.saved_contents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends saved_contentsUpdateManyAndReturnArgs>(args: SelectSubset<T, saved_contentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saved_contents.
     * @param {saved_contentsUpsertArgs} args - Arguments to update or create a Saved_contents.
     * @example
     * // Update or create a Saved_contents
     * const saved_contents = await prisma.saved_contents.upsert({
     *   create: {
     *     // ... data to create a Saved_contents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_contents we want to update
     *   }
     * })
     */
    upsert<T extends saved_contentsUpsertArgs>(args: SelectSubset<T, saved_contentsUpsertArgs<ExtArgs>>): Prisma__saved_contentsClient<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_contentsCountArgs} args - Arguments to filter Saved_contents to count.
     * @example
     * // Count the number of Saved_contents
     * const count = await prisma.saved_contents.count({
     *   where: {
     *     // ... the filter for the Saved_contents we want to count
     *   }
     * })
    **/
    count<T extends saved_contentsCountArgs>(
      args?: Subset<T, saved_contentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_contentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_contentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Saved_contentsAggregateArgs>(args: Subset<T, Saved_contentsAggregateArgs>): Prisma.PrismaPromise<GetSaved_contentsAggregateType<T>>

    /**
     * Group by Saved_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_contentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saved_contentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_contentsGroupByArgs['orderBy'] }
        : { orderBy?: saved_contentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saved_contentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_contentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_contents model
   */
  readonly fields: saved_contentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_contents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_contentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ai_insights<T extends saved_contents$ai_insightsArgs<ExtArgs> = {}>(args?: Subset<T, saved_contents$ai_insightsArgs<ExtArgs>>): Prisma__ai_insightsClient<$Result.GetResult<Prisma.$ai_insightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collection_items<T extends saved_contents$collection_itemsArgs<ExtArgs> = {}>(args?: Subset<T, saved_contents$collection_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents_tags<T extends saved_contents$contents_tagsArgs<ExtArgs> = {}>(args?: Subset<T, saved_contents$contents_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends saved_contents$notesArgs<ExtArgs> = {}>(args?: Subset<T, saved_contents$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends workspacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspacesDefaultArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saved_contents model
   */
  interface saved_contentsFieldRefs {
    readonly id: FieldRef<"saved_contents", 'String'>
    readonly workspace_id: FieldRef<"saved_contents", 'String'>
    readonly url: FieldRef<"saved_contents", 'String'>
    readonly source: FieldRef<"saved_contents", 'String'>
    readonly title: FieldRef<"saved_contents", 'String'>
    readonly created_by: FieldRef<"saved_contents", 'String'>
    readonly thumbnail_url: FieldRef<"saved_contents", 'String'>
    readonly metadata: FieldRef<"saved_contents", 'Json'>
    readonly transcript: FieldRef<"saved_contents", 'String'>
    readonly created_at: FieldRef<"saved_contents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * saved_contents findUnique
   */
  export type saved_contentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * Filter, which saved_contents to fetch.
     */
    where: saved_contentsWhereUniqueInput
  }

  /**
   * saved_contents findUniqueOrThrow
   */
  export type saved_contentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * Filter, which saved_contents to fetch.
     */
    where: saved_contentsWhereUniqueInput
  }

  /**
   * saved_contents findFirst
   */
  export type saved_contentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * Filter, which saved_contents to fetch.
     */
    where?: saved_contentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_contents to fetch.
     */
    orderBy?: saved_contentsOrderByWithRelationInput | saved_contentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_contents.
     */
    cursor?: saved_contentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_contents.
     */
    distinct?: Saved_contentsScalarFieldEnum | Saved_contentsScalarFieldEnum[]
  }

  /**
   * saved_contents findFirstOrThrow
   */
  export type saved_contentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * Filter, which saved_contents to fetch.
     */
    where?: saved_contentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_contents to fetch.
     */
    orderBy?: saved_contentsOrderByWithRelationInput | saved_contentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_contents.
     */
    cursor?: saved_contentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_contents.
     */
    distinct?: Saved_contentsScalarFieldEnum | Saved_contentsScalarFieldEnum[]
  }

  /**
   * saved_contents findMany
   */
  export type saved_contentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * Filter, which saved_contents to fetch.
     */
    where?: saved_contentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_contents to fetch.
     */
    orderBy?: saved_contentsOrderByWithRelationInput | saved_contentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_contents.
     */
    cursor?: saved_contentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_contents.
     */
    skip?: number
    distinct?: Saved_contentsScalarFieldEnum | Saved_contentsScalarFieldEnum[]
  }

  /**
   * saved_contents create
   */
  export type saved_contentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * The data needed to create a saved_contents.
     */
    data: XOR<saved_contentsCreateInput, saved_contentsUncheckedCreateInput>
  }

  /**
   * saved_contents createMany
   */
  export type saved_contentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_contents.
     */
    data: saved_contentsCreateManyInput | saved_contentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saved_contents createManyAndReturn
   */
  export type saved_contentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * The data used to create many saved_contents.
     */
    data: saved_contentsCreateManyInput | saved_contentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_contents update
   */
  export type saved_contentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * The data needed to update a saved_contents.
     */
    data: XOR<saved_contentsUpdateInput, saved_contentsUncheckedUpdateInput>
    /**
     * Choose, which saved_contents to update.
     */
    where: saved_contentsWhereUniqueInput
  }

  /**
   * saved_contents updateMany
   */
  export type saved_contentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_contents.
     */
    data: XOR<saved_contentsUpdateManyMutationInput, saved_contentsUncheckedUpdateManyInput>
    /**
     * Filter which saved_contents to update
     */
    where?: saved_contentsWhereInput
    /**
     * Limit how many saved_contents to update.
     */
    limit?: number
  }

  /**
   * saved_contents updateManyAndReturn
   */
  export type saved_contentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * The data used to update saved_contents.
     */
    data: XOR<saved_contentsUpdateManyMutationInput, saved_contentsUncheckedUpdateManyInput>
    /**
     * Filter which saved_contents to update
     */
    where?: saved_contentsWhereInput
    /**
     * Limit how many saved_contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_contents upsert
   */
  export type saved_contentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * The filter to search for the saved_contents to update in case it exists.
     */
    where: saved_contentsWhereUniqueInput
    /**
     * In case the saved_contents found by the `where` argument doesn't exist, create a new saved_contents with this data.
     */
    create: XOR<saved_contentsCreateInput, saved_contentsUncheckedCreateInput>
    /**
     * In case the saved_contents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_contentsUpdateInput, saved_contentsUncheckedUpdateInput>
  }

  /**
   * saved_contents delete
   */
  export type saved_contentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    /**
     * Filter which saved_contents to delete.
     */
    where: saved_contentsWhereUniqueInput
  }

  /**
   * saved_contents deleteMany
   */
  export type saved_contentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_contents to delete
     */
    where?: saved_contentsWhereInput
    /**
     * Limit how many saved_contents to delete.
     */
    limit?: number
  }

  /**
   * saved_contents.ai_insights
   */
  export type saved_contents$ai_insightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_insights
     */
    select?: ai_insightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_insights
     */
    omit?: ai_insightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ai_insightsInclude<ExtArgs> | null
    where?: ai_insightsWhereInput
  }

  /**
   * saved_contents.collection_items
   */
  export type saved_contents$collection_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_items
     */
    select?: collection_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collection_items
     */
    omit?: collection_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collection_itemsInclude<ExtArgs> | null
    where?: collection_itemsWhereInput
    orderBy?: collection_itemsOrderByWithRelationInput | collection_itemsOrderByWithRelationInput[]
    cursor?: collection_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Collection_itemsScalarFieldEnum | Collection_itemsScalarFieldEnum[]
  }

  /**
   * saved_contents.contents_tags
   */
  export type saved_contents$contents_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    where?: contents_tagsWhereInput
    orderBy?: contents_tagsOrderByWithRelationInput | contents_tagsOrderByWithRelationInput[]
    cursor?: contents_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Contents_tagsScalarFieldEnum | Contents_tagsScalarFieldEnum[]
  }

  /**
   * saved_contents.notes
   */
  export type saved_contents$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    where?: notesWhereInput
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    cursor?: notesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * saved_contents without action
   */
  export type saved_contentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    name: string | null
    type: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    name: string | null
    type: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    workspace_id: number
    name: number
    type: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    id?: true
    workspace_id?: true
    name?: true
    type?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    workspace_id?: true
    name?: true
    type?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    workspace_id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    workspace_id: string
    name: string
    type: string
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    type?: boolean
    contents_tags?: boolean | tags$contents_tagsArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    type?: boolean
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    type?: boolean
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    workspace_id?: boolean
    name?: boolean
    type?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspace_id" | "name" | "type", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents_tags?: boolean | tags$contents_tagsArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      contents_tags: Prisma.$contents_tagsPayload<ExtArgs>[]
      workspaces: Prisma.$workspacesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspace_id: string
      name: string
      type: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contents_tags<T extends tags$contents_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$contents_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contents_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspaces<T extends workspacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspacesDefaultArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'String'>
    readonly workspace_id: FieldRef<"tags", 'String'>
    readonly name: FieldRef<"tags", 'String'>
    readonly type: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.contents_tags
   */
  export type tags$contents_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contents_tags
     */
    select?: contents_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contents_tags
     */
    omit?: contents_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contents_tagsInclude<ExtArgs> | null
    where?: contents_tagsWhereInput
    orderBy?: contents_tagsOrderByWithRelationInput | contents_tagsOrderByWithRelationInput[]
    cursor?: contents_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Contents_tagsScalarFieldEnum | Contents_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model usage_logs
   */

  export type AggregateUsage_logs = {
    _count: Usage_logsCountAggregateOutputType | null
    _avg: Usage_logsAvgAggregateOutputType | null
    _sum: Usage_logsSumAggregateOutputType | null
    _min: Usage_logsMinAggregateOutputType | null
    _max: Usage_logsMaxAggregateOutputType | null
  }

  export type Usage_logsAvgAggregateOutputType = {
    tokens_used: number | null
  }

  export type Usage_logsSumAggregateOutputType = {
    tokens_used: bigint | null
  }

  export type Usage_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    workspace_id: string | null
    tokens_used: bigint | null
    created_at: Date | null
  }

  export type Usage_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    workspace_id: string | null
    tokens_used: bigint | null
    created_at: Date | null
  }

  export type Usage_logsCountAggregateOutputType = {
    id: number
    user_id: number
    workspace_id: number
    tokens_used: number
    created_at: number
    _all: number
  }


  export type Usage_logsAvgAggregateInputType = {
    tokens_used?: true
  }

  export type Usage_logsSumAggregateInputType = {
    tokens_used?: true
  }

  export type Usage_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    workspace_id?: true
    tokens_used?: true
    created_at?: true
  }

  export type Usage_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    workspace_id?: true
    tokens_used?: true
    created_at?: true
  }

  export type Usage_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    workspace_id?: true
    tokens_used?: true
    created_at?: true
    _all?: true
  }

  export type Usage_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usage_logs to aggregate.
     */
    where?: usage_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usage_logs to fetch.
     */
    orderBy?: usage_logsOrderByWithRelationInput | usage_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usage_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usage_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usage_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usage_logs
    **/
    _count?: true | Usage_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usage_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usage_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usage_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usage_logsMaxAggregateInputType
  }

  export type GetUsage_logsAggregateType<T extends Usage_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsage_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsage_logs[P]>
      : GetScalarType<T[P], AggregateUsage_logs[P]>
  }




  export type usage_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usage_logsWhereInput
    orderBy?: usage_logsOrderByWithAggregationInput | usage_logsOrderByWithAggregationInput[]
    by: Usage_logsScalarFieldEnum[] | Usage_logsScalarFieldEnum
    having?: usage_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usage_logsCountAggregateInputType | true
    _avg?: Usage_logsAvgAggregateInputType
    _sum?: Usage_logsSumAggregateInputType
    _min?: Usage_logsMinAggregateInputType
    _max?: Usage_logsMaxAggregateInputType
  }

  export type Usage_logsGroupByOutputType = {
    id: string
    user_id: string
    workspace_id: string
    tokens_used: bigint
    created_at: Date
    _count: Usage_logsCountAggregateOutputType | null
    _avg: Usage_logsAvgAggregateOutputType | null
    _sum: Usage_logsSumAggregateOutputType | null
    _min: Usage_logsMinAggregateOutputType | null
    _max: Usage_logsMaxAggregateOutputType | null
  }

  type GetUsage_logsGroupByPayload<T extends usage_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usage_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usage_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usage_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Usage_logsGroupByOutputType[P]>
        }
      >
    >


  export type usage_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    workspace_id?: boolean
    tokens_used?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage_logs"]>

  export type usage_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    workspace_id?: boolean
    tokens_used?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage_logs"]>

  export type usage_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    workspace_id?: boolean
    tokens_used?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage_logs"]>

  export type usage_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    workspace_id?: boolean
    tokens_used?: boolean
    created_at?: boolean
  }

  export type usage_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "workspace_id" | "tokens_used" | "created_at", ExtArgs["result"]["usage_logs"]>
  export type usage_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type usage_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type usage_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }

  export type $usage_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usage_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      workspaces: Prisma.$workspacesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      workspace_id: string
      tokens_used: bigint
      created_at: Date
    }, ExtArgs["result"]["usage_logs"]>
    composites: {}
  }

  type usage_logsGetPayload<S extends boolean | null | undefined | usage_logsDefaultArgs> = $Result.GetResult<Prisma.$usage_logsPayload, S>

  type usage_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usage_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usage_logsCountAggregateInputType | true
    }

  export interface usage_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usage_logs'], meta: { name: 'usage_logs' } }
    /**
     * Find zero or one Usage_logs that matches the filter.
     * @param {usage_logsFindUniqueArgs} args - Arguments to find a Usage_logs
     * @example
     * // Get one Usage_logs
     * const usage_logs = await prisma.usage_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usage_logsFindUniqueArgs>(args: SelectSubset<T, usage_logsFindUniqueArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usage_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usage_logsFindUniqueOrThrowArgs} args - Arguments to find a Usage_logs
     * @example
     * // Get one Usage_logs
     * const usage_logs = await prisma.usage_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usage_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, usage_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usage_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usage_logsFindFirstArgs} args - Arguments to find a Usage_logs
     * @example
     * // Get one Usage_logs
     * const usage_logs = await prisma.usage_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usage_logsFindFirstArgs>(args?: SelectSubset<T, usage_logsFindFirstArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usage_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usage_logsFindFirstOrThrowArgs} args - Arguments to find a Usage_logs
     * @example
     * // Get one Usage_logs
     * const usage_logs = await prisma.usage_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usage_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, usage_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usage_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usage_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usage_logs
     * const usage_logs = await prisma.usage_logs.findMany()
     * 
     * // Get first 10 Usage_logs
     * const usage_logs = await prisma.usage_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usage_logsWithIdOnly = await prisma.usage_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usage_logsFindManyArgs>(args?: SelectSubset<T, usage_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usage_logs.
     * @param {usage_logsCreateArgs} args - Arguments to create a Usage_logs.
     * @example
     * // Create one Usage_logs
     * const Usage_logs = await prisma.usage_logs.create({
     *   data: {
     *     // ... data to create a Usage_logs
     *   }
     * })
     * 
     */
    create<T extends usage_logsCreateArgs>(args: SelectSubset<T, usage_logsCreateArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usage_logs.
     * @param {usage_logsCreateManyArgs} args - Arguments to create many Usage_logs.
     * @example
     * // Create many Usage_logs
     * const usage_logs = await prisma.usage_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usage_logsCreateManyArgs>(args?: SelectSubset<T, usage_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usage_logs and returns the data saved in the database.
     * @param {usage_logsCreateManyAndReturnArgs} args - Arguments to create many Usage_logs.
     * @example
     * // Create many Usage_logs
     * const usage_logs = await prisma.usage_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usage_logs and only return the `id`
     * const usage_logsWithIdOnly = await prisma.usage_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usage_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, usage_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usage_logs.
     * @param {usage_logsDeleteArgs} args - Arguments to delete one Usage_logs.
     * @example
     * // Delete one Usage_logs
     * const Usage_logs = await prisma.usage_logs.delete({
     *   where: {
     *     // ... filter to delete one Usage_logs
     *   }
     * })
     * 
     */
    delete<T extends usage_logsDeleteArgs>(args: SelectSubset<T, usage_logsDeleteArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usage_logs.
     * @param {usage_logsUpdateArgs} args - Arguments to update one Usage_logs.
     * @example
     * // Update one Usage_logs
     * const usage_logs = await prisma.usage_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usage_logsUpdateArgs>(args: SelectSubset<T, usage_logsUpdateArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usage_logs.
     * @param {usage_logsDeleteManyArgs} args - Arguments to filter Usage_logs to delete.
     * @example
     * // Delete a few Usage_logs
     * const { count } = await prisma.usage_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usage_logsDeleteManyArgs>(args?: SelectSubset<T, usage_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usage_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usage_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usage_logs
     * const usage_logs = await prisma.usage_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usage_logsUpdateManyArgs>(args: SelectSubset<T, usage_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usage_logs and returns the data updated in the database.
     * @param {usage_logsUpdateManyAndReturnArgs} args - Arguments to update many Usage_logs.
     * @example
     * // Update many Usage_logs
     * const usage_logs = await prisma.usage_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usage_logs and only return the `id`
     * const usage_logsWithIdOnly = await prisma.usage_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usage_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, usage_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usage_logs.
     * @param {usage_logsUpsertArgs} args - Arguments to update or create a Usage_logs.
     * @example
     * // Update or create a Usage_logs
     * const usage_logs = await prisma.usage_logs.upsert({
     *   create: {
     *     // ... data to create a Usage_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usage_logs we want to update
     *   }
     * })
     */
    upsert<T extends usage_logsUpsertArgs>(args: SelectSubset<T, usage_logsUpsertArgs<ExtArgs>>): Prisma__usage_logsClient<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usage_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usage_logsCountArgs} args - Arguments to filter Usage_logs to count.
     * @example
     * // Count the number of Usage_logs
     * const count = await prisma.usage_logs.count({
     *   where: {
     *     // ... the filter for the Usage_logs we want to count
     *   }
     * })
    **/
    count<T extends usage_logsCountArgs>(
      args?: Subset<T, usage_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usage_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usage_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usage_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Usage_logsAggregateArgs>(args: Subset<T, Usage_logsAggregateArgs>): Prisma.PrismaPromise<GetUsage_logsAggregateType<T>>

    /**
     * Group by Usage_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usage_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usage_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usage_logsGroupByArgs['orderBy'] }
        : { orderBy?: usage_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usage_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsage_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usage_logs model
   */
  readonly fields: usage_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usage_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usage_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends workspacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspacesDefaultArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usage_logs model
   */
  interface usage_logsFieldRefs {
    readonly id: FieldRef<"usage_logs", 'String'>
    readonly user_id: FieldRef<"usage_logs", 'String'>
    readonly workspace_id: FieldRef<"usage_logs", 'String'>
    readonly tokens_used: FieldRef<"usage_logs", 'BigInt'>
    readonly created_at: FieldRef<"usage_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usage_logs findUnique
   */
  export type usage_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * Filter, which usage_logs to fetch.
     */
    where: usage_logsWhereUniqueInput
  }

  /**
   * usage_logs findUniqueOrThrow
   */
  export type usage_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * Filter, which usage_logs to fetch.
     */
    where: usage_logsWhereUniqueInput
  }

  /**
   * usage_logs findFirst
   */
  export type usage_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * Filter, which usage_logs to fetch.
     */
    where?: usage_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usage_logs to fetch.
     */
    orderBy?: usage_logsOrderByWithRelationInput | usage_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usage_logs.
     */
    cursor?: usage_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usage_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usage_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usage_logs.
     */
    distinct?: Usage_logsScalarFieldEnum | Usage_logsScalarFieldEnum[]
  }

  /**
   * usage_logs findFirstOrThrow
   */
  export type usage_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * Filter, which usage_logs to fetch.
     */
    where?: usage_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usage_logs to fetch.
     */
    orderBy?: usage_logsOrderByWithRelationInput | usage_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usage_logs.
     */
    cursor?: usage_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usage_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usage_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usage_logs.
     */
    distinct?: Usage_logsScalarFieldEnum | Usage_logsScalarFieldEnum[]
  }

  /**
   * usage_logs findMany
   */
  export type usage_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * Filter, which usage_logs to fetch.
     */
    where?: usage_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usage_logs to fetch.
     */
    orderBy?: usage_logsOrderByWithRelationInput | usage_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usage_logs.
     */
    cursor?: usage_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usage_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usage_logs.
     */
    skip?: number
    distinct?: Usage_logsScalarFieldEnum | Usage_logsScalarFieldEnum[]
  }

  /**
   * usage_logs create
   */
  export type usage_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a usage_logs.
     */
    data: XOR<usage_logsCreateInput, usage_logsUncheckedCreateInput>
  }

  /**
   * usage_logs createMany
   */
  export type usage_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usage_logs.
     */
    data: usage_logsCreateManyInput | usage_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usage_logs createManyAndReturn
   */
  export type usage_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * The data used to create many usage_logs.
     */
    data: usage_logsCreateManyInput | usage_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usage_logs update
   */
  export type usage_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a usage_logs.
     */
    data: XOR<usage_logsUpdateInput, usage_logsUncheckedUpdateInput>
    /**
     * Choose, which usage_logs to update.
     */
    where: usage_logsWhereUniqueInput
  }

  /**
   * usage_logs updateMany
   */
  export type usage_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usage_logs.
     */
    data: XOR<usage_logsUpdateManyMutationInput, usage_logsUncheckedUpdateManyInput>
    /**
     * Filter which usage_logs to update
     */
    where?: usage_logsWhereInput
    /**
     * Limit how many usage_logs to update.
     */
    limit?: number
  }

  /**
   * usage_logs updateManyAndReturn
   */
  export type usage_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * The data used to update usage_logs.
     */
    data: XOR<usage_logsUpdateManyMutationInput, usage_logsUncheckedUpdateManyInput>
    /**
     * Filter which usage_logs to update
     */
    where?: usage_logsWhereInput
    /**
     * Limit how many usage_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usage_logs upsert
   */
  export type usage_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the usage_logs to update in case it exists.
     */
    where: usage_logsWhereUniqueInput
    /**
     * In case the usage_logs found by the `where` argument doesn't exist, create a new usage_logs with this data.
     */
    create: XOR<usage_logsCreateInput, usage_logsUncheckedCreateInput>
    /**
     * In case the usage_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usage_logsUpdateInput, usage_logsUncheckedUpdateInput>
  }

  /**
   * usage_logs delete
   */
  export type usage_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    /**
     * Filter which usage_logs to delete.
     */
    where: usage_logsWhereUniqueInput
  }

  /**
   * usage_logs deleteMany
   */
  export type usage_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usage_logs to delete
     */
    where?: usage_logsWhereInput
    /**
     * Limit how many usage_logs to delete.
     */
    limit?: number
  }

  /**
   * usage_logs without action
   */
  export type usage_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    plan: $Enums.user_plan | null
    created_at: Date | null
    name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    plan: $Enums.user_plan | null
    created_at: Date | null
    name: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    plan: number
    created_at: number
    name: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    plan?: true
    created_at?: true
    name?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    plan?: true
    created_at?: true
    name?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    plan?: true
    created_at?: true
    name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    plan: $Enums.user_plan
    created_at: Date
    name: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    plan?: boolean
    created_at?: boolean
    name?: boolean
    collections?: boolean | users$collectionsArgs<ExtArgs>
    saved_contents?: boolean | users$saved_contentsArgs<ExtArgs>
    usage_logs?: boolean | users$usage_logsArgs<ExtArgs>
    workspace_members?: boolean | users$workspace_membersArgs<ExtArgs>
    workspaces?: boolean | users$workspacesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    plan?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    plan?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    plan?: boolean
    created_at?: boolean
    name?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "plan" | "created_at" | "name", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | users$collectionsArgs<ExtArgs>
    saved_contents?: boolean | users$saved_contentsArgs<ExtArgs>
    usage_logs?: boolean | users$usage_logsArgs<ExtArgs>
    workspace_members?: boolean | users$workspace_membersArgs<ExtArgs>
    workspaces?: boolean | users$workspacesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      collections: Prisma.$collectionsPayload<ExtArgs>[]
      saved_contents: Prisma.$saved_contentsPayload<ExtArgs>[]
      usage_logs: Prisma.$usage_logsPayload<ExtArgs>[]
      workspace_members: Prisma.$workspace_membersPayload<ExtArgs>[]
      workspaces: Prisma.$workspacesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      plan: $Enums.user_plan
      created_at: Date
      name: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collections<T extends users$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, users$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved_contents<T extends users$saved_contentsArgs<ExtArgs> = {}>(args?: Subset<T, users$saved_contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usage_logs<T extends users$usage_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$usage_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace_members<T extends users$workspace_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$workspace_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspaces<T extends users$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, users$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly plan: FieldRef<"users", 'user_plan'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly name: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.collections
   */
  export type users$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    where?: collectionsWhereInput
    orderBy?: collectionsOrderByWithRelationInput | collectionsOrderByWithRelationInput[]
    cursor?: collectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionsScalarFieldEnum | CollectionsScalarFieldEnum[]
  }

  /**
   * users.saved_contents
   */
  export type users$saved_contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    where?: saved_contentsWhereInput
    orderBy?: saved_contentsOrderByWithRelationInput | saved_contentsOrderByWithRelationInput[]
    cursor?: saved_contentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_contentsScalarFieldEnum | Saved_contentsScalarFieldEnum[]
  }

  /**
   * users.usage_logs
   */
  export type users$usage_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    where?: usage_logsWhereInput
    orderBy?: usage_logsOrderByWithRelationInput | usage_logsOrderByWithRelationInput[]
    cursor?: usage_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usage_logsScalarFieldEnum | Usage_logsScalarFieldEnum[]
  }

  /**
   * users.workspace_members
   */
  export type users$workspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    where?: workspace_membersWhereInput
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    cursor?: workspace_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * users.workspaces
   */
  export type users$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    cursor?: workspacesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model workspace_members
   */

  export type AggregateWorkspace_members = {
    _count: Workspace_membersCountAggregateOutputType | null
    _min: Workspace_membersMinAggregateOutputType | null
    _max: Workspace_membersMaxAggregateOutputType | null
  }

  export type Workspace_membersMinAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    user_id: string | null
    role: $Enums.workspace_role | null
    created_at: Date | null
  }

  export type Workspace_membersMaxAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    user_id: string | null
    role: $Enums.workspace_role | null
    created_at: Date | null
  }

  export type Workspace_membersCountAggregateOutputType = {
    id: number
    workspace_id: number
    user_id: number
    role: number
    created_at: number
    _all: number
  }


  export type Workspace_membersMinAggregateInputType = {
    id?: true
    workspace_id?: true
    user_id?: true
    role?: true
    created_at?: true
  }

  export type Workspace_membersMaxAggregateInputType = {
    id?: true
    workspace_id?: true
    user_id?: true
    role?: true
    created_at?: true
  }

  export type Workspace_membersCountAggregateInputType = {
    id?: true
    workspace_id?: true
    user_id?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type Workspace_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace_members to aggregate.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspace_members
    **/
    _count?: true | Workspace_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workspace_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workspace_membersMaxAggregateInputType
  }

  export type GetWorkspace_membersAggregateType<T extends Workspace_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace_members[P]>
      : GetScalarType<T[P], AggregateWorkspace_members[P]>
  }




  export type workspace_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_membersWhereInput
    orderBy?: workspace_membersOrderByWithAggregationInput | workspace_membersOrderByWithAggregationInput[]
    by: Workspace_membersScalarFieldEnum[] | Workspace_membersScalarFieldEnum
    having?: workspace_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workspace_membersCountAggregateInputType | true
    _min?: Workspace_membersMinAggregateInputType
    _max?: Workspace_membersMaxAggregateInputType
  }

  export type Workspace_membersGroupByOutputType = {
    id: string
    workspace_id: string
    user_id: string
    role: $Enums.workspace_role
    created_at: Date
    _count: Workspace_membersCountAggregateOutputType | null
    _min: Workspace_membersMinAggregateOutputType | null
    _max: Workspace_membersMaxAggregateOutputType | null
  }

  type GetWorkspace_membersGroupByPayload<T extends workspace_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workspace_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workspace_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workspace_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Workspace_membersGroupByOutputType[P]>
        }
      >
    >


  export type workspace_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_members"]>

  export type workspace_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_members"]>

  export type workspace_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_members"]>

  export type workspace_membersSelectScalar = {
    id?: boolean
    workspace_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type workspace_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspace_id" | "user_id" | "role" | "created_at", ExtArgs["result"]["workspace_members"]>
  export type workspace_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type workspace_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type workspace_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }

  export type $workspace_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspace_members"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      workspaces: Prisma.$workspacesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspace_id: string
      user_id: string
      role: $Enums.workspace_role
      created_at: Date
    }, ExtArgs["result"]["workspace_members"]>
    composites: {}
  }

  type workspace_membersGetPayload<S extends boolean | null | undefined | workspace_membersDefaultArgs> = $Result.GetResult<Prisma.$workspace_membersPayload, S>

  type workspace_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspace_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workspace_membersCountAggregateInputType | true
    }

  export interface workspace_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspace_members'], meta: { name: 'workspace_members' } }
    /**
     * Find zero or one Workspace_members that matches the filter.
     * @param {workspace_membersFindUniqueArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspace_membersFindUniqueArgs>(args: SelectSubset<T, workspace_membersFindUniqueArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspace_membersFindUniqueOrThrowArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspace_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, workspace_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersFindFirstArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspace_membersFindFirstArgs>(args?: SelectSubset<T, workspace_membersFindFirstArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersFindFirstOrThrowArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspace_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, workspace_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspace_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspace_members
     * const workspace_members = await prisma.workspace_members.findMany()
     * 
     * // Get first 10 Workspace_members
     * const workspace_members = await prisma.workspace_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspace_membersWithIdOnly = await prisma.workspace_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workspace_membersFindManyArgs>(args?: SelectSubset<T, workspace_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace_members.
     * @param {workspace_membersCreateArgs} args - Arguments to create a Workspace_members.
     * @example
     * // Create one Workspace_members
     * const Workspace_members = await prisma.workspace_members.create({
     *   data: {
     *     // ... data to create a Workspace_members
     *   }
     * })
     * 
     */
    create<T extends workspace_membersCreateArgs>(args: SelectSubset<T, workspace_membersCreateArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspace_members.
     * @param {workspace_membersCreateManyArgs} args - Arguments to create many Workspace_members.
     * @example
     * // Create many Workspace_members
     * const workspace_members = await prisma.workspace_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspace_membersCreateManyArgs>(args?: SelectSubset<T, workspace_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspace_members and returns the data saved in the database.
     * @param {workspace_membersCreateManyAndReturnArgs} args - Arguments to create many Workspace_members.
     * @example
     * // Create many Workspace_members
     * const workspace_members = await prisma.workspace_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspace_members and only return the `id`
     * const workspace_membersWithIdOnly = await prisma.workspace_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspace_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, workspace_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace_members.
     * @param {workspace_membersDeleteArgs} args - Arguments to delete one Workspace_members.
     * @example
     * // Delete one Workspace_members
     * const Workspace_members = await prisma.workspace_members.delete({
     *   where: {
     *     // ... filter to delete one Workspace_members
     *   }
     * })
     * 
     */
    delete<T extends workspace_membersDeleteArgs>(args: SelectSubset<T, workspace_membersDeleteArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace_members.
     * @param {workspace_membersUpdateArgs} args - Arguments to update one Workspace_members.
     * @example
     * // Update one Workspace_members
     * const workspace_members = await prisma.workspace_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspace_membersUpdateArgs>(args: SelectSubset<T, workspace_membersUpdateArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspace_members.
     * @param {workspace_membersDeleteManyArgs} args - Arguments to filter Workspace_members to delete.
     * @example
     * // Delete a few Workspace_members
     * const { count } = await prisma.workspace_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspace_membersDeleteManyArgs>(args?: SelectSubset<T, workspace_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspace_members
     * const workspace_members = await prisma.workspace_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspace_membersUpdateManyArgs>(args: SelectSubset<T, workspace_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspace_members and returns the data updated in the database.
     * @param {workspace_membersUpdateManyAndReturnArgs} args - Arguments to update many Workspace_members.
     * @example
     * // Update many Workspace_members
     * const workspace_members = await prisma.workspace_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspace_members and only return the `id`
     * const workspace_membersWithIdOnly = await prisma.workspace_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workspace_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, workspace_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace_members.
     * @param {workspace_membersUpsertArgs} args - Arguments to update or create a Workspace_members.
     * @example
     * // Update or create a Workspace_members
     * const workspace_members = await prisma.workspace_members.upsert({
     *   create: {
     *     // ... data to create a Workspace_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace_members we want to update
     *   }
     * })
     */
    upsert<T extends workspace_membersUpsertArgs>(args: SelectSubset<T, workspace_membersUpsertArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersCountArgs} args - Arguments to filter Workspace_members to count.
     * @example
     * // Count the number of Workspace_members
     * const count = await prisma.workspace_members.count({
     *   where: {
     *     // ... the filter for the Workspace_members we want to count
     *   }
     * })
    **/
    count<T extends workspace_membersCountArgs>(
      args?: Subset<T, workspace_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workspace_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workspace_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workspace_membersAggregateArgs>(args: Subset<T, Workspace_membersAggregateArgs>): Prisma.PrismaPromise<GetWorkspace_membersAggregateType<T>>

    /**
     * Group by Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workspace_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspace_membersGroupByArgs['orderBy'] }
        : { orderBy?: workspace_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workspace_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspace_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspace_members model
   */
  readonly fields: workspace_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspace_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspace_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends workspacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspacesDefaultArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workspace_members model
   */
  interface workspace_membersFieldRefs {
    readonly id: FieldRef<"workspace_members", 'String'>
    readonly workspace_id: FieldRef<"workspace_members", 'String'>
    readonly user_id: FieldRef<"workspace_members", 'String'>
    readonly role: FieldRef<"workspace_members", 'workspace_role'>
    readonly created_at: FieldRef<"workspace_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workspace_members findUnique
   */
  export type workspace_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members findUniqueOrThrow
   */
  export type workspace_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members findFirst
   */
  export type workspace_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspace_members.
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspace_members.
     */
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspace_members findFirstOrThrow
   */
  export type workspace_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspace_members.
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspace_members.
     */
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspace_members findMany
   */
  export type workspace_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspace_members.
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspace_members create
   */
  export type workspace_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a workspace_members.
     */
    data: XOR<workspace_membersCreateInput, workspace_membersUncheckedCreateInput>
  }

  /**
   * workspace_members createMany
   */
  export type workspace_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspace_members.
     */
    data: workspace_membersCreateManyInput | workspace_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspace_members createManyAndReturn
   */
  export type workspace_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * The data used to create many workspace_members.
     */
    data: workspace_membersCreateManyInput | workspace_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspace_members update
   */
  export type workspace_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a workspace_members.
     */
    data: XOR<workspace_membersUpdateInput, workspace_membersUncheckedUpdateInput>
    /**
     * Choose, which workspace_members to update.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members updateMany
   */
  export type workspace_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspace_members.
     */
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyInput>
    /**
     * Filter which workspace_members to update
     */
    where?: workspace_membersWhereInput
    /**
     * Limit how many workspace_members to update.
     */
    limit?: number
  }

  /**
   * workspace_members updateManyAndReturn
   */
  export type workspace_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * The data used to update workspace_members.
     */
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyInput>
    /**
     * Filter which workspace_members to update
     */
    where?: workspace_membersWhereInput
    /**
     * Limit how many workspace_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspace_members upsert
   */
  export type workspace_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the workspace_members to update in case it exists.
     */
    where: workspace_membersWhereUniqueInput
    /**
     * In case the workspace_members found by the `where` argument doesn't exist, create a new workspace_members with this data.
     */
    create: XOR<workspace_membersCreateInput, workspace_membersUncheckedCreateInput>
    /**
     * In case the workspace_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspace_membersUpdateInput, workspace_membersUncheckedUpdateInput>
  }

  /**
   * workspace_members delete
   */
  export type workspace_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter which workspace_members to delete.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members deleteMany
   */
  export type workspace_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace_members to delete
     */
    where?: workspace_membersWhereInput
    /**
     * Limit how many workspace_members to delete.
     */
    limit?: number
  }

  /**
   * workspace_members without action
   */
  export type workspace_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
  }


  /**
   * Model workspaces
   */

  export type AggregateWorkspaces = {
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  export type WorkspacesMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    is_personal: boolean | null
    created_at: Date | null
  }

  export type WorkspacesMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    is_personal: boolean | null
    created_at: Date | null
  }

  export type WorkspacesCountAggregateOutputType = {
    id: number
    owner_id: number
    name: number
    is_personal: number
    created_at: number
    _all: number
  }


  export type WorkspacesMinAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    is_personal?: true
    created_at?: true
  }

  export type WorkspacesMaxAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    is_personal?: true
    created_at?: true
  }

  export type WorkspacesCountAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    is_personal?: true
    created_at?: true
    _all?: true
  }

  export type WorkspacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to aggregate.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspaces
    **/
    _count?: true | WorkspacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacesMaxAggregateInputType
  }

  export type GetWorkspacesAggregateType<T extends WorkspacesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaces[P]>
      : GetScalarType<T[P], AggregateWorkspaces[P]>
  }




  export type workspacesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithAggregationInput | workspacesOrderByWithAggregationInput[]
    by: WorkspacesScalarFieldEnum[] | WorkspacesScalarFieldEnum
    having?: workspacesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacesCountAggregateInputType | true
    _min?: WorkspacesMinAggregateInputType
    _max?: WorkspacesMaxAggregateInputType
  }

  export type WorkspacesGroupByOutputType = {
    id: string
    owner_id: string
    name: string
    is_personal: boolean
    created_at: Date
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  type GetWorkspacesGroupByPayload<T extends workspacesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
        }
      >
    >


  export type workspacesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    is_personal?: boolean
    created_at?: boolean
    collections?: boolean | workspaces$collectionsArgs<ExtArgs>
    saved_contents?: boolean | workspaces$saved_contentsArgs<ExtArgs>
    tags?: boolean | workspaces$tagsArgs<ExtArgs>
    usage_logs?: boolean | workspaces$usage_logsArgs<ExtArgs>
    workspace_members?: boolean | workspaces$workspace_membersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    is_personal?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    is_personal?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectScalar = {
    id?: boolean
    owner_id?: boolean
    name?: boolean
    is_personal?: boolean
    created_at?: boolean
  }

  export type workspacesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "name" | "is_personal" | "created_at", ExtArgs["result"]["workspaces"]>
  export type workspacesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | workspaces$collectionsArgs<ExtArgs>
    saved_contents?: boolean | workspaces$saved_contentsArgs<ExtArgs>
    tags?: boolean | workspaces$tagsArgs<ExtArgs>
    usage_logs?: boolean | workspaces$usage_logsArgs<ExtArgs>
    workspace_members?: boolean | workspaces$workspace_membersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workspacesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type workspacesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $workspacesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspaces"
    objects: {
      collections: Prisma.$collectionsPayload<ExtArgs>[]
      saved_contents: Prisma.$saved_contentsPayload<ExtArgs>[]
      tags: Prisma.$tagsPayload<ExtArgs>[]
      usage_logs: Prisma.$usage_logsPayload<ExtArgs>[]
      workspace_members: Prisma.$workspace_membersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      name: string
      is_personal: boolean
      created_at: Date
    }, ExtArgs["result"]["workspaces"]>
    composites: {}
  }

  type workspacesGetPayload<S extends boolean | null | undefined | workspacesDefaultArgs> = $Result.GetResult<Prisma.$workspacesPayload, S>

  type workspacesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspacesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspacesCountAggregateInputType | true
    }

  export interface workspacesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspaces'], meta: { name: 'workspaces' } }
    /**
     * Find zero or one Workspaces that matches the filter.
     * @param {workspacesFindUniqueArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspacesFindUniqueArgs>(args: SelectSubset<T, workspacesFindUniqueArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspaces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspacesFindUniqueOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspacesFindUniqueOrThrowArgs>(args: SelectSubset<T, workspacesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspacesFindFirstArgs>(args?: SelectSubset<T, workspacesFindFirstArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspacesFindFirstOrThrowArgs>(args?: SelectSubset<T, workspacesFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspaces.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspaces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workspacesFindManyArgs>(args?: SelectSubset<T, workspacesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspaces.
     * @param {workspacesCreateArgs} args - Arguments to create a Workspaces.
     * @example
     * // Create one Workspaces
     * const Workspaces = await prisma.workspaces.create({
     *   data: {
     *     // ... data to create a Workspaces
     *   }
     * })
     * 
     */
    create<T extends workspacesCreateArgs>(args: SelectSubset<T, workspacesCreateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {workspacesCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspacesCreateManyArgs>(args?: SelectSubset<T, workspacesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {workspacesCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspacesCreateManyAndReturnArgs>(args?: SelectSubset<T, workspacesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspaces.
     * @param {workspacesDeleteArgs} args - Arguments to delete one Workspaces.
     * @example
     * // Delete one Workspaces
     * const Workspaces = await prisma.workspaces.delete({
     *   where: {
     *     // ... filter to delete one Workspaces
     *   }
     * })
     * 
     */
    delete<T extends workspacesDeleteArgs>(args: SelectSubset<T, workspacesDeleteArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspaces.
     * @param {workspacesUpdateArgs} args - Arguments to update one Workspaces.
     * @example
     * // Update one Workspaces
     * const workspaces = await prisma.workspaces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspacesUpdateArgs>(args: SelectSubset<T, workspacesUpdateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {workspacesDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspaces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspacesDeleteManyArgs>(args?: SelectSubset<T, workspacesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspacesUpdateManyArgs>(args: SelectSubset<T, workspacesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {workspacesUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workspacesUpdateManyAndReturnArgs>(args: SelectSubset<T, workspacesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspaces.
     * @param {workspacesUpsertArgs} args - Arguments to update or create a Workspaces.
     * @example
     * // Update or create a Workspaces
     * const workspaces = await prisma.workspaces.upsert({
     *   create: {
     *     // ... data to create a Workspaces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspaces we want to update
     *   }
     * })
     */
    upsert<T extends workspacesUpsertArgs>(args: SelectSubset<T, workspacesUpsertArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspaces.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends workspacesCountArgs>(
      args?: Subset<T, workspacesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspacesAggregateArgs>(args: Subset<T, WorkspacesAggregateArgs>): Prisma.PrismaPromise<GetWorkspacesAggregateType<T>>

    /**
     * Group by Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workspacesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacesGroupByArgs['orderBy'] }
        : { orderBy?: workspacesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workspacesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspaces model
   */
  readonly fields: workspacesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspaces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collections<T extends workspaces$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved_contents<T extends workspaces$saved_contentsArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$saved_contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_contentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends workspaces$tagsArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usage_logs<T extends workspaces$usage_logsArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$usage_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usage_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace_members<T extends workspaces$workspace_membersArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$workspace_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workspaces model
   */
  interface workspacesFieldRefs {
    readonly id: FieldRef<"workspaces", 'String'>
    readonly owner_id: FieldRef<"workspaces", 'String'>
    readonly name: FieldRef<"workspaces", 'String'>
    readonly is_personal: FieldRef<"workspaces", 'Boolean'>
    readonly created_at: FieldRef<"workspaces", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workspaces findUnique
   */
  export type workspacesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findUniqueOrThrow
   */
  export type workspacesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findFirst
   */
  export type workspacesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findFirstOrThrow
   */
  export type workspacesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findMany
   */
  export type workspacesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces create
   */
  export type workspacesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to create a workspaces.
     */
    data: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
  }

  /**
   * workspaces createMany
   */
  export type workspacesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspaces createManyAndReturn
   */
  export type workspacesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspaces update
   */
  export type workspacesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to update a workspaces.
     */
    data: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
    /**
     * Choose, which workspaces to update.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces updateMany
   */
  export type workspacesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
  }

  /**
   * workspaces updateManyAndReturn
   */
  export type workspacesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspaces upsert
   */
  export type workspacesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The filter to search for the workspaces to update in case it exists.
     */
    where: workspacesWhereUniqueInput
    /**
     * In case the workspaces found by the `where` argument doesn't exist, create a new workspaces with this data.
     */
    create: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
    /**
     * In case the workspaces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
  }

  /**
   * workspaces delete
   */
  export type workspacesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter which workspaces to delete.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces deleteMany
   */
  export type workspacesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to delete
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to delete.
     */
    limit?: number
  }

  /**
   * workspaces.collections
   */
  export type workspaces$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: collectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collections
     */
    omit?: collectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: collectionsInclude<ExtArgs> | null
    where?: collectionsWhereInput
    orderBy?: collectionsOrderByWithRelationInput | collectionsOrderByWithRelationInput[]
    cursor?: collectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionsScalarFieldEnum | CollectionsScalarFieldEnum[]
  }

  /**
   * workspaces.saved_contents
   */
  export type workspaces$saved_contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_contents
     */
    select?: saved_contentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_contents
     */
    omit?: saved_contentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_contentsInclude<ExtArgs> | null
    where?: saved_contentsWhereInput
    orderBy?: saved_contentsOrderByWithRelationInput | saved_contentsOrderByWithRelationInput[]
    cursor?: saved_contentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_contentsScalarFieldEnum | Saved_contentsScalarFieldEnum[]
  }

  /**
   * workspaces.tags
   */
  export type workspaces$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    cursor?: tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * workspaces.usage_logs
   */
  export type workspaces$usage_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usage_logs
     */
    select?: usage_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usage_logs
     */
    omit?: usage_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usage_logsInclude<ExtArgs> | null
    where?: usage_logsWhereInput
    orderBy?: usage_logsOrderByWithRelationInput | usage_logsOrderByWithRelationInput[]
    cursor?: usage_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usage_logsScalarFieldEnum | Usage_logsScalarFieldEnum[]
  }

  /**
   * workspaces.workspace_members
   */
  export type workspaces$workspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    where?: workspace_membersWhereInput
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    cursor?: workspace_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspaces without action
   */
  export type workspacesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Ai_insightsScalarFieldEnum: {
    id: 'id',
    content_id: 'content_id',
    summary: 'summary',
    hook: 'hook',
    format: 'format',
    angle: 'angle',
    idea_suggestions: 'idea_suggestions',
    confidence: 'confidence',
    raw_analysis: 'raw_analysis',
    created_at: 'created_at'
  };

  export type Ai_insightsScalarFieldEnum = (typeof Ai_insightsScalarFieldEnum)[keyof typeof Ai_insightsScalarFieldEnum]


  export const Collection_itemsScalarFieldEnum: {
    id: 'id',
    content_id: 'content_id',
    collection_id: 'collection_id'
  };

  export type Collection_itemsScalarFieldEnum = (typeof Collection_itemsScalarFieldEnum)[keyof typeof Collection_itemsScalarFieldEnum]


  export const CollectionsScalarFieldEnum: {
    id: 'id',
    workspace_id: 'workspace_id',
    name: 'name',
    description: 'description',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type CollectionsScalarFieldEnum = (typeof CollectionsScalarFieldEnum)[keyof typeof CollectionsScalarFieldEnum]


  export const Contents_tagsScalarFieldEnum: {
    id: 'id',
    content_id: 'content_id',
    tag_id: 'tag_id'
  };

  export type Contents_tagsScalarFieldEnum = (typeof Contents_tagsScalarFieldEnum)[keyof typeof Contents_tagsScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    content_id: 'content_id',
    text: 'text',
    created_at: 'created_at'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const Saved_contentsScalarFieldEnum: {
    id: 'id',
    workspace_id: 'workspace_id',
    url: 'url',
    source: 'source',
    title: 'title',
    created_by: 'created_by',
    thumbnail_url: 'thumbnail_url',
    metadata: 'metadata',
    transcript: 'transcript',
    created_at: 'created_at'
  };

  export type Saved_contentsScalarFieldEnum = (typeof Saved_contentsScalarFieldEnum)[keyof typeof Saved_contentsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    workspace_id: 'workspace_id',
    name: 'name',
    type: 'type'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const Usage_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    workspace_id: 'workspace_id',
    tokens_used: 'tokens_used',
    created_at: 'created_at'
  };

  export type Usage_logsScalarFieldEnum = (typeof Usage_logsScalarFieldEnum)[keyof typeof Usage_logsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    plan: 'plan',
    created_at: 'created_at',
    name: 'name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Workspace_membersScalarFieldEnum: {
    id: 'id',
    workspace_id: 'workspace_id',
    user_id: 'user_id',
    role: 'role',
    created_at: 'created_at'
  };

  export type Workspace_membersScalarFieldEnum = (typeof Workspace_membersScalarFieldEnum)[keyof typeof Workspace_membersScalarFieldEnum]


  export const WorkspacesScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    name: 'name',
    is_personal: 'is_personal',
    created_at: 'created_at'
  };

  export type WorkspacesScalarFieldEnum = (typeof WorkspacesScalarFieldEnum)[keyof typeof WorkspacesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'user_plan'
   */
  export type Enumuser_planFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_plan'>
    


  /**
   * Reference to a field of type 'user_plan[]'
   */
  export type ListEnumuser_planFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_plan[]'>
    


  /**
   * Reference to a field of type 'workspace_role'
   */
  export type Enumworkspace_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'workspace_role'>
    


  /**
   * Reference to a field of type 'workspace_role[]'
   */
  export type ListEnumworkspace_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'workspace_role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ai_insightsWhereInput = {
    AND?: ai_insightsWhereInput | ai_insightsWhereInput[]
    OR?: ai_insightsWhereInput[]
    NOT?: ai_insightsWhereInput | ai_insightsWhereInput[]
    id?: UuidFilter<"ai_insights"> | string
    content_id?: UuidFilter<"ai_insights"> | string
    summary?: StringFilter<"ai_insights"> | string
    hook?: JsonFilter<"ai_insights">
    format?: JsonFilter<"ai_insights">
    angle?: JsonFilter<"ai_insights">
    idea_suggestions?: JsonFilter<"ai_insights">
    confidence?: FloatFilter<"ai_insights"> | number
    raw_analysis?: JsonFilter<"ai_insights">
    created_at?: DateTimeFilter<"ai_insights"> | Date | string
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
  }

  export type ai_insightsOrderByWithRelationInput = {
    id?: SortOrder
    content_id?: SortOrder
    summary?: SortOrder
    hook?: SortOrder
    format?: SortOrder
    angle?: SortOrder
    idea_suggestions?: SortOrder
    confidence?: SortOrder
    raw_analysis?: SortOrder
    created_at?: SortOrder
    saved_contents?: saved_contentsOrderByWithRelationInput
  }

  export type ai_insightsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    content_id?: string
    AND?: ai_insightsWhereInput | ai_insightsWhereInput[]
    OR?: ai_insightsWhereInput[]
    NOT?: ai_insightsWhereInput | ai_insightsWhereInput[]
    summary?: StringFilter<"ai_insights"> | string
    hook?: JsonFilter<"ai_insights">
    format?: JsonFilter<"ai_insights">
    angle?: JsonFilter<"ai_insights">
    idea_suggestions?: JsonFilter<"ai_insights">
    confidence?: FloatFilter<"ai_insights"> | number
    raw_analysis?: JsonFilter<"ai_insights">
    created_at?: DateTimeFilter<"ai_insights"> | Date | string
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
  }, "id" | "content_id">

  export type ai_insightsOrderByWithAggregationInput = {
    id?: SortOrder
    content_id?: SortOrder
    summary?: SortOrder
    hook?: SortOrder
    format?: SortOrder
    angle?: SortOrder
    idea_suggestions?: SortOrder
    confidence?: SortOrder
    raw_analysis?: SortOrder
    created_at?: SortOrder
    _count?: ai_insightsCountOrderByAggregateInput
    _avg?: ai_insightsAvgOrderByAggregateInput
    _max?: ai_insightsMaxOrderByAggregateInput
    _min?: ai_insightsMinOrderByAggregateInput
    _sum?: ai_insightsSumOrderByAggregateInput
  }

  export type ai_insightsScalarWhereWithAggregatesInput = {
    AND?: ai_insightsScalarWhereWithAggregatesInput | ai_insightsScalarWhereWithAggregatesInput[]
    OR?: ai_insightsScalarWhereWithAggregatesInput[]
    NOT?: ai_insightsScalarWhereWithAggregatesInput | ai_insightsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ai_insights"> | string
    content_id?: UuidWithAggregatesFilter<"ai_insights"> | string
    summary?: StringWithAggregatesFilter<"ai_insights"> | string
    hook?: JsonWithAggregatesFilter<"ai_insights">
    format?: JsonWithAggregatesFilter<"ai_insights">
    angle?: JsonWithAggregatesFilter<"ai_insights">
    idea_suggestions?: JsonWithAggregatesFilter<"ai_insights">
    confidence?: FloatWithAggregatesFilter<"ai_insights"> | number
    raw_analysis?: JsonWithAggregatesFilter<"ai_insights">
    created_at?: DateTimeWithAggregatesFilter<"ai_insights"> | Date | string
  }

  export type collection_itemsWhereInput = {
    AND?: collection_itemsWhereInput | collection_itemsWhereInput[]
    OR?: collection_itemsWhereInput[]
    NOT?: collection_itemsWhereInput | collection_itemsWhereInput[]
    id?: UuidFilter<"collection_items"> | string
    content_id?: UuidFilter<"collection_items"> | string
    collection_id?: UuidFilter<"collection_items"> | string
    collections?: XOR<CollectionsScalarRelationFilter, collectionsWhereInput>
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
  }

  export type collection_itemsOrderByWithRelationInput = {
    id?: SortOrder
    content_id?: SortOrder
    collection_id?: SortOrder
    collections?: collectionsOrderByWithRelationInput
    saved_contents?: saved_contentsOrderByWithRelationInput
  }

  export type collection_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    content_id_collection_id?: collection_itemsContent_idCollection_idCompoundUniqueInput
    AND?: collection_itemsWhereInput | collection_itemsWhereInput[]
    OR?: collection_itemsWhereInput[]
    NOT?: collection_itemsWhereInput | collection_itemsWhereInput[]
    content_id?: UuidFilter<"collection_items"> | string
    collection_id?: UuidFilter<"collection_items"> | string
    collections?: XOR<CollectionsScalarRelationFilter, collectionsWhereInput>
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
  }, "id" | "content_id_collection_id">

  export type collection_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    content_id?: SortOrder
    collection_id?: SortOrder
    _count?: collection_itemsCountOrderByAggregateInput
    _max?: collection_itemsMaxOrderByAggregateInput
    _min?: collection_itemsMinOrderByAggregateInput
  }

  export type collection_itemsScalarWhereWithAggregatesInput = {
    AND?: collection_itemsScalarWhereWithAggregatesInput | collection_itemsScalarWhereWithAggregatesInput[]
    OR?: collection_itemsScalarWhereWithAggregatesInput[]
    NOT?: collection_itemsScalarWhereWithAggregatesInput | collection_itemsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"collection_items"> | string
    content_id?: UuidWithAggregatesFilter<"collection_items"> | string
    collection_id?: UuidWithAggregatesFilter<"collection_items"> | string
  }

  export type collectionsWhereInput = {
    AND?: collectionsWhereInput | collectionsWhereInput[]
    OR?: collectionsWhereInput[]
    NOT?: collectionsWhereInput | collectionsWhereInput[]
    id?: UuidFilter<"collections"> | string
    workspace_id?: UuidFilter<"collections"> | string
    name?: StringFilter<"collections"> | string
    description?: StringFilter<"collections"> | string
    created_by?: UuidFilter<"collections"> | string
    created_at?: DateTimeFilter<"collections"> | Date | string
    collection_items?: Collection_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }

  export type collectionsOrderByWithRelationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    collection_items?: collection_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    workspaces?: workspacesOrderByWithRelationInput
  }

  export type collectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: collectionsWhereInput | collectionsWhereInput[]
    OR?: collectionsWhereInput[]
    NOT?: collectionsWhereInput | collectionsWhereInput[]
    workspace_id?: UuidFilter<"collections"> | string
    name?: StringFilter<"collections"> | string
    description?: StringFilter<"collections"> | string
    created_by?: UuidFilter<"collections"> | string
    created_at?: DateTimeFilter<"collections"> | Date | string
    collection_items?: Collection_itemsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }, "id">

  export type collectionsOrderByWithAggregationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    _count?: collectionsCountOrderByAggregateInput
    _max?: collectionsMaxOrderByAggregateInput
    _min?: collectionsMinOrderByAggregateInput
  }

  export type collectionsScalarWhereWithAggregatesInput = {
    AND?: collectionsScalarWhereWithAggregatesInput | collectionsScalarWhereWithAggregatesInput[]
    OR?: collectionsScalarWhereWithAggregatesInput[]
    NOT?: collectionsScalarWhereWithAggregatesInput | collectionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"collections"> | string
    workspace_id?: UuidWithAggregatesFilter<"collections"> | string
    name?: StringWithAggregatesFilter<"collections"> | string
    description?: StringWithAggregatesFilter<"collections"> | string
    created_by?: UuidWithAggregatesFilter<"collections"> | string
    created_at?: DateTimeWithAggregatesFilter<"collections"> | Date | string
  }

  export type contents_tagsWhereInput = {
    AND?: contents_tagsWhereInput | contents_tagsWhereInput[]
    OR?: contents_tagsWhereInput[]
    NOT?: contents_tagsWhereInput | contents_tagsWhereInput[]
    id?: UuidFilter<"contents_tags"> | string
    content_id?: UuidFilter<"contents_tags"> | string
    tag_id?: UuidFilter<"contents_tags"> | string
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type contents_tagsOrderByWithRelationInput = {
    id?: SortOrder
    content_id?: SortOrder
    tag_id?: SortOrder
    saved_contents?: saved_contentsOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type contents_tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    content_id_tag_id?: contents_tagsContent_idTag_idCompoundUniqueInput
    AND?: contents_tagsWhereInput | contents_tagsWhereInput[]
    OR?: contents_tagsWhereInput[]
    NOT?: contents_tagsWhereInput | contents_tagsWhereInput[]
    content_id?: UuidFilter<"contents_tags"> | string
    tag_id?: UuidFilter<"contents_tags"> | string
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "id" | "content_id_tag_id">

  export type contents_tagsOrderByWithAggregationInput = {
    id?: SortOrder
    content_id?: SortOrder
    tag_id?: SortOrder
    _count?: contents_tagsCountOrderByAggregateInput
    _max?: contents_tagsMaxOrderByAggregateInput
    _min?: contents_tagsMinOrderByAggregateInput
  }

  export type contents_tagsScalarWhereWithAggregatesInput = {
    AND?: contents_tagsScalarWhereWithAggregatesInput | contents_tagsScalarWhereWithAggregatesInput[]
    OR?: contents_tagsScalarWhereWithAggregatesInput[]
    NOT?: contents_tagsScalarWhereWithAggregatesInput | contents_tagsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"contents_tags"> | string
    content_id?: UuidWithAggregatesFilter<"contents_tags"> | string
    tag_id?: UuidWithAggregatesFilter<"contents_tags"> | string
  }

  export type notesWhereInput = {
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    id?: UuidFilter<"notes"> | string
    content_id?: UuidFilter<"notes"> | string
    text?: StringFilter<"notes"> | string
    created_at?: DateTimeFilter<"notes"> | Date | string
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
  }

  export type notesOrderByWithRelationInput = {
    id?: SortOrder
    content_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    saved_contents?: saved_contentsOrderByWithRelationInput
  }

  export type notesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    content_id?: UuidFilter<"notes"> | string
    text?: StringFilter<"notes"> | string
    created_at?: DateTimeFilter<"notes"> | Date | string
    saved_contents?: XOR<Saved_contentsScalarRelationFilter, saved_contentsWhereInput>
  }, "id">

  export type notesOrderByWithAggregationInput = {
    id?: SortOrder
    content_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    _count?: notesCountOrderByAggregateInput
    _max?: notesMaxOrderByAggregateInput
    _min?: notesMinOrderByAggregateInput
  }

  export type notesScalarWhereWithAggregatesInput = {
    AND?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    OR?: notesScalarWhereWithAggregatesInput[]
    NOT?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"notes"> | string
    content_id?: UuidWithAggregatesFilter<"notes"> | string
    text?: StringWithAggregatesFilter<"notes"> | string
    created_at?: DateTimeWithAggregatesFilter<"notes"> | Date | string
  }

  export type saved_contentsWhereInput = {
    AND?: saved_contentsWhereInput | saved_contentsWhereInput[]
    OR?: saved_contentsWhereInput[]
    NOT?: saved_contentsWhereInput | saved_contentsWhereInput[]
    id?: UuidFilter<"saved_contents"> | string
    workspace_id?: UuidFilter<"saved_contents"> | string
    url?: StringFilter<"saved_contents"> | string
    source?: StringFilter<"saved_contents"> | string
    title?: StringNullableFilter<"saved_contents"> | string | null
    created_by?: UuidFilter<"saved_contents"> | string
    thumbnail_url?: StringFilter<"saved_contents"> | string
    metadata?: JsonFilter<"saved_contents">
    transcript?: StringNullableFilter<"saved_contents"> | string | null
    created_at?: DateTimeFilter<"saved_contents"> | Date | string
    ai_insights?: XOR<Ai_insightsNullableScalarRelationFilter, ai_insightsWhereInput> | null
    collection_items?: Collection_itemsListRelationFilter
    contents_tags?: Contents_tagsListRelationFilter
    notes?: NotesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }

  export type saved_contentsOrderByWithRelationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    url?: SortOrder
    source?: SortOrder
    title?: SortOrderInput | SortOrder
    created_by?: SortOrder
    thumbnail_url?: SortOrder
    metadata?: SortOrder
    transcript?: SortOrderInput | SortOrder
    created_at?: SortOrder
    ai_insights?: ai_insightsOrderByWithRelationInput
    collection_items?: collection_itemsOrderByRelationAggregateInput
    contents_tags?: contents_tagsOrderByRelationAggregateInput
    notes?: notesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    workspaces?: workspacesOrderByWithRelationInput
  }

  export type saved_contentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: saved_contentsWhereInput | saved_contentsWhereInput[]
    OR?: saved_contentsWhereInput[]
    NOT?: saved_contentsWhereInput | saved_contentsWhereInput[]
    workspace_id?: UuidFilter<"saved_contents"> | string
    url?: StringFilter<"saved_contents"> | string
    source?: StringFilter<"saved_contents"> | string
    title?: StringNullableFilter<"saved_contents"> | string | null
    created_by?: UuidFilter<"saved_contents"> | string
    thumbnail_url?: StringFilter<"saved_contents"> | string
    metadata?: JsonFilter<"saved_contents">
    transcript?: StringNullableFilter<"saved_contents"> | string | null
    created_at?: DateTimeFilter<"saved_contents"> | Date | string
    ai_insights?: XOR<Ai_insightsNullableScalarRelationFilter, ai_insightsWhereInput> | null
    collection_items?: Collection_itemsListRelationFilter
    contents_tags?: Contents_tagsListRelationFilter
    notes?: NotesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }, "id">

  export type saved_contentsOrderByWithAggregationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    url?: SortOrder
    source?: SortOrder
    title?: SortOrderInput | SortOrder
    created_by?: SortOrder
    thumbnail_url?: SortOrder
    metadata?: SortOrder
    transcript?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: saved_contentsCountOrderByAggregateInput
    _max?: saved_contentsMaxOrderByAggregateInput
    _min?: saved_contentsMinOrderByAggregateInput
  }

  export type saved_contentsScalarWhereWithAggregatesInput = {
    AND?: saved_contentsScalarWhereWithAggregatesInput | saved_contentsScalarWhereWithAggregatesInput[]
    OR?: saved_contentsScalarWhereWithAggregatesInput[]
    NOT?: saved_contentsScalarWhereWithAggregatesInput | saved_contentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"saved_contents"> | string
    workspace_id?: UuidWithAggregatesFilter<"saved_contents"> | string
    url?: StringWithAggregatesFilter<"saved_contents"> | string
    source?: StringWithAggregatesFilter<"saved_contents"> | string
    title?: StringNullableWithAggregatesFilter<"saved_contents"> | string | null
    created_by?: UuidWithAggregatesFilter<"saved_contents"> | string
    thumbnail_url?: StringWithAggregatesFilter<"saved_contents"> | string
    metadata?: JsonWithAggregatesFilter<"saved_contents">
    transcript?: StringNullableWithAggregatesFilter<"saved_contents"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"saved_contents"> | Date | string
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: UuidFilter<"tags"> | string
    workspace_id?: UuidFilter<"tags"> | string
    name?: StringFilter<"tags"> | string
    type?: StringFilter<"tags"> | string
    contents_tags?: Contents_tagsListRelationFilter
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    contents_tags?: contents_tagsOrderByRelationAggregateInput
    workspaces?: workspacesOrderByWithRelationInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspace_id_name?: tagsWorkspace_idNameCompoundUniqueInput
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    workspace_id?: UuidFilter<"tags"> | string
    name?: StringFilter<"tags"> | string
    type?: StringFilter<"tags"> | string
    contents_tags?: Contents_tagsListRelationFilter
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }, "id" | "workspace_id_name">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tags"> | string
    workspace_id?: UuidWithAggregatesFilter<"tags"> | string
    name?: StringWithAggregatesFilter<"tags"> | string
    type?: StringWithAggregatesFilter<"tags"> | string
  }

  export type usage_logsWhereInput = {
    AND?: usage_logsWhereInput | usage_logsWhereInput[]
    OR?: usage_logsWhereInput[]
    NOT?: usage_logsWhereInput | usage_logsWhereInput[]
    id?: UuidFilter<"usage_logs"> | string
    user_id?: UuidFilter<"usage_logs"> | string
    workspace_id?: UuidFilter<"usage_logs"> | string
    tokens_used?: BigIntFilter<"usage_logs"> | bigint | number
    created_at?: DateTimeFilter<"usage_logs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }

  export type usage_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    workspace_id?: SortOrder
    tokens_used?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    workspaces?: workspacesOrderByWithRelationInput
  }

  export type usage_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usage_logsWhereInput | usage_logsWhereInput[]
    OR?: usage_logsWhereInput[]
    NOT?: usage_logsWhereInput | usage_logsWhereInput[]
    user_id?: UuidFilter<"usage_logs"> | string
    workspace_id?: UuidFilter<"usage_logs"> | string
    tokens_used?: BigIntFilter<"usage_logs"> | bigint | number
    created_at?: DateTimeFilter<"usage_logs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }, "id">

  export type usage_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    workspace_id?: SortOrder
    tokens_used?: SortOrder
    created_at?: SortOrder
    _count?: usage_logsCountOrderByAggregateInput
    _avg?: usage_logsAvgOrderByAggregateInput
    _max?: usage_logsMaxOrderByAggregateInput
    _min?: usage_logsMinOrderByAggregateInput
    _sum?: usage_logsSumOrderByAggregateInput
  }

  export type usage_logsScalarWhereWithAggregatesInput = {
    AND?: usage_logsScalarWhereWithAggregatesInput | usage_logsScalarWhereWithAggregatesInput[]
    OR?: usage_logsScalarWhereWithAggregatesInput[]
    NOT?: usage_logsScalarWhereWithAggregatesInput | usage_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"usage_logs"> | string
    user_id?: UuidWithAggregatesFilter<"usage_logs"> | string
    workspace_id?: UuidWithAggregatesFilter<"usage_logs"> | string
    tokens_used?: BigIntWithAggregatesFilter<"usage_logs"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"usage_logs"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    plan?: Enumuser_planFilter<"users"> | $Enums.user_plan
    created_at?: DateTimeFilter<"users"> | Date | string
    name?: StringFilter<"users"> | string
    collections?: CollectionsListRelationFilter
    saved_contents?: Saved_contentsListRelationFilter
    usage_logs?: Usage_logsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    workspaces?: WorkspacesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    plan?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    collections?: collectionsOrderByRelationAggregateInput
    saved_contents?: saved_contentsOrderByRelationAggregateInput
    usage_logs?: usage_logsOrderByRelationAggregateInput
    workspace_members?: workspace_membersOrderByRelationAggregateInput
    workspaces?: workspacesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringFilter<"users"> | string
    plan?: Enumuser_planFilter<"users"> | $Enums.user_plan
    created_at?: DateTimeFilter<"users"> | Date | string
    name?: StringFilter<"users"> | string
    collections?: CollectionsListRelationFilter
    saved_contents?: Saved_contentsListRelationFilter
    usage_logs?: Usage_logsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    workspaces?: WorkspacesListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    plan?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    plan?: Enumuser_planWithAggregatesFilter<"users"> | $Enums.user_plan
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    name?: StringWithAggregatesFilter<"users"> | string
  }

  export type workspace_membersWhereInput = {
    AND?: workspace_membersWhereInput | workspace_membersWhereInput[]
    OR?: workspace_membersWhereInput[]
    NOT?: workspace_membersWhereInput | workspace_membersWhereInput[]
    id?: UuidFilter<"workspace_members"> | string
    workspace_id?: UuidFilter<"workspace_members"> | string
    user_id?: UuidFilter<"workspace_members"> | string
    role?: Enumworkspace_roleFilter<"workspace_members"> | $Enums.workspace_role
    created_at?: DateTimeFilter<"workspace_members"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }

  export type workspace_membersOrderByWithRelationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    workspaces?: workspacesOrderByWithRelationInput
  }

  export type workspace_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspace_id_user_id?: workspace_membersWorkspace_idUser_idCompoundUniqueInput
    AND?: workspace_membersWhereInput | workspace_membersWhereInput[]
    OR?: workspace_membersWhereInput[]
    NOT?: workspace_membersWhereInput | workspace_membersWhereInput[]
    workspace_id?: UuidFilter<"workspace_members"> | string
    user_id?: UuidFilter<"workspace_members"> | string
    role?: Enumworkspace_roleFilter<"workspace_members"> | $Enums.workspace_role
    created_at?: DateTimeFilter<"workspace_members"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }, "id" | "workspace_id_user_id">

  export type workspace_membersOrderByWithAggregationInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: workspace_membersCountOrderByAggregateInput
    _max?: workspace_membersMaxOrderByAggregateInput
    _min?: workspace_membersMinOrderByAggregateInput
  }

  export type workspace_membersScalarWhereWithAggregatesInput = {
    AND?: workspace_membersScalarWhereWithAggregatesInput | workspace_membersScalarWhereWithAggregatesInput[]
    OR?: workspace_membersScalarWhereWithAggregatesInput[]
    NOT?: workspace_membersScalarWhereWithAggregatesInput | workspace_membersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workspace_members"> | string
    workspace_id?: UuidWithAggregatesFilter<"workspace_members"> | string
    user_id?: UuidWithAggregatesFilter<"workspace_members"> | string
    role?: Enumworkspace_roleWithAggregatesFilter<"workspace_members"> | $Enums.workspace_role
    created_at?: DateTimeWithAggregatesFilter<"workspace_members"> | Date | string
  }

  export type workspacesWhereInput = {
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    id?: UuidFilter<"workspaces"> | string
    owner_id?: UuidFilter<"workspaces"> | string
    name?: StringFilter<"workspaces"> | string
    is_personal?: BoolFilter<"workspaces"> | boolean
    created_at?: DateTimeFilter<"workspaces"> | Date | string
    collections?: CollectionsListRelationFilter
    saved_contents?: Saved_contentsListRelationFilter
    tags?: TagsListRelationFilter
    usage_logs?: Usage_logsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type workspacesOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    is_personal?: SortOrder
    created_at?: SortOrder
    collections?: collectionsOrderByRelationAggregateInput
    saved_contents?: saved_contentsOrderByRelationAggregateInput
    tags?: tagsOrderByRelationAggregateInput
    usage_logs?: usage_logsOrderByRelationAggregateInput
    workspace_members?: workspace_membersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type workspacesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    owner_id?: UuidFilter<"workspaces"> | string
    name?: StringFilter<"workspaces"> | string
    is_personal?: BoolFilter<"workspaces"> | boolean
    created_at?: DateTimeFilter<"workspaces"> | Date | string
    collections?: CollectionsListRelationFilter
    saved_contents?: Saved_contentsListRelationFilter
    tags?: TagsListRelationFilter
    usage_logs?: Usage_logsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type workspacesOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    is_personal?: SortOrder
    created_at?: SortOrder
    _count?: workspacesCountOrderByAggregateInput
    _max?: workspacesMaxOrderByAggregateInput
    _min?: workspacesMinOrderByAggregateInput
  }

  export type workspacesScalarWhereWithAggregatesInput = {
    AND?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    OR?: workspacesScalarWhereWithAggregatesInput[]
    NOT?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workspaces"> | string
    owner_id?: UuidWithAggregatesFilter<"workspaces"> | string
    name?: StringWithAggregatesFilter<"workspaces"> | string
    is_personal?: BoolWithAggregatesFilter<"workspaces"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"workspaces"> | Date | string
  }

  export type ai_insightsCreateInput = {
    id?: string
    summary: string
    hook: JsonNullValueInput | InputJsonValue
    format: JsonNullValueInput | InputJsonValue
    angle: JsonNullValueInput | InputJsonValue
    idea_suggestions: JsonNullValueInput | InputJsonValue
    confidence: number
    raw_analysis: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    saved_contents: saved_contentsCreateNestedOneWithoutAi_insightsInput
  }

  export type ai_insightsUncheckedCreateInput = {
    id?: string
    content_id: string
    summary: string
    hook: JsonNullValueInput | InputJsonValue
    format: JsonNullValueInput | InputJsonValue
    angle: JsonNullValueInput | InputJsonValue
    idea_suggestions: JsonNullValueInput | InputJsonValue
    confidence: number
    raw_analysis: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ai_insightsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    hook?: JsonNullValueInput | InputJsonValue
    format?: JsonNullValueInput | InputJsonValue
    angle?: JsonNullValueInput | InputJsonValue
    idea_suggestions?: JsonNullValueInput | InputJsonValue
    confidence?: FloatFieldUpdateOperationsInput | number
    raw_analysis?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_contents?: saved_contentsUpdateOneRequiredWithoutAi_insightsNestedInput
  }

  export type ai_insightsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    hook?: JsonNullValueInput | InputJsonValue
    format?: JsonNullValueInput | InputJsonValue
    angle?: JsonNullValueInput | InputJsonValue
    idea_suggestions?: JsonNullValueInput | InputJsonValue
    confidence?: FloatFieldUpdateOperationsInput | number
    raw_analysis?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_insightsCreateManyInput = {
    id?: string
    content_id: string
    summary: string
    hook: JsonNullValueInput | InputJsonValue
    format: JsonNullValueInput | InputJsonValue
    angle: JsonNullValueInput | InputJsonValue
    idea_suggestions: JsonNullValueInput | InputJsonValue
    confidence: number
    raw_analysis: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ai_insightsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    hook?: JsonNullValueInput | InputJsonValue
    format?: JsonNullValueInput | InputJsonValue
    angle?: JsonNullValueInput | InputJsonValue
    idea_suggestions?: JsonNullValueInput | InputJsonValue
    confidence?: FloatFieldUpdateOperationsInput | number
    raw_analysis?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_insightsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    hook?: JsonNullValueInput | InputJsonValue
    format?: JsonNullValueInput | InputJsonValue
    angle?: JsonNullValueInput | InputJsonValue
    idea_suggestions?: JsonNullValueInput | InputJsonValue
    confidence?: FloatFieldUpdateOperationsInput | number
    raw_analysis?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collection_itemsCreateInput = {
    id?: string
    collections: collectionsCreateNestedOneWithoutCollection_itemsInput
    saved_contents: saved_contentsCreateNestedOneWithoutCollection_itemsInput
  }

  export type collection_itemsUncheckedCreateInput = {
    id?: string
    content_id: string
    collection_id: string
  }

  export type collection_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUpdateOneRequiredWithoutCollection_itemsNestedInput
    saved_contents?: saved_contentsUpdateOneRequiredWithoutCollection_itemsNestedInput
  }

  export type collection_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type collection_itemsCreateManyInput = {
    id?: string
    content_id: string
    collection_id: string
  }

  export type collection_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type collection_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type collectionsCreateInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    collection_items?: collection_itemsCreateNestedManyWithoutCollectionsInput
    users: usersCreateNestedOneWithoutCollectionsInput
    workspaces: workspacesCreateNestedOneWithoutCollectionsInput
  }

  export type collectionsUncheckedCreateInput = {
    id?: string
    workspace_id: string
    name: string
    description: string
    created_by: string
    created_at?: Date | string
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutCollectionsInput
  }

  export type collectionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUpdateManyWithoutCollectionsNestedInput
    users?: usersUpdateOneRequiredWithoutCollectionsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type collectionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUncheckedUpdateManyWithoutCollectionsNestedInput
  }

  export type collectionsCreateManyInput = {
    id?: string
    workspace_id: string
    name: string
    description: string
    created_by: string
    created_at?: Date | string
  }

  export type collectionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collectionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contents_tagsCreateInput = {
    id?: string
    saved_contents: saved_contentsCreateNestedOneWithoutContents_tagsInput
    tags: tagsCreateNestedOneWithoutContents_tagsInput
  }

  export type contents_tagsUncheckedCreateInput = {
    id?: string
    content_id: string
    tag_id: string
  }

  export type contents_tagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saved_contents?: saved_contentsUpdateOneRequiredWithoutContents_tagsNestedInput
    tags?: tagsUpdateOneRequiredWithoutContents_tagsNestedInput
  }

  export type contents_tagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type contents_tagsCreateManyInput = {
    id?: string
    content_id: string
    tag_id: string
  }

  export type contents_tagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type contents_tagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type notesCreateInput = {
    id?: string
    text: string
    created_at?: Date | string
    saved_contents: saved_contentsCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateInput = {
    id?: string
    content_id: string
    text: string
    created_at?: Date | string
  }

  export type notesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_contents?: saved_contentsUpdateOneRequiredWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notesCreateManyInput = {
    id?: string
    content_id: string
    text: string
    created_at?: Date | string
  }

  export type notesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_contentsCreateInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsCreateNestedManyWithoutSaved_contentsInput
    notes?: notesCreateNestedManyWithoutSaved_contentsInput
    users: usersCreateNestedOneWithoutSaved_contentsInput
    workspaces: workspacesCreateNestedOneWithoutSaved_contentsInput
  }

  export type saved_contentsUncheckedCreateInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsUncheckedCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutSaved_contentsInput
    notes?: notesUncheckedCreateNestedManyWithoutSaved_contentsInput
  }

  export type saved_contentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUpdateManyWithoutSaved_contentsNestedInput
    users?: usersUpdateOneRequiredWithoutSaved_contentsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUncheckedUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUncheckedUpdateManyWithoutSaved_contentsNestedInput
  }

  export type saved_contentsCreateManyInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
  }

  export type saved_contentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_contentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsCreateInput = {
    id?: string
    name: string
    type: string
    contents_tags?: contents_tagsCreateNestedManyWithoutTagsInput
    workspaces: workspacesCreateNestedOneWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id?: string
    workspace_id: string
    name: string
    type: string
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contents_tags?: contents_tagsUpdateManyWithoutTagsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id?: string
    workspace_id: string
    name: string
    type: string
  }

  export type tagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type usage_logsCreateInput = {
    id?: string
    tokens_used: bigint | number
    created_at?: Date | string
    users: usersCreateNestedOneWithoutUsage_logsInput
    workspaces: workspacesCreateNestedOneWithoutUsage_logsInput
  }

  export type usage_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    workspace_id: string
    tokens_used: bigint | number
    created_at?: Date | string
  }

  export type usage_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUsage_logsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutUsage_logsNestedInput
  }

  export type usage_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usage_logsCreateManyInput = {
    id?: string
    user_id: string
    workspace_id: string
    tokens_used: bigint | number
    created_at?: Date | string
  }

  export type usage_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usage_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsUncheckedCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUncheckedUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type workspace_membersCreateInput = {
    id?: string
    role?: $Enums.workspace_role
    created_at?: Date | string
    users: usersCreateNestedOneWithoutWorkspace_membersInput
    workspaces: workspacesCreateNestedOneWithoutWorkspace_membersInput
  }

  export type workspace_membersUncheckedCreateInput = {
    id?: string
    workspace_id: string
    user_id: string
    role?: $Enums.workspace_role
    created_at?: Date | string
  }

  export type workspace_membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutWorkspace_membersNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutWorkspace_membersNestedInput
  }

  export type workspace_membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspace_membersCreateManyInput = {
    id?: string
    workspace_id: string
    user_id: string
    role?: $Enums.workspace_role
    created_at?: Date | string
  }

  export type workspace_membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspace_membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspacesCreateInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsCreateNestedManyWithoutWorkspacesInput
    tags?: tagsCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users: usersCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateInput = {
    id?: string
    owner_id: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsUncheckedCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutWorkspacesInput
    tags?: tagsUncheckedCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUncheckedUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type workspacesCreateManyInput = {
    id?: string
    owner_id: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
  }

  export type workspacesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspacesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Saved_contentsScalarRelationFilter = {
    is?: saved_contentsWhereInput
    isNot?: saved_contentsWhereInput
  }

  export type ai_insightsCountOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    summary?: SortOrder
    hook?: SortOrder
    format?: SortOrder
    angle?: SortOrder
    idea_suggestions?: SortOrder
    confidence?: SortOrder
    raw_analysis?: SortOrder
    created_at?: SortOrder
  }

  export type ai_insightsAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type ai_insightsMaxOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    summary?: SortOrder
    confidence?: SortOrder
    created_at?: SortOrder
  }

  export type ai_insightsMinOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    summary?: SortOrder
    confidence?: SortOrder
    created_at?: SortOrder
  }

  export type ai_insightsSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CollectionsScalarRelationFilter = {
    is?: collectionsWhereInput
    isNot?: collectionsWhereInput
  }

  export type collection_itemsContent_idCollection_idCompoundUniqueInput = {
    content_id: string
    collection_id: string
  }

  export type collection_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    collection_id?: SortOrder
  }

  export type collection_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    collection_id?: SortOrder
  }

  export type collection_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    collection_id?: SortOrder
  }

  export type Collection_itemsListRelationFilter = {
    every?: collection_itemsWhereInput
    some?: collection_itemsWhereInput
    none?: collection_itemsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type WorkspacesScalarRelationFilter = {
    is?: workspacesWhereInput
    isNot?: workspacesWhereInput
  }

  export type collection_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type collectionsCountOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type collectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type collectionsMinOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type contents_tagsContent_idTag_idCompoundUniqueInput = {
    content_id: string
    tag_id: string
  }

  export type contents_tagsCountOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    tag_id?: SortOrder
  }

  export type contents_tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    tag_id?: SortOrder
  }

  export type contents_tagsMinOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    tag_id?: SortOrder
  }

  export type notesCountOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
  }

  export type notesMaxOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
  }

  export type notesMinOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Ai_insightsNullableScalarRelationFilter = {
    is?: ai_insightsWhereInput | null
    isNot?: ai_insightsWhereInput | null
  }

  export type Contents_tagsListRelationFilter = {
    every?: contents_tagsWhereInput
    some?: contents_tagsWhereInput
    none?: contents_tagsWhereInput
  }

  export type NotesListRelationFilter = {
    every?: notesWhereInput
    some?: notesWhereInput
    none?: notesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type contents_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saved_contentsCountOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    url?: SortOrder
    source?: SortOrder
    title?: SortOrder
    created_by?: SortOrder
    thumbnail_url?: SortOrder
    metadata?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
  }

  export type saved_contentsMaxOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    url?: SortOrder
    source?: SortOrder
    title?: SortOrder
    created_by?: SortOrder
    thumbnail_url?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
  }

  export type saved_contentsMinOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    url?: SortOrder
    source?: SortOrder
    title?: SortOrder
    created_by?: SortOrder
    thumbnail_url?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type tagsWorkspace_idNameCompoundUniqueInput = {
    workspace_id: string
    name: string
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type usage_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workspace_id?: SortOrder
    tokens_used?: SortOrder
    created_at?: SortOrder
  }

  export type usage_logsAvgOrderByAggregateInput = {
    tokens_used?: SortOrder
  }

  export type usage_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workspace_id?: SortOrder
    tokens_used?: SortOrder
    created_at?: SortOrder
  }

  export type usage_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    workspace_id?: SortOrder
    tokens_used?: SortOrder
    created_at?: SortOrder
  }

  export type usage_logsSumOrderByAggregateInput = {
    tokens_used?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Enumuser_planFilter<$PrismaModel = never> = {
    equals?: $Enums.user_plan | Enumuser_planFieldRefInput<$PrismaModel>
    in?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_planFilter<$PrismaModel> | $Enums.user_plan
  }

  export type CollectionsListRelationFilter = {
    every?: collectionsWhereInput
    some?: collectionsWhereInput
    none?: collectionsWhereInput
  }

  export type Saved_contentsListRelationFilter = {
    every?: saved_contentsWhereInput
    some?: saved_contentsWhereInput
    none?: saved_contentsWhereInput
  }

  export type Usage_logsListRelationFilter = {
    every?: usage_logsWhereInput
    some?: usage_logsWhereInput
    none?: usage_logsWhereInput
  }

  export type Workspace_membersListRelationFilter = {
    every?: workspace_membersWhereInput
    some?: workspace_membersWhereInput
    none?: workspace_membersWhereInput
  }

  export type WorkspacesListRelationFilter = {
    every?: workspacesWhereInput
    some?: workspacesWhereInput
    none?: workspacesWhereInput
  }

  export type collectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saved_contentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usage_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspace_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type Enumuser_planWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_plan | Enumuser_planFieldRefInput<$PrismaModel>
    in?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_planWithAggregatesFilter<$PrismaModel> | $Enums.user_plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_planFilter<$PrismaModel>
    _max?: NestedEnumuser_planFilter<$PrismaModel>
  }

  export type Enumworkspace_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.workspace_role | Enumworkspace_roleFieldRefInput<$PrismaModel>
    in?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumworkspace_roleFilter<$PrismaModel> | $Enums.workspace_role
  }

  export type workspace_membersWorkspace_idUser_idCompoundUniqueInput = {
    workspace_id: string
    user_id: string
  }

  export type workspace_membersCountOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type workspace_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type workspace_membersMinOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type Enumworkspace_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.workspace_role | Enumworkspace_roleFieldRefInput<$PrismaModel>
    in?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumworkspace_roleWithAggregatesFilter<$PrismaModel> | $Enums.workspace_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumworkspace_roleFilter<$PrismaModel>
    _max?: NestedEnumworkspace_roleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TagsListRelationFilter = {
    every?: tagsWhereInput
    some?: tagsWhereInput
    none?: tagsWhereInput
  }

  export type tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacesCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    is_personal?: SortOrder
    created_at?: SortOrder
  }

  export type workspacesMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    is_personal?: SortOrder
    created_at?: SortOrder
  }

  export type workspacesMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    is_personal?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type saved_contentsCreateNestedOneWithoutAi_insightsInput = {
    create?: XOR<saved_contentsCreateWithoutAi_insightsInput, saved_contentsUncheckedCreateWithoutAi_insightsInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutAi_insightsInput
    connect?: saved_contentsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type saved_contentsUpdateOneRequiredWithoutAi_insightsNestedInput = {
    create?: XOR<saved_contentsCreateWithoutAi_insightsInput, saved_contentsUncheckedCreateWithoutAi_insightsInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutAi_insightsInput
    upsert?: saved_contentsUpsertWithoutAi_insightsInput
    connect?: saved_contentsWhereUniqueInput
    update?: XOR<XOR<saved_contentsUpdateToOneWithWhereWithoutAi_insightsInput, saved_contentsUpdateWithoutAi_insightsInput>, saved_contentsUncheckedUpdateWithoutAi_insightsInput>
  }

  export type collectionsCreateNestedOneWithoutCollection_itemsInput = {
    create?: XOR<collectionsCreateWithoutCollection_itemsInput, collectionsUncheckedCreateWithoutCollection_itemsInput>
    connectOrCreate?: collectionsCreateOrConnectWithoutCollection_itemsInput
    connect?: collectionsWhereUniqueInput
  }

  export type saved_contentsCreateNestedOneWithoutCollection_itemsInput = {
    create?: XOR<saved_contentsCreateWithoutCollection_itemsInput, saved_contentsUncheckedCreateWithoutCollection_itemsInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutCollection_itemsInput
    connect?: saved_contentsWhereUniqueInput
  }

  export type collectionsUpdateOneRequiredWithoutCollection_itemsNestedInput = {
    create?: XOR<collectionsCreateWithoutCollection_itemsInput, collectionsUncheckedCreateWithoutCollection_itemsInput>
    connectOrCreate?: collectionsCreateOrConnectWithoutCollection_itemsInput
    upsert?: collectionsUpsertWithoutCollection_itemsInput
    connect?: collectionsWhereUniqueInput
    update?: XOR<XOR<collectionsUpdateToOneWithWhereWithoutCollection_itemsInput, collectionsUpdateWithoutCollection_itemsInput>, collectionsUncheckedUpdateWithoutCollection_itemsInput>
  }

  export type saved_contentsUpdateOneRequiredWithoutCollection_itemsNestedInput = {
    create?: XOR<saved_contentsCreateWithoutCollection_itemsInput, saved_contentsUncheckedCreateWithoutCollection_itemsInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutCollection_itemsInput
    upsert?: saved_contentsUpsertWithoutCollection_itemsInput
    connect?: saved_contentsWhereUniqueInput
    update?: XOR<XOR<saved_contentsUpdateToOneWithWhereWithoutCollection_itemsInput, saved_contentsUpdateWithoutCollection_itemsInput>, saved_contentsUncheckedUpdateWithoutCollection_itemsInput>
  }

  export type collection_itemsCreateNestedManyWithoutCollectionsInput = {
    create?: XOR<collection_itemsCreateWithoutCollectionsInput, collection_itemsUncheckedCreateWithoutCollectionsInput> | collection_itemsCreateWithoutCollectionsInput[] | collection_itemsUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutCollectionsInput | collection_itemsCreateOrConnectWithoutCollectionsInput[]
    createMany?: collection_itemsCreateManyCollectionsInputEnvelope
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<usersCreateWithoutCollectionsInput, usersUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCollectionsInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<workspacesCreateWithoutCollectionsInput, workspacesUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutCollectionsInput
    connect?: workspacesWhereUniqueInput
  }

  export type collection_itemsUncheckedCreateNestedManyWithoutCollectionsInput = {
    create?: XOR<collection_itemsCreateWithoutCollectionsInput, collection_itemsUncheckedCreateWithoutCollectionsInput> | collection_itemsCreateWithoutCollectionsInput[] | collection_itemsUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutCollectionsInput | collection_itemsCreateOrConnectWithoutCollectionsInput[]
    createMany?: collection_itemsCreateManyCollectionsInputEnvelope
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
  }

  export type collection_itemsUpdateManyWithoutCollectionsNestedInput = {
    create?: XOR<collection_itemsCreateWithoutCollectionsInput, collection_itemsUncheckedCreateWithoutCollectionsInput> | collection_itemsCreateWithoutCollectionsInput[] | collection_itemsUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutCollectionsInput | collection_itemsCreateOrConnectWithoutCollectionsInput[]
    upsert?: collection_itemsUpsertWithWhereUniqueWithoutCollectionsInput | collection_itemsUpsertWithWhereUniqueWithoutCollectionsInput[]
    createMany?: collection_itemsCreateManyCollectionsInputEnvelope
    set?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    disconnect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    delete?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    update?: collection_itemsUpdateWithWhereUniqueWithoutCollectionsInput | collection_itemsUpdateWithWhereUniqueWithoutCollectionsInput[]
    updateMany?: collection_itemsUpdateManyWithWhereWithoutCollectionsInput | collection_itemsUpdateManyWithWhereWithoutCollectionsInput[]
    deleteMany?: collection_itemsScalarWhereInput | collection_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<usersCreateWithoutCollectionsInput, usersUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCollectionsInput
    upsert?: usersUpsertWithoutCollectionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCollectionsInput, usersUpdateWithoutCollectionsInput>, usersUncheckedUpdateWithoutCollectionsInput>
  }

  export type workspacesUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<workspacesCreateWithoutCollectionsInput, workspacesUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutCollectionsInput
    upsert?: workspacesUpsertWithoutCollectionsInput
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutCollectionsInput, workspacesUpdateWithoutCollectionsInput>, workspacesUncheckedUpdateWithoutCollectionsInput>
  }

  export type collection_itemsUncheckedUpdateManyWithoutCollectionsNestedInput = {
    create?: XOR<collection_itemsCreateWithoutCollectionsInput, collection_itemsUncheckedCreateWithoutCollectionsInput> | collection_itemsCreateWithoutCollectionsInput[] | collection_itemsUncheckedCreateWithoutCollectionsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutCollectionsInput | collection_itemsCreateOrConnectWithoutCollectionsInput[]
    upsert?: collection_itemsUpsertWithWhereUniqueWithoutCollectionsInput | collection_itemsUpsertWithWhereUniqueWithoutCollectionsInput[]
    createMany?: collection_itemsCreateManyCollectionsInputEnvelope
    set?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    disconnect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    delete?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    update?: collection_itemsUpdateWithWhereUniqueWithoutCollectionsInput | collection_itemsUpdateWithWhereUniqueWithoutCollectionsInput[]
    updateMany?: collection_itemsUpdateManyWithWhereWithoutCollectionsInput | collection_itemsUpdateManyWithWhereWithoutCollectionsInput[]
    deleteMany?: collection_itemsScalarWhereInput | collection_itemsScalarWhereInput[]
  }

  export type saved_contentsCreateNestedOneWithoutContents_tagsInput = {
    create?: XOR<saved_contentsCreateWithoutContents_tagsInput, saved_contentsUncheckedCreateWithoutContents_tagsInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutContents_tagsInput
    connect?: saved_contentsWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutContents_tagsInput = {
    create?: XOR<tagsCreateWithoutContents_tagsInput, tagsUncheckedCreateWithoutContents_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutContents_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type saved_contentsUpdateOneRequiredWithoutContents_tagsNestedInput = {
    create?: XOR<saved_contentsCreateWithoutContents_tagsInput, saved_contentsUncheckedCreateWithoutContents_tagsInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutContents_tagsInput
    upsert?: saved_contentsUpsertWithoutContents_tagsInput
    connect?: saved_contentsWhereUniqueInput
    update?: XOR<XOR<saved_contentsUpdateToOneWithWhereWithoutContents_tagsInput, saved_contentsUpdateWithoutContents_tagsInput>, saved_contentsUncheckedUpdateWithoutContents_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutContents_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutContents_tagsInput, tagsUncheckedCreateWithoutContents_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutContents_tagsInput
    upsert?: tagsUpsertWithoutContents_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutContents_tagsInput, tagsUpdateWithoutContents_tagsInput>, tagsUncheckedUpdateWithoutContents_tagsInput>
  }

  export type saved_contentsCreateNestedOneWithoutNotesInput = {
    create?: XOR<saved_contentsCreateWithoutNotesInput, saved_contentsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutNotesInput
    connect?: saved_contentsWhereUniqueInput
  }

  export type saved_contentsUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<saved_contentsCreateWithoutNotesInput, saved_contentsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: saved_contentsCreateOrConnectWithoutNotesInput
    upsert?: saved_contentsUpsertWithoutNotesInput
    connect?: saved_contentsWhereUniqueInput
    update?: XOR<XOR<saved_contentsUpdateToOneWithWhereWithoutNotesInput, saved_contentsUpdateWithoutNotesInput>, saved_contentsUncheckedUpdateWithoutNotesInput>
  }

  export type ai_insightsCreateNestedOneWithoutSaved_contentsInput = {
    create?: XOR<ai_insightsCreateWithoutSaved_contentsInput, ai_insightsUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: ai_insightsCreateOrConnectWithoutSaved_contentsInput
    connect?: ai_insightsWhereUniqueInput
  }

  export type collection_itemsCreateNestedManyWithoutSaved_contentsInput = {
    create?: XOR<collection_itemsCreateWithoutSaved_contentsInput, collection_itemsUncheckedCreateWithoutSaved_contentsInput> | collection_itemsCreateWithoutSaved_contentsInput[] | collection_itemsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutSaved_contentsInput | collection_itemsCreateOrConnectWithoutSaved_contentsInput[]
    createMany?: collection_itemsCreateManySaved_contentsInputEnvelope
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
  }

  export type contents_tagsCreateNestedManyWithoutSaved_contentsInput = {
    create?: XOR<contents_tagsCreateWithoutSaved_contentsInput, contents_tagsUncheckedCreateWithoutSaved_contentsInput> | contents_tagsCreateWithoutSaved_contentsInput[] | contents_tagsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutSaved_contentsInput | contents_tagsCreateOrConnectWithoutSaved_contentsInput[]
    createMany?: contents_tagsCreateManySaved_contentsInputEnvelope
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
  }

  export type notesCreateNestedManyWithoutSaved_contentsInput = {
    create?: XOR<notesCreateWithoutSaved_contentsInput, notesUncheckedCreateWithoutSaved_contentsInput> | notesCreateWithoutSaved_contentsInput[] | notesUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutSaved_contentsInput | notesCreateOrConnectWithoutSaved_contentsInput[]
    createMany?: notesCreateManySaved_contentsInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutSaved_contentsInput = {
    create?: XOR<usersCreateWithoutSaved_contentsInput, usersUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_contentsInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesCreateNestedOneWithoutSaved_contentsInput = {
    create?: XOR<workspacesCreateWithoutSaved_contentsInput, workspacesUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutSaved_contentsInput
    connect?: workspacesWhereUniqueInput
  }

  export type ai_insightsUncheckedCreateNestedOneWithoutSaved_contentsInput = {
    create?: XOR<ai_insightsCreateWithoutSaved_contentsInput, ai_insightsUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: ai_insightsCreateOrConnectWithoutSaved_contentsInput
    connect?: ai_insightsWhereUniqueInput
  }

  export type collection_itemsUncheckedCreateNestedManyWithoutSaved_contentsInput = {
    create?: XOR<collection_itemsCreateWithoutSaved_contentsInput, collection_itemsUncheckedCreateWithoutSaved_contentsInput> | collection_itemsCreateWithoutSaved_contentsInput[] | collection_itemsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutSaved_contentsInput | collection_itemsCreateOrConnectWithoutSaved_contentsInput[]
    createMany?: collection_itemsCreateManySaved_contentsInputEnvelope
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
  }

  export type contents_tagsUncheckedCreateNestedManyWithoutSaved_contentsInput = {
    create?: XOR<contents_tagsCreateWithoutSaved_contentsInput, contents_tagsUncheckedCreateWithoutSaved_contentsInput> | contents_tagsCreateWithoutSaved_contentsInput[] | contents_tagsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutSaved_contentsInput | contents_tagsCreateOrConnectWithoutSaved_contentsInput[]
    createMany?: contents_tagsCreateManySaved_contentsInputEnvelope
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
  }

  export type notesUncheckedCreateNestedManyWithoutSaved_contentsInput = {
    create?: XOR<notesCreateWithoutSaved_contentsInput, notesUncheckedCreateWithoutSaved_contentsInput> | notesCreateWithoutSaved_contentsInput[] | notesUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutSaved_contentsInput | notesCreateOrConnectWithoutSaved_contentsInput[]
    createMany?: notesCreateManySaved_contentsInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ai_insightsUpdateOneWithoutSaved_contentsNestedInput = {
    create?: XOR<ai_insightsCreateWithoutSaved_contentsInput, ai_insightsUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: ai_insightsCreateOrConnectWithoutSaved_contentsInput
    upsert?: ai_insightsUpsertWithoutSaved_contentsInput
    disconnect?: ai_insightsWhereInput | boolean
    delete?: ai_insightsWhereInput | boolean
    connect?: ai_insightsWhereUniqueInput
    update?: XOR<XOR<ai_insightsUpdateToOneWithWhereWithoutSaved_contentsInput, ai_insightsUpdateWithoutSaved_contentsInput>, ai_insightsUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type collection_itemsUpdateManyWithoutSaved_contentsNestedInput = {
    create?: XOR<collection_itemsCreateWithoutSaved_contentsInput, collection_itemsUncheckedCreateWithoutSaved_contentsInput> | collection_itemsCreateWithoutSaved_contentsInput[] | collection_itemsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutSaved_contentsInput | collection_itemsCreateOrConnectWithoutSaved_contentsInput[]
    upsert?: collection_itemsUpsertWithWhereUniqueWithoutSaved_contentsInput | collection_itemsUpsertWithWhereUniqueWithoutSaved_contentsInput[]
    createMany?: collection_itemsCreateManySaved_contentsInputEnvelope
    set?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    disconnect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    delete?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    update?: collection_itemsUpdateWithWhereUniqueWithoutSaved_contentsInput | collection_itemsUpdateWithWhereUniqueWithoutSaved_contentsInput[]
    updateMany?: collection_itemsUpdateManyWithWhereWithoutSaved_contentsInput | collection_itemsUpdateManyWithWhereWithoutSaved_contentsInput[]
    deleteMany?: collection_itemsScalarWhereInput | collection_itemsScalarWhereInput[]
  }

  export type contents_tagsUpdateManyWithoutSaved_contentsNestedInput = {
    create?: XOR<contents_tagsCreateWithoutSaved_contentsInput, contents_tagsUncheckedCreateWithoutSaved_contentsInput> | contents_tagsCreateWithoutSaved_contentsInput[] | contents_tagsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutSaved_contentsInput | contents_tagsCreateOrConnectWithoutSaved_contentsInput[]
    upsert?: contents_tagsUpsertWithWhereUniqueWithoutSaved_contentsInput | contents_tagsUpsertWithWhereUniqueWithoutSaved_contentsInput[]
    createMany?: contents_tagsCreateManySaved_contentsInputEnvelope
    set?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    disconnect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    delete?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    update?: contents_tagsUpdateWithWhereUniqueWithoutSaved_contentsInput | contents_tagsUpdateWithWhereUniqueWithoutSaved_contentsInput[]
    updateMany?: contents_tagsUpdateManyWithWhereWithoutSaved_contentsInput | contents_tagsUpdateManyWithWhereWithoutSaved_contentsInput[]
    deleteMany?: contents_tagsScalarWhereInput | contents_tagsScalarWhereInput[]
  }

  export type notesUpdateManyWithoutSaved_contentsNestedInput = {
    create?: XOR<notesCreateWithoutSaved_contentsInput, notesUncheckedCreateWithoutSaved_contentsInput> | notesCreateWithoutSaved_contentsInput[] | notesUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutSaved_contentsInput | notesCreateOrConnectWithoutSaved_contentsInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutSaved_contentsInput | notesUpsertWithWhereUniqueWithoutSaved_contentsInput[]
    createMany?: notesCreateManySaved_contentsInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutSaved_contentsInput | notesUpdateWithWhereUniqueWithoutSaved_contentsInput[]
    updateMany?: notesUpdateManyWithWhereWithoutSaved_contentsInput | notesUpdateManyWithWhereWithoutSaved_contentsInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutSaved_contentsNestedInput = {
    create?: XOR<usersCreateWithoutSaved_contentsInput, usersUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_contentsInput
    upsert?: usersUpsertWithoutSaved_contentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSaved_contentsInput, usersUpdateWithoutSaved_contentsInput>, usersUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type workspacesUpdateOneRequiredWithoutSaved_contentsNestedInput = {
    create?: XOR<workspacesCreateWithoutSaved_contentsInput, workspacesUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutSaved_contentsInput
    upsert?: workspacesUpsertWithoutSaved_contentsInput
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutSaved_contentsInput, workspacesUpdateWithoutSaved_contentsInput>, workspacesUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type ai_insightsUncheckedUpdateOneWithoutSaved_contentsNestedInput = {
    create?: XOR<ai_insightsCreateWithoutSaved_contentsInput, ai_insightsUncheckedCreateWithoutSaved_contentsInput>
    connectOrCreate?: ai_insightsCreateOrConnectWithoutSaved_contentsInput
    upsert?: ai_insightsUpsertWithoutSaved_contentsInput
    disconnect?: ai_insightsWhereInput | boolean
    delete?: ai_insightsWhereInput | boolean
    connect?: ai_insightsWhereUniqueInput
    update?: XOR<XOR<ai_insightsUpdateToOneWithWhereWithoutSaved_contentsInput, ai_insightsUpdateWithoutSaved_contentsInput>, ai_insightsUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type collection_itemsUncheckedUpdateManyWithoutSaved_contentsNestedInput = {
    create?: XOR<collection_itemsCreateWithoutSaved_contentsInput, collection_itemsUncheckedCreateWithoutSaved_contentsInput> | collection_itemsCreateWithoutSaved_contentsInput[] | collection_itemsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: collection_itemsCreateOrConnectWithoutSaved_contentsInput | collection_itemsCreateOrConnectWithoutSaved_contentsInput[]
    upsert?: collection_itemsUpsertWithWhereUniqueWithoutSaved_contentsInput | collection_itemsUpsertWithWhereUniqueWithoutSaved_contentsInput[]
    createMany?: collection_itemsCreateManySaved_contentsInputEnvelope
    set?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    disconnect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    delete?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    connect?: collection_itemsWhereUniqueInput | collection_itemsWhereUniqueInput[]
    update?: collection_itemsUpdateWithWhereUniqueWithoutSaved_contentsInput | collection_itemsUpdateWithWhereUniqueWithoutSaved_contentsInput[]
    updateMany?: collection_itemsUpdateManyWithWhereWithoutSaved_contentsInput | collection_itemsUpdateManyWithWhereWithoutSaved_contentsInput[]
    deleteMany?: collection_itemsScalarWhereInput | collection_itemsScalarWhereInput[]
  }

  export type contents_tagsUncheckedUpdateManyWithoutSaved_contentsNestedInput = {
    create?: XOR<contents_tagsCreateWithoutSaved_contentsInput, contents_tagsUncheckedCreateWithoutSaved_contentsInput> | contents_tagsCreateWithoutSaved_contentsInput[] | contents_tagsUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutSaved_contentsInput | contents_tagsCreateOrConnectWithoutSaved_contentsInput[]
    upsert?: contents_tagsUpsertWithWhereUniqueWithoutSaved_contentsInput | contents_tagsUpsertWithWhereUniqueWithoutSaved_contentsInput[]
    createMany?: contents_tagsCreateManySaved_contentsInputEnvelope
    set?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    disconnect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    delete?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    update?: contents_tagsUpdateWithWhereUniqueWithoutSaved_contentsInput | contents_tagsUpdateWithWhereUniqueWithoutSaved_contentsInput[]
    updateMany?: contents_tagsUpdateManyWithWhereWithoutSaved_contentsInput | contents_tagsUpdateManyWithWhereWithoutSaved_contentsInput[]
    deleteMany?: contents_tagsScalarWhereInput | contents_tagsScalarWhereInput[]
  }

  export type notesUncheckedUpdateManyWithoutSaved_contentsNestedInput = {
    create?: XOR<notesCreateWithoutSaved_contentsInput, notesUncheckedCreateWithoutSaved_contentsInput> | notesCreateWithoutSaved_contentsInput[] | notesUncheckedCreateWithoutSaved_contentsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutSaved_contentsInput | notesCreateOrConnectWithoutSaved_contentsInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutSaved_contentsInput | notesUpsertWithWhereUniqueWithoutSaved_contentsInput[]
    createMany?: notesCreateManySaved_contentsInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutSaved_contentsInput | notesUpdateWithWhereUniqueWithoutSaved_contentsInput[]
    updateMany?: notesUpdateManyWithWhereWithoutSaved_contentsInput | notesUpdateManyWithWhereWithoutSaved_contentsInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type contents_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<contents_tagsCreateWithoutTagsInput, contents_tagsUncheckedCreateWithoutTagsInput> | contents_tagsCreateWithoutTagsInput[] | contents_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutTagsInput | contents_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: contents_tagsCreateManyTagsInputEnvelope
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
  }

  export type workspacesCreateNestedOneWithoutTagsInput = {
    create?: XOR<workspacesCreateWithoutTagsInput, workspacesUncheckedCreateWithoutTagsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutTagsInput
    connect?: workspacesWhereUniqueInput
  }

  export type contents_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<contents_tagsCreateWithoutTagsInput, contents_tagsUncheckedCreateWithoutTagsInput> | contents_tagsCreateWithoutTagsInput[] | contents_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutTagsInput | contents_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: contents_tagsCreateManyTagsInputEnvelope
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
  }

  export type contents_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<contents_tagsCreateWithoutTagsInput, contents_tagsUncheckedCreateWithoutTagsInput> | contents_tagsCreateWithoutTagsInput[] | contents_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutTagsInput | contents_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: contents_tagsUpsertWithWhereUniqueWithoutTagsInput | contents_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: contents_tagsCreateManyTagsInputEnvelope
    set?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    disconnect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    delete?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    update?: contents_tagsUpdateWithWhereUniqueWithoutTagsInput | contents_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: contents_tagsUpdateManyWithWhereWithoutTagsInput | contents_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: contents_tagsScalarWhereInput | contents_tagsScalarWhereInput[]
  }

  export type workspacesUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<workspacesCreateWithoutTagsInput, workspacesUncheckedCreateWithoutTagsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutTagsInput
    upsert?: workspacesUpsertWithoutTagsInput
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutTagsInput, workspacesUpdateWithoutTagsInput>, workspacesUncheckedUpdateWithoutTagsInput>
  }

  export type contents_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<contents_tagsCreateWithoutTagsInput, contents_tagsUncheckedCreateWithoutTagsInput> | contents_tagsCreateWithoutTagsInput[] | contents_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: contents_tagsCreateOrConnectWithoutTagsInput | contents_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: contents_tagsUpsertWithWhereUniqueWithoutTagsInput | contents_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: contents_tagsCreateManyTagsInputEnvelope
    set?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    disconnect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    delete?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    connect?: contents_tagsWhereUniqueInput | contents_tagsWhereUniqueInput[]
    update?: contents_tagsUpdateWithWhereUniqueWithoutTagsInput | contents_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: contents_tagsUpdateManyWithWhereWithoutTagsInput | contents_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: contents_tagsScalarWhereInput | contents_tagsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUsage_logsInput = {
    create?: XOR<usersCreateWithoutUsage_logsInput, usersUncheckedCreateWithoutUsage_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsage_logsInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesCreateNestedOneWithoutUsage_logsInput = {
    create?: XOR<workspacesCreateWithoutUsage_logsInput, workspacesUncheckedCreateWithoutUsage_logsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutUsage_logsInput
    connect?: workspacesWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type usersUpdateOneRequiredWithoutUsage_logsNestedInput = {
    create?: XOR<usersCreateWithoutUsage_logsInput, usersUncheckedCreateWithoutUsage_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsage_logsInput
    upsert?: usersUpsertWithoutUsage_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsage_logsInput, usersUpdateWithoutUsage_logsInput>, usersUncheckedUpdateWithoutUsage_logsInput>
  }

  export type workspacesUpdateOneRequiredWithoutUsage_logsNestedInput = {
    create?: XOR<workspacesCreateWithoutUsage_logsInput, workspacesUncheckedCreateWithoutUsage_logsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutUsage_logsInput
    upsert?: workspacesUpsertWithoutUsage_logsInput
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutUsage_logsInput, workspacesUpdateWithoutUsage_logsInput>, workspacesUncheckedUpdateWithoutUsage_logsInput>
  }

  export type collectionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<collectionsCreateWithoutUsersInput, collectionsUncheckedCreateWithoutUsersInput> | collectionsCreateWithoutUsersInput[] | collectionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutUsersInput | collectionsCreateOrConnectWithoutUsersInput[]
    createMany?: collectionsCreateManyUsersInputEnvelope
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
  }

  export type saved_contentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_contentsCreateWithoutUsersInput, saved_contentsUncheckedCreateWithoutUsersInput> | saved_contentsCreateWithoutUsersInput[] | saved_contentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutUsersInput | saved_contentsCreateOrConnectWithoutUsersInput[]
    createMany?: saved_contentsCreateManyUsersInputEnvelope
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
  }

  export type usage_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<usage_logsCreateWithoutUsersInput, usage_logsUncheckedCreateWithoutUsersInput> | usage_logsCreateWithoutUsersInput[] | usage_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutUsersInput | usage_logsCreateOrConnectWithoutUsersInput[]
    createMany?: usage_logsCreateManyUsersInputEnvelope
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
  }

  export type workspace_membersCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type workspacesCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type collectionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<collectionsCreateWithoutUsersInput, collectionsUncheckedCreateWithoutUsersInput> | collectionsCreateWithoutUsersInput[] | collectionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutUsersInput | collectionsCreateOrConnectWithoutUsersInput[]
    createMany?: collectionsCreateManyUsersInputEnvelope
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
  }

  export type saved_contentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_contentsCreateWithoutUsersInput, saved_contentsUncheckedCreateWithoutUsersInput> | saved_contentsCreateWithoutUsersInput[] | saved_contentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutUsersInput | saved_contentsCreateOrConnectWithoutUsersInput[]
    createMany?: saved_contentsCreateManyUsersInputEnvelope
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
  }

  export type usage_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<usage_logsCreateWithoutUsersInput, usage_logsUncheckedCreateWithoutUsersInput> | usage_logsCreateWithoutUsersInput[] | usage_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutUsersInput | usage_logsCreateOrConnectWithoutUsersInput[]
    createMany?: usage_logsCreateManyUsersInputEnvelope
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
  }

  export type workspace_membersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type workspacesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type Enumuser_planFieldUpdateOperationsInput = {
    set?: $Enums.user_plan
  }

  export type collectionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<collectionsCreateWithoutUsersInput, collectionsUncheckedCreateWithoutUsersInput> | collectionsCreateWithoutUsersInput[] | collectionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutUsersInput | collectionsCreateOrConnectWithoutUsersInput[]
    upsert?: collectionsUpsertWithWhereUniqueWithoutUsersInput | collectionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: collectionsCreateManyUsersInputEnvelope
    set?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    disconnect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    delete?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    update?: collectionsUpdateWithWhereUniqueWithoutUsersInput | collectionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: collectionsUpdateManyWithWhereWithoutUsersInput | collectionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: collectionsScalarWhereInput | collectionsScalarWhereInput[]
  }

  export type saved_contentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_contentsCreateWithoutUsersInput, saved_contentsUncheckedCreateWithoutUsersInput> | saved_contentsCreateWithoutUsersInput[] | saved_contentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutUsersInput | saved_contentsCreateOrConnectWithoutUsersInput[]
    upsert?: saved_contentsUpsertWithWhereUniqueWithoutUsersInput | saved_contentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_contentsCreateManyUsersInputEnvelope
    set?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    disconnect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    delete?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    update?: saved_contentsUpdateWithWhereUniqueWithoutUsersInput | saved_contentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_contentsUpdateManyWithWhereWithoutUsersInput | saved_contentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_contentsScalarWhereInput | saved_contentsScalarWhereInput[]
  }

  export type usage_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usage_logsCreateWithoutUsersInput, usage_logsUncheckedCreateWithoutUsersInput> | usage_logsCreateWithoutUsersInput[] | usage_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutUsersInput | usage_logsCreateOrConnectWithoutUsersInput[]
    upsert?: usage_logsUpsertWithWhereUniqueWithoutUsersInput | usage_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usage_logsCreateManyUsersInputEnvelope
    set?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    disconnect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    delete?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    update?: usage_logsUpdateWithWhereUniqueWithoutUsersInput | usage_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usage_logsUpdateManyWithWhereWithoutUsersInput | usage_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usage_logsScalarWhereInput | usage_logsScalarWhereInput[]
  }

  export type workspace_membersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutUsersInput | workspace_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutUsersInput | workspace_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutUsersInput | workspace_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type workspacesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutUsersInput | workspacesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutUsersInput | workspacesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutUsersInput | workspacesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
  }

  export type collectionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<collectionsCreateWithoutUsersInput, collectionsUncheckedCreateWithoutUsersInput> | collectionsCreateWithoutUsersInput[] | collectionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutUsersInput | collectionsCreateOrConnectWithoutUsersInput[]
    upsert?: collectionsUpsertWithWhereUniqueWithoutUsersInput | collectionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: collectionsCreateManyUsersInputEnvelope
    set?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    disconnect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    delete?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    update?: collectionsUpdateWithWhereUniqueWithoutUsersInput | collectionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: collectionsUpdateManyWithWhereWithoutUsersInput | collectionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: collectionsScalarWhereInput | collectionsScalarWhereInput[]
  }

  export type saved_contentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_contentsCreateWithoutUsersInput, saved_contentsUncheckedCreateWithoutUsersInput> | saved_contentsCreateWithoutUsersInput[] | saved_contentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutUsersInput | saved_contentsCreateOrConnectWithoutUsersInput[]
    upsert?: saved_contentsUpsertWithWhereUniqueWithoutUsersInput | saved_contentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_contentsCreateManyUsersInputEnvelope
    set?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    disconnect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    delete?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    update?: saved_contentsUpdateWithWhereUniqueWithoutUsersInput | saved_contentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_contentsUpdateManyWithWhereWithoutUsersInput | saved_contentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_contentsScalarWhereInput | saved_contentsScalarWhereInput[]
  }

  export type usage_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<usage_logsCreateWithoutUsersInput, usage_logsUncheckedCreateWithoutUsersInput> | usage_logsCreateWithoutUsersInput[] | usage_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutUsersInput | usage_logsCreateOrConnectWithoutUsersInput[]
    upsert?: usage_logsUpsertWithWhereUniqueWithoutUsersInput | usage_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: usage_logsCreateManyUsersInputEnvelope
    set?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    disconnect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    delete?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    update?: usage_logsUpdateWithWhereUniqueWithoutUsersInput | usage_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: usage_logsUpdateManyWithWhereWithoutUsersInput | usage_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: usage_logsScalarWhereInput | usage_logsScalarWhereInput[]
  }

  export type workspace_membersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutUsersInput | workspace_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutUsersInput | workspace_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutUsersInput | workspace_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type workspacesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutUsersInput | workspacesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutUsersInput | workspacesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutUsersInput | workspacesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutWorkspace_membersInput = {
    create?: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspace_membersInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesCreateNestedOneWithoutWorkspace_membersInput = {
    create?: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutWorkspace_membersInput
    connect?: workspacesWhereUniqueInput
  }

  export type Enumworkspace_roleFieldUpdateOperationsInput = {
    set?: $Enums.workspace_role
  }

  export type usersUpdateOneRequiredWithoutWorkspace_membersNestedInput = {
    create?: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspace_membersInput
    upsert?: usersUpsertWithoutWorkspace_membersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkspace_membersInput, usersUpdateWithoutWorkspace_membersInput>, usersUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type workspacesUpdateOneRequiredWithoutWorkspace_membersNestedInput = {
    create?: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutWorkspace_membersInput
    upsert?: workspacesUpsertWithoutWorkspace_membersInput
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutWorkspace_membersInput, workspacesUpdateWithoutWorkspace_membersInput>, workspacesUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type collectionsCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<collectionsCreateWithoutWorkspacesInput, collectionsUncheckedCreateWithoutWorkspacesInput> | collectionsCreateWithoutWorkspacesInput[] | collectionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutWorkspacesInput | collectionsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: collectionsCreateManyWorkspacesInputEnvelope
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
  }

  export type saved_contentsCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<saved_contentsCreateWithoutWorkspacesInput, saved_contentsUncheckedCreateWithoutWorkspacesInput> | saved_contentsCreateWithoutWorkspacesInput[] | saved_contentsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutWorkspacesInput | saved_contentsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: saved_contentsCreateManyWorkspacesInputEnvelope
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
  }

  export type tagsCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<tagsCreateWithoutWorkspacesInput, tagsUncheckedCreateWithoutWorkspacesInput> | tagsCreateWithoutWorkspacesInput[] | tagsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutWorkspacesInput | tagsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: tagsCreateManyWorkspacesInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type usage_logsCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<usage_logsCreateWithoutWorkspacesInput, usage_logsUncheckedCreateWithoutWorkspacesInput> | usage_logsCreateWithoutWorkspacesInput[] | usage_logsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutWorkspacesInput | usage_logsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: usage_logsCreateManyWorkspacesInputEnvelope
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
  }

  export type workspace_membersCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput
    connect?: usersWhereUniqueInput
  }

  export type collectionsUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<collectionsCreateWithoutWorkspacesInput, collectionsUncheckedCreateWithoutWorkspacesInput> | collectionsCreateWithoutWorkspacesInput[] | collectionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutWorkspacesInput | collectionsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: collectionsCreateManyWorkspacesInputEnvelope
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
  }

  export type saved_contentsUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<saved_contentsCreateWithoutWorkspacesInput, saved_contentsUncheckedCreateWithoutWorkspacesInput> | saved_contentsCreateWithoutWorkspacesInput[] | saved_contentsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutWorkspacesInput | saved_contentsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: saved_contentsCreateManyWorkspacesInputEnvelope
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
  }

  export type tagsUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<tagsCreateWithoutWorkspacesInput, tagsUncheckedCreateWithoutWorkspacesInput> | tagsCreateWithoutWorkspacesInput[] | tagsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutWorkspacesInput | tagsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: tagsCreateManyWorkspacesInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type usage_logsUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<usage_logsCreateWithoutWorkspacesInput, usage_logsUncheckedCreateWithoutWorkspacesInput> | usage_logsCreateWithoutWorkspacesInput[] | usage_logsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutWorkspacesInput | usage_logsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: usage_logsCreateManyWorkspacesInputEnvelope
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
  }

  export type workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type collectionsUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<collectionsCreateWithoutWorkspacesInput, collectionsUncheckedCreateWithoutWorkspacesInput> | collectionsCreateWithoutWorkspacesInput[] | collectionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutWorkspacesInput | collectionsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: collectionsUpsertWithWhereUniqueWithoutWorkspacesInput | collectionsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: collectionsCreateManyWorkspacesInputEnvelope
    set?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    disconnect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    delete?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    update?: collectionsUpdateWithWhereUniqueWithoutWorkspacesInput | collectionsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: collectionsUpdateManyWithWhereWithoutWorkspacesInput | collectionsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: collectionsScalarWhereInput | collectionsScalarWhereInput[]
  }

  export type saved_contentsUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<saved_contentsCreateWithoutWorkspacesInput, saved_contentsUncheckedCreateWithoutWorkspacesInput> | saved_contentsCreateWithoutWorkspacesInput[] | saved_contentsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutWorkspacesInput | saved_contentsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: saved_contentsUpsertWithWhereUniqueWithoutWorkspacesInput | saved_contentsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: saved_contentsCreateManyWorkspacesInputEnvelope
    set?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    disconnect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    delete?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    update?: saved_contentsUpdateWithWhereUniqueWithoutWorkspacesInput | saved_contentsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: saved_contentsUpdateManyWithWhereWithoutWorkspacesInput | saved_contentsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: saved_contentsScalarWhereInput | saved_contentsScalarWhereInput[]
  }

  export type tagsUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<tagsCreateWithoutWorkspacesInput, tagsUncheckedCreateWithoutWorkspacesInput> | tagsCreateWithoutWorkspacesInput[] | tagsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutWorkspacesInput | tagsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutWorkspacesInput | tagsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: tagsCreateManyWorkspacesInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutWorkspacesInput | tagsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutWorkspacesInput | tagsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type usage_logsUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<usage_logsCreateWithoutWorkspacesInput, usage_logsUncheckedCreateWithoutWorkspacesInput> | usage_logsCreateWithoutWorkspacesInput[] | usage_logsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutWorkspacesInput | usage_logsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: usage_logsUpsertWithWhereUniqueWithoutWorkspacesInput | usage_logsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: usage_logsCreateManyWorkspacesInputEnvelope
    set?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    disconnect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    delete?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    update?: usage_logsUpdateWithWhereUniqueWithoutWorkspacesInput | usage_logsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: usage_logsUpdateManyWithWhereWithoutWorkspacesInput | usage_logsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: usage_logsScalarWhereInput | usage_logsScalarWhereInput[]
  }

  export type workspace_membersUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutWorkspacesInput | workspace_membersUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput
    upsert?: usersUpsertWithoutWorkspacesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkspacesInput, usersUpdateWithoutWorkspacesInput>, usersUncheckedUpdateWithoutWorkspacesInput>
  }

  export type collectionsUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<collectionsCreateWithoutWorkspacesInput, collectionsUncheckedCreateWithoutWorkspacesInput> | collectionsCreateWithoutWorkspacesInput[] | collectionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: collectionsCreateOrConnectWithoutWorkspacesInput | collectionsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: collectionsUpsertWithWhereUniqueWithoutWorkspacesInput | collectionsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: collectionsCreateManyWorkspacesInputEnvelope
    set?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    disconnect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    delete?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    connect?: collectionsWhereUniqueInput | collectionsWhereUniqueInput[]
    update?: collectionsUpdateWithWhereUniqueWithoutWorkspacesInput | collectionsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: collectionsUpdateManyWithWhereWithoutWorkspacesInput | collectionsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: collectionsScalarWhereInput | collectionsScalarWhereInput[]
  }

  export type saved_contentsUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<saved_contentsCreateWithoutWorkspacesInput, saved_contentsUncheckedCreateWithoutWorkspacesInput> | saved_contentsCreateWithoutWorkspacesInput[] | saved_contentsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: saved_contentsCreateOrConnectWithoutWorkspacesInput | saved_contentsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: saved_contentsUpsertWithWhereUniqueWithoutWorkspacesInput | saved_contentsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: saved_contentsCreateManyWorkspacesInputEnvelope
    set?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    disconnect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    delete?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    connect?: saved_contentsWhereUniqueInput | saved_contentsWhereUniqueInput[]
    update?: saved_contentsUpdateWithWhereUniqueWithoutWorkspacesInput | saved_contentsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: saved_contentsUpdateManyWithWhereWithoutWorkspacesInput | saved_contentsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: saved_contentsScalarWhereInput | saved_contentsScalarWhereInput[]
  }

  export type tagsUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<tagsCreateWithoutWorkspacesInput, tagsUncheckedCreateWithoutWorkspacesInput> | tagsCreateWithoutWorkspacesInput[] | tagsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutWorkspacesInput | tagsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutWorkspacesInput | tagsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: tagsCreateManyWorkspacesInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutWorkspacesInput | tagsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutWorkspacesInput | tagsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type usage_logsUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<usage_logsCreateWithoutWorkspacesInput, usage_logsUncheckedCreateWithoutWorkspacesInput> | usage_logsCreateWithoutWorkspacesInput[] | usage_logsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usage_logsCreateOrConnectWithoutWorkspacesInput | usage_logsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: usage_logsUpsertWithWhereUniqueWithoutWorkspacesInput | usage_logsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: usage_logsCreateManyWorkspacesInputEnvelope
    set?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    disconnect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    delete?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    connect?: usage_logsWhereUniqueInput | usage_logsWhereUniqueInput[]
    update?: usage_logsUpdateWithWhereUniqueWithoutWorkspacesInput | usage_logsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: usage_logsUpdateManyWithWhereWithoutWorkspacesInput | usage_logsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: usage_logsScalarWhereInput | usage_logsScalarWhereInput[]
  }

  export type workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutWorkspacesInput | workspace_membersUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumuser_planFilter<$PrismaModel = never> = {
    equals?: $Enums.user_plan | Enumuser_planFieldRefInput<$PrismaModel>
    in?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_planFilter<$PrismaModel> | $Enums.user_plan
  }

  export type NestedEnumuser_planWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_plan | Enumuser_planFieldRefInput<$PrismaModel>
    in?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_plan[] | ListEnumuser_planFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_planWithAggregatesFilter<$PrismaModel> | $Enums.user_plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_planFilter<$PrismaModel>
    _max?: NestedEnumuser_planFilter<$PrismaModel>
  }

  export type NestedEnumworkspace_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.workspace_role | Enumworkspace_roleFieldRefInput<$PrismaModel>
    in?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumworkspace_roleFilter<$PrismaModel> | $Enums.workspace_role
  }

  export type NestedEnumworkspace_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.workspace_role | Enumworkspace_roleFieldRefInput<$PrismaModel>
    in?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.workspace_role[] | ListEnumworkspace_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumworkspace_roleWithAggregatesFilter<$PrismaModel> | $Enums.workspace_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumworkspace_roleFilter<$PrismaModel>
    _max?: NestedEnumworkspace_roleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type saved_contentsCreateWithoutAi_insightsInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    collection_items?: collection_itemsCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsCreateNestedManyWithoutSaved_contentsInput
    notes?: notesCreateNestedManyWithoutSaved_contentsInput
    users: usersCreateNestedOneWithoutSaved_contentsInput
    workspaces: workspacesCreateNestedOneWithoutSaved_contentsInput
  }

  export type saved_contentsUncheckedCreateWithoutAi_insightsInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutSaved_contentsInput
    notes?: notesUncheckedCreateNestedManyWithoutSaved_contentsInput
  }

  export type saved_contentsCreateOrConnectWithoutAi_insightsInput = {
    where: saved_contentsWhereUniqueInput
    create: XOR<saved_contentsCreateWithoutAi_insightsInput, saved_contentsUncheckedCreateWithoutAi_insightsInput>
  }

  export type saved_contentsUpsertWithoutAi_insightsInput = {
    update: XOR<saved_contentsUpdateWithoutAi_insightsInput, saved_contentsUncheckedUpdateWithoutAi_insightsInput>
    create: XOR<saved_contentsCreateWithoutAi_insightsInput, saved_contentsUncheckedCreateWithoutAi_insightsInput>
    where?: saved_contentsWhereInput
  }

  export type saved_contentsUpdateToOneWithWhereWithoutAi_insightsInput = {
    where?: saved_contentsWhereInput
    data: XOR<saved_contentsUpdateWithoutAi_insightsInput, saved_contentsUncheckedUpdateWithoutAi_insightsInput>
  }

  export type saved_contentsUpdateWithoutAi_insightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUpdateManyWithoutSaved_contentsNestedInput
    users?: usersUpdateOneRequiredWithoutSaved_contentsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateWithoutAi_insightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUncheckedUpdateManyWithoutSaved_contentsNestedInput
  }

  export type collectionsCreateWithoutCollection_itemsInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutCollectionsInput
    workspaces: workspacesCreateNestedOneWithoutCollectionsInput
  }

  export type collectionsUncheckedCreateWithoutCollection_itemsInput = {
    id?: string
    workspace_id: string
    name: string
    description: string
    created_by: string
    created_at?: Date | string
  }

  export type collectionsCreateOrConnectWithoutCollection_itemsInput = {
    where: collectionsWhereUniqueInput
    create: XOR<collectionsCreateWithoutCollection_itemsInput, collectionsUncheckedCreateWithoutCollection_itemsInput>
  }

  export type saved_contentsCreateWithoutCollection_itemsInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsCreateNestedOneWithoutSaved_contentsInput
    contents_tags?: contents_tagsCreateNestedManyWithoutSaved_contentsInput
    notes?: notesCreateNestedManyWithoutSaved_contentsInput
    users: usersCreateNestedOneWithoutSaved_contentsInput
    workspaces: workspacesCreateNestedOneWithoutSaved_contentsInput
  }

  export type saved_contentsUncheckedCreateWithoutCollection_itemsInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsUncheckedCreateNestedOneWithoutSaved_contentsInput
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutSaved_contentsInput
    notes?: notesUncheckedCreateNestedManyWithoutSaved_contentsInput
  }

  export type saved_contentsCreateOrConnectWithoutCollection_itemsInput = {
    where: saved_contentsWhereUniqueInput
    create: XOR<saved_contentsCreateWithoutCollection_itemsInput, saved_contentsUncheckedCreateWithoutCollection_itemsInput>
  }

  export type collectionsUpsertWithoutCollection_itemsInput = {
    update: XOR<collectionsUpdateWithoutCollection_itemsInput, collectionsUncheckedUpdateWithoutCollection_itemsInput>
    create: XOR<collectionsCreateWithoutCollection_itemsInput, collectionsUncheckedCreateWithoutCollection_itemsInput>
    where?: collectionsWhereInput
  }

  export type collectionsUpdateToOneWithWhereWithoutCollection_itemsInput = {
    where?: collectionsWhereInput
    data: XOR<collectionsUpdateWithoutCollection_itemsInput, collectionsUncheckedUpdateWithoutCollection_itemsInput>
  }

  export type collectionsUpdateWithoutCollection_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutCollectionsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type collectionsUncheckedUpdateWithoutCollection_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_contentsUpsertWithoutCollection_itemsInput = {
    update: XOR<saved_contentsUpdateWithoutCollection_itemsInput, saved_contentsUncheckedUpdateWithoutCollection_itemsInput>
    create: XOR<saved_contentsCreateWithoutCollection_itemsInput, saved_contentsUncheckedCreateWithoutCollection_itemsInput>
    where?: saved_contentsWhereInput
  }

  export type saved_contentsUpdateToOneWithWhereWithoutCollection_itemsInput = {
    where?: saved_contentsWhereInput
    data: XOR<saved_contentsUpdateWithoutCollection_itemsInput, saved_contentsUncheckedUpdateWithoutCollection_itemsInput>
  }

  export type saved_contentsUpdateWithoutCollection_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUpdateOneWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUpdateManyWithoutSaved_contentsNestedInput
    users?: usersUpdateOneRequiredWithoutSaved_contentsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateWithoutCollection_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUncheckedUpdateOneWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUncheckedUpdateManyWithoutSaved_contentsNestedInput
  }

  export type collection_itemsCreateWithoutCollectionsInput = {
    id?: string
    saved_contents: saved_contentsCreateNestedOneWithoutCollection_itemsInput
  }

  export type collection_itemsUncheckedCreateWithoutCollectionsInput = {
    id?: string
    content_id: string
  }

  export type collection_itemsCreateOrConnectWithoutCollectionsInput = {
    where: collection_itemsWhereUniqueInput
    create: XOR<collection_itemsCreateWithoutCollectionsInput, collection_itemsUncheckedCreateWithoutCollectionsInput>
  }

  export type collection_itemsCreateManyCollectionsInputEnvelope = {
    data: collection_itemsCreateManyCollectionsInput | collection_itemsCreateManyCollectionsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCollectionsInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    saved_contents?: saved_contentsCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCollectionsInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCollectionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCollectionsInput, usersUncheckedCreateWithoutCollectionsInput>
  }

  export type workspacesCreateWithoutCollectionsInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    saved_contents?: saved_contentsCreateNestedManyWithoutWorkspacesInput
    tags?: tagsCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users: usersCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutCollectionsInput = {
    id?: string
    owner_id: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutWorkspacesInput
    tags?: tagsUncheckedCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutCollectionsInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutCollectionsInput, workspacesUncheckedCreateWithoutCollectionsInput>
  }

  export type collection_itemsUpsertWithWhereUniqueWithoutCollectionsInput = {
    where: collection_itemsWhereUniqueInput
    update: XOR<collection_itemsUpdateWithoutCollectionsInput, collection_itemsUncheckedUpdateWithoutCollectionsInput>
    create: XOR<collection_itemsCreateWithoutCollectionsInput, collection_itemsUncheckedCreateWithoutCollectionsInput>
  }

  export type collection_itemsUpdateWithWhereUniqueWithoutCollectionsInput = {
    where: collection_itemsWhereUniqueInput
    data: XOR<collection_itemsUpdateWithoutCollectionsInput, collection_itemsUncheckedUpdateWithoutCollectionsInput>
  }

  export type collection_itemsUpdateManyWithWhereWithoutCollectionsInput = {
    where: collection_itemsScalarWhereInput
    data: XOR<collection_itemsUpdateManyMutationInput, collection_itemsUncheckedUpdateManyWithoutCollectionsInput>
  }

  export type collection_itemsScalarWhereInput = {
    AND?: collection_itemsScalarWhereInput | collection_itemsScalarWhereInput[]
    OR?: collection_itemsScalarWhereInput[]
    NOT?: collection_itemsScalarWhereInput | collection_itemsScalarWhereInput[]
    id?: UuidFilter<"collection_items"> | string
    content_id?: UuidFilter<"collection_items"> | string
    collection_id?: UuidFilter<"collection_items"> | string
  }

  export type usersUpsertWithoutCollectionsInput = {
    update: XOR<usersUpdateWithoutCollectionsInput, usersUncheckedUpdateWithoutCollectionsInput>
    create: XOR<usersCreateWithoutCollectionsInput, usersUncheckedCreateWithoutCollectionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCollectionsInput, usersUncheckedUpdateWithoutCollectionsInput>
  }

  export type usersUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    saved_contents?: saved_contentsUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workspacesUpsertWithoutCollectionsInput = {
    update: XOR<workspacesUpdateWithoutCollectionsInput, workspacesUncheckedUpdateWithoutCollectionsInput>
    create: XOR<workspacesCreateWithoutCollectionsInput, workspacesUncheckedCreateWithoutCollectionsInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutCollectionsInput, workspacesUncheckedUpdateWithoutCollectionsInput>
  }

  export type workspacesUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_contents?: saved_contentsUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUncheckedUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type saved_contentsCreateWithoutContents_tagsInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsCreateNestedManyWithoutSaved_contentsInput
    notes?: notesCreateNestedManyWithoutSaved_contentsInput
    users: usersCreateNestedOneWithoutSaved_contentsInput
    workspaces: workspacesCreateNestedOneWithoutSaved_contentsInput
  }

  export type saved_contentsUncheckedCreateWithoutContents_tagsInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsUncheckedCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutSaved_contentsInput
    notes?: notesUncheckedCreateNestedManyWithoutSaved_contentsInput
  }

  export type saved_contentsCreateOrConnectWithoutContents_tagsInput = {
    where: saved_contentsWhereUniqueInput
    create: XOR<saved_contentsCreateWithoutContents_tagsInput, saved_contentsUncheckedCreateWithoutContents_tagsInput>
  }

  export type tagsCreateWithoutContents_tagsInput = {
    id?: string
    name: string
    type: string
    workspaces: workspacesCreateNestedOneWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutContents_tagsInput = {
    id?: string
    workspace_id: string
    name: string
    type: string
  }

  export type tagsCreateOrConnectWithoutContents_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutContents_tagsInput, tagsUncheckedCreateWithoutContents_tagsInput>
  }

  export type saved_contentsUpsertWithoutContents_tagsInput = {
    update: XOR<saved_contentsUpdateWithoutContents_tagsInput, saved_contentsUncheckedUpdateWithoutContents_tagsInput>
    create: XOR<saved_contentsCreateWithoutContents_tagsInput, saved_contentsUncheckedCreateWithoutContents_tagsInput>
    where?: saved_contentsWhereInput
  }

  export type saved_contentsUpdateToOneWithWhereWithoutContents_tagsInput = {
    where?: saved_contentsWhereInput
    data: XOR<saved_contentsUpdateWithoutContents_tagsInput, saved_contentsUncheckedUpdateWithoutContents_tagsInput>
  }

  export type saved_contentsUpdateWithoutContents_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUpdateManyWithoutSaved_contentsNestedInput
    users?: usersUpdateOneRequiredWithoutSaved_contentsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateWithoutContents_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUncheckedUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUncheckedUpdateManyWithoutSaved_contentsNestedInput
  }

  export type tagsUpsertWithoutContents_tagsInput = {
    update: XOR<tagsUpdateWithoutContents_tagsInput, tagsUncheckedUpdateWithoutContents_tagsInput>
    create: XOR<tagsCreateWithoutContents_tagsInput, tagsUncheckedCreateWithoutContents_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutContents_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutContents_tagsInput, tagsUncheckedUpdateWithoutContents_tagsInput>
  }

  export type tagsUpdateWithoutContents_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    workspaces?: workspacesUpdateOneRequiredWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutContents_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type saved_contentsCreateWithoutNotesInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsCreateNestedManyWithoutSaved_contentsInput
    users: usersCreateNestedOneWithoutSaved_contentsInput
    workspaces: workspacesCreateNestedOneWithoutSaved_contentsInput
  }

  export type saved_contentsUncheckedCreateWithoutNotesInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsUncheckedCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutSaved_contentsInput
  }

  export type saved_contentsCreateOrConnectWithoutNotesInput = {
    where: saved_contentsWhereUniqueInput
    create: XOR<saved_contentsCreateWithoutNotesInput, saved_contentsUncheckedCreateWithoutNotesInput>
  }

  export type saved_contentsUpsertWithoutNotesInput = {
    update: XOR<saved_contentsUpdateWithoutNotesInput, saved_contentsUncheckedUpdateWithoutNotesInput>
    create: XOR<saved_contentsCreateWithoutNotesInput, saved_contentsUncheckedCreateWithoutNotesInput>
    where?: saved_contentsWhereInput
  }

  export type saved_contentsUpdateToOneWithWhereWithoutNotesInput = {
    where?: saved_contentsWhereInput
    data: XOR<saved_contentsUpdateWithoutNotesInput, saved_contentsUncheckedUpdateWithoutNotesInput>
  }

  export type saved_contentsUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUpdateManyWithoutSaved_contentsNestedInput
    users?: usersUpdateOneRequiredWithoutSaved_contentsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUncheckedUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutSaved_contentsNestedInput
  }

  export type ai_insightsCreateWithoutSaved_contentsInput = {
    id?: string
    summary: string
    hook: JsonNullValueInput | InputJsonValue
    format: JsonNullValueInput | InputJsonValue
    angle: JsonNullValueInput | InputJsonValue
    idea_suggestions: JsonNullValueInput | InputJsonValue
    confidence: number
    raw_analysis: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ai_insightsUncheckedCreateWithoutSaved_contentsInput = {
    id?: string
    summary: string
    hook: JsonNullValueInput | InputJsonValue
    format: JsonNullValueInput | InputJsonValue
    angle: JsonNullValueInput | InputJsonValue
    idea_suggestions: JsonNullValueInput | InputJsonValue
    confidence: number
    raw_analysis: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ai_insightsCreateOrConnectWithoutSaved_contentsInput = {
    where: ai_insightsWhereUniqueInput
    create: XOR<ai_insightsCreateWithoutSaved_contentsInput, ai_insightsUncheckedCreateWithoutSaved_contentsInput>
  }

  export type collection_itemsCreateWithoutSaved_contentsInput = {
    id?: string
    collections: collectionsCreateNestedOneWithoutCollection_itemsInput
  }

  export type collection_itemsUncheckedCreateWithoutSaved_contentsInput = {
    id?: string
    collection_id: string
  }

  export type collection_itemsCreateOrConnectWithoutSaved_contentsInput = {
    where: collection_itemsWhereUniqueInput
    create: XOR<collection_itemsCreateWithoutSaved_contentsInput, collection_itemsUncheckedCreateWithoutSaved_contentsInput>
  }

  export type collection_itemsCreateManySaved_contentsInputEnvelope = {
    data: collection_itemsCreateManySaved_contentsInput | collection_itemsCreateManySaved_contentsInput[]
    skipDuplicates?: boolean
  }

  export type contents_tagsCreateWithoutSaved_contentsInput = {
    id?: string
    tags: tagsCreateNestedOneWithoutContents_tagsInput
  }

  export type contents_tagsUncheckedCreateWithoutSaved_contentsInput = {
    id?: string
    tag_id: string
  }

  export type contents_tagsCreateOrConnectWithoutSaved_contentsInput = {
    where: contents_tagsWhereUniqueInput
    create: XOR<contents_tagsCreateWithoutSaved_contentsInput, contents_tagsUncheckedCreateWithoutSaved_contentsInput>
  }

  export type contents_tagsCreateManySaved_contentsInputEnvelope = {
    data: contents_tagsCreateManySaved_contentsInput | contents_tagsCreateManySaved_contentsInput[]
    skipDuplicates?: boolean
  }

  export type notesCreateWithoutSaved_contentsInput = {
    id?: string
    text: string
    created_at?: Date | string
  }

  export type notesUncheckedCreateWithoutSaved_contentsInput = {
    id?: string
    text: string
    created_at?: Date | string
  }

  export type notesCreateOrConnectWithoutSaved_contentsInput = {
    where: notesWhereUniqueInput
    create: XOR<notesCreateWithoutSaved_contentsInput, notesUncheckedCreateWithoutSaved_contentsInput>
  }

  export type notesCreateManySaved_contentsInputEnvelope = {
    data: notesCreateManySaved_contentsInput | notesCreateManySaved_contentsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutSaved_contentsInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSaved_contentsInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsUncheckedCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSaved_contentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSaved_contentsInput, usersUncheckedCreateWithoutSaved_contentsInput>
  }

  export type workspacesCreateWithoutSaved_contentsInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsCreateNestedManyWithoutWorkspacesInput
    tags?: tagsCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users: usersCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutSaved_contentsInput = {
    id?: string
    owner_id: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsUncheckedCreateNestedManyWithoutWorkspacesInput
    tags?: tagsUncheckedCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutSaved_contentsInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutSaved_contentsInput, workspacesUncheckedCreateWithoutSaved_contentsInput>
  }

  export type ai_insightsUpsertWithoutSaved_contentsInput = {
    update: XOR<ai_insightsUpdateWithoutSaved_contentsInput, ai_insightsUncheckedUpdateWithoutSaved_contentsInput>
    create: XOR<ai_insightsCreateWithoutSaved_contentsInput, ai_insightsUncheckedCreateWithoutSaved_contentsInput>
    where?: ai_insightsWhereInput
  }

  export type ai_insightsUpdateToOneWithWhereWithoutSaved_contentsInput = {
    where?: ai_insightsWhereInput
    data: XOR<ai_insightsUpdateWithoutSaved_contentsInput, ai_insightsUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type ai_insightsUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    hook?: JsonNullValueInput | InputJsonValue
    format?: JsonNullValueInput | InputJsonValue
    angle?: JsonNullValueInput | InputJsonValue
    idea_suggestions?: JsonNullValueInput | InputJsonValue
    confidence?: FloatFieldUpdateOperationsInput | number
    raw_analysis?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_insightsUncheckedUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    hook?: JsonNullValueInput | InputJsonValue
    format?: JsonNullValueInput | InputJsonValue
    angle?: JsonNullValueInput | InputJsonValue
    idea_suggestions?: JsonNullValueInput | InputJsonValue
    confidence?: FloatFieldUpdateOperationsInput | number
    raw_analysis?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collection_itemsUpsertWithWhereUniqueWithoutSaved_contentsInput = {
    where: collection_itemsWhereUniqueInput
    update: XOR<collection_itemsUpdateWithoutSaved_contentsInput, collection_itemsUncheckedUpdateWithoutSaved_contentsInput>
    create: XOR<collection_itemsCreateWithoutSaved_contentsInput, collection_itemsUncheckedCreateWithoutSaved_contentsInput>
  }

  export type collection_itemsUpdateWithWhereUniqueWithoutSaved_contentsInput = {
    where: collection_itemsWhereUniqueInput
    data: XOR<collection_itemsUpdateWithoutSaved_contentsInput, collection_itemsUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type collection_itemsUpdateManyWithWhereWithoutSaved_contentsInput = {
    where: collection_itemsScalarWhereInput
    data: XOR<collection_itemsUpdateManyMutationInput, collection_itemsUncheckedUpdateManyWithoutSaved_contentsInput>
  }

  export type contents_tagsUpsertWithWhereUniqueWithoutSaved_contentsInput = {
    where: contents_tagsWhereUniqueInput
    update: XOR<contents_tagsUpdateWithoutSaved_contentsInput, contents_tagsUncheckedUpdateWithoutSaved_contentsInput>
    create: XOR<contents_tagsCreateWithoutSaved_contentsInput, contents_tagsUncheckedCreateWithoutSaved_contentsInput>
  }

  export type contents_tagsUpdateWithWhereUniqueWithoutSaved_contentsInput = {
    where: contents_tagsWhereUniqueInput
    data: XOR<contents_tagsUpdateWithoutSaved_contentsInput, contents_tagsUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type contents_tagsUpdateManyWithWhereWithoutSaved_contentsInput = {
    where: contents_tagsScalarWhereInput
    data: XOR<contents_tagsUpdateManyMutationInput, contents_tagsUncheckedUpdateManyWithoutSaved_contentsInput>
  }

  export type contents_tagsScalarWhereInput = {
    AND?: contents_tagsScalarWhereInput | contents_tagsScalarWhereInput[]
    OR?: contents_tagsScalarWhereInput[]
    NOT?: contents_tagsScalarWhereInput | contents_tagsScalarWhereInput[]
    id?: UuidFilter<"contents_tags"> | string
    content_id?: UuidFilter<"contents_tags"> | string
    tag_id?: UuidFilter<"contents_tags"> | string
  }

  export type notesUpsertWithWhereUniqueWithoutSaved_contentsInput = {
    where: notesWhereUniqueInput
    update: XOR<notesUpdateWithoutSaved_contentsInput, notesUncheckedUpdateWithoutSaved_contentsInput>
    create: XOR<notesCreateWithoutSaved_contentsInput, notesUncheckedCreateWithoutSaved_contentsInput>
  }

  export type notesUpdateWithWhereUniqueWithoutSaved_contentsInput = {
    where: notesWhereUniqueInput
    data: XOR<notesUpdateWithoutSaved_contentsInput, notesUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type notesUpdateManyWithWhereWithoutSaved_contentsInput = {
    where: notesScalarWhereInput
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyWithoutSaved_contentsInput>
  }

  export type notesScalarWhereInput = {
    AND?: notesScalarWhereInput | notesScalarWhereInput[]
    OR?: notesScalarWhereInput[]
    NOT?: notesScalarWhereInput | notesScalarWhereInput[]
    id?: UuidFilter<"notes"> | string
    content_id?: UuidFilter<"notes"> | string
    text?: StringFilter<"notes"> | string
    created_at?: DateTimeFilter<"notes"> | Date | string
  }

  export type usersUpsertWithoutSaved_contentsInput = {
    update: XOR<usersUpdateWithoutSaved_contentsInput, usersUncheckedUpdateWithoutSaved_contentsInput>
    create: XOR<usersCreateWithoutSaved_contentsInput, usersUncheckedCreateWithoutSaved_contentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSaved_contentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSaved_contentsInput, usersUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type usersUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUncheckedUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workspacesUpsertWithoutSaved_contentsInput = {
    update: XOR<workspacesUpdateWithoutSaved_contentsInput, workspacesUncheckedUpdateWithoutSaved_contentsInput>
    create: XOR<workspacesCreateWithoutSaved_contentsInput, workspacesUncheckedCreateWithoutSaved_contentsInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutSaved_contentsInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutSaved_contentsInput, workspacesUncheckedUpdateWithoutSaved_contentsInput>
  }

  export type workspacesUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUncheckedUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type contents_tagsCreateWithoutTagsInput = {
    id?: string
    saved_contents: saved_contentsCreateNestedOneWithoutContents_tagsInput
  }

  export type contents_tagsUncheckedCreateWithoutTagsInput = {
    id?: string
    content_id: string
  }

  export type contents_tagsCreateOrConnectWithoutTagsInput = {
    where: contents_tagsWhereUniqueInput
    create: XOR<contents_tagsCreateWithoutTagsInput, contents_tagsUncheckedCreateWithoutTagsInput>
  }

  export type contents_tagsCreateManyTagsInputEnvelope = {
    data: contents_tagsCreateManyTagsInput | contents_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type workspacesCreateWithoutTagsInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users: usersCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutTagsInput = {
    id?: string
    owner_id: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsUncheckedCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutTagsInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutTagsInput, workspacesUncheckedCreateWithoutTagsInput>
  }

  export type contents_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: contents_tagsWhereUniqueInput
    update: XOR<contents_tagsUpdateWithoutTagsInput, contents_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<contents_tagsCreateWithoutTagsInput, contents_tagsUncheckedCreateWithoutTagsInput>
  }

  export type contents_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: contents_tagsWhereUniqueInput
    data: XOR<contents_tagsUpdateWithoutTagsInput, contents_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type contents_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: contents_tagsScalarWhereInput
    data: XOR<contents_tagsUpdateManyMutationInput, contents_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type workspacesUpsertWithoutTagsInput = {
    update: XOR<workspacesUpdateWithoutTagsInput, workspacesUncheckedUpdateWithoutTagsInput>
    create: XOR<workspacesCreateWithoutTagsInput, workspacesUncheckedCreateWithoutTagsInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutTagsInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutTagsInput, workspacesUncheckedUpdateWithoutTagsInput>
  }

  export type workspacesUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type usersCreateWithoutUsage_logsInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUsage_logsInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsUncheckedCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUsage_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsage_logsInput, usersUncheckedCreateWithoutUsage_logsInput>
  }

  export type workspacesCreateWithoutUsage_logsInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsCreateNestedManyWithoutWorkspacesInput
    tags?: tagsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users: usersCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutUsage_logsInput = {
    id?: string
    owner_id: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsUncheckedCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutWorkspacesInput
    tags?: tagsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutUsage_logsInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutUsage_logsInput, workspacesUncheckedCreateWithoutUsage_logsInput>
  }

  export type usersUpsertWithoutUsage_logsInput = {
    update: XOR<usersUpdateWithoutUsage_logsInput, usersUncheckedUpdateWithoutUsage_logsInput>
    create: XOR<usersCreateWithoutUsage_logsInput, usersUncheckedCreateWithoutUsage_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUsage_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUsage_logsInput, usersUncheckedUpdateWithoutUsage_logsInput>
  }

  export type usersUpdateWithoutUsage_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUsage_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUncheckedUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workspacesUpsertWithoutUsage_logsInput = {
    update: XOR<workspacesUpdateWithoutUsage_logsInput, workspacesUncheckedUpdateWithoutUsage_logsInput>
    create: XOR<workspacesCreateWithoutUsage_logsInput, workspacesUncheckedCreateWithoutUsage_logsInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutUsage_logsInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutUsage_logsInput, workspacesUncheckedUpdateWithoutUsage_logsInput>
  }

  export type workspacesUpdateWithoutUsage_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutUsage_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type collectionsCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    collection_items?: collection_itemsCreateNestedManyWithoutCollectionsInput
    workspaces: workspacesCreateNestedOneWithoutCollectionsInput
  }

  export type collectionsUncheckedCreateWithoutUsersInput = {
    id?: string
    workspace_id: string
    name: string
    description: string
    created_at?: Date | string
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutCollectionsInput
  }

  export type collectionsCreateOrConnectWithoutUsersInput = {
    where: collectionsWhereUniqueInput
    create: XOR<collectionsCreateWithoutUsersInput, collectionsUncheckedCreateWithoutUsersInput>
  }

  export type collectionsCreateManyUsersInputEnvelope = {
    data: collectionsCreateManyUsersInput | collectionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type saved_contentsCreateWithoutUsersInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsCreateNestedManyWithoutSaved_contentsInput
    notes?: notesCreateNestedManyWithoutSaved_contentsInput
    workspaces: workspacesCreateNestedOneWithoutSaved_contentsInput
  }

  export type saved_contentsUncheckedCreateWithoutUsersInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsUncheckedCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutSaved_contentsInput
    notes?: notesUncheckedCreateNestedManyWithoutSaved_contentsInput
  }

  export type saved_contentsCreateOrConnectWithoutUsersInput = {
    where: saved_contentsWhereUniqueInput
    create: XOR<saved_contentsCreateWithoutUsersInput, saved_contentsUncheckedCreateWithoutUsersInput>
  }

  export type saved_contentsCreateManyUsersInputEnvelope = {
    data: saved_contentsCreateManyUsersInput | saved_contentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type usage_logsCreateWithoutUsersInput = {
    id?: string
    tokens_used: bigint | number
    created_at?: Date | string
    workspaces: workspacesCreateNestedOneWithoutUsage_logsInput
  }

  export type usage_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    workspace_id: string
    tokens_used: bigint | number
    created_at?: Date | string
  }

  export type usage_logsCreateOrConnectWithoutUsersInput = {
    where: usage_logsWhereUniqueInput
    create: XOR<usage_logsCreateWithoutUsersInput, usage_logsUncheckedCreateWithoutUsersInput>
  }

  export type usage_logsCreateManyUsersInputEnvelope = {
    data: usage_logsCreateManyUsersInput | usage_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type workspace_membersCreateWithoutUsersInput = {
    id?: string
    role?: $Enums.workspace_role
    created_at?: Date | string
    workspaces: workspacesCreateNestedOneWithoutWorkspace_membersInput
  }

  export type workspace_membersUncheckedCreateWithoutUsersInput = {
    id?: string
    workspace_id: string
    role?: $Enums.workspace_role
    created_at?: Date | string
  }

  export type workspace_membersCreateOrConnectWithoutUsersInput = {
    where: workspace_membersWhereUniqueInput
    create: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput>
  }

  export type workspace_membersCreateManyUsersInputEnvelope = {
    data: workspace_membersCreateManyUsersInput | workspace_membersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type workspacesCreateWithoutUsersInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsCreateNestedManyWithoutWorkspacesInput
    tags?: tagsCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsUncheckedCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutWorkspacesInput
    tags?: tagsUncheckedCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput>
  }

  export type workspacesCreateManyUsersInputEnvelope = {
    data: workspacesCreateManyUsersInput | workspacesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type collectionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: collectionsWhereUniqueInput
    update: XOR<collectionsUpdateWithoutUsersInput, collectionsUncheckedUpdateWithoutUsersInput>
    create: XOR<collectionsCreateWithoutUsersInput, collectionsUncheckedCreateWithoutUsersInput>
  }

  export type collectionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: collectionsWhereUniqueInput
    data: XOR<collectionsUpdateWithoutUsersInput, collectionsUncheckedUpdateWithoutUsersInput>
  }

  export type collectionsUpdateManyWithWhereWithoutUsersInput = {
    where: collectionsScalarWhereInput
    data: XOR<collectionsUpdateManyMutationInput, collectionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type collectionsScalarWhereInput = {
    AND?: collectionsScalarWhereInput | collectionsScalarWhereInput[]
    OR?: collectionsScalarWhereInput[]
    NOT?: collectionsScalarWhereInput | collectionsScalarWhereInput[]
    id?: UuidFilter<"collections"> | string
    workspace_id?: UuidFilter<"collections"> | string
    name?: StringFilter<"collections"> | string
    description?: StringFilter<"collections"> | string
    created_by?: UuidFilter<"collections"> | string
    created_at?: DateTimeFilter<"collections"> | Date | string
  }

  export type saved_contentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: saved_contentsWhereUniqueInput
    update: XOR<saved_contentsUpdateWithoutUsersInput, saved_contentsUncheckedUpdateWithoutUsersInput>
    create: XOR<saved_contentsCreateWithoutUsersInput, saved_contentsUncheckedCreateWithoutUsersInput>
  }

  export type saved_contentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: saved_contentsWhereUniqueInput
    data: XOR<saved_contentsUpdateWithoutUsersInput, saved_contentsUncheckedUpdateWithoutUsersInput>
  }

  export type saved_contentsUpdateManyWithWhereWithoutUsersInput = {
    where: saved_contentsScalarWhereInput
    data: XOR<saved_contentsUpdateManyMutationInput, saved_contentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type saved_contentsScalarWhereInput = {
    AND?: saved_contentsScalarWhereInput | saved_contentsScalarWhereInput[]
    OR?: saved_contentsScalarWhereInput[]
    NOT?: saved_contentsScalarWhereInput | saved_contentsScalarWhereInput[]
    id?: UuidFilter<"saved_contents"> | string
    workspace_id?: UuidFilter<"saved_contents"> | string
    url?: StringFilter<"saved_contents"> | string
    source?: StringFilter<"saved_contents"> | string
    title?: StringNullableFilter<"saved_contents"> | string | null
    created_by?: UuidFilter<"saved_contents"> | string
    thumbnail_url?: StringFilter<"saved_contents"> | string
    metadata?: JsonFilter<"saved_contents">
    transcript?: StringNullableFilter<"saved_contents"> | string | null
    created_at?: DateTimeFilter<"saved_contents"> | Date | string
  }

  export type usage_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: usage_logsWhereUniqueInput
    update: XOR<usage_logsUpdateWithoutUsersInput, usage_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<usage_logsCreateWithoutUsersInput, usage_logsUncheckedCreateWithoutUsersInput>
  }

  export type usage_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: usage_logsWhereUniqueInput
    data: XOR<usage_logsUpdateWithoutUsersInput, usage_logsUncheckedUpdateWithoutUsersInput>
  }

  export type usage_logsUpdateManyWithWhereWithoutUsersInput = {
    where: usage_logsScalarWhereInput
    data: XOR<usage_logsUpdateManyMutationInput, usage_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type usage_logsScalarWhereInput = {
    AND?: usage_logsScalarWhereInput | usage_logsScalarWhereInput[]
    OR?: usage_logsScalarWhereInput[]
    NOT?: usage_logsScalarWhereInput | usage_logsScalarWhereInput[]
    id?: UuidFilter<"usage_logs"> | string
    user_id?: UuidFilter<"usage_logs"> | string
    workspace_id?: UuidFilter<"usage_logs"> | string
    tokens_used?: BigIntFilter<"usage_logs"> | bigint | number
    created_at?: DateTimeFilter<"usage_logs"> | Date | string
  }

  export type workspace_membersUpsertWithWhereUniqueWithoutUsersInput = {
    where: workspace_membersWhereUniqueInput
    update: XOR<workspace_membersUpdateWithoutUsersInput, workspace_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput>
  }

  export type workspace_membersUpdateWithWhereUniqueWithoutUsersInput = {
    where: workspace_membersWhereUniqueInput
    data: XOR<workspace_membersUpdateWithoutUsersInput, workspace_membersUncheckedUpdateWithoutUsersInput>
  }

  export type workspace_membersUpdateManyWithWhereWithoutUsersInput = {
    where: workspace_membersScalarWhereInput
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyWithoutUsersInput>
  }

  export type workspace_membersScalarWhereInput = {
    AND?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
    OR?: workspace_membersScalarWhereInput[]
    NOT?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
    id?: UuidFilter<"workspace_members"> | string
    workspace_id?: UuidFilter<"workspace_members"> | string
    user_id?: UuidFilter<"workspace_members"> | string
    role?: Enumworkspace_roleFilter<"workspace_members"> | $Enums.workspace_role
    created_at?: DateTimeFilter<"workspace_members"> | Date | string
  }

  export type workspacesUpsertWithWhereUniqueWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    update: XOR<workspacesUpdateWithoutUsersInput, workspacesUncheckedUpdateWithoutUsersInput>
    create: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput>
  }

  export type workspacesUpdateWithWhereUniqueWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    data: XOR<workspacesUpdateWithoutUsersInput, workspacesUncheckedUpdateWithoutUsersInput>
  }

  export type workspacesUpdateManyWithWhereWithoutUsersInput = {
    where: workspacesScalarWhereInput
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyWithoutUsersInput>
  }

  export type workspacesScalarWhereInput = {
    AND?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
    OR?: workspacesScalarWhereInput[]
    NOT?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
    id?: UuidFilter<"workspaces"> | string
    owner_id?: UuidFilter<"workspaces"> | string
    name?: StringFilter<"workspaces"> | string
    is_personal?: BoolFilter<"workspaces"> | boolean
    created_at?: DateTimeFilter<"workspaces"> | Date | string
  }

  export type usersCreateWithoutWorkspace_membersInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkspace_membersInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsUncheckedCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkspace_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
  }

  export type workspacesCreateWithoutWorkspace_membersInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsCreateNestedManyWithoutWorkspacesInput
    tags?: tagsCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsCreateNestedManyWithoutWorkspacesInput
    users: usersCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutWorkspace_membersInput = {
    id?: string
    owner_id: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
    collections?: collectionsUncheckedCreateNestedManyWithoutWorkspacesInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutWorkspacesInput
    tags?: tagsUncheckedCreateNestedManyWithoutWorkspacesInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutWorkspace_membersInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
  }

  export type usersUpsertWithoutWorkspace_membersInput = {
    update: XOR<usersUpdateWithoutWorkspace_membersInput, usersUncheckedUpdateWithoutWorkspace_membersInput>
    create: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkspace_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkspace_membersInput, usersUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type usersUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUncheckedUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workspacesUpsertWithoutWorkspace_membersInput = {
    update: XOR<workspacesUpdateWithoutWorkspace_membersInput, workspacesUncheckedUpdateWithoutWorkspace_membersInput>
    create: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutWorkspace_membersInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutWorkspace_membersInput, workspacesUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type workspacesUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUncheckedUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type collectionsCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    collection_items?: collection_itemsCreateNestedManyWithoutCollectionsInput
    users: usersCreateNestedOneWithoutCollectionsInput
  }

  export type collectionsUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    description: string
    created_by: string
    created_at?: Date | string
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutCollectionsInput
  }

  export type collectionsCreateOrConnectWithoutWorkspacesInput = {
    where: collectionsWhereUniqueInput
    create: XOR<collectionsCreateWithoutWorkspacesInput, collectionsUncheckedCreateWithoutWorkspacesInput>
  }

  export type collectionsCreateManyWorkspacesInputEnvelope = {
    data: collectionsCreateManyWorkspacesInput | collectionsCreateManyWorkspacesInput[]
    skipDuplicates?: boolean
  }

  export type saved_contentsCreateWithoutWorkspacesInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsCreateNestedManyWithoutSaved_contentsInput
    notes?: notesCreateNestedManyWithoutSaved_contentsInput
    users: usersCreateNestedOneWithoutSaved_contentsInput
  }

  export type saved_contentsUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
    ai_insights?: ai_insightsUncheckedCreateNestedOneWithoutSaved_contentsInput
    collection_items?: collection_itemsUncheckedCreateNestedManyWithoutSaved_contentsInput
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutSaved_contentsInput
    notes?: notesUncheckedCreateNestedManyWithoutSaved_contentsInput
  }

  export type saved_contentsCreateOrConnectWithoutWorkspacesInput = {
    where: saved_contentsWhereUniqueInput
    create: XOR<saved_contentsCreateWithoutWorkspacesInput, saved_contentsUncheckedCreateWithoutWorkspacesInput>
  }

  export type saved_contentsCreateManyWorkspacesInputEnvelope = {
    data: saved_contentsCreateManyWorkspacesInput | saved_contentsCreateManyWorkspacesInput[]
    skipDuplicates?: boolean
  }

  export type tagsCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    type: string
    contents_tags?: contents_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    type: string
    contents_tags?: contents_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsCreateOrConnectWithoutWorkspacesInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutWorkspacesInput, tagsUncheckedCreateWithoutWorkspacesInput>
  }

  export type tagsCreateManyWorkspacesInputEnvelope = {
    data: tagsCreateManyWorkspacesInput | tagsCreateManyWorkspacesInput[]
    skipDuplicates?: boolean
  }

  export type usage_logsCreateWithoutWorkspacesInput = {
    id?: string
    tokens_used: bigint | number
    created_at?: Date | string
    users: usersCreateNestedOneWithoutUsage_logsInput
  }

  export type usage_logsUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    user_id: string
    tokens_used: bigint | number
    created_at?: Date | string
  }

  export type usage_logsCreateOrConnectWithoutWorkspacesInput = {
    where: usage_logsWhereUniqueInput
    create: XOR<usage_logsCreateWithoutWorkspacesInput, usage_logsUncheckedCreateWithoutWorkspacesInput>
  }

  export type usage_logsCreateManyWorkspacesInputEnvelope = {
    data: usage_logsCreateManyWorkspacesInput | usage_logsCreateManyWorkspacesInput[]
    skipDuplicates?: boolean
  }

  export type workspace_membersCreateWithoutWorkspacesInput = {
    id?: string
    role?: $Enums.workspace_role
    created_at?: Date | string
    users: usersCreateNestedOneWithoutWorkspace_membersInput
  }

  export type workspace_membersUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    user_id: string
    role?: $Enums.workspace_role
    created_at?: Date | string
  }

  export type workspace_membersCreateOrConnectWithoutWorkspacesInput = {
    where: workspace_membersWhereUniqueInput
    create: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput>
  }

  export type workspace_membersCreateManyWorkspacesInputEnvelope = {
    data: workspace_membersCreateManyWorkspacesInput | workspace_membersCreateManyWorkspacesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutWorkspacesInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkspacesInput = {
    id: string
    email: string
    plan?: $Enums.user_plan
    created_at?: Date | string
    name: string
    collections?: collectionsUncheckedCreateNestedManyWithoutUsersInput
    saved_contents?: saved_contentsUncheckedCreateNestedManyWithoutUsersInput
    usage_logs?: usage_logsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkspacesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
  }

  export type collectionsUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: collectionsWhereUniqueInput
    update: XOR<collectionsUpdateWithoutWorkspacesInput, collectionsUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<collectionsCreateWithoutWorkspacesInput, collectionsUncheckedCreateWithoutWorkspacesInput>
  }

  export type collectionsUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: collectionsWhereUniqueInput
    data: XOR<collectionsUpdateWithoutWorkspacesInput, collectionsUncheckedUpdateWithoutWorkspacesInput>
  }

  export type collectionsUpdateManyWithWhereWithoutWorkspacesInput = {
    where: collectionsScalarWhereInput
    data: XOR<collectionsUpdateManyMutationInput, collectionsUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type saved_contentsUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: saved_contentsWhereUniqueInput
    update: XOR<saved_contentsUpdateWithoutWorkspacesInput, saved_contentsUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<saved_contentsCreateWithoutWorkspacesInput, saved_contentsUncheckedCreateWithoutWorkspacesInput>
  }

  export type saved_contentsUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: saved_contentsWhereUniqueInput
    data: XOR<saved_contentsUpdateWithoutWorkspacesInput, saved_contentsUncheckedUpdateWithoutWorkspacesInput>
  }

  export type saved_contentsUpdateManyWithWhereWithoutWorkspacesInput = {
    where: saved_contentsScalarWhereInput
    data: XOR<saved_contentsUpdateManyMutationInput, saved_contentsUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type tagsUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: tagsWhereUniqueInput
    update: XOR<tagsUpdateWithoutWorkspacesInput, tagsUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<tagsCreateWithoutWorkspacesInput, tagsUncheckedCreateWithoutWorkspacesInput>
  }

  export type tagsUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: tagsWhereUniqueInput
    data: XOR<tagsUpdateWithoutWorkspacesInput, tagsUncheckedUpdateWithoutWorkspacesInput>
  }

  export type tagsUpdateManyWithWhereWithoutWorkspacesInput = {
    where: tagsScalarWhereInput
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type tagsScalarWhereInput = {
    AND?: tagsScalarWhereInput | tagsScalarWhereInput[]
    OR?: tagsScalarWhereInput[]
    NOT?: tagsScalarWhereInput | tagsScalarWhereInput[]
    id?: UuidFilter<"tags"> | string
    workspace_id?: UuidFilter<"tags"> | string
    name?: StringFilter<"tags"> | string
    type?: StringFilter<"tags"> | string
  }

  export type usage_logsUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: usage_logsWhereUniqueInput
    update: XOR<usage_logsUpdateWithoutWorkspacesInput, usage_logsUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<usage_logsCreateWithoutWorkspacesInput, usage_logsUncheckedCreateWithoutWorkspacesInput>
  }

  export type usage_logsUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: usage_logsWhereUniqueInput
    data: XOR<usage_logsUpdateWithoutWorkspacesInput, usage_logsUncheckedUpdateWithoutWorkspacesInput>
  }

  export type usage_logsUpdateManyWithWhereWithoutWorkspacesInput = {
    where: usage_logsScalarWhereInput
    data: XOR<usage_logsUpdateManyMutationInput, usage_logsUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: workspace_membersWhereUniqueInput
    update: XOR<workspace_membersUpdateWithoutWorkspacesInput, workspace_membersUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput>
  }

  export type workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: workspace_membersWhereUniqueInput
    data: XOR<workspace_membersUpdateWithoutWorkspacesInput, workspace_membersUncheckedUpdateWithoutWorkspacesInput>
  }

  export type workspace_membersUpdateManyWithWhereWithoutWorkspacesInput = {
    where: workspace_membersScalarWhereInput
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type usersUpsertWithoutWorkspacesInput = {
    update: XOR<usersUpdateWithoutWorkspacesInput, usersUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkspacesInput, usersUncheckedUpdateWithoutWorkspacesInput>
  }

  export type usersUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plan?: Enumuser_planFieldUpdateOperationsInput | $Enums.user_plan
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUncheckedUpdateManyWithoutUsersNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutUsersNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type collection_itemsCreateManyCollectionsInput = {
    id?: string
    content_id: string
  }

  export type collection_itemsUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    saved_contents?: saved_contentsUpdateOneRequiredWithoutCollection_itemsNestedInput
  }

  export type collection_itemsUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
  }

  export type collection_itemsUncheckedUpdateManyWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
  }

  export type collection_itemsCreateManySaved_contentsInput = {
    id?: string
    collection_id: string
  }

  export type contents_tagsCreateManySaved_contentsInput = {
    id?: string
    tag_id: string
  }

  export type notesCreateManySaved_contentsInput = {
    id?: string
    text: string
    created_at?: Date | string
  }

  export type collection_itemsUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    collections?: collectionsUpdateOneRequiredWithoutCollection_itemsNestedInput
  }

  export type collection_itemsUncheckedUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type collection_itemsUncheckedUpdateManyWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    collection_id?: StringFieldUpdateOperationsInput | string
  }

  export type contents_tagsUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: tagsUpdateOneRequiredWithoutContents_tagsNestedInput
  }

  export type contents_tagsUncheckedUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type contents_tagsUncheckedUpdateManyWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type notesUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notesUncheckedUpdateWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notesUncheckedUpdateManyWithoutSaved_contentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contents_tagsCreateManyTagsInput = {
    id?: string
    content_id: string
  }

  export type contents_tagsUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    saved_contents?: saved_contentsUpdateOneRequiredWithoutContents_tagsNestedInput
  }

  export type contents_tagsUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
  }

  export type contents_tagsUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_id?: StringFieldUpdateOperationsInput | string
  }

  export type collectionsCreateManyUsersInput = {
    id?: string
    workspace_id: string
    name: string
    description: string
    created_at?: Date | string
  }

  export type saved_contentsCreateManyUsersInput = {
    id?: string
    workspace_id: string
    url: string
    source: string
    title?: string | null
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
  }

  export type usage_logsCreateManyUsersInput = {
    id?: string
    workspace_id: string
    tokens_used: bigint | number
    created_at?: Date | string
  }

  export type workspace_membersCreateManyUsersInput = {
    id?: string
    workspace_id: string
    role?: $Enums.workspace_role
    created_at?: Date | string
  }

  export type workspacesCreateManyUsersInput = {
    id?: string
    name: string
    is_personal?: boolean
    created_at?: Date | string
  }

  export type collectionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUpdateManyWithoutCollectionsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type collectionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUncheckedUpdateManyWithoutCollectionsNestedInput
  }

  export type collectionsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_contentsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUpdateManyWithoutSaved_contentsNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUncheckedUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUncheckedUpdateManyWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usage_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: workspacesUpdateOneRequiredWithoutUsage_logsNestedInput
  }

  export type usage_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usage_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspace_membersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: workspacesUpdateOneRequiredWithoutWorkspace_membersNestedInput
  }

  export type workspace_membersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspace_membersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspacesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: collectionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    saved_contents?: saved_contentsUncheckedUpdateManyWithoutWorkspacesNestedInput
    tags?: tagsUncheckedUpdateManyWithoutWorkspacesNestedInput
    usage_logs?: usage_logsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_personal?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type collectionsCreateManyWorkspacesInput = {
    id?: string
    name: string
    description: string
    created_by: string
    created_at?: Date | string
  }

  export type saved_contentsCreateManyWorkspacesInput = {
    id?: string
    url: string
    source: string
    title?: string | null
    created_by: string
    thumbnail_url: string
    metadata: JsonNullValueInput | InputJsonValue
    transcript?: string | null
    created_at?: Date | string
  }

  export type tagsCreateManyWorkspacesInput = {
    id?: string
    name: string
    type: string
  }

  export type usage_logsCreateManyWorkspacesInput = {
    id?: string
    user_id: string
    tokens_used: bigint | number
    created_at?: Date | string
  }

  export type workspace_membersCreateManyWorkspacesInput = {
    id?: string
    user_id: string
    role?: $Enums.workspace_role
    created_at?: Date | string
  }

  export type collectionsUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUpdateManyWithoutCollectionsNestedInput
    users?: usersUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type collectionsUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    collection_items?: collection_itemsUncheckedUpdateManyWithoutCollectionsNestedInput
  }

  export type collectionsUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_contentsUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUpdateManyWithoutSaved_contentsNestedInput
    users?: usersUpdateOneRequiredWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_insights?: ai_insightsUncheckedUpdateOneWithoutSaved_contentsNestedInput
    collection_items?: collection_itemsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutSaved_contentsNestedInput
    notes?: notesUncheckedUpdateManyWithoutSaved_contentsNestedInput
  }

  export type saved_contentsUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contents_tags?: contents_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contents_tags?: contents_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type usage_logsUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUsage_logsNestedInput
  }

  export type usage_logsUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usage_logsUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    tokens_used?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspace_membersUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutWorkspace_membersNestedInput
  }

  export type workspace_membersUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspace_membersUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumworkspace_roleFieldUpdateOperationsInput | $Enums.workspace_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}