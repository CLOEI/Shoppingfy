import { HStack, Text, Icon } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

import { useData } from '../../utils/DataProvider';

function Item({ name, category }) {
	const [_, setData] = useData();
	// Might considerate if this is the best way to do this
	const onClick = () => {
		setData((prevData) => {
			const data = { ...prevData.cart };
			if (data.hasOwnProperty(category)) {
				for (let i = 0; i < data[category].length; i++) {
					if (data[category][i].name === name) {
						data[category][i].quantity += 1;
						return { ...prevData, cart: { ...data } };
					}
				}
			} else {
				data[category] = [];
			}

			data[category].push({
				name,
				quantity: 1,
			});

			return { ...prevData, cart: { ...prevData.cart, ...data } };
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
