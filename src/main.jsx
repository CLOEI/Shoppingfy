import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import theme from '../theme';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';

import Statistics from './components/statistics';
import Items from './components/items';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<App>
								<Items />
							</App>
						}
					/>
					<Route path="/cart" element={<App cartHidden={false} />} />
					<Route
						path="/statistics"
						element={
							<App>
								<Statistics />
							</App>
						}
					/>
				</Routes>
			</Router>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
