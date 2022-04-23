import {
	Box,
	Text,
	HStack,
	Button,
	Icon,
	VStack,
	Input,
} from '@chakra-ui/react';

import BottleIcon from './SVG/BottleIcon';

function Cart({ hidden }) {
	return (
		<VStack
			bg="brand.bg-1"
			minH="100vh"
			display={hidden ? ['none', 'none', 'flex'] : 'flex'}
		>
			<HStack
				bg="brand.purple"
				rounded="lg"
				mx={4}
				mb={2}
				mt={4}
				spacing={4}
				px={[null, null, 4]}
			>
				<Box pos="relative" top="-0.8rem">
					<Icon as={BottleIcon} />
				</Box>
				<VStack spacing={2} alignItems="flex-start">
					<Text color="white">Didn't find what you need?</Text>
					<Button>Add item</Button>
				</VStack>
			</HStack>
			<VStack flexGrow={1} justifyContent="center" pb="5rem">
				<Text>No items</Text>
			</VStack>
			<HStack
				h="5rem"
				bg="white"
				px={4}
				pos="fixed"
				w="calc(100% - 3.9rem)"
				bottom="0"
			>
				<Input variant="outline" placeholder="Enter a name" />
				<Button flexShrink={0}>Save</Button>
			</HStack>
		</VStack>
	);
}

export default Cart;
