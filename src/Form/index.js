import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import Clock from "../Clock";
import { Fieldset, Label, Legend, Button } from "./styled";

const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <Fieldset>
                <Clock />
                <Legend>Kalkulator Walut</Legend>
                <p>
                    <Label>
                        Przelicz z :
                    </Label>
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
                    <Label>
                        <span className="form__labelText">
                            Przelicz na :
                        </span>
                    </Label>
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
                    <Button>
                        Przelicz
                    </Button>
                </p>
                <Result result={result} />
            </Fieldset>
        </form>
    );
};

export default Form;