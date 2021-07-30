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
        if(e.target.name ==='destButton'){
            setDestSubmit(true);
        }
        else{
            setDateSubmit(true);
        }
        if(isdateSubmit && isdateSubmit) setIsSubmit(true);
    }
    return (
        <div>
            
                <input name='dest' type='text' value={destination} onChange={handleChange} />
                <button name='destButton'  onClick={handleSubmit}>Submit Destination</button>
                <input name='date' type='text' value={date} onChange={handleChange}/>
                <button name='dateButton' onClick={handleSubmit}>Submit Date</button>

            
     
          {isSubmit ? <h1>The destination is {destination}, on {date}</h1> : <h1>nothing here</h1> }
        </div>
    )
}

export default MainContent;