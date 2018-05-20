import React from 'react';
import { Container, Content, Text } from 'native-base';
import localize from '../utils/i18n';


const Loading = () => {
	return (
		<Container>
			<Content>
				<Text>{localize('LOADING_TITLE')}</Text>
			</Content>
		</Container>
	);
};
Loading.propTypes = {
};

export default Loading;