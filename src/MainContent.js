import {React, useState} from 'react';
import reactDom from 'react-dom';

const MainContent = () => {
     
    const [destination, setDestination] = useState();
    const [date, setDate] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const [isdestSubmit, setDestSubmit] = useState(false);
    const [isdateSubmit, setDateSubmit] = useState(false);
 

    
    const handleChange = e => {
        if(e.target.name === 'dest')
        setDestination(e.target.value);
        else{
            setDate(e.target.value);
        }
    }

    const handleSubmit = e => {
       setIsSubmit(true);
       e.preventDefault();
    }
    return (
        
        <div>
            
              <form onSubmit={handleSubmit}>
                <label>Destination</label>
                <input name='dest' type='text' value={destination} required='true' onChange={handleChange} />
                <br/>
                <label>Date</label>
                <input name='date' type='text' value={date} required='false' onChange={handleChange}/>
                <br/>
                <button type='submit'>Submit</button>
              </form>

     
          {(destination && date) ? <h1>The destination is {destination}, on {date}</h1> : <h1> Please enter the required forms </h1> }
        </div>
    )
}

export default MainContent;