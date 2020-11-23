import { isEmptyString, format, formatPrefix, formatSuffix } from 'utilities';

const data = 'data';
const datas = [undefined, null, 1, true, 'string', [], {}, () => {}];
const prefix = 'prefix';
const separator = '-';
const suffix = 'suffix';
const options = { prefix, separator, suffix };

describe('isEmptyString', () => {
    it('returns true only for an empty string', () => {
        expect(isEmptyString('')).toBeTruthy();
        datas.forEach((data) => expect(isEmptyString(data)).toBeFalsy());
    });
});

describe('formatPrefix', () => {
    it('returns data if prefix is undefined or an empty string', () => {
        expect(formatPrefix(data, {})).toBe(data);
        expect(formatPrefix(data, { prefix: '' })).toBe(data);
    });

    it('returns and format data with prefix and separator', () => {
        expect(formatPrefix(data, options)).toBe(
            `${prefix}${separator}${data}`,
        );
    });
});

describe('formatSuffix', () => {
    it('returns data if suffix is undefined or an empty string', () => {
        expect(formatSuffix(data, {})).toBe(data);
        expect(formatSuffix(data, { suffix: '' })).toBe(data);
    });

    it('returns and format data with separator and suffix', () => {
        expect(formatSuffix(data, options)).toBe(
            `${data}${separator}${suffix}`,
        );
    });
});

describe('format', () => {
    it('returns and format data with prefix, separator and suffix', () => {
        expect(format(data, options)).toBe(
            `${prefix}${separator}${data}${separator}${suffix}`,
        );
    });
});
