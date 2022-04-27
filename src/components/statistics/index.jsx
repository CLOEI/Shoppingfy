import { Heading, Box } from '@chakra-ui/react';

import { useData } from '../../utils/DataProvider';
import Item from './Item';

function Statistics() {
	const [data, _] = useData();

	const combinedHistory = combineObject(
		Object.entries(data.history).reduce((acc, [_, value]) => {
			return acc.concat(value.map((item) => item.cart));
		}, [])
	);

	const totalItem = Object.keys(combinedHistory)
		.map((category) => {
			return Object.values(combinedHistory[category]).reduce((acc, value) => {
				return acc + value;
			}, 0);
		})
		.reduce((acc, curr) => acc + curr, 0);

	const sortedItemsPercentage = Object.keys(combinedHistory)
		.map((category) => {
			return Object.entries(combinedHistory[category]).map(([key, value]) => {
				return {
					name: key,
					percentage: ((value / totalItem) * 100).toFixed(0),
				};
			});
		})
		.flat()
		.sort((a, b) => b.percentage - a.percentage);

	const sortedCategoryPercentage = Object.keys(combinedHistory)
		.map((category) => {
			return {
				name: category,
				percentage: (
					(Object.values(combinedHistory[category]).reduce((acc, curr) => {
						return acc + curr;
					}, 0) /
						totalItem) *
					100
				).toFixed(0),
			};
		})
		.sort((a, b) => b.percentage - a.percentage);

	return (
		<Box px="1rem" flexGrow={1}>
			<Box>
				<Heading as="h2" size="lg" my={4}>
					Top items
				</Heading>
				{sortedItemsPercentage.slice(0, 3).map((item, i) => {
					return <Item item={item} color="brand.orange" key={i} />;
				})}
			</Box>
			<Box>
				<Heading as="h2" size="lg" mt={6} mb={4}>
					Top Categories
				</Heading>
				{sortedCategoryPercentage.map((item, i) => {
					return <Item item={item} color="brand.blue" key={i} />;
				})}
			</Box>
		</Box>
	);
}

const combineObject = (arrayOfObject) => {
	return arrayOfObject.reduce(
		(acc, curr) => {
			for (let [key, value] of Object.entries(curr)) {
				for (let item in value) {
					if (acc[key].hasOwnProperty(item)) {
						acc[key][item] += value[item];
					} else {
						acc[key][item] = value[item];
					}
				}
			}
			return acc;
		},
		{
			'Fruit and vegetables': {},
			'Meat and Fish': {},
			Beverages: {},
		}
	);
};

export default Statistics;
