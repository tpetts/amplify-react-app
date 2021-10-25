import React, { useState, useEffect } from "react";


export const Birthdate = (props) => {
    const {birthday} = props;
  
    
    return(
        <>

        <h2>The user {birthday.login} account was born on: {birthday.created_at}</h2>


        </>
    );
};