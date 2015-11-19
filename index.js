import ReactDOM from 'react-dom'
import isDOM from 'is-dom'
import React from 'react'

export default class ElementContainer extends React.Component {
  render () {
    return (
      <div ref='container'/>
    )
  }

  shouldComponentUpdate (nextProps) {
    return this.props.child !== nextProps.child
  }

  componentDidUpdate (prevProps) {
    this._updateChild(prevProps)
  }

  componentDidMount () {
    this._updateChild({})
  }

  _updateChild (prevProps) {
    const wrap = ReactDOM.findDOMNode(this.refs.container)
    const next = this.props.child
    const prev = prevProps.child

    if (next) {
      wrap.appendChild(next)
    }

    if (prev && prev !== next && prev.parentNode === wrap) {
      wrap.removeChild(prev)
    }
  }
}

ElementContainer.propTypes = {
  child: isDOM
}
