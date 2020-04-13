import React,{ Component } from 'react';
import { createGlobalStyle } from 'styled-components';
//import * as React from "react";

import icons from 'glyphicons';
import arrowFont from './fonts/OTF/ArrowsADF.otf';
import './City.less';
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'arrowFont';
    font-style: normal;
    font-weight: normal;
    src:
      url('${arrowFont}') format('opentype'),
  }

.windDirection{
    font-family:'arrowFont';
}
`;


interface IProps{
    children:cityElement;
    addFavorite?(object:cityElement):void;
    removeFavorite?(object:cityElement):void;
    checkFavorite?(object:cityElement):boolean;
    favorite?:boolean;
}
 interface IState{
  favorite:boolean,
  city:cityElement
 }

 interface cityElement {
    index: number;
    name: string;
    temp:string;
    clouds: number;
    humidity: number;
    pressure: number;
    feels_like: string;
    wind_deg: number;
    wind_speed: string;
 }

export default class City extends Component<IProps,IState>{
    constructor(props){
        super(props);
       
        this.state={
            favorite:this.props.favorite?this.props.favorite:this.props.checkFavorite(this.props.children),
            city:this.props.children
        }
        this.handleAddFavorite=this.handleAddFavorite.bind(this)
        this.handleRemoveFavorite=this.handleRemoveFavorite.bind(this)
      }

      componentDidUpdate(prevProps, prevState){
       
        if(prevState.city.index!=this.props.children.index || prevState.favorite != this.props.checkFavorite(this.props.children)){
            this.setState({
                favorite:this.props.checkFavorite(this.props.children),
                city:this.props.children
            })
        }

        
      }


    handleAddFavorite(){
        this.props.addFavorite(this.state.city);
    }
    handleRemoveFavorite(){
        this.props.removeFavorite(this.state.city);
    }

    render(){
        

        return (
            <React.Fragment>
            <GlobalStyle />
            <div className="card cityCard" >
               {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h3 className="card-title text-center "><span className="favoriteFlag">{this.state.favorite?icons.star:icons.starOpen}</span></h3>
                    <h5 className="card-title">{this.state.city.name}</h5>
                    
                    <p className="card-text">Temperature: {Number(this.state.city.temp).toFixed(0)}&deg;C</p>
                    <p className="card-text">Feels like: {Number(this.state.city.feels_like).toFixed(0)}&deg;C</p>
                    <p className="card-text">Clouds: &nbsp;
                    {
                        this.state.city.clouds<25?<img src='/images/sun.png' title={String(this.state.city.clouds)} alt={String(this.state.city.clouds)} className="cloudIcon" />:
                        this.state.city.clouds<50?<img src='/images/cloudy.png' title={String(this.state.city.clouds)} alt={String(this.state.city.clouds)} className="cloudIcon" />:
                        this.state.city.clouds<75?<img src='/images/cloud.png' title={String(this.state.city.clouds)} alt={String(this.state.city.clouds)} className="cloudIcon" />:
                                                  <img src='/images/clouds.png' title={String(this.state.city.clouds)} alt={String(this.state.city.clouds)} className="cloudIcon" />


                    }
                     </p>
                    <p className="card-text">Humidity: {this.state.city.humidity}%</p>
                    <p className="card-text">Pressure: {this.state.city.pressure}</p>
                    <p className="card-text">Wind degree: {this.state.city.wind_deg}&deg;</p>
                   {/* <span className="windDirection" >{this.state.city.wind_deg}
                        
                    this.state.city.wind_deg>45?icons.arrowSW:
                    this.state.city.wind_deg>90?icons.arrowW:
                    this.state.city.wind_deg>135?icons.arrowNW:
                    this.state.city.wind_deg>180?icons.arrowU:
                    this.state.city.wind_deg>225?icons.arrowNE:
                    this.state.city.wind_deg>270?icons.arrowE:
                    this.state.city.wind_deg>315?icons.arrowSE:
                    icons.arrowS
                    
                    
                    </span>*/} 
                   
                    
{/*arrowW: "←"
arrowL: "←"
arrowNW: "↖"
arrowN: "↑"
arrowU: "↑"
arrowNE: "↗"
arrowE: "→"
arrowR: "→"
arrowSE: "↘"
arrowS: "↓"
arrowD: "↓"
arrowSW: "↙"*/}

                    <p className="card-text">Wind speed: {this.state.city.wind_speed}</p>
                    
                    {
                    this.state.favorite?
                        <a href="#" onClick={this.handleRemoveFavorite} className="btn btn-primary align-self-center">Remove from favorite</a>
                    :
                        <a href="#" onClick={this.handleAddFavorite} className="btn btn-primary align-self-center">Add to favorite</a>
                    }
                    
                </div>
            </div>
            </React.Fragment> 
        )

        
    }
};