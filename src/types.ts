export type FirebaseCredential = {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  clienMimeType_x509_cert_url?: string;
};

export type InitializeAppArgs = {
  firebase: any;
  databaseURL: string;
  credential: FirebaseCredential;
};
export type InitializeApp = (args: InitializeAppArgs) => void;
