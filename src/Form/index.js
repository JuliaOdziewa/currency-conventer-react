import "./index.css";
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
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