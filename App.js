import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider, getTheme } from 'native-base';
import Main from './src/containers/main';
import store from './src/store/initialize-store';

import platform from './native-base-theme/variables/platform';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<StyleProvider style={getTheme(platform)}>
					<Main />
				</StyleProvider>
			</Provider>
		);
	}
}
