postcss([
	require('postcss-high-contrast')({
		aggressiveHC: true,
		aggressiveHCDefaultSelectorList: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'th', 'td'],
		aggressiveHCCustomSelectorList: ['div', 'span'],

		backgroundColor: '#000',
		altBgColor: '#fff',

		textColor: '#fff',

		buttonSelector: ['button'],
		buttonColor: '#000',
		buttonBackgroundColor: '#fcff3c',
		buttonBorderColor: 'none',
		
		linkSelectors:  ['a'],
		linkColor: '#fcff3c',
		linkHoverColor: '#fcff3c',

		borderColor: '#fff',
		disableShadow: true,
		
		customSelectors: ['input'],
		customSelectorColor: '#fff',
		customSelectorBackgroundColor: '#000',
		customSelectorBorderdColor: '#fff',
		
		selectorsBlackList: ['textfield'],

		imageFilter: 'invert(100%)',
		imageSelectors: ['img'],

		removeCSSProps: false,
        CSSPropsWhiteList: ['background', 'background-color', 'color', 'border', 'border-top', 'border-bottom',
            'border-left', 'border-right', 'border-color', 'border-top-color', 'border-right-color',
            'border-bottom-color', 'border-left-color', 'box-shadow', 'filter', 'text-shadow']
	})
]);