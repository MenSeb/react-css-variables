<div align="center">
    <img
        alt="React CSS Variables"
        height="250"
        src="https://github.com/MenSeb/react-css-variables/blob/master/demo/logo.svg"
        width="250"
    />
    <h1>
        React CSS Variables
    </h1>
    <p>
        Use CSS variables with React.
    </p>
</div>

<hr>

[![Build Status](https://travis-ci.com/MenSeb/react-css-variables.svg?token=8TzPeku6xVPzgovguE6A&branch=master)](https://travis-ci.com/MenSeb/react-css-variables)
[![CodeFactor](https://www.codefactor.io/repository/github/menseb/react-css-variables/badge?s=d3b4606115f45a496c1e67e48d9651fba4afdd04)](https://www.codefactor.io/repository/github/menseb/react-css-variables)
[![Coverage Status](https://coveralls.io/repos/github/MenSeb/react-css-variables/badge.svg?branch=master)](https://coveralls.io/github/MenSeb/react-css-variables?branch=master)
![David](https://img.shields.io/david/MenSeb/react-css-variables)
![David](https://img.shields.io/david/dev/MenSeb/react-css-variables)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
![NPM](https://img.shields.io/npm/l/@menseb/react-css-variables)
![NPM](https://img.shields.io/npm/v/@menseb/react-css-variables)

## Table of contents

* [Installation](#installation)
* [How it works](#how-it-works)
* [How to use](#how-to-use)
* [PropTypes](#proptypes)
* [Scripts](#scripts)
* [Code of conduct](#code-of-conduct)
* [Liscence](#liscence)

## Installation

```bash
npm i @menseb/react-css-variables
```

## How it works

This package create and expose css variables based on the format you want to give them. Each variable name and variable value may be format using a separator, a prefix and a suffix.

Example :

```javascript
const variables = {
    css: {
        background: '000',
        border: 'FFF',
    },
    prefixValue: '#',
    prefixVariable: 'color,
    separatorVariable: '-',
};

// Will results in

{
    'color-background': '#000',
    'color-border': '#FFF',
}
```

## How to use

- #### With injection

    - Does not override its children style
    - Does not render as a container

```jsx
import React from 'react';
import { VariablesCSS } from '@menseb/react-css-variables';

export default function myComponent() {
    return (
        <VariablesCSS
            inject={true}
            variables={
                css: {
                   bottom: 10,
                   top: 10,
                },
                prefixVariable: 'margin',
                suffixValue: 'px',
            }
        >
            <div style={'padding': '20px'} />
        </VariablesCSS>
    );
}
```

```html
<div style="padding: 20px; margin-bottom: 10px; margin-top: 10px;">
```

- #### Without injection

    - Does not override its own style
    - Renders as a container with style
    - Renders with the HTML tag provided
    - Renders with additionnal props

```jsx
import React from 'react';
import { VariablesCSS } from '@menseb/react-css-variables';

export default function myComponent() {
    return (
        <VariablesCSS
            className="my-className"
            inject={false}
            style={'display': 'flex'}
            tag="section"
            variables={
                css: {
                   bottom: 10,
                   top: 10,
                },
                prefixVariable: 'margin',
                suffixValue: 'px',
            }
        >
            <div style={'padding': '20px'} />
        </VariablesCSS>
    );
}
```

```html
<section
    className="my-className"
    style="display: flex; margin-bottom: 10px; margin-top: 10px;"
>
    <div style="padding: 20px;">
</section>
```

## PropTypes

| property | type | required | default |
|----------|------|----------|---------|
| children | React Node or React Element | true | none |
| inject | Boolean | false | false |
| style  | Object | false | {} |
| tag  | String | false | div |
| variables  | Variables Shape or Array of Variables Shape | true | none |

- #### Variables Shape

| property | type |
|-|-|-|-|
| css | Object of Boolean, Number or String |
| prefixValue | String |
| prefixVariable | String |
| separatorValue | String |
| separatorVariable | String |
| suffixValue | String |
| suffixVariable | String |

## Scripts

See [scripts](/package.json/) from the ```package.json``` file.

## Code of conduct

See [code of conduct](/CODE_OF_CONDUCT.md/) from the ```CODE_OF_CONDUCT.md``` file.

## License

See [license](/LICENSE.md/) from the ```LICENSE.md``` file.
