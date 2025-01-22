import React from 'react'

const ErrorDemoChild = ({username}) => {
   /* if(username == "Joker"){
        throw new Error("something went wrong")
    }
    else {
        return (
            <div>
              <h1>Hello {username}</h1>
            </div>
          )
    }
 */

 /*   try{
        if(username == "Joker"){
            throw new Error("something went wrong")
        }
        else {
            return (
                <div>
                  <h1>Hello {username}</h1>
                </div>
              )
        }
    }
    catch(err){
        console.log(err)
    } */

        //error boundary
        if(username == "Joker"){
            throw new Error("something went wrong")
        }
        else {
            return ( <div> <h1>Hello {username}</h1>
                </div>   ) } 
}

export default ErrorDemoChild
