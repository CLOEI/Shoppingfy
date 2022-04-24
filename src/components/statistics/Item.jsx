import { Box, HStack, Text } from '@chakra-ui/react';

function Item({ item, color }) {
	return (
		<Box py={1}>
			<HStack justifyContent="space-between" fontWeight="medium">
				<Text>{item.name}</Text>
				<Text>{item.percentage}%</Text>
			</HStack>
			<Box
				pos="relative"
				w="full"
				h="0.5rem"
				rounded="full"
				overflow="hidden"
				my="0.8rem"
				bg="brand.lightGray"
			>
				<Box
					pos="absolute"
					w={`${item.percentage}%`}
					bg={color}
					top={0}
					bottom={0}
				></Box>
			</Box>
		</Box>
	);
}

export default Item;
