import React, { cloneElement, Children, memo } from 'react';
import PropTypes from 'prop-types';
import {
    createVariablesCSS,
    isChildrenInjected,
    propTypesVariables,
} from 'utilities';

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
        Children.only(
            cloneElement(children, {
                style: {
                    ...children.props.style,
                    ...cssVariables,
                },
            }),
        )
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
    children: isChildrenInjected,
    inject: PropTypes.bool,
    style: PropTypes.object,
    tag: PropTypes.string,
    variables: PropTypes.oneOfType([
        propTypesVariables,
        PropTypes.arrayOf(propTypesVariables),
    ]).isRequired,
};
