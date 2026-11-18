import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('https://api.currencyapi.com/v3/latest?currencies=EUR%2CUSD%2CHUF%2CUAH&apikey=cur_live_ipwYjxLCrvoif9JpxPn36raTKpo7YkY0w1PmLCxl&base_currency=PLN')

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { data, meta } = await response.json();

                setRatesData({
                    state: "success",
                    rates: data,
                    date: meta.last_updated_at,
                });
            } catch (error) {

                console.error("ERROR:", error);

                setRatesData({
                    state: "error",
                    rates: null,
                    date: null,
                });
            }

        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
}

