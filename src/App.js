import React, { Component } from 'react'

import { Div } from 'glamorous'

class Box extends Component {
  render() {
    return (
      <Div
        margin="3"
        width={this.props.width}
        height={this.props.height}
        backgroundColor="#cccc00"
      >
        {this.props.ind}
      </Div>
    )
  }
}

const Column = ({ k, width, data }) => (
  <Div width={width} border="1px solid #ff0000">
    {data.filter((x, i) => (i + 1) % k == 0)}
  </Div>
)

const TablesTst = ({ columns, data }) => {}

class App extends Component {
  render() {
    let boxes = [...Array(15)].map((x, i) => (
      <Box ind={i} width={Math.random() * 100} height={Math.random() * 100} />
    ))
    return (
      <Div display="flex" flexDirection="row">
        <Column k={2} width="30%" data={boxes} />
        <Column k={3} width="30%" data={boxes} />
        {[...Array(5)].map((x, i) => (
          <Box
            ind={i + 10}
            width={Math.random() * 100}
            height={Math.random() * 100}
          />
        ))}
        {boxes.map(x => x)}
      </Div>
    )
  }
}

export default App
