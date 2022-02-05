import { useEffect, useCallback, useState } from "react";
const useRegister = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [triggerRegisterApi, setTriggerRegisterApi] = useState();

    const [registerName, setRegisterName] = useState('')
    const [registerUserName, setRegisterUserName] = useState('')
    const [registerPassword, setRegisterPassord] = useState('')

    const trigger = useCallback((trigger, name='', userName='', password='') => {
      setRegisterName(name);
      setRegisterUserName(userName);
      setRegisterPassord(password);
      setTriggerRegisterApi(trigger);
      }, []);


    useEffect(() => {
        if (triggerRegisterApi) {
            console.log('register api called', registerName, registerUserName, registerPassword);
            //in finally block setTriggerApi(undefined) or on API error/success set it to false so that next time it can be called.
        }
      }, [registerName, registerPassword, registerUserName, triggerRegisterApi]);

    return {data, loading, error, trigger};
}


const useLogin = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [triggerLoginApi, setTriggerLoginApi] = useState();

    const [loginUserName, setLoginUserName] = useState('')
    const [loginPassword, setLoginPassord] = useState('')

    const trigger = useCallback((trigger, userName='', password='') => {
      setLoginUserName(userName);
      setLoginPassord(password);
      setTriggerLoginApi(trigger);
      }, []);

      useEffect(() => {
        if (triggerLoginApi) {
            console.log('login api called', loginUserName, loginPassword);
            //in finally block setTriggerApi(undefined) or on API error/success set it to false so that next time it can be called.
        }
      }, [loginPassword, loginUserName, triggerLoginApi]);

    return {data, loading, error, trigger};

}

export { useRegister, useLogin } ;