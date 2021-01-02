import { Children, isValidElement } from 'react';
import PropTypes from 'prop-types';

export const propTypesVariables = PropTypes.shape({
    css: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string,
        ]),
    ).isRequired,
    prefixValue: PropTypes.string,
    prefixVariable: PropTypes.string,
    separatorValue: PropTypes.string,
    separatorVariable: PropTypes.string,
    suffixValue: PropTypes.string,
    suffixVariable: PropTypes.string,
});

export function errorChildren(component) {
    return (
        `Invalid children supplied to ${component}. ` +
        'When using inject={true}, children should be a unique React element.'
    );
}

export function isChildrenInjected(props, propName, componentName) {
    const { inject } = props;

    if (!inject) return null;

    const prop = props[propName];

    if (Children.count(prop) === 1 && isValidElement(prop)) return null;

    return new Error(errorChildren(componentName));
}
