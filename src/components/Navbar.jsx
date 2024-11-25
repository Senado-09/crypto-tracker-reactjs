import React, { useContext } from 'react'
import signup from "../assets/signup.svg";
import wallet from "../assets/wallet.svg";
import { CoinContext } from '../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({name: "usd", Symbol: "$"})
                break;
            }
            case "eur": {
                 setCurrency({name: "eur", Symbol: "€"})
                 break;
            }
        
            default : {
                 setCurrency({name: "usd", Symbol: "$"})
                 break;
            }
        }
    }

  return (
        <div className='border-b-2 text-white'>
            <div className='navbar flex py-8 text-white m-auto ml-8 mr-8'>
                <Link to={`/`} className='flex gap-4 font-semibold text-lg'>
                    <img src={wallet} alt="" className='w-8 max-h-10 bg-white rounded-lg'/>
                    <h1 className='py-2'>Crypto Trackers</h1>
                </Link>
                <ul className='flex gap-10'>
                    <Link to={'/'}><li>Home </li></Link>
                    <li>Feature </li> 
                    <li>Pricing </li>
                    <li>Blog </li>
                </ul>
                <div className='navbar-right flex gap-6'>
                    <select className='rounded-md text-white px-4 py-2' onChange={currencyHandler}>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                    <button type="button" className='flex gap-2 px-2 py-2 text-xl font-semibold bg-white border-none cursor-pointer rounded-lg'>
                        Sign up
                        <img src={signup} alt="" className='w-7 text-primary' />
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Navbar