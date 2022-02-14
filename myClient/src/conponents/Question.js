import axios from 'axios';
import React, { useState } from 'react'
function Question({question}){
  
    const id = question._id

    const [theOption, setTheOption] = useState()

    async function handleClick(e){
      const poll = question._id;
      const option = theOption;
      console.log(e.target.value)
      const headers = {
        'key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImJhcmJhciAiLCJpYXQiOjE1MTYyMzkwMjJ9.iSKGGiRrRKzike0JF13OrKCYVWUdDuxc_4K47yWod9k'
      };
      const {data} = await axios.put(`/api/poll/${poll}/vote/${option}`, null, {headers});
      console.log(data);
      window.location.reload()
    }

    function handleChange(e){
      setTheOption(e.target.value);
      console.log('hello')
    }

    return (
    <div>
      <div className='optionTitle'>
        {question.title}
      </div>
      {question.options.map((option, index) => {
        let numVotes = option.votes;
        return(
        <div style={{marginBottom: 5}}>
          <input type="radio"
          name={id}
          id={option._id}
          value={index}
          onChange={(e) => handleChange(e)}
          />

<label className='labelOption' htmlFor={option._id}>{option.option} ({numVotes} votes so far)</label>  
          </div>
        )
 })}
       
  
  <button onClick={handleClick}>Submit Vote</button>
    </div>
    )
  }
export default Question;  