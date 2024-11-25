import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../context/CoinContext'
import LineChart from "../components/LineCart";

const Coin = () => {

  const {coinId}  = useParams()
  const [coinData, setCoinData] = useState()
  const [historicalData, setHistoricalData] = useState()
  const {currency} = useContext(CoinContext)

  const fetchCoinData = async () => {
     
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Qkg6KDRGu866F6nXktrQdefY'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));

  }

  const fetchHistoricalData = async () => {

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Qkg6KDRGu866F6nXktrQdefY'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));

  }

  useEffect( () => {
    fetchCoinData()
    fetchHistoricalData()
  }, [currency])

  if (coinData && historicalData) {

    return (
      <div className='text-center'>
         <div className=''>
             <img src={coinData.image.large} alt="" /> <br />
             <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
         </div>
      </div>
 )
    
  } else {

    return (
      <div className='spinner'>
         <div className='spinn'></div>
      </div>
 )
    
  }

}

export default Coin