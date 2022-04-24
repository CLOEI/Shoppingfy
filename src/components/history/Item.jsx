import { HStack, Text, Icon, Box } from '@chakra-ui/react';
import { MdEventNote } from 'react-icons/md';

function Item({ name }) {
	return (
		<HStack
			px={2}
			py={4}
			bg="white"
			rounded="lg"
			mb="1.5"
			shadow="sm"
			justifyContent="space-between"
		>
			<Text>{name}</Text>
			<HStack color="gray.300">
				<MdEventNote />
				<Text whiteSpace="nowrap">Sun 24.4.2022</Text>
			</HStack>
		</HStack>
	);
}

export default Item;
