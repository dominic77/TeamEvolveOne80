import React from 'react';
import platform from './native-base-theme/variables/platform';
import { Provider } from 'react-redux';
import { StyleProvider, getTheme } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/store/initialize-store';

import Main from './src/components/main';
import LoadingView from './src/components/loading';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<LoadingView />} persistor={persistor}>
					<StyleProvider style={getTheme(platform)}>
						<Main />
					</StyleProvider>
				</PersistGate>
			</Provider>
		);
	}
}
