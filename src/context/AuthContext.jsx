import { createContext, useState, useEffect, useMemo } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem("silicon14-username") || "";
  });
  const [showSignIn, setShowSignIn] = useState(false);
  const [signInInput, setSignInInput] = useState("");

  useEffect(() => {
    localStorage.setItem("silicon14-username", username);
  }, [username]);

  function handleSignIn(e) {
    e.preventDefault();
    if (signInInput.trim()) {
      setUsername(signInInput.trim());
      setShowSignIn(false);
      setSignInInput("");
    }
  }

  function handleSignOut() {
    setUsername("");
    localStorage.removeItem("silicon14-username");
  }

  const value = useMemo(() => ({
    username,
    showSignIn,
    setShowSignIn,
    signInInput,
    setSignInInput,
    handleSignIn,
    handleSignOut,
  }), [username, showSignIn, signInInput]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
