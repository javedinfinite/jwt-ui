import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const initialAuthState = {
  isLogIn: false,
  jwtKey: undefined,
  isNewlyRegistered: false,
  appWrapperLoading: true,
};

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialAuthState);

  return (
    <AuthContext.Provider value={{ authState: state, setAuthState: setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthProvider };
