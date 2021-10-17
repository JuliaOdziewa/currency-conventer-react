import "./index.css";
import { useState, useEffect } from "react";
import { currencies } from "../currencies";
import Result from "./Result";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState();


    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setDate(date.toLocaleString("pl-PL"));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <p className="date">
                    Dzisiaj jest {date}
                </p>
                <p>
                    <label className="form__label">
                        Przelicz z :
                    </label>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        step="any"
                        min="0.01"
                        placeholder="Kwota w PLN"
                        required />
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">
                            Przelicz na :
                        </span>
                    </label>
                    <select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}>

                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}>
                                {currency.name}
                            </option>
                        )))}

                    </select>
                </p>
                <p>
                    <button className="form__button">
                        Przelicz
                    </button>
                </p>
                <Result result={result} />
            </fieldset>
        </form>
    );
};

export default Form;