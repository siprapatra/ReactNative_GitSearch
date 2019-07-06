import { combineReducers } from 'redux';

import RepoScreenReducer from './RepoScreenReducer';


export default combineReducers({
    repoReducer: RepoScreenReducer,
});     