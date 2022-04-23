import { HStack, Text, Icon } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

function Item({ name }) {
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
		>
			<Text>{name}</Text>
			<Icon as={MdAdd} color="brand.secondary" />
		</HStack>
	);
}

export default Item;
