import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext); // to avoid importing both usecontext as well as Authcontext, we can simply import just useAuthContext where we need authcontext

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
