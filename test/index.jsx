import React from 'react';

export const children = <div />;
export const data = 'data';
export const datas = [undefined, null, 1, true, 'string', [], {}, () => {}];
export const prefix = 'prefix';
export const separator = '-';
export const suffix = 'suffix';
export const options = { prefix, separator, suffix };
export const styleColors = {
    '--color-light': '#FFF',
    '--color-dark': '#000',
};
export const styleSizes = {
    '--size-height': '100px',
    '--size-width': '50px',
};
export const variablesColors = {
    css: {
        light: 'FFF',
        dark: '000',
    },
    prefixVariable: 'color',
    prefixValue: '#',
};
export const variablesSizes = {
    css: {
        height: 100,
        width: 50,
    },
    prefixVariable: 'size',
    suffixValue: 'px',
};
