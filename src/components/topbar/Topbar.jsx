import './topbar.css';
import {useState} from 'react';

const Topbar = ({setLocation}) => {

    const [inputText, setInputText] = useState('')

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const submitLocation = () => {
        setLocation(inputText)
        setInputText('');
    }

    return (
        <div className="topbar">
            <input className="topbar_location-input" type="text" placeholder="Location" onChange={handleChange} value={inputText}/>
            <button className="topbar_submit-btn" onClick={submitLocation}>Get Forecast</button>
        </div>
    )
}

export default Topbar;