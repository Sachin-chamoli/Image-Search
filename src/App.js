
import './App.css';
import Image from "./component/image"
import axios from "axios";
import { useEffect, useState } from 'react';
function App() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  // const [query, setQuery] = useState("");

    console.log(search);
    // useEffect(()=>{
    //         axios.get("https://api.unsplash.com/photos?client_id=5a7HhRzDE_-OgckBUytK7NtY4KgeEIutRDQgYLKioeE")
    //         .then((data)=>{
    //             if(data){
    //               console.log(data);
    //               setState(data.data);
    //             }
    //         })
    // },[state]);

const handleClick = ()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=50&client_id=5a7HhRzDE_-OgckBUytK7NtY4KgeEIutRDQgYLKioeE`)
    .then((response)=>{
      console.log(response.data);
      setState(response.data.results);
    })
}
   
  return (
    <div className="App">
      <div className='search-container'>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleClick}>Get Images</button>
      </div>
      <div className='imagebox'>
        {state.map((img,key) =>(
              <Image key={img.id} src={img.urls.small}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
