export function isEmptyString(string) {
    return string === '';
}

export function formatPrefix(data, { prefix = '', separator = '' }) {
    return isEmptyString(prefix) ? `${data}` : `${prefix}${separator}${data}`;
}

export function formatSuffix(data, { separator = '', suffix = '' }) {
    return isEmptyString(suffix) ? `${data}` : `${data}${separator}${suffix}`;
}

export function format(data, options) {
    return formatSuffix(formatPrefix(data, options), options);
}
