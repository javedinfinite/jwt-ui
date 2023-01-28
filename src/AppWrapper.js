import { useEffect } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import { useAuthContext } from './context/AuthContext'


const AuthWrapper = ({children}) => {

    const {setAuthState, authState} = useAuthContext()

    useEffect(() => {
      const localHackerUser = localStorage.getItem("hacker_user");
      if (localHackerUser!==null && localHackerUser!=='undefined') {
        console.log('1st....')
        const hackerUser = JSON.parse(localHackerUser);
        setAuthState(() => ({
          isLogIn: true,
          jwtKey: hackerUser,
          isNewlyRegistered: false,
          appWrapperLoading: false
        }));
      }
      else {
        console.log('2nd....')
        setAuthState((prevData) => ({
        ...prevData,
        isNewlyRegistered: false,
        appWrapperLoading: false
      }));

      }

    }, []);

    if(authState.appWrapperLoading) // while authWrapper is getting intialised by above useEffect, don't load the app as auth value may not be present while trying to access it in other child comp
        return <CircularProgress />

    return <>
        {children}
    </>
}

export  { AuthWrapper}