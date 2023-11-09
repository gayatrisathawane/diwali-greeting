import React from 'react'
import './Home.css'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
// import dotenv from 'dotenv'
// dotenv.config();


const Home = () => {
    let greetings  = ["“Wishing you a bright and happy Diwali!” “Prayers for love and light to you and your family!From our family to yours, wishes for love, peace and prosperity!” “May hope and happiness shine on you.”", 
    "Just like the colours of rangoli, hope this Diwali brings new smiles, undiscovered avenues, and different perspectives and unbound happiness. Have a wonderful Diwali!",
    "This Diwali illuminates your life with lights and colours. Have a Safe and Green Diwali!!!",
    "Let us keep Diwali holding it close to our hearts for its meaning never ends and its spirit is the warmth and joy of remembering friend",
    "Let us keep Diwali holding it close to our hearts for its meaning never ends and its spirit is the warmth and joy of remembering friend",]
  

  

    const [searchParams] = useSearchParams();
    const [to,setTo] = useState(searchParams.get('to'))
    const [from,setFrom ]= useState(searchParams.get('from'))
    const [greetingNumber,setGreetingNumber]= useState(searchParams.get('g') >= greetings.length ? 
    0 :
     searchParams.get("g") || 0)

     const[theme,setTheme]= useState(searchParams.get('t'))
    
   return (
    <div>
        <div className={`greeting-container theme-${theme}`}>
            <h4>Dear {to}</h4>
            <h3>{greetings[greetingNumber]}  </h3>
            <h4 className='from-text'>-{from}</h4>
        </div>

        <div>

          <p>Do you want to create your own Diwali Greeting ? customize it  here 👇</p>

        <p className='url'>{`${process.env.REACT_APP_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${theme}`}</p>

        </div>
          

          <div className='input-field-container'>
            <input type="text" value={to}
            className='input-fields'
            placeholder='Enter name'
           
              onChange={(e)=>{
               setTo(e.target.value)

            }}/>

           <input type="text" value={from}
            placeholder='From'
            className='input-fields'
              onChange={(e)=>{
               setFrom(e.target.value)

            }}/>


            <select  onClick={(e)=>{
                setGreetingNumber(e.target.value)
            }}>
                <option value="0">greet 1</option>
                <option value="1">greet 2</option>
                <option value="2">greet 3</option>
                <option value="3">greet 4</option>
            </select>

            <select  onClick={(e)=>{
                setTheme(e.target.value)
            }}>
                <option value="1">theme 1</option>
                <option value="2">theme 2</option>
                <option value="3">theme 3</option>
                <option value="4">theme 4</option>
            </select>
          </div>
    </div>
  )
}

export default Home
