import {
    createValue,
    createVariable,
    createVariables,
    createVariablesCSS,
} from 'utilities';
import {
    data,
    prefix,
    separator,
    suffix,
    styleColors,
    styleSizes,
    variablesColors,
    variablesSizes,
} from '../';

describe('createValue', () => {
    it('returns and format data with prefix, separator and suffix', () => {
        expect(
            createValue(data, {
                prefixValue: prefix,
                separatorValue: separator,
                suffixValue: suffix,
            }),
        ).toBe(`${prefix}${separator}${data}${separator}${suffix}`);
    });
});

describe('createVariable', () => {
    it('returns and format data with "--", prefix, separator and suffix', () => {
        expect(
            createVariable(data, {
                prefixVariable: prefix,
                separatorVariable: separator,
                suffixVariable: suffix,
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
            createVariablesCSS([variablesColors, variablesSizes]),
        ).toStrictEqual({ ...styleColors, ...styleSizes });
    });
});
