import React,{ useEffect, useCallback } from "react";
const useRegister = () => {

    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState();
    const [error, setError] = React.useState();
    const [triggerApi, setTriggerApi] = React.useState();

    const trigger = useCallback((triggerRegisterApi) => {
        setTriggerApi(triggerRegisterApi);
      }, []);


    useEffect(() => {
        if (triggerApi) {
            console.log('register called');
            //in finally block setTriggerApi(undefined) or on API error/success set it to false so that next time it can be called.
        }
      }, [triggerApi]);

    return {data, loading, error, trigger};
}


const useLogin = () => {

    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState();
    const [error, setError] = React.useState();

    console.log('login called');

    return {data, loading, error};

}

export { useRegister, useLogin } ;