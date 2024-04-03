import React from "react";
import image from "../../assets/bitcoin-img.jpeg";
import styles from "../Crypto/Crypto.module.css";

const CURRENCY_SYMBOL = {
    USD: "$",
    GBP: "£",
    EUR: "€",
};

function Crypto() {
    const [data, setData] = React.useState({});
    const [status, setStatus] = React.useState("loading");
    const [currency, setCurrency] = React.useState("USD");
    React.useEffect(() => {
        async function getCryptoData() {
            try {
                const response = await fetch(
                    "https://api.coindesk.com/v1/bpi/currentprice.json"
                );
                const data = await response.json();
                setData(data.bpi);
                setStatus("success");
            } catch (err) {
                setStatus("error");
            }
        }
        getCryptoData();
    }, []);
    const currencyData = {
        price: data[currency]?.rate,
        symbol: CURRENCY_SYMBOL[currency],
    };

    if(status === "loading") {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Crypto Prices</h1>
            <div className={styles.card}>
                <h1>
                    <img src={image} className={styles.image} />
                </h1>
                <p>BTC</p>
                <select
                    className={styles.currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    value={currency}
                >
                    <option>USD</option>
                    <option>GBP</option>
                    <option>EUR</option>
                </select>
                <p>Price: {`${currencyData.symbol} ${currencyData.price}`}</p>
            </div>
        </div>
    );
}

export default Crypto;
