import React, { useCallback, useEffect, useRef, useState } from 'react'

const UseCallbackDemo = () => {
    let [data,setData] = useState("")
    let [length,setLength] =useState(8)
    let [numberAllowed,setNumberAllowed] =useState(false)
    let [charAllowed,setCharAllowed] =useState(false)
    // let randomNumberGenerate = ()=>{
    //     let str = "abcdefghijklmnopqrstuvwzyxABCDFEGHIJKLMNOPQRSTUVWXZY"
    //     if(numberAllowed) {str +='0987654321'}
    //     if(charAllowed) {str+='!@#$%&=+-.'}
    //     let string=''
    //     for(let i=1;i<=length;i++){
    //         string+=str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setData(string)
    // }

    let randomNumberGenerate =useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwzyxABCDFEGHIJKLMNOPQRSTUVWXZY"
        if(numberAllowed) {str +='0987654321'}
        if(charAllowed) {str+='!@#$%&=+-.'}
        let string=''
        for(let i=1;i<=length;i++){
            string+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setData(string)
    },[length,numberAllowed,charAllowed])

    useEffect(()=>{
        randomNumberGenerate()
    },[length,numberAllowed,charAllowed])

    let selectRef = useRef()
    let handleCopy=()=>{
        window.navigator.clipboard.writeText(data) ///copy data variable 
        selectRef.current.select()
        selectRef.current.style.fontSize='25px'
    }
  return (
    <>
        <h1> useCallback, useEffect and useRef Demo</h1>
        <div className="container mt-5 col-6">
            <div className="input-group">
                <input type="text" className="form-control" name="data" 
                value={data} ref={selectRef}/>
                <button type="button" class="btn btn-primary" onClick={handleCopy} > copy</button>   
            </div>
            <input type="range" name="length" className='me-1' min={5} max={100}
            value={length} onChange={(e)=>setLength(e.target.value)} /> 
            <label htmlFor="" className='me-3'>Length: ({length})</label>
            <input type="checkbox" name="numberAllowed" className='me-1' 
            onClick={(e)=>setNumberAllowed(!numberAllowed)}/> 
            <label htmlFor="" className='me-3'>Numbers</label>
            <input type="checkbox" name="charAllowed" className='me-1'
            onClick={()=>setCharAllowed(!charAllowed)}/> 
            <label htmlFor="" className='me-3'>Special Characters</label>
        </div>
    </>
  )
}

export default UseCallbackDemo
