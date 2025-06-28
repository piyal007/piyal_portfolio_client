import { useState, useEffect } from 'react';
import { authServices } from './firebase.services';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = authServices.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    setError(null);
    const result = await authServices.signIn(email, password);
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  const signUp = async (email, password, displayName) => {
    setError(null);
    const result = await authServices.signUp(email, password, displayName);
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  const signOut = async () => {
    setError(null);
    const result = await authServices.signOut();
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  const resetPassword = async (email) => {
    setError(null);
    const result = await authServices.resetPassword(email);
    if (!result.success) {
      setError(result.error);
    }
    return result;
  };

  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    resetPassword,
    isAuthenticated: !!user
  };
}; 