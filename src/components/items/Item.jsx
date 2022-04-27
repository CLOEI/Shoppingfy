import { HStack, Text, Icon } from '@chakra-ui/react';
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
		<HStack
			w="8.75rem"
			display="inline-flex"
			px={2}
			py={3}
			bg="white"
			rounded="lg"
			mr="0.5rem"
			mb="1rem"
			boxShadow="sm"
			justifyContent="space-between"
			onClick={onClick}
		>
			<Text>{name}</Text>
			<Icon as={MdAdd} color="brand.secondary" />
		</HStack>
	);
}

export default Item;
