import { useEffect, useCallback, useState } from "react";
import { myAxios } from "../util/MyAxios";
const useHackers = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [triggerTopHackersApi, setTriggerTopHackersApi] = useState();

    const [hackersNumber, setHackersNumber] = useState('')

    const trigger = useCallback((trigger, hackersNumber='') => {
        setHackersNumber(hackersNumber);
        setTriggerTopHackersApi(trigger);
      }, []);


    useEffect(() => {
        if (triggerTopHackersApi) {
            setLoading(true);
            myAxios.get(`http://localhost:4000/hackers/top/${hackersNumber}`).then((res)=>{
            setTriggerTopHackersApi(false)
            setData(res.data)
          }).catch((err)=>{
            console.log('error', err.response)
            setError({errMessage: err.response.data.message, errorStatus: err.response.status, failureCode: err.response.data.failureCode})
            setTriggerTopHackersApi(false)
          }).finally(()=>{
            setLoading(false)
          })
        }
      }, [hackersNumber, triggerTopHackersApi]);

    return {data, loading, error, trigger};
}

export { useHackers } ;