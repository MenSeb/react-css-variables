import { format } from './';

export function createValue(
    value,
    { suffixValue, prefixValue, separatorValue },
) {
    return format(value, {
        prefix: prefixValue,
        separator: separatorValue,
        suffix: suffixValue,
    });
}

export function createVariable(
    variable,
    { suffixVariable, prefixVariable, separatorVariable = '-' },
) {
    return format(
        format(variable, {
            prefix: prefixVariable,
            separator: separatorVariable,
            suffix: suffixVariable,
        }),
        { prefix: '--' },
    );
}

export function createVariables({ css, ...options }) {
    const variables = {};

    for (const [key, val] of Object.entries(css)) {
        variables[createVariable(key, options)] = createValue(val, options);
    }

    return variables;
}

export function createVariablesCSS(variables) {
    if (!Array.isArray(variables)) return createVariables(variables);

    let cssVariables = {};

    for (const config of variables) {
        cssVariables = {
            ...cssVariables,
            ...createVariables(config),
        };
    }

    return cssVariables;
}
