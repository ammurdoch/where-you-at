import React from 'react';
import {View, Text} from 'react-native';


import MapContainer from './MapContainer';
import { Container } from 'native-base';
class Home extends React.Component{



	componentDidMount(){
		this.props.get_location();
	}

	render(){
		const region = {
			latitude:39.933365,
			longitude:32.859741,
			latitudeDelta:0.0922,
			longitudeDelta:0.0421
		}
		return(
			<Container>
				{this.props.region.latitude &&
				<MapContainer region = {this.props.region}/> }
			</Container>
		);
		
	}
}

export default Home;