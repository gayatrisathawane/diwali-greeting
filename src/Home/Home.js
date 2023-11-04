import React from 'react'
import './Home.css'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    let greetings  = ["“Wishing you a bright and happy Diwali!” “Prayers for love and light to you and your family!From our family to yours, wishes for love, peace and prosperity!” “May hope and happiness shine on you.”", 
    "Just like the colours of rangoli, hope this Diwali brings new smiles, undiscovered avenues, and different perspectives and unbound happiness. Have a wonderful Diwali!",
    "This Diwali illuminates your life with lights and colours. Have a Safe and Green Diwali!!!",
    "Let us keep Diwali holding it close to our hearts for its meaning never ends and its spirit is the warmth and joy of remembering friend"]
  

    const [searchParams] = useSearchParams();
    const to = searchParams.get('to')
    const from = searchParams.get('from')
    const g = searchParams.get('g') >= greetings.length ? 0 : searchParams.get("g") || 0;

   return (
    <div>
        <h1 className='text-center'>Diwali Greetings </h1>

        <div className='greeting-container'>

            <h4>Dear {to}</h4>

            <h3>{greetings[g]}  </h3>
            <h4 className='from-text'>-{from}</h4>



        </div>

       
      
    </div>
  )
}

export default Home
