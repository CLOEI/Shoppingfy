import { Heading, Box, HStack, Text } from '@chakra-ui/react';

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
			piece: 2,
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

function Statistics() {
	const totalItem = Object.keys(tempData)
		.map((category) => {
			return tempData[category].reduce((acc, curr) => {
				return acc + curr.piece;
			}, 0);
		})
		.reduce((acc, curr) => acc + curr, 0);

	const sortedItemsPercentage = Object.keys(tempData)
		.map((category) => {
			return tempData[category].map((item) => {
				return {
					name: item.name,
					percentage: ((item.piece / totalItem) * 100).toFixed(0),
				};
			});
		})
		.flat()
		.sort((a, b) => b.percentage - a.percentage);

	const sortedCategoryPercentage = Object.keys(tempData)
		.map((category) => {
			return {
				name: category,
				percentage: (
					(tempData[category].reduce((acc, curr) => {
						return acc + curr.piece;
					}, 0) /
						totalItem) *
					100
				).toFixed(0),
			};
		})
		.sort((a, b) => b.percentage - a.percentage);

	return (
		<Box px="1rem" w="full">
			<Box>
				<Heading as="h2" size="lg" my={4}>
					Top items
				</Heading>
				{sortedItemsPercentage.slice(0, 3).map((item) => {
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
							>
								<Box
									pos="absolute"
									w={`${item.percentage}%`}
									bg="brand.orange"
									top={0}
									bottom={0}
								></Box>
							</Box>
						</Box>
					);
				})}
			</Box>
			<Box>
				<Heading as="h2" size="lg" mt={6} mb={4}>
					Top Categories
				</Heading>
				{sortedCategoryPercentage.map((item) => {
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
							>
								<Box
									pos="absolute"
									w={`${item.percentage}%`}
									bg="brand.blue"
									top={0}
									bottom={0}
								></Box>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}

export default Statistics;
