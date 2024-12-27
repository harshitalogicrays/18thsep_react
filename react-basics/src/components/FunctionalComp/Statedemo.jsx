import React, { useState } from 'react'

const Statedemo = () => {
    let [num1,setNum1] = useState('')
    let [num2,setNum2] = useState('')
    // let [isLoading,setIsLoading] =useState(false)
    // let [products] = useState([])
    // let [user]=useState({fname:"",lname:"",age:""})
    let [total, setTotal] = useState('')
    let handleNum1 = (e)=>{
        // console.log(e.target.value)
        setNum1(e.target.value)
    }
    return (
        <div className='container mt-5 col-6'>
            <div className="mb-4">
                <label className="form-label">Number1</label>
                <input type="text" className="form-control" value={num1} onChange={handleNum1}/>
            </div>
            <div className="mb-4">
                <label className="form-label">Number2</label>
                <input type="text" className="form-control" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
            </div>
            <button type="button" class="btn btn-primary" 
            onClick={()=>setTotal(parseInt(num1)+parseInt(num2))} > Total </button>
            <h1>{total}</h1>
        </div>
    )
}

export default Statedemo
