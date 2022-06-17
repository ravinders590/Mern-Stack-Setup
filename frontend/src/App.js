import './App.css';
import {useState,useEffect} from 'react'
import { gettested } from './Functions/Test';


function App() {

  const [sample,setSample] = useState("Hello World");

  useEffect(()=>{
    gettested().then((res)=>{
      
      setSample(res.name);
    }).catch((err)=>console.log(err))
  },[])

  return (
    <>
    {sample}
    </>
  );
}

export default App;
