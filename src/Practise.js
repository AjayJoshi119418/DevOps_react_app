import {useState} from 'react';
function F1(){
    const name =['Virat','Sehwag', 'Sachin','Rohit','Nehra','Gill','Dravid']
    const [f, filterState] = useState([]);
    const handle = (event) =>{
        const list = name.filter((item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        filterState(list);
    }
    return (
        <div>
            <div>
            <input type="text" onChange={handle}></input>
            </div>
            {
                f.map(name =>(
                    <div>{name}</div>
                ))
            }
        </div>
    );
}
export default F1;