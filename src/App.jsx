import {useState} from 'react'


import './App.css'



function App() {

    const [color, setColor] = useState("#000000")

    return (

            <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>

                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5 ">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2">
                        <button  onClick={()=> setColor("#d90429")}   className="text-white bg-[#d90429] px-4 py-1 m-1 rounded-lg  ">Red</button>
                        <button onClick={()=> setColor("#ffd60a")}  className="text-white bg-[#ffd60a] px-4 py-1 m-1 rounded-lg  ">Yellow</button>
                        <button onClick={()=> setColor("#0077b6")} className="text-white bg-[#0077b6] px-4 py-1 m-1 rounded-lg  ">Blue</button>
                        <button onClick={()=> setColor("#7209b7")} className="text-white bg-[#7209b7] px-4 py-1 m-1 rounded-lg  ">Violet</button>
                        <button onClick={()=> setColor("#bc6c25")} className="text-white bg-[#bc6c25] px-4 py-1 m-1 rounded-lg  ">Orange</button>
                        <button onClick={()=> setColor("#74c69d")} className="text-white bg-[#74c69d] px-4 py-1 m-1 rounded-lg  ">Green</button>
                        <button onClick={()=> setColor("#38b000")} className="text-white bg-[#38b000] px-4 py-1 m-1 rounded-lg  ">yellowgreen</button>
                        <button onClick={()=> setColor("#006d77")} className="text-white bg-[#006d77] px-4 py-1 m-1 rounded-lg  ">Turquoise</button>
                        <button onClick={()=> setColor("#ff0054")} className="text-white bg-[#ff0054] px-4 py-1 m-1 rounded-lg  ">Pink</button>
                        <button onClick={()=> setColor("#22223b")} className="text-white bg-[#22223b] px-4 py-1 m-1 rounded-lg ">Gray</button>


                    </div>
                </div>

            </div>

    )
}

export default App
