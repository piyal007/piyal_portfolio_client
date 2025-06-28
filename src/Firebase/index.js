// Export Firebase configuration
export { app, analytics } from './firebase.config';

// Export Firebase services
export { 
  authServices, 
  firestoreServices, 
  storageServices,
  auth,
  db,
  storage
} from './firebase.services';

// Export custom hooks
export { useAuth } from './useAuth'; 