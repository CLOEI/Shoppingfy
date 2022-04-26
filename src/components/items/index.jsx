import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

const tempData = {
	'Fruit and vegetables': [
		'Avocado',
		'Banana',
		'Pre-cooked corn 450g',
		'Mandarin Nadorcott',
		'Piele De Sapo Melon',
	],
	'Meat and Fish': ['Chicken leg box', 'Chicken 1kg', 'Pork fillets 450g'],
	Beverages: ['Coca-cola', 'Fanta', 'Sprite', 'Coca-cola Zero'],
};

function Items() {
	return (
		<Box pl="0.5rem" flexGrow={1}>
			{Object.keys(tempData).map((category, i) => {
				return (
					<div key={i}>
						<Heading as="h2" size="sm" my="1rem">
							{category}
						</Heading>
						{tempData[category].map((item, i) => {
							return <Item name={item} category={category} key={i} />;
						})}
					</div>
				);
			})}
		</Box>
	);
}

export default Items;
