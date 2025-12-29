import React, { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";


export const GlobalContext = createContext();


export const GlobalProvider = ({children}) =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  useEffect(() =>{
    const fetchData = async () =>{
      try {
        let response = await axios.get("https://ola90.pythonanywhere.com");
        setLoading(false);
        setData(response.data);
      } catch (err) {
        console.error(err.message);
        setError(true);
        setLoading(false)
      }
      
    }
    
    fetchData();
  }, [])
  return (
    <GlobalContext.Provider
      value={{ data, error, loading }}>
        { children }
      </GlobalContext.Provider>
  )
}