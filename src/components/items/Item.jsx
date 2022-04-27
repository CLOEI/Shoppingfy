import { HStack, Text, Icon, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

import { useData } from '../../utils/DataProvider';

function Item({ name, category }) {
	const [_, setData] = useData();

	const onClick = () => {
		setData((prevData) => {
			const data = { ...prevData };
			if (data.cart.hasOwnProperty(category)) {
				if (data.cart[category].hasOwnProperty(name)) {
					data.cart[category][name] += 1;
				} else {
					data.cart[category][name] = 1;
				}
			} else {
				data.cart[category] = { [name]: 1 };
			}
			return data;
		});
	};

	return (
		<Button
			w="8.75rem"
			display="inline-flex"
			px={2}
			py={6}
			bg="white"
			rounded="lg"
			mr="0.5rem"
			mb="1rem"
			boxShadow="sm"
			justifyContent="space-between"
			onClick={onClick}
		>
			<Text
				fontWeight="normal"
				fontSize="sm"
				whiteSpace="normal"
				textAlign="left"
				lineHeight="5"
			>
				{name}
			</Text>
			<Icon as={MdAdd} color="brand.secondary" />
		</Button>
	);
}

export default Item;
