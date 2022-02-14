import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Question from '../conponents/Question';


function Home() {
  const [questios, setQuestions] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
        const {data} = await axios.get('/api/poll');
        console.log(data)
        setQuestions(data)
        }
        fetchData()
    },[])


  return (
  <div className='main'>
      <div style={{fontSize: 50, color: 'white', marginBottom: 20}}>Poll application</div>
      {questios.map((question) => (
          <Question key={question._id} question ={question} />
      ))}
  </div>
   
  )
}

export default Home;