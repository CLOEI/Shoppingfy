import {
	MdFormatListBulleted,
	MdOutlineReplay,
	MdInsertChartOutlined,
	MdOutlineShoppingCart,
} from 'react-icons/md';
import { VStack, IconButton, Tooltip } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from './SVG/LogoIcon';

function Navbar() {
	const navigate = useNavigate();

	const toStatistics = () => navigate('/statistics');
	const toHistory = () => navigate('/history');
	const toCart = () => navigate('/cart');
	const toItems = () => navigate('/');

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
			<IconButton
				aria-label="cart"
				icon={<MdOutlineShoppingCart size={20} />}
				rounded="full"
				colorScheme="orange"
				color="white"
				onClick={toCart}
			/>
		</VStack>
	);
}

export default Navbar;
