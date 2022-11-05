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
        setAuthState((prevData) => ({
          isLogIn: true,
          jwtKey: hackerUser,
          isNewlyRegistered: false,
          appWrapperLoading: false
        }));
      }
      else {
        console.log('2nd....')
        setAuthState((prevData) => ({
        isNewlyRegistered: false,
        appWrapperLoading: false
      }));

      }

    }, []);

    if(authState.appWrapperLoading)
        return <CircularProgress />

    return <>
        {children}
    </>
}

export  { AuthWrapper}