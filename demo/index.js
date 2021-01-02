import React from 'react';
import { render } from 'react-dom';
import { VariablesCSS } from '../src';
import './styles.scss';

const CUBE_COLORS = {
    vars: {
        face1: 'F00',
        face2: '0F0',
        face3: '00F',
        face4: 'FF0',
        face5: 'F0F',
        face6: '0FF',
    },
    preVal: '#',
    preVar: 'color',
};

const CUBE_SIZES = {
    vars: {
        height: 30,
        width: 40,
        depth: 20,
        border: 3,
    },
    preVar: 'size',
    sufVal: 'vmin',
};

const THEME_COLORS = {
    vars: {
        background: '000',
        border: '000',
        text: '000',
        hover: 'F00',
    },
    preVal: '#',
    preVar: 'color',
};

function Demo() {
    return (
        <VariablesCSS inject={true} variables={THEME_COLORS}>
            <section className="css-variables">
                <header className="css-variables__header">
                    <img
                        alt="css variables"
                        className="css-variables__image"
                        src="./logo.svg"
                    />
                    <h2 className="css-variables__title">
                        I was made using CSS variables !
                    </h2>
                </header>
                <div className="css-variables__main">
                    <VariablesCSS
                        className="cube"
                        variables={[CUBE_COLORS, CUBE_SIZES]}
                    >
                        {Array.from({ length: 6 }, (_, index) => (
                            <div className="face" key={index} />
                        ))}
                    </VariablesCSS>
                </div>
                <footer className="css-variables__footer"></footer>
            </section>
        </VariablesCSS>
    );
}

render(<Demo />, document.getElementById('root'));
