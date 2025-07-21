import React, { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import { UseCurrencyHook } from './hooks/currencyHook'

const App = () => {

  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [amountDisable, setAmountDisable] = useState(true)
  

    const fetchedData = UseCurrencyHook(from)
    const options = Object.keys(fetchedData)

    console.log(fetchedData)

    function convert(){
      setConvertedAmount(amount * fetchedData[to] )
    }

  return (
    <div className='w-full h-screen bg-gray-700 flex justify-center items-center'>
      <div className='w-[500px] h-[250px] bg-white'>
        <div className='flex flex-col justify-between h-full px-5 py-3'>
          <InputBox
            label='From'
            amount={amount}
            amountChange={setAmount}
            currency={from}
            onCurrencyChange={setFrom}
            currencyList={options}
          />
          <InputBox 
            label='To'
            amount={convertedAmount}
            amountDisable={amountDisable}
            currency={to}
            onCurrencyChange={setTo}
            currencyList={options}
          />
          <button onClick={convert} className='w-30 bg-blue-500 rounded-xl px-5 py-2 mx-auto cursor-pointer'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App
