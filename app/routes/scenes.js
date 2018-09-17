import React from 'react';
import{ Actions, Scene } from 'react-native-router-flux';

import homeContainer from './Home/containers/homeContainer';

const scenes = Actions.create(
		 <Scene key = 'root' >
		 	<Scene key = "home" component = {homeContainer} title = "home" initial/>
		 </Scene>
	);
export default scenes;