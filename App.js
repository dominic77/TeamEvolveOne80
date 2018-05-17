import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store/initialize-store';
import { Provider } from 'react-redux';
import Main from './src/containers/main';


export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}
