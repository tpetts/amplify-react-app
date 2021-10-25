import React, { useState, useEffect } from "react";


export const Birthdate = (props) => {
    const {user} = props;
  
    
    return(
        <>

        <h2>The user {user.login} account was born on: {user.created_at}</h2>


        </>
    );
};