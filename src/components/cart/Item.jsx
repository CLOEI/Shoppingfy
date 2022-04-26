import { HStack, Text, Button, IconButton } from '@chakra-ui/react';
import { CgTrashEmpty } from 'react-icons/cg';
import { useState } from 'react';

function Item({ category, name, quantity, setData }) {
	const [toggled, setToggled] = useState(false);

	const toggle = () => setToggled(!toggled);
	const deleteSelf = () => {
		setData((prevData) => {
			const data = { ...prevData };
			delete data.cart[category][name];

			if (Object.keys(data.cart[category]).length === 0) {
				delete data[category];
			}
			return data;
		});
	};
	const decrease = () => {
		setData((prevData) => {
			const data = { ...prevData };
			if (data.cart[category][name].quantity > 1) {
				data.cart[category][name].quantity -= 1;
			}
			return data;
		});
	};
	const increase = () => {
		setData((prevData) => {
			const data = { ...prevData };
			data.cart[category][name].quantity += 1;

			return data;
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
					<Button variant="unstyled" color="orange" onClick={decrease}>
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
					<Button variant="unstyled" color="orange" onClick={increase}>
						+
					</Button>
				</HStack>
			)}
		</HStack>
	);
}

export default Item;
