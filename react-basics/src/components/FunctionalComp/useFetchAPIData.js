import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useFetchAPIData = (url) => {
    let [data,setData] =useState([])
    let getData = async()=>{
        try{
           const res =  await axios.get(url)
           setData(res.data)
        }
        catch(err){toast.error(err)}
    }
    
    useEffect(()=>{getData()},[])
  return data
}

export default useFetchAPIData
