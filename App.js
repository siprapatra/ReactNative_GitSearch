import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createAppContainer, createStackNavigator } from "react-navigation"
import { SafeAreaView } from "react-navigation";
import mainReducer from "./src/store/reducers/MainReducer";
import ReopListScreen from './src/containers/RepoListScreen/index';

const MainNavigator = createAppContainer(
  createStackNavigator({
    homeScreen: ReopListScreen
  }, {
      headerMode:"none"
    })
)

const store = createStore(mainReducer, applyMiddleware(ReduxThunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex:1}}>
          <MainNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
