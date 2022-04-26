import { Box, Heading } from '@chakra-ui/react';
import Item from './Item';

const tempData = {
	'April 2022': [
		{
			name: 'Part away party',
			item: null,
		},
		{
			name: 'Chill',
			item: null,
		},
	],
	'March 2022': [
		{
			name: 'Grocery list',
			item: null,
		},
		{
			name: 'Farewell party',
			item: null,
		},
	],
};

function History() {
	return (
		<Box px="1rem" w="full">
			<Heading as="h2" size="lg" my={4}>
				Shopping history
			</Heading>
			{Object.keys(tempData).map((monthYear, i) => {
				return (
					<div key={i}>
						<Heading as="h3" size="xs" fontWeight="medium" my={6}>
							{monthYear}
						</Heading>
						{tempData[monthYear].map((item, i) => {
							return <Item name={item.name} key={i} />;
						})}
					</div>
				);
			})}
		</Box>
	);
}

export default History;
