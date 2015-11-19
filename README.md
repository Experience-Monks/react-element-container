# react-element-container

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Put a native DOM element in your React render tree and easily break out back into vanilla DOM.

React's virtual DOM works very well for a lot of use cases, but not all. Creating and holding onto a canvas is never straightforward, and running a frequently updating render function, e.g. to update a chart, becomes slow due to the overhead of diffing the tree. The latter case *can* be optimised but you need to be familiar with React and its performance characteristics to do it well. Sometimes it's easier just working directly with the DOM.

## Installation

``` bash
npm install --save react react-dom react-element-container
```

`react` and `react-dom` are included as peer dependencies to avoid duplicate versions of React, and as such must be installed in your project alongside `react-element-container`.

## Usage

[![NPM](https://nodei.co/npm/react-element-container.png)](https://www.npmjs.com/package/react-element-container)

`<ElementContainer/>` takes a supplied DOM node and wraps it up in a `<div/>` in your tree:

``` javascript
import ElementContainer from 'react-element-container'
import ReactDOM from 'react-dom'
import React from 'react'

const body = document.body.appendChild(document.createElement('div'))
const canvas = document.createElement('canvas')

ReactDOM.render(
  <div>
    <p>Normal React things</p>
    <ElementContainer child={canvas}/>
  </div>
, body)
```

### `props.child`

The child `HTMLElement` node to use.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/react-element-container/blob/master/LICENSE.md) for details.
