import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {

    const {allCoin, currency} = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([])
    const [input, setInput] = useState('')

    const inputHandler = (event) => {
        setInput(event.target.value)
        if (event.target.value === '') {
            setDisplayCoin(allCoin)
        }
    } 

    const searchHandler = async (event) => {
        event.preventDefault()
        const coins = await allCoin.filter( (item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins)
    }

    useEffect( () => {
        setDisplayCoin(allCoin)
    }, [allCoin] )

  return (
        <div className='home'>
            <div className='hero gap-8'>
                <h1 className='font-semibold'>
                    Largest <br /> Crypto Market
                </h1>
                <p className='w-3/4'>
                    Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about Crypto.
                   
                </p>
                
                <form onSubmit={searchHandler} className='w-10/12 bg-white text-black rounded-xl flex gap-8'>
                  <input type="text" onChange={inputHandler} value={input} list='coinList' placeholder='Search crypto...' className='flex-1 outline-none border-none pl-4' required />
                  
                  <datalist id='coinList'>
                    {
                        allCoin.map( (item, index) => (<option key={index} value={item.name} />))
                    }
                  </datalist>

                  <button type='submit' className='border-none text-white bg-primary rounded-xl cursor-pointer px-8 py-2'>Search</button>
                </form>
            </div>
            <div className="crypto-table m-auto rounded-md">
                <div className="table-layout border-b-2">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p className='text-center'>24H Change</p>
                    <p className='text-right market-cap'>Market Cap</p>
                </div>

                {
                    displayCoin.slice(0,10).map( (item, index) => (
                        <Link to={`/coin/${item.id}`} className="table-layout border-b-2" key={index}>
                            <p>
                                {item.market_cap_rank}
                            </p>
                            <div className='flex'>
                                <img src={item.image} alt="" className='w-10' />
                                <p className='p-2'>
                                    {item.name + ' - ' + item.symbol}
                                </p>
                            </div>
                            <p>
                                {currency.symbol} {item.current_price.toLocaleString()}
                            </p>
                            <p className={item.price_change_percentage_24h>0 ? 'green' : 'red'}>
                                {Math.floor(item.price_change_percentage_24h*100)}
                            </p>
                            <p className='text-right market-cap'>
                                {currency.symbol} {item.market_cap.toLocaleString()}
                            </p>
                        </Link>
                    ))
                }

            </div>
        </div>
  )
}

export default Home