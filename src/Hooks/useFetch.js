import { useState, useEffect } from "react";
import { productos } from "../db/dbProducts.json";
export default function useFetch(url, options) {

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
       (async()=>{
           try {
            //    const res = await fetch(url, options);
            //    const json = await res.json();
               setResult(productos);
               setLoading(false);
           } catch (err) {
               setLoading(false);
               setError(err);
           }
       })();
    }, [options, url]);

    return {loading, result, error};
}

