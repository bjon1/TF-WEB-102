import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinDetail = () => {

    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        console.log("FETCHED")
        const getCoinDetail = async () => {
        const details = await fetch(
            `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=` +
            API_KEY
        );
        const description = await fetch(
            `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=` +
            API_KEY
        );
    
        const detailsJson = await details.json();
        const descripJson = await description.json();

        console.log("DETAILS", detailsJson)
        console.log("DESCRIPTION", descripJson)
    
        setFullDetails({"numbers": detailsJson.DISPLAY, "textData": descripJson.Data});
        };
        
        getCoinDetail().catch(console.error);
    }, [params.symbol]);


    return (
        <>{fullDetails ? (
            <>
            <h1>{fullDetails.textData[params.symbol].FullName}</h1>
            <img
                className="images"
                src={`https://www.cryptocompare.com${
                    fullDetails.numbers[params.symbol].USD.IMAGEURL
                }`}
                alt={`Small icon for ${params.symbol} crypto coin`}
            />
            <div>{fullDetails.textData[params.symbol].Description}</div>
            <br></br>
            <div>
                This coin was built with the algorithm{" "}
                {fullDetails.textData[params.symbol].Algorithm}{" "}
            </div>

            <table>
                <tbody> 
                    <tr>
                    <th>Launch Date </th>
                    <td>{fullDetails.textData[params.symbol].AssetLaunchDate}</td>
                    </tr>
                    <tr>
                    <th>Website </th>
                    <td>{fullDetails.textData[params.symbol].AssetWebsiteUrl}</td>
                    </tr>
                    <tr>
                    <th>Whitepaper </th>
                    <td>{fullDetails.textData[params.symbol].AssetWhitepaperUrl}</td>
                    </tr>
                </tbody>
            </table>
            </>
        ) : null}
            
        </>
    )
}

export default CoinDetail


