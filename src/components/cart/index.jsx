import {
	Box,
	Text,
	HStack,
	Button,
	Icon,
	VStack,
	Input,
	Heading,
} from '@chakra-ui/react';

import BottleIcon from '../SVG/BottleIcon';
import Item from './Item';

import { useData } from '../../utils/DataProvider';

const tempData = {
	'Fruit and vegetables': [
		{
			name: 'Avocado',
			piece: 3,
		},
		{
			name: 'Pre-cooked corn 450g',
			piece: 1,
		},
	],
	'Meat and Fish': [
		{
			name: 'Chicken 1kg',
			piece: 3,
		},
		{
			name: 'Pork fillets 450g',
			piece: 1,
		},
	],
	Beverages: [
		{
			name: 'Coca-cola',
			piece: 4,
		},
		{
			name: 'Fanta',
			piece: 2,
		},
		{
			name: 'Sprite',
			piece: 1,
		},
	],
	Test: [
		{
			name: 'Coca-cola',
			piece: 4,
		},
		{
			name: 'Fanta',
			piece: 2,
		},
		{
			name: 'Sprite',
			piece: 1,
		},
	],
};

function Cart({ hidden }) {
	const [data, _] = useData();

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
			<VStack flexGrow={1} pb="5rem" alignItems="flex-start" w="full" px={4}>
				<Heading as="h2" size="lg" my={4}>
					Shopping list
				</Heading>
				{Object.keys(data.cart).length > 0 ? (
					Object.keys(data.cart).map((category) => {
						return (
							<Box w="full" pb={4}>
								<Text color="brand.gray">{category}</Text>
								{data.cart[category].map((item) => {
									return <Item category={category} {...item} />;
								})}
							</Box>
						);
					})
				) : (
					<Text>No items</Text>
				)}
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
