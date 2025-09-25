export const IS_DEVELOPMENT = import.meta.env.VITE_DEV === 'true';
export const FS_API_KEY = String(import.meta.env.VITE_FIRESTORE_API_KEY);
export const FS_AUTH_DOMAIN = String(
  import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN
);
export const FS_PROJECT_ID = String(import.meta.env.VITE_FIRESTORE_PROJECT_ID);
export const FS_STORAGE_BUCKET = String(
  import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET
);
export const FS_MESSAGING_SENDER_ID = String(
  import.meta.env.VITE_FIRESTORE_MESSAGING_SENDER_ID
);
export const FS_APP_ID = String(import.meta.env.VITE_FIRESTORE_APP_ID);
export const FS_MEASUREMENT_ID = String(
  import.meta.env.VITE_FIRESTORE_MEASUREMENT_ID
);
