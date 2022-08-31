import { useEffect } from "react"

import { useAuthContext } from './context/AuthContext'


const AuthWrapper = ({children}) => {

    const {setAuthState, authState} = useAuthContext()

    useEffect(() => {
      const localHackerUser = localStorage.getItem("hacker_user");
      if (localHackerUser) {
        const hackerUser = JSON.parse(localHackerUser);
        setAuthState((prevData) => ({
          isLogIn: hackerUser.user_exists,
          jwtKey: hackerUser.token,
          isNewlyRegistered: false,
          appWrapperLoading: false
        }));
      }
    }, []);

    if(authState.appWrapperLoading)
        return <p>Loading....</p>

    return <>
        {children}
    </>
}

export  { AuthWrapper}