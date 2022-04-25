import { HStack, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import ItemButton from './ItemButton';

function Item({ category, name, quantity }) {
	return (
		<HStack justifyContent="space-between" w="full" py={2}>
			<Text fontSize="sm">{name}</Text>
			<ItemButton category={category} name={name} piece={quantity} />
		</HStack>
	);
}

export default Item;
