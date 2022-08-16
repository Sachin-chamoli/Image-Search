
import './App.css';
import Image from "./component/image"
import axios from "axios";
import { useEffect, useState } from 'react';
function App() {
  const [state, setState] = useState([])
    
    useEffect(()=>{
            axios.get("https://api.unsplash.com/photos?client_id=5a7HhRzDE_-OgckBUytK7NtY4KgeEIutRDQgYLKioeE")
            .then((data)=>{
                console.log(data.data);
                if(data){

                  setState(data.data);
                }
            })
    },[])
  return (
    <div className="App">
   {state.map((img,key) =>(
      <Image key={img.id} src={img.urls.thumb}/>
   ))
   }
    </div>
  );
}

export default App;
