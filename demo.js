import ReactDOM from 'react-dom'
import Container from './'
import React from 'react'
import raf from 'raf'

const wrap = document.body.appendChild(document.createElement('div'))
const children = [
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div')
]

document.body.style.fontSize = '5em'
document.body.style.fontFamily = '"Comic Sans", sans-serif'
document.body.style.textTransform = 'uppercase'
children[0].innerHTML = 'just a test'
children[1].innerHTML = 'hello world'
children[2].innerHTML = 'lorem ipsum'
children[3].innerHTML = 'empty space next'

var i = -1
var c = 0
var colors = [
  'red',
  'orange'
]

update()
render()

function update () {
  setTimeout(update, 1000)
  i = (i + 1) % (children.length + 1)
  ReactDOM.render(<div>
    <Container child={children[i]}/>
    <p style={{fontSize:'1rem'}}>Normal React business here, the bit before is working independently.</p>
  </div>, wrap)
}

function render () {
  raf(render)

  c = (c + 0.1) % colors.length
  if (children[i]) {
    children[i].style.color = colors[Math.floor(c)]
    children[i].style.fontSize = (Math.sin(Date.now() / 1000) * 0.5 + 1.5) + 'em'
  }
}
