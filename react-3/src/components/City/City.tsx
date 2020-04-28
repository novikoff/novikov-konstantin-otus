// @ts-ignore
import React,{ Component } from 'react';
import {connect} from 'react-redux';

import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from "react-router";

import './City.less';
import {dropDownSwitch, asyncGetCityInfo,addToFavorite,removeFromFavorite} from "../../redux/action/actions";



interface IProps{
    onSwitchDropDown?(flag?:boolean):void;
    onGetInfo?(id:number,api_key:string):any;
    onAddToFavorite(id:number):any;
    onRemoveFromFavorite(id:number):any;
    currentCityData:any;
    favorite_arr:number[];
    ApiKey?:string;
    favorite?:boolean;
    id?:number;
}
 interface IState{
  AppReducer:{[key:string]:any};
 }
 
interface IRouterProps {
    id: number;
  }



class City extends Component<IProps>{
    constructor(props:IProps){
        super(props);

        this.props.onGetInfo(this.props.id,this.props.ApiKey);
      }

      componentDidMount() {
      }

     eventAddToFavorite=(e)=>{
        e.preventDefault();
        this.props.onAddToFavorite(this.props.id);
    }
     eventRemoveFromFavorite=(e)=>{
         this.props.onRemoveFromFavorite(this.props.id);
    }
      componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
          if(prevProps.id!=this.props.id){
              this.props.onGetInfo(this.props.id,this.props.ApiKey);
          }
      }

    public dateConverter=(unix_utc:number)=>{
          const date = new Date(unix_utc * 1000);
          return date.getUTCDate()+"."+(date.getUTCMonth()+1)+"."+date.getUTCFullYear();
    }


    render(){
        return (
            <React.Fragment>
                {this.props.currentCityData &&
                <div>
                <h1>{this.props.currentCityData.city.name}, {this.props.currentCityData.city.country}</h1>
                {
                    this.props.favorite_arr.indexOf(Number(this.props.id))!=-1 ?
                        <button className="btn  btn-danger align-self-center" onClick={this.eventRemoveFromFavorite}>Remove from favorite</button>
                        :
                        <button className="btn btn-success align-self-center" onClick={this.eventAddToFavorite}>Add to favorite</button>
                }
                 <div className="row">
                {this.props.currentCityData.list.map((el,index)=>{
                        return(
                                <div className="card cityCard" key={index} >
                                    <div className="card-body">
                                        <h3 className="card-title text-center ">{this.dateConverter(el.dt)}</h3>

                                        <p className="card-text">Temperature: {(el.main.temp).toFixed(1)}&deg;C</p>
                                        <p className="card-text">Feels like: {(el.main.feels_like).toFixed(1)}&deg;C</p>
                                        <p className="card-text">Clouds: &nbsp;
                                            {
                                                el.clouds.all<25?<img src='/images/sun.png' title={String(el.clouds.all)} alt={String(el.clouds.all)} className="cloudIcon" />:
                                                    el.clouds.all<50?<img src='/images/cloudy.png' title={String(el.clouds.all)} alt={String(el.clouds.all)} className="cloudIcon" />:
                                                        el.clouds.all<75?<img src='/images/cloud.png' title={String(el.clouds.all)} alt={String(el.clouds.all)} className="cloudIcon" />:
                                                            <img src='/images/clouds.png' title={String(el.clouds.all)} alt={String(el.clouds.all)} className="cloudIcon" />
                                            }
                                        </p>
                                        <p className="card-text">Humidity: {el.main.humidity}%</p>
                                        <p className="card-text">Pressure: {el.main.pressure}</p>
                                        <p className="card-text">Wind degree: {el.wind.deg}&deg;</p>
                                        <p className="card-text">Wind speed: {el.wind.speed}</p>
                                    </div>
                                </div>
                    )
                    })
                }
                 </div>
                </div>
                }
            </React.Fragment>
        )

        
    }
};

function mapStateToProps(state:IState,ownProps: RouteComponentProps<IRouterProps>) {
    return {
        id: ownProps.match.params.id,
        ApiKey:state.AppReducer.ApiKey,
        dropDownFlag: state.AppReducer.dropDownFlag,
        currentCityData: state.AppReducer.current_city_data,
        favorite_arr:state.AppReducer.favorite_arr,
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        onSwitchDropDown :(flag?)=>dispatch(dropDownSwitch(flag)),
        onGetInfo:(id,api_key)=>{
            dispatch(asyncGetCityInfo(id,api_key))
        },
        onAddToFavorite:(id)=>dispatch(addToFavorite(id)),
        onRemoveFromFavorite:(id)=>dispatch(removeFromFavorite(id)),
    }
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(City))