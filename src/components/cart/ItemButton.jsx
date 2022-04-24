import { HStack, Button, useNumberInput, IconButton } from '@chakra-ui/react';
import { CgTrashEmpty } from 'react-icons/cg';
import { useState } from 'react';

function ItemButton({ piece }) {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: piece,
			min: 1,
		});
	const [toggled, setToggled] = useState(false);

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	const toggle = () => setToggled(!toggled);

	return (
		<>
			{!toggled ? (
				<Button
					variant="outline"
					colorScheme="orange"
					rounded="full"
					onClick={toggle}
				>
					{piece} pcs
				</Button>
			) : (
				<HStack bg="white" rounded="lg" spacing={0}>
					<IconButton aria-label="delete item" colorScheme="orange">
						<CgTrashEmpty size={20} />
					</IconButton>
					<Button {...dec} variant="unstyled" color="orange">
						-
					</Button>
					<Button
						variant="outline"
						colorScheme="orange"
						rounded="full"
						onClick={toggle}
					>
						{input.value} pcs
					</Button>
					<Button {...inc} variant="unstyled" color="orange">
						+
					</Button>
				</HStack>
			)}
		</>
	);
}

export default ItemButton;
