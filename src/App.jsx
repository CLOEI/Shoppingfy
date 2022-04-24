import { HStack } from '@chakra-ui/react';
import Cart from './components/cart';

import Navbar from './components/Navbar';

function App({ children, cartHidden = true }) {
	return (
		<HStack minH="100vh" alignItems="flex-start" spacing={0}>
			<Navbar />
			{children}
			<Cart hidden={cartHidden} />
		</HStack>
	);
}

export default App;
