import update from 'react-addons-update';
import constants from './actionConsts';
import { Dimensions } from "react-native"

const { GET_CURRENT_LOCATION } = constants;

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;

const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA



export function get_location(){

	return(dispatch) => {

		navigator.geolocation.getCurrentPosition(

				(position) =>  {

					dispatch({
						type:GET_CURRENT_LOCATION,
						payload:position
					});
				},(error) => console.log(error.message),{
					enableHighAccuracy:true,timeout:2000}
			);

	}
}

function handle_get_location(state, action){
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
			latitudeDelta:{
				$set:LATITUDE_DELTA
			},
			longitudeDelta:{
				$set:LONGITUDE_DELTA
			}
		}
	})
}

const ACTION_HANDLERS = {

	GET_CURRENT_LOCATION : handle_get_location

};

const 	initial_state = {
	region:{}
};

export function home_reducer(state = initial_state,action) {

	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;


}



																																																																														