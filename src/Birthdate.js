import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Birthdate = () => {

  // Create user variable and set to empty object
  const [user, setUser] = useState({});

    // Define function to call API
    const fetchBirthday = async() => {
      const response = await axios.get('https://api.github.com/users/tpetts');
      setUser(response.data);
      
    }

    // Call fetchCoins function when the component loads
    useEffect(() => {
      fetchBirthday()
    }, [])
    
    return(
        <>

        <h2>{user.login}</h2>


        </>
    );
};