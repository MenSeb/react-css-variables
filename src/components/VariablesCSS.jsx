import React, { cloneElement, Children, memo } from 'react';
import PropTypes from 'prop-types';
import { createVariablesCSS, propTypesVariables } from 'utilities';

export function VariablesCSS({
    children,
    inject,
    style,
    tag: Tag,
    variables,
    ...props
}) {
    const cssVariables = createVariablesCSS(variables);

    return inject ? (
        Children.map(children, (child) => {
            return cloneElement(child, {
                style: {
                    ...child.props.style,
                    ...cssVariables,
                },
            });
        })
    ) : (
        <Tag
            {...props}
            data-testid="css-variables"
            style={{ ...style, ...cssVariables }}
        >
            {children}
        </Tag>
    );
}

export default memo(VariablesCSS);

VariablesCSS.defaultProps = {
    inject: false,
    style: {},
    tag: 'div',
};

VariablesCSS.propTypes = {
    children: PropTypes.element.isRequired,
    inject: PropTypes.bool,
    style: PropTypes.object,
    tag: PropTypes.string,
    variables: PropTypes.oneOfType([
        propTypesVariables,
        PropTypes.arrayOf(propTypesVariables),
    ]).isRequired,
};
