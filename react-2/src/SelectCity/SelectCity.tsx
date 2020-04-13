import React,{ Component } from 'react';
//import * as React from "react";


interface IProps{
    children:{[key: string]: any};
    changeSelected(object):any;
}
 interface IState{
    CityArr:{[key: string]: any};
    FullData:{[key: string]: any};
    selected:number;
    value:any;
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

export default class SelectCity extends Component<IProps,IState>{
    constructor(props){
        super(props);
      
        let CityArr = props.children.map(function(el,index) {
            return {
                index:index,
                name:el.properties.city+", "+el.properties.country,
                temp:el.properties.temp,
                clouds: el.properties.clouds,
                humidity: el.properties.humidity,
                pressure: el.properties.pressure,
                feels_like: el.properties.feels_like,
                wind_deg: el.properties.wind_deg,
                wind_speed: el.properties.wind_speed
            };
        });

        this.state = {
            CityArr,
            FullData:props.children,
            selected:null,
            value:"DEFAULT"
         }
        
        //console.log(CityArr);
      }

    /*componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }
    }*/
      
    handleChangeSelected(event){

           this.setState({value:event.target.value})
            let el=this.state.CityArr.find(cityEl=>{
                return cityEl.index==event.target.value
             })

            this.props.changeSelected(
                {
                    index:el.index,
                    name:el.name,
                    temp:el.temp,
                    clouds: el.clouds,
                    humidity: el.humidity,
                    pressure: el.pressure,
                    feels_like: el.feels_like,
                    wind_deg: el.wind_deg,
                    wind_speed: el.wind_speed
                }
            );
    }

    
 
    render(){
        return (
            <div className="SelectComponent mt-2" >
                <select 
                    className="form-control" 
                    name="" 
                    id=""
                    onChange={this.handleChangeSelected.bind(this)}
                    value={this.state.value} 
                    >
                    <option value="DEFAULT" disabled>Select City...</option>
                    {this.state.CityArr.map((el)=>{
                        return <option value={el.index} key={el.index}>{el.name}</option>
                    })}
                </select>
            </div>
        )

        
    }
};