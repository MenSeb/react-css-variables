import React from 'react';
import { render } from 'react-dom';
import { CSSVariables } from '~';
import './styles.scss';

const variables = {
    vars: {
        dark: '000',
        light: 'FFF',
    },
    preVal: '#',
    preVar: 'color',
};

function Demo() {
    return (
        <CSSVariables className="css-variables" variables={variables}>
            <div />
        </CSSVariables>
    );
}

render(<Demo />, document.getElementById('root'));
