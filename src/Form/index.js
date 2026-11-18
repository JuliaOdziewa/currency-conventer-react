import { useState } from "react";
// import { currencies } from "../currencies";
import Result from "./Result";
import Clock from "../Clock";
import { Fieldset, Label, Legend, Button, Input, Wrapper, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();


    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency].value;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    setTimeout(() => (<Loading>Przygotowujemy dla ciebie aplikacje</Loading>), [5000])

    return (
        <form className="form" onSubmit={onSubmit}>
            <Fieldset>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Pobieramy najnowsze kursy walut
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (
                            <Failure>
                                Wystąpił błąd
                            </Failure>
                        ) : (
                            <>
                                <Clock />
                                <Legend>Kalkulator Walut</Legend>
                                <Wrapper>
                                    <Label>
                                        Przelicz z :
                                    </Label>
                                    <Input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        type="number"
                                        step="any"
                                        min="0.01"
                                        placeholder="Kwota w PLN"
                                        required />
                                </Wrapper>
                                <Wrapper>
                                    <Label>
                                        <span className="form__labelText">
                                            Przelicz na :
                                        </span>
                                    </Label>
                                    <Input as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}>
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}>
                                                {currency}
                                            </option>
                                        )))}
                                    </Input>
                                </Wrapper>
                                <p>
                                    <Button>
                                        Przelicz
                                    </Button>
                                </p>
                                <p>
                                    Data aktualizacji kursów:{" "}
                                    {ratesData.date
                                        ? new Date(ratesData.date).toLocaleDateString("pl-PL")
                                        : "Brak informacji"}
                                </p>
                                <Result result={result} />
                            </>))
                }
            </Fieldset>
        </form>
    );
};

export default Form;