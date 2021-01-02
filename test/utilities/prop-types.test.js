import { checkPropTypes } from 'prop-types';
import { errorChildren, isChildrenInjected } from 'utilities';
import { children } from '../';

const propName = 'children';
const componentName = 'TestComponent';

describe('errorChildren', () => {
    it('returns an error message for isChildrenInjected', () => {
        expect(errorChildren(componentName)).toBe(
            `Invalid children supplied to ${componentName}. ` +
                'When using inject={true}, children should be a unique React element.',
        );
    });
});

describe('isChildrenInjected', () => {
    it('does not validates children if inject is false', () => {
        expect(
            checkPropTypes(
                { children: isChildrenInjected },
                { inject: false },
                propName,
                componentName,
            ),
        ).toBeUndefined();
    });

    it('validates that children is a unique React element otherwise', () => {
        expect(
            checkPropTypes(
                { children: isChildrenInjected },
                { children, inject: true },
                propName,
                componentName,
            ),
        ).toBeUndefined();

        expect(
            jest.fn(() =>
                checkPropTypes(
                    { children: isChildrenInjected },
                    { children: 'test', inject: true },
                    propName,
                    componentName,
                ),
            ),
        ).toThrowError(errorChildren(componentName));
    });
});
