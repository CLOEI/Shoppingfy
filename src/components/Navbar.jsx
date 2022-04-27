import {
	MdFormatListBulleted,
	MdOutlineReplay,
	MdInsertChartOutlined,
	MdOutlineShoppingCart,
} from 'react-icons/md';
import {
	VStack,
	IconButton,
	Tooltip,
	Button,
	Box,
	Text,
	Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { useData } from '../utils/DataProvider';
import LogoIcon from './SVG/LogoIcon';

function Navbar() {
	const [data, _] = useData();
	const navigate = useNavigate();

	const toStatistics = () => navigate('/statistics');
	const toHistory = () => navigate('/history');
	const toCart = () => navigate('/cart');
	const toItems = () => navigate('/');

	const itemInCart = Object.values(data.cart).reduce((acc, curr) => {
		return acc + Object.keys(curr).length;
	}, 0);

	return (
		<VStack
			w="3.9rem"
			bg="white"
			minH="100vh"
			justifyContent="space-between"
			py="1rem"
			pos="sticky"
			top="0"
			flexShrink={0}
		>
			<LogoIcon />
			<VStack spacing={10}>
				<Tooltip hasArrow label="items" placement="right">
					<IconButton aria-label="items" variant="ghost" onClick={toItems}>
						<MdFormatListBulleted size={25} />
					</IconButton>
				</Tooltip>
				<Tooltip hasArrow label="history" placement="right">
					<IconButton aria-label="history" variant="ghost" onClick={toHistory}>
						<MdOutlineReplay size={25} />
					</IconButton>
				</Tooltip>
				<Tooltip hasArrow label="statistics" placement="right">
					<IconButton aria-label="statistics" variant="ghost" onClick={toStatistics}>
						<MdInsertChartOutlined size={25} />
					</IconButton>
				</Tooltip>
			</VStack>
			<Button
				aria-label="cart"
				rounded="full"
				colorScheme="orange"
				color="white"
				pos="relative"
				p={2}
				onClick={toCart}
			>
				<Icon as={MdOutlineShoppingCart} w={5} h={5} zIndex="2" />
				{itemInCart > 0 && (
					<Box
						pos="absolute"
						top="-5px"
						right="-10px"
						bg="red.500"
						py={1}
						px={2}
						rounded="lg"
					>
						<Text fontSize="xs">{itemInCart}</Text>
					</Box>
				)}
			</Button>
		</VStack>
	);
}

export default Navbar;
