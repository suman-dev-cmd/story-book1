import React, { Component } from 'react';
import {Primary} from '../Button/Button.stories';
import {Large} from '../Input/Input.stories';

export default {
    title:'form/subscription'
}

export const PrimarySubscription = () =>{
    return(
        <>
            <Large />
            <Primary />
        </>
    );
   
}