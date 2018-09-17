import React from 'react';
import {View} from 'native-base';
import MapView,{PROVIDER_GOOGLE }from 'react-native-maps';

import { StyleSheet } from 'react-native';

const styles = {

	container:{
		flex:1
	},
	map:{
		flex: 1,
		...StyleSheet.absoluteFillObject,
	}
}

export const MapContainer = ({region}) => {
	return(
			<View style={styles.container}>
				<MapView
				  style = {styles.map}
				  showsUserLocation={true}
		          showsMyLocationButton={false}
		          zoomEnabled = {true}
		          region= {region} 
		          provider={PROVIDER_GOOGLE}>
		          
		          <MapView.Marker
		          coordinate = {region}
		          pinColor = "green"/>
        		</MapView>
			</View>
		)
}

export default MapContainer;
