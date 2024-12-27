import React from 'react'
import Image1 from '../../assets/images/a.jpg'
import Image2 from '../../assets/images/b.jpg'
import Image3 from '../../assets/images/d.jpg'
import Image4 from '../../assets/images/c.jpeg'
const ListRendering = () => {
    let names = ["Amit","Sachin","mahi","Akshay","Monil","Dhaval"]
    let products = [
        {id:1,name:"product1",category:"Cat1",price:3000,image:Image1,stock:3,brand:'brand1'},
        {id:2,name:"product2",category:"Cat2",price:4000,image:Image2,stock:30,brand:'brand2'},
        {id:3,name:"product3",category:"Cat3",price:200,image:Image1,stock:1,brand:'brand3'},
        {id:4,name:"product4",category:"Cat4",price:3300,image:Image3,stock:100,brand:'brand4'},
        {id:5,name:"product5",category:"Cat5",price:1000,image:Image4,stock:20,brand:'brand5'},
        {id:6,name:"product6",category:"Cat6",price:100,image:Image2,stock:11,brand:'brand6'}
    ]
    console.log(products[0].name)
    let result  = names.map((name,index)=><h1 key={index}>{name}</h1>)
  return (
    <div>
      {/* {names} */}

      {/* {names.map((name,index)=>{
        return <h1>{name}</h1>
      })} */}

    {/* {names.map((name,index)=><h1 key={index}>{name}</h1>)} */}

    {/* {result} */}
{/* 
    {products.map((prod,i)=><p>{JSON.stringify(prod)}</p>)} */}
    
    {products.map((prod,i)=><p>{prod.name}</p>)}
    </div>
  )
}

export default ListRendering
