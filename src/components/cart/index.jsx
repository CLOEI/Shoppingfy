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
import format from 'date-fns/format';

import BottleIcon from '../SVG/BottleIcon';
import Item from './Item';

import { useData } from '../../utils/DataProvider';

function Cart({ hidden }) {
	const [data, setData] = useData();

	const onSubmit = (e) => {
		e.preventDefault();
		if (Object.keys(data.cart).length === 0) {
			return alert('Your cart is empty');
		} else if (e.target.name.value === '') {
			return alert('Please enter the name');
		}

		setData((prevData) => {
			const date = format(new Date(), 'MMMM yyyy');
			const data = { ...prevData };
			const newHistory = {
				name: e.target.name.value,
				cart: prevData.cart,
				date: format(new Date(), 'EEE dd.MM.yyyy'),
			};

			if (data.history.hasOwnProperty(date)) {
				data.history[date].push(newHistory);
			} else {
				data.history[date] = [newHistory];
			}

			data.cart = {};
			return data;
		});
		e.target.reset();
	};

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
			<VStack
				flexGrow={1}
				pb="5rem"
				alignItems="flex-start"
				w="full"
				px={4}
				pos="relative"
			>
				<Heading as="h2" size="lg" my={4}>
					Shopping list
				</Heading>
				{Object.keys(data.cart).length > 0 ? (
					Object.keys(data.cart).map((category, i) => {
						return (
							<Box w="full" pb={4} key={i}>
								<Text color="brand.gray">{category}</Text>
								{Object.entries(data.cart[category]).map(([key, value], i) => {
									return (
										<Item
											key={i}
											category={category}
											setData={setData}
											name={key}
											quantity={value.quantity}
										/>
									);
								})}
							</Box>
						);
					})
				) : (
					<Text
						pos="absolute"
						top="50%"
						right="50%"
						transform="translate(50%, -50%)"
					>
						No items
					</Text>
				)}
			</VStack>
			<HStack
				as="form"
				h="5rem"
				bg="white"
				px={4}
				pos="fixed"
				w="calc(100% - 3.9rem)"
				bottom="0"
				onSubmit={onSubmit}
			>
				<Input
					variant="outline"
					placeholder="Enter a name"
					name="name"
					min={3}
					autoComplete="off"
				/>
				<Button flexShrink={0} type="submit">
					Save
				</Button>
			</HStack>
		</VStack>
	);
}

export default Cart;
