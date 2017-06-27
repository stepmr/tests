import expect from 'expect';
import quoteReducer from './quoteReducer.js';

function stateBefore() {
	return [
		{
			text: 'hi',
			author: 'Jane Doe',
			id: 1,
			likeCount: 7
		},
		{
			text: 'hi yo',
			author: 'John Doe',
			id: 2,
			likeCount: 0
		}
	]
};

describe('quoteReducer', () => {
	it('should add quotes by id', () => {
		const action = {
			type: 'ADD_QUOTE_BY_ID',
			payload:  {
				text: 'hey',
				author: 'Hong Doe',
				id: 3,
				likeCount: 1
			}
		};
		const actual = quoteReducer(stateBefore(), action);
		const expected = [
			{
				text: 'hi',
				author: 'Jane Doe',
				id: 1,
				likeCount: 7
			},
			{
				text: 'hi yo',
				author: 'John Doe',
				id: 2,
				likeCount: 0
			},
			{
				text: 'hey',
				author: 'Hong Doe',
				id: 3,
				likeCount: 1
			}
		];
		expect(actual).toEqual(expected);
	
	});

	it('should return a previous state when quote like count is neg', () => {
		const action = {
			type: 'UNLIKE_QUOTE_BY_ID',
			payload: {
				id: 2
			}
		};
		const actual = quoteReducer(stateBefore(), action);
		const expected = stateBefore();
		expect(actual).toEqual(expected);
	});
});

