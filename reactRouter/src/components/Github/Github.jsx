import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/varundevgan')
    //     .then((res)=>res.json())
    //     .then(data=>setData(data))
    // },[])
  return (
    <div className='w-full h-[600px] bg-blue-500'>
      <div className='text-center'>
        Github : {data.followers} 
        <img src={data.avatar_url} alt="" />
      </div>
    </div>
  )
}

export default Github

export const GithubFetchedData = async () => {

    const res = await fetch('https://api.github.com/users/varundevgan')
    return res.json()
}
