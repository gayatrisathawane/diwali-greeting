import React from 'react'
import './Home.css'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import copy from './copy.png'
import showToast from 'crunchy-toast';
// import dotenv from 'dotenv'
// dotenv.config();


const Home = () => {
  let greetings = ["एक दिवा लावु जिजाऊचरणी।एक दिवा लावु शिवचरणी। एक दिवा लावु शंभुचरणी।आमचा इतिहास हीच आमची प्रतिष्ठा…..दिपावलीच्या हार्दिक शिवशुभेच्छा….आपल्या घरि सुख समाधान सदैवनांदो हिच जगदंबेचरणी प्रार्थना॥।। जय शिवराय ।।तुम्हाला व तुमच्या कुटुंबियांना दिवाळीच्या हार्दिक शुभेछा !!",
    "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
    "रांगोळीच्या सप्तरंगात सुखाचे दिप उजळू दे,लक्ष्मीच्या पावलांनी घर सुख समृध्दीने भरू दे.दीपावलीच्या शुभक्षणांनी आपली सारी स्वप्न साकार व्हावी | ही दिवाळी आपल्यासाठी एक अनमोल आठवण ठरावी,आणि त्या आठवणीने आपलं आयुष्य अधिकाधिक सुंदर व्हावं,धनलक्ष्मी, धान्यलक्ष्मी, धैर्यलक्ष्मी,शौर्यलक्ष्मी,विद्यालक्ष्मी,कार्यलक्ष्मी, विजयालक्ष्मी, राजलक्ष्मी..!या दिपावलीत या अष्टलक्ष्मी तुमच्यावर धनाचा वर्षाव करोत…दिवाळीच्या लक्ष लक्ष शुभेच्छा…nd",
    "दिवाळीची आली पहाट, रांगोळ्यांचा केला थाटअभ्यंगाला मांडले पाट, उटणी, अत्तरे घमघमाटलाडू, चकल्या कडबोळ्यांनी सजले ताटपणत्या दारांत एकशेसाठ, आकाश दिव्यांची झगमगाट!दिवाळीच्या लक्ष लक्ष शुभेच्छा!"]




  const [searchParams] = useSearchParams();
  const [to, setTo] = useState(searchParams.get('to'))
  const [from, setFrom] = useState(searchParams.get('from'))
  const [greetingNumber, setGreetingNumber] = useState(searchParams.get('g') >= greetings.length ?
    0 :
    searchParams.get("g") || 0)

  const [theme, setTheme] = useState(searchParams.get('t'))

  return (
    <div>
      <div className={`greeting-container theme-${theme}`}>
        <h2 className='text-center diwali-greeting'> ✨🎉 HAPPY DIWALI ....!!🎁🎆</h2>
        <h4 className='to-text'>Dear 💐{to}</h4>
        <h3 className='greeting-text'>{greetings[greetingNumber]}  </h3>
        <h4 className='from-text'>From - 🙏 {from}</h4>
      </div>

      <div>

        <p className='text-center customize-text'>Do you want to create your own Diwali Greeting ? customize it  here 👇</p>

        <p className='url'>{process.env.REACT_APP_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={theme}
        
        <span  onClick={()=>{
        const url = `${process.env.REACT_APP_BASE_URL}?to=$${from}&g=${greetingNumber}&t=${theme}`

        navigator.clipboard.writeText(url);
        showToast(`copied ${url}`, 'success', 3000);


        
      }}>   <img src={copy} alt='copy' height="30px"/></span></p>

      </div>


      <div className='input-field-container'>
        <input type="text" value={to}
          className='input-fields'
          placeholder='Enter name'

          onChange={(e) => {
            setTo(e.target.value)

          }} />

        <input type="text" value={from}
          placeholder='From'
          className='input-fields'
          onChange={(e) => {
            setFrom(e.target.value)

          }} />


        <select onClick={(e) => {
          setGreetingNumber(e.target.value)
        }}  className='input-fields'>
          <option value="0">greet 1</option>
          <option value="1">greet 2</option>
          <option value="2">greet 3</option>
          <option value="3">greet 4</option>
        </select><br/>

        <select onClick={(e) => {
          setTheme(e.target.value)
        }}  className='input-fields'>
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
