export interface SupabaseWebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE';
  table: string;
  record: {
    id: string;
    email: string;
    [key: string]: any;
  };
  schema: string;
  old_record: null | Record<string, any>;
}
