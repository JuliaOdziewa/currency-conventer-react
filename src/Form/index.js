import "./index.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("Euro");

    const onInputChange = ({ target }) => setAmount(target.value);
    const onSelectChange = ({ target }) => setCurrency(target.value);

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">Przelicz z:
                        </span>
                    </label>
                    <input
                        value={amount}
                        onChange={onInputChange}
                        type="number"
                        step="any"
                        min="0.01"
                        placeholder="Kwota w PLN"
                        required />
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Przelicz na:</span>
                    </label>
                    <select
                        value={currency}
                        onChange={onSelectChange}>

                        {currencies.map(currency => (
                            <option key={currency.id} value={currency.name}>
                                {currency.name}
                            </option>
                        ))}

                    </select>
                </p>
                <p>
                    <button className="form__button">Przelicz</button>
                </p>
                <p className="form__result"></p>
            </fieldset>
        </form>
    );

};

export default Form;