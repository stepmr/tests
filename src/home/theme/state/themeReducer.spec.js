import expect from 'expect';
import themeReducer from './themeReducer.js';

function stateBefore() {
	return {
		color: '#000'
	};
};

describe('themeReducer', () => {
	it('should changed the theme color', () => {
		const action = {
			type: 'UPDATE_THEME_COLOR',
			payload: {
				color: '#fff'
			}
		};
		const actual = themeReducer(stateBefore(), action);
		const expected = {
			color: '#fff'
		};
		expect(actual).toEqual(expected);
	});
});

