import { isEmptyString, format, formatPrefix, formatSuffix } from 'utilities';
import { data, datas, options, prefix, separator, suffix } from '../';

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
