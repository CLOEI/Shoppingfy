import { extendTheme } from '@chakra-ui/react';

// i'm bad at naming :'(
const colors = {
	brand: {
		'bg-0': '#FAFAFE',
		'bg-1': '#FFF0DE',
		purple: '#80485B',
		orange: '#F9A109',
		blue: '#56CCF2',
		gray: '#828282',
		secondary: '#C1C1C4',
	},
};

const fonts = {
	heading: 'Quicksand, sans-serif',
	body: 'Quicksand, sans-serif',
};

const theme = extendTheme({
	colors,
	fonts,
	styles: {
		global: {
			body: {
				bg: 'brand.bg-0',
			},
		},
	},
});

export default theme;
