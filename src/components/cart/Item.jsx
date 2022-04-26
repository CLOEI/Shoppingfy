import { HStack, Text, Button, IconButton } from '@chakra-ui/react';
import { CgTrashEmpty } from 'react-icons/cg';
import { useState } from 'react';

function Item({ category, name, quantity, setData }) {
	const [toggled, setToggled] = useState(false);

	const toggle = () => setToggled(!toggled);
	const deleteSelf = () => {
		setData((prevData) => {
			const data = { ...prevData };
			const filtered = prevData.cart[category].filter(
				(item) => item.name !== name
			);

			if (filtered.length === 0) {
				delete data.cart[category];
				return { ...data };
			} else {
				return { ...data, cart: { ...data.cart, [category]: filtered } };
			}
		});
	};

	return (
		<HStack justifyContent="space-between" w="full" py={2}>
			<Text fontSize="sm">{name}</Text>
			{!toggled ? (
				<Button
					variant="outline"
					colorScheme="orange"
					rounded="full"
					onClick={toggle}
				>
					{quantity} pcs
				</Button>
			) : (
				<HStack bg="white" rounded="lg" spacing={0}>
					<IconButton
						aria-label="delete item"
						colorScheme="orange"
						onClick={deleteSelf}
					>
						<CgTrashEmpty size={20} />
					</IconButton>
					<Button variant="unstyled" color="orange">
						-
					</Button>
					<Button
						variant="outline"
						colorScheme="orange"
						rounded="full"
						onClick={toggle}
					>
						{quantity} pcs
					</Button>
					<Button variant="unstyled" color="orange">
						+
					</Button>
				</HStack>
			)}
		</HStack>
	);
}

export default Item;
