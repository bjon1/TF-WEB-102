import { useEffect, useState } from 'react'
import './App.css'
import CoinInfo from "./components/coinInfo";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {

  const [ list, setList ] = useState(null)

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?api_key=$" + API_KEY) 
      const data = await response.json()
      setList(data)
    }
    fetchAllCoinData().catch(console.error)
  }, [])

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
      <ul>
        {list && Object.entries(list.Data).map(([coin]) =>
          list.Data[coin].PlatformType === "blockchain" ? (
            <CoinInfo
              image={list.Data[coin].ImageUrl}
              name={list.Data[coin].FullName}
              symbol={list.Data[coin].Symbol}
            />
            ) : null
        )}
          
      </ul>
    </div>
  )
}

export default App
