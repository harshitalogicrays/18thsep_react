import { ToastContainer } from 'react-toastify'
import './App.css'
import { Outlet } from 'react-router'

function App() {
 
  return (
    <>
      <ToastContainer position="bottom-left"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme="colored"
                   />
    <Outlet/>

{/* <div className='ms-14'>
    <h1>Hello React</h1>
    <h1 class="text-3xl font-bold text-red-500 underline">
    Hello world!
  </h1>
  <button type="button" className='border-2 border-blue-500 p-1.5 rounded-xl bg-amber-300 text-emerald-400 font-bold shadow-lg shadow-cyan-500/50 hover:bg-red-400 hover:text-white transition-all duration-1000 ease hover:text-3xl' onClick={()=>alert("button clicked")}>click me</button>
   </div> */}
    </>
  
  )
}

export default App
