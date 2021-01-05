import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import {
    createVariablesCSS,
    isChildrenInjected,
    propTypesVariables,
} from 'utilities';

export default function VariablesCSS({
    children,
    inject,
    style,
    tag: Tag,
    variables,
    ...props
}) {
    const cssVariables = createVariablesCSS(variables);

    return inject ? (
        cloneElement(children, {
            style: {
                ...children.props.style,
                ...cssVariables,
            },
        })
    ) : (
        <Tag {...props} style={{ ...style, ...cssVariables }}>
            {children}
        </Tag>
    );
}

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
