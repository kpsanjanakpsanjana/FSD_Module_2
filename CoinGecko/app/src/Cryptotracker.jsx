import React, { useState, useEffect } from "react";
import axios from "axios";

function CryptoTracker() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,dogecoin",
            },
          }
        );

        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Crypto Tracker</h1>

      {coins.map((coin) => (
        <div key={coin.id} style={{ marginBottom: "15px" }}>
          <h3>{coin.name}</h3>
          <p>Price: ${coin.current_price}</p>
          <p>Market Cap: ${coin.market_cap}</p>
          <p
            style={{
              color:
                coin.price_change_percentage_24h >= 0 ? "green" : "red",
            }}
          >
            24h Change: {coin.price_change_percentage_24h}%
          </p>
        </div>
      ))}
    </div>
  );
}

export default CryptoTracker;