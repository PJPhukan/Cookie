import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [helloMessage, sethelloMessage] = useState();

  const setCookie = async () => {
    try {
      // const response = await axios.post("http://localhost:3000/set-cookie", {
      //   withCredentials: true,
      // });

      const response = await fetch("/api/set-cookie",{
        credential:"include",
        method:"POST"
      })

      if(!response.ok){
        throw new Error("cors")
      }
    
    } catch (error) {
      console.log("Error occured while connecting with backend", error);
    }
  };
  const sayHello = async () => {
    try {
      const response = await axios.post("http://localhost:3000");
      console.log(response.data);
      sethelloMessage(response.data);
    } catch (error) {
      console.log("Error occured while connecting with backend", error);
    }
  };

  useEffect(() => {
    sayHello();
  }, []);

  return (
    <>
      <h1>Hello 👋🏻👋🏻👋🏻👋🏻</h1>
      <h3>{helloMessage}</h3>
      <button onClick={setCookie}>Set Cookie</button>
    </>
  );
}

export default App;
