# Firebase Setup for Portfolio

This directory contains all Firebase-related configuration and services for the portfolio application.

## Files Structure

- `firebase.config.js` - Firebase configuration using environment variables
- `firebase.services.js` - Firebase services (Auth, Firestore, Storage)
- `useAuth.js` - Custom React hook for authentication
- `index.js` - Export file for easy imports

## Environment Variables

Make sure your `.env` file contains the following Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Usage Examples

### Authentication

```javascript
import { useAuth } from '../Firebase';

function LoginComponent() {
  const { signIn, user, loading, error } = useAuth();

  const handleLogin = async (email, password) => {
    const result = await signIn(email, password);
    if (result.success) {
      console.log('Logged in successfully');
    }
  };

  return (
    // Your login form
  );
}
```

### Firestore Operations

```javascript
import { firestoreServices } from '../Firebase';

// Add a document
const addProject = async (projectData) => {
  const result = await firestoreServices.addDocument('projects', projectData);
  if (result.success) {
    console.log('Project added with ID:', result.id);
  }
};

// Get documents
const getProjects = async () => {
  const result = await firestoreServices.getDocuments('projects');
  if (result.success) {
    console.log('Projects:', result.data);
  }
};

// Query documents
const getRecentProjects = async () => {
  const result = await firestoreServices.queryDocuments(
    'projects',
    [], // no conditions
    { field: 'createdAt', direction: 'desc' }, // order by
    5 // limit to 5
  );
  if (result.success) {
    console.log('Recent projects:', result.data);
  }
};
```

### File Upload

```javascript
import { storageServices } from '../Firebase';

const uploadImage = async (file) => {
  const result = await storageServices.uploadFile(file, 'images/profile.jpg');
  if (result.success) {
    console.log('Image uploaded:', result.url);
  }
};
```

## Available Services

### Authentication Services (`authServices`)
- `signIn(email, password)` - Sign in with email and password
- `signUp(email, password, displayName)` - Create new user account
- `signOut()` - Sign out current user
- `getCurrentUser()` - Get current authenticated user
- `onAuthStateChange(callback)` - Listen to authentication state changes
- `resetPassword(email)` - Send password reset email

### Firestore Services (`firestoreServices`)
- `addDocument(collectionName, data)` - Add new document
- `getDocuments(collectionName)` - Get all documents from collection
- `getDocument(collectionName, docId)` - Get single document
- `updateDocument(collectionName, docId, data)` - Update document
- `deleteDocument(collectionName, docId)` - Delete document
- `queryDocuments(collectionName, conditions, orderByField, limitCount)` - Query documents

### Storage Services (`storageServices`)
- `uploadFile(file, path)` - Upload file to Firebase Storage
- `getDownloadURL(path)` - Get download URL for file
- `deleteFile(path)` - Delete file from Storage

## Custom Hook (`useAuth`)

The `useAuth` hook provides:
- `user` - Current authenticated user
- `loading` - Loading state
- `error` - Error message
- `signIn(email, password)` - Sign in function
- `signUp(email, password, displayName)` - Sign up function
- `signOut()` - Sign out function
- `resetPassword(email)` - Reset password function
- `isAuthenticated` - Boolean indicating if user is authenticated

## Security Rules

Make sure to set up proper Firestore security rules in your Firebase console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all users
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Storage Rules

Set up Firebase Storage rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
``` 