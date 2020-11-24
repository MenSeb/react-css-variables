import {
    createValue,
    createVariable,
    createVariables,
    createVariablesCSS,
    isEmptyString,
    format,
    formatPrefix,
    formatSuffix,
} from 'utilities';

const data = 'data';
const datas = [undefined, null, 1, true, 'string', [], {}, () => {}];
const prefix = 'prefix';
const separator = '-';
const suffix = 'suffix';
const options = { prefix, separator, suffix };
const variablesColors = {
    vars: {
        light: 'FFF',
        dark: '000',
    },
    preVar: 'color',
    preVal: '#',
};
const variablesSize = {
    vars: {
        height: 100,
        width: 50,
    },
    preVar: 'size',
    sufVal: 'px',
};
const styleColors = {
    '--color-light': '#FFF',
    '--color-dark': '#000',
};
const styleSize = {
    '--size-height': '100px',
    '--size-width': '50px',
};

describe('isEmptyString', () => {
    it('returns true only for an empty string', () => {
        expect(isEmptyString('')).toBeTruthy();
        datas.forEach((data) => expect(isEmptyString(data)).toBeFalsy());
    });
});

describe('formatPrefix', () => {
    describe('When prefix is undefined or an empty string', () => {
        it('returns data as a string', () => {
            expect(formatPrefix(100, {})).toBe('100');
            expect(formatPrefix(false, {})).toBe('false');
            expect(formatPrefix(data, {})).toBe(data);
            expect(formatPrefix(data, { prefix: '' })).toBe(data);
        });
    });

    describe('When prefix is not an empty string', () => {
        it('returns and format data with prefix and separator', () => {
            expect(formatPrefix(data, options)).toBe(
                `${prefix}${separator}${data}`,
            );
        });
    });
});

describe('formatSuffix', () => {
    describe('When suffix is undefined or an empty string', () => {
        it('returns data as a string', () => {
            expect(formatSuffix(100, {})).toBe('100');
            expect(formatSuffix(false, {})).toBe('false');
            expect(formatSuffix(data, {})).toBe(data);
            expect(formatSuffix(data, { suffix: '' })).toBe(data);
        });
    });

    describe('When suffix is not an empty string', () => {
        it('returns and format data with separator and suffix', () => {
            expect(formatSuffix(data, options)).toBe(
                `${data}${separator}${suffix}`,
            );
        });
    });
});

describe('format', () => {
    it('returns and format data with prefix, separator and suffix', () => {
        expect(format(data, options)).toBe(
            `${prefix}${separator}${data}${separator}${suffix}`,
        );
    });
});

describe('createValue', () => {
    it('returns and format data with preVal, sepVal and sufVal', () => {
        expect(
            createValue(data, {
                preVal: prefix,
                sepVal: separator,
                sufVal: suffix,
            }),
        ).toBe(`${prefix}${separator}${data}${separator}${suffix}`);
    });
});

describe('createVariable', () => {
    it('returns and format data with "--", preVar, sepVar and sufVar', () => {
        expect(
            createVariable(data, {
                preVar: prefix,
                sepVar: separator,
                sufVar: suffix,
            }),
        ).toBe(`--${prefix}${separator}${data}${separator}${suffix}`);
    });
});

describe('createVariables', () => {
    it('returns and format an object of variables', () => {
        expect(createVariables(variablesColors)).toStrictEqual(styleColors);
    });
});

describe('createVariablesCSS', () => {
    it('returns and format an array of variables object', () => {
        expect(
            createVariablesCSS([variablesColors, variablesSize]),
        ).toStrictEqual({ ...styleColors, ...styleSize });
    });
});
