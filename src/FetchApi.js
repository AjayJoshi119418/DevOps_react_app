import { useEffect, useState } from 'react';
import './temp.css';
function FetchApi() {
    const [pi, spi] = useState("");
    const [pd, spd] = useState({});
    const [location, setLocation] = useState("");

    function print() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pi}&appid=${'69a33d4e32ce897f1db90f15898387f6'}&units=metric`)
            .then(response => response.json())
            .then(data => spd(data))
            .catch(error => console.log(error));
           
        fetch(`https://api.unsplash.com/photos/random?client_id=${'jk8Yguj4bqDXkNTBxUGNnbxyNCn_NH0SvvLtfz-ARws'}&query=${pi}`)
            .then(response => response.json())
            .then(data => setLocation(data?.urls.small_s3))
            .catch(error => console.log(error));
    }
    useEffect(()=>{
    document.body.style.backgroundImage = `url(${location})`
},[location]);
    const handle = (e) => {
        spi(e.target.value);
    }
    return (
        <div className="Form">
            <h1>Temperature</h1>
            <input type="text" onChange={handle} placeholder="Enter City Name" />
            <button onClick={print}>Submit</button>
            {pd.main && (
                <div>
                    <p>Temp : {pd.main.temp}</p>
                </div>
            )}
        </div>
    )
}
export default FetchApi;
