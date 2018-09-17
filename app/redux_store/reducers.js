import { combineReducers } from 'redux';

import { home_reducer as home } from '../routes/Home/modules/home';

export const root_reducer = () => {

	return combineReducers({
		home
	});
}

export default root_reducer;