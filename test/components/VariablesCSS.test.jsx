import React from 'react';
import { render, screen } from '@testing-library/react';
import { VariablesCSS } from 'components';
import { createVariablesCSS } from 'utilities';

const props = {
    children: <div data-testid="children" style={{ color: 'blue' }} />,
    className: 'css-variables',
    inject: true,
    style: {
        color: 'red',
    },
    tag: 'section',
    variables: {
        css: {
            boolean: true,
            number: 100,
            string: 'blue',
        },
    },
};

function getVariables() {
    return screen.getByTestId('css-variables');
}

function getChildren() {
    return screen.getByTestId('children');
}

describe('<VariablesCSS />', () => {
    describe('When inject is false', () => {
        beforeEach(() => render(<VariablesCSS {...props} inject={false} />));

        it('renders with a wrapper', () => {
            expect(getVariables()).toBeInTheDocument();
        });

        it('renders with the tag provided', () => {
            expect(getVariables().tagName).toMatch(RegExp(props.tag, 'i'));
        });

        it('renders with the children provided', () => {
            expect(getChildren()).toBeInTheDocument();
        });

        it('renders with the additionnal props provided', () => {
            expect(getVariables()).toHaveClass(props.className);
        });

        it('renders with the style provided', () => {
            expect(getVariables()).toHaveStyle(props.style);
        });

        it('renders with CSS variables', () => {
            expect(getVariables()).toHaveStyle(
                createVariablesCSS(props.variables),
            );
        });
    });

    describe('When inject is true', () => {
        beforeEach(() => render(<VariablesCSS {...props} />));

        it('renders without a wrapper', () => {
            expect(jest.fn(getVariables)).toThrow();
        });

        it('renders with the children provided', () => {
            expect(getChildren()).toBeInTheDocument();
        });

        it('renders without the additionnal props provided', () => {
            expect(getChildren()).not.toHaveClass(props.className);
        });

        it('renders without the style provided', () => {
            expect(getChildren()).toHaveStyle({ color: 'blue' });
            expect(getChildren()).not.toHaveStyle(props.style);
        });

        it('renders with CSS variables', () => {
            expect(getChildren()).toHaveStyle(
                createVariablesCSS(props.variables),
            );
        });
    });
});
