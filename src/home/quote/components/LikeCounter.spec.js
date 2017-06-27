import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import LikeCounter from './LikeCounter.js';
expect.extend(expectJSX);


describe('LikeCounter', () => {

    it('should be a link', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<LikeCounter count={5} />);
        const actual = renderer.getRenderOutput().type;
        const expected = 'a';
        expect(actual).toBe(expected);
    });

    describe('Check active', () => {
        function renderLikeCounter(isActive) {
            const renderer = TestUtils.createRenderer();
            renderer.render(<LikeCounter count={5} isActive={isActive} />);
            return renderer.getRenderOutput().props.className
                .includes('LikeCounter--active');
        }
        it('should show the like count as active', () => {
            expect(renderLikeCounter(true)).toEqual(true);
        });

        it('should show the like count as inactive', () => {
            expect(renderLikeCounter(false)).toEqual(false);
        });

    });

    it('should render like counts.', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<LikeCounter count={5} />);
        const actual = renderer.getRenderOutput();
        const expected = '5 likes';
        expect(actual).toIncludeJSX(expected);
    });

});
