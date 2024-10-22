import React, { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinInfo = ({image, name, symbol}) => {

    const [ price, setPrice ] = useState(null)

    useEffect(() => {
        const getCoinPrice = async () => {
            try {
                console.log("SYMBOL" + symbol)
                const response = await fetch(
                  `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setPrice(json);
            } catch (error) {
                console.error('Failed to fetch coin price:', error);
            }
        };
        getCoinPrice();
    }, [symbol]);
    

    return (
        <div>
            {price ? ( // rendering only if API call actually returned us data
                <li className="main-list" key={symbol}>
                    <img
                        className="icons"
                        src={`https://www.cryptocompare.com${image}`}
                        alt={`Small icon for ${name} crypto coin`}
                    />
                    {name} <span className="tab"></span> ${price.USD} USD
                </li>
            ) : 
                null
            }
        </div>
    )

}

export default CoinInfo