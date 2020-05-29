import React,{ Component } from 'react';
//import * as React from "react";
import HelloWorld from './HelloWorld/HelloWorld'; 

 interface myApp{
     name:string;
 }

export default class App extends Component{
    constructor(props){
        super(props);
      }

    render(){
        return (
            <div className="App"><HelloWorld /></div>
        );
    }
};