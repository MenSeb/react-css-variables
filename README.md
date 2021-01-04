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
    * [With injection](#with-injection)
    * [Without injection](#without-injection)
    * [With multiples sets of css variables](#with-multiples-sets-of-css-variables)
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
        var1: 'val1',
        var2: 'val2',
    },
    prefixValue: 'preVal',
    prefixVariable: 'preVar',
    separatorValue: '_',
    separatorVariable: '-',
    suffixValue: 'sufVal',
    suffixVariable: 'sufVar',
};

// Will results in

{
    '--preVar-var1-sufVar': 'preVal_val1_sufVal',
    '--preVar-var2-sufVar': 'preVal_val2_sufVal',
}
```

The example above shows formatting using every possible options. You don't have to use them all each time, for example, you could format variables names only. See section below for more comprehensive examples.

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
                   xsmall: 5,
                   small: 7.5,
                   medium: 10,
                   large: 12.5,
                   xlarge: 15,
                },
                prefixVariable: 'margin',
                suffixValue: 'px',
            }
        >
            <div style={{ padding: '20px' }} />
        </VariablesCSS>
    );
}
```

```html
<div style="padding: 20px; --margin-xsmall: 5px; --margin-small: 7.5px; --margin-medium: 10px; --margin-large: 12.5px; --margin-xlarge: 15px;">
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
            style={{ display: 'flex' }}
            tag="section"
            variables={
                css: {
                   xsmall: 5,
                   small: 7.5,
                   medium: 10,
                   large: 12.5,
                   xlarge: 15,
                },
                prefixVariable: 'margin',
                suffixValue: 'px',
            }
        >
            <div style={{ padding: '20px' }} />
        </VariablesCSS>
    );
}
```

```html
<section
    className="my-className"
    style="display: flex; --margin-xsmall: 5px; --margin-small: 7.5px; --margin-medium: 10px; --margin-large: 12.5px; --margin-xlarge: 15px;"
>
    <div style="padding: 20px;">
</section>
```

- #### With multiples sets of css variables

You may still use with or without injection. The example below shows multiples sets of css variables with injection.

```jsx
import React from 'react';
import { VariablesCSS } from '@menseb/react-css-variables';

const cssVariablesMargins = {
    css: {
        xsmall: 5,
        small: 7.5,
        medium: 10,
        large: 12.5,
        xlarge: 15,
    },
    prefixVariable: 'margin',
    suffixValue: 'px',
};

const cssVariablesColors = {
    css: {
        red: 'f46060',
        orange: 'ff8364',
        yellow: 'ffb677',
        green: 'acdeaa',
        blue: '8ed6ff',
        indigo: '6886c5',
        violet: 'cca8e9',
    },
    prefixVariable: 'color',
    prefixValue: '#',
};

export default function myComponent() {
    return (
        <VariablesCSS
            inject={true}
            variables={[cssVariablesMargin, cssVariablesColors]}
        >
            <div style={{ padding: '20px' }} />
        </VariablesCSS>
    );
}
```

```html
<div style="padding: 20px; --margin-xsmall: 5px; --margin-small: 7.5px; --margin-medium: 10px; --margin-large: 12.5px; --margin-xlarge: 15px; --color-red: #f46060; --color-orange: #ff8364; --color-yellow: #ffb677; --color-green: #acdeaa; --color-blue: #8ed6ff; --color-indigo: #6886c5; --color-violet: #cca8e9;">
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
|-|-|
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
