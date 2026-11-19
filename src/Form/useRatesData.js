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
                const response = await fetch(
                    process.env.PUBLIC_URL + "/currencies.json"
                );

                console.log(response)

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

