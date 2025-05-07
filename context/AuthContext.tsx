import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  verifyPin: (pin: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  login: () => {},
  logout: () => {},
  verifyPin: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Check if user is already logged in
    // For demo purposes, we're not actually persisting this
  }, []);
  
  const login = (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock user data
      const mockUser = {
        id: '123456',
        name: 'John Doe',
        email: email,
        phone: '+1 (555) 123-4567',
      };
      
      setUser(mockUser);
      setIsLoading(false);
    }, 1000);
  };
  
  const logout = () => {
    setUser(null);
  };
  
  const verifyPin = (pin: string) => {
    // In a real app, this would verify the PIN with an API
    // For now, we just assume it's correct if it's non-empty
    if (pin) {
      return true;
    }
    return false;
  };
  
  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, verifyPin }}>
      {children}
    </AuthContext.Provider>
  );
};