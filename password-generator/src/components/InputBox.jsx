import React from 'react'

const InputBox = ({
    label,
    amount,
    amountChange,
    amountDisable,
    currencyList,
    onCurrencyChange,
    currency,
}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex flex-col flex-1 max-w-2/3'>
            <label htmlFor="">{label}</label>
            <input 
                value={amount}
                onChange={(e)=>amountChange && amountChange(e.target.value)}
                disabled={amountDisable}
                className='bg-gray-400 outline-none rounded-xl px-4 py-2 text-white'
                type="number"
            />
        </div>
        <div className='flex flex-col items-end'>
            <label htmlFor="">Currency Type</label>
            <select 
                value={currency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyList.map((options)=>(
                    <option key={options}>{options}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox
