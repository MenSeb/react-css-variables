export function isEmptyString(string) {
    return string === '';
}

export function formatPrefix(data, { prefix = '', separator = '' }) {
    return isEmptyString(prefix) ? data : `${prefix}${separator}${data}`;
}

export function formatSuffix(data, { separator = '', suffix = '' }) {
    return isEmptyString(suffix) ? data : `${data}${separator}${suffix}`;
}

export function format(data, options) {
    return formatSuffix(formatPrefix(data, options), options);
}

export function createValue(value, { sufVal, preVal, sepVal }) {
    return format(value, {
        prefix: preVal,
        separator: sepVal,
        suffix: sufVal,
    });
}

export function createVariable(variable, { sufVar, preVar, sepVar = '-' }) {
    return format(
        format(variable, {
            prefix: preVar,
            separator: sepVar,
            suffix: sufVar,
        }),
        { prefix: '--' },
    );
}

export function createVariables({ vars, ...options }) {
    const variables = {};

    for (const [key, val] of Object.entries(vars)) {
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
