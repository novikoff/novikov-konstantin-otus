import React,{ Component } from 'react';
import HelloWorld from './HelloWorld/HelloWorld'; 
import SelectCity from './SelectCity/SelectCity'; 
import City from './City/City'; 
import { render } from 'react-dom';
const data: {[key: string]: any} = require('./data/data.json');


interface iProps{
    initialValue?:number;
}
 interface IState{
     count:number;
     date:any;
     selectedCity:cityElement
     favoriteCity:cityElement[];
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

export default class App extends Component<iProps,IState>{
    constructor(props){
        super(props);

        this.state = {
            count:props.initialValue?props.initialValue:0,
            date: new Date(),
            favoriteCity:[],
            selectedCity:null
          }
        
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
        this.checkFavorite = this.checkFavorite.bind(this);
      }
    
     
    changeSelected(el:cityElement){
       
        this.setState({
            selectedCity:el
          })
    } 

    checkFavorite(el:cityElement):boolean{
        if(this.state.favoriteCity.length){
            return !!this.state.favoriteCity.find(city=>{
                if(el.index == city.index){
                    return true;
                }
            })
        }
        return false;
    }

    addFavorite(el:cityElement){
       if(!this.checkFavorite(el)){ 
            this.setState({
                favoriteCity:[...this.state.favoriteCity,el]
            })
            
        }
    }

    removeFavorite(el:cityElement){
        this.setState({
            favoriteCity:this.state.favoriteCity.filter(city=>{
                return el.index!=city.index;
            })
        })
    }


    render(){
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="App"><SelectCity  changeSelected={this.changeSelected} >{data.features}</SelectCity></div>
                    </div>
                </div>
                <div className="row mt-3">
                   {
                       this.state.selectedCity!=null && (
                       <City addFavorite={this.addFavorite} removeFavorite={this.removeFavorite} checkFavorite={this.checkFavorite} >{this.state.selectedCity}</City>
                       )
                   }
                   
                </div>
               
                {this.state.favoriteCity.length>0 &&
                <React.Fragment>
                    <div className="row mt-3">
                        <h5>Favorite</h5>
                    </div>
                    <div className="row mt-2">
                    
                    {this.state.favoriteCity.map(el=>{
                        return <City addFavorite={this.addFavorite} removeFavorite={this.removeFavorite} favorite={true} key={el.index} checkFavorite={this.checkFavorite}>{el}</City>
                    })
                    }
                    </div>
                </React.Fragment>
                }  
                   
               
                    
            </div>
        )
        
    }
};