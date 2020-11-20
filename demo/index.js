import React from 'react';
import { render } from 'react-dom';
import './styles.scss';

function Demo() {
    return <div className="css-variables">CSS Variables</div>;
}

render(<Demo />, document.getElementById('root'));
