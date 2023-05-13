import React, { useState } from "react";
export default function Search() {
  const styles1 = {
    width: "full",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const styles2 = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    shadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };
  const styles3 = {
    fontSize: "1.2rem",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "10px",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "0.7rem",
  };
  const styles4 = {
    padding: "0.5rem",
    backgroundColor: "#cbd5e1",
  };
  const styles5 = {
    padding: "0.5rem",
    color: "#fff",
    backgroundColor: "#ffc107",
    fontWeight: "500",
  };
  const styles6 = {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  };
  const styles7 = {
    marginLeft: "1rem",
    marginRight: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  };
  const styles8 = {
    width: "2rem",
  };
  const styles9 = {
    fontSize: "1.2rem",
    fontWeight: "700",
    textAlign: "center",
  };
  const styles10 = {
    backgroundColor: "#ffc107",
    color: "#fff",
    padding: "0.3rem",
    borderRadius: "10px",
    fontWeight: "500",
  };
  const styles11 = {
    fontSize: "0.7rem",
    color: "#ffc107",
    marginLeft: "1rem",
    marginRight: "1rem",
  };

  const [coin, setCoin] = useState("");
  const [price, setPrice] = useState("");

  const handleInputChange = (event) => {
    setCoin(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        ` https://api.binance.com/api/v3/ticker/24hr?symbol=${coin.toUpperCase()}USDT`
      );
      const data = await response.json();
      setPrice(data?.weightedAvgPrice);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles1}>
      <form style={styles2} onSubmit={handleFormSubmit}>
        <h1 style={styles3}>
          Coinlerin kısaltmaları ile arama yapınız.
          <span>Örn:Btc,eth,sol...</span>
        </h1>
        <input
          style={styles4}
          type="text"
          value={coin}
          onChange={handleInputChange}
        />
        <button style={styles5} type="submit">
          Coin Ara
        </button>
      </form>

      <div style={styles6}>
        <div style={styles7}>
          <img
            style={styles8}
            src="https://cryptologos.cc/logos/tether-usdt-logo.png"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="">
            {price && (
              <p style={styles9}>
                {`${coin?.toUpperCase()} `}{" "}
                <span style={styles10}>{`${price?.slice(0, 7)}`}</span>
                <span style={styles11}>USDT</span>
                <h1>{price?.priceChangePercent}</h1>
              </p>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}
