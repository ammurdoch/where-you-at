import { connect } from 'react-redux';
import Home from '../components/home';
import { get_location } from '../modules/home';


const maps_state  = (state) => ({

	region: state.home.region

});

const map_action = { get_location };

export default connect(maps_state,map_action)(Home);