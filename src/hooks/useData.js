import { useEffect, useState } from "react";

// We'll be given the currency and we need to return the data of conversion values from the API
function useData(currency) {
    const [data, setData] = useState({});
    // Fetch needs to be called once so we use useEffect hook
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            setData(res[currency]);
        })
    }, [currency]);

    return data;
}

export default useData;