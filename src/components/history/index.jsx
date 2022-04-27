import { Box, Heading } from '@chakra-ui/react';
import Item from './Item';

import { useData } from '../../utils/DataProvider';

function History() {
	const [data, _] = useData();

	return (
		<Box px="1rem" flexGrow={1}>
			<Heading as="h2" size="lg" my={4}>
				Shopping history
			</Heading>
			{Object.keys(data.history).length > 0 &&
				Object.keys(data.history).map((monthYear, i) => {
					return (
						<div key={i}>
							<Heading as="h3" size="xs" fontWeight="medium" my={6}>
								{monthYear}
							</Heading>
							{data.history[monthYear].map((item, i) => {
								return <Item name={item.name} key={i} />;
							})}
						</div>
					);
				})}
		</Box>
	);
}

export default History;
