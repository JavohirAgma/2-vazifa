import React, { Component } from 'react'

export default class Cardsinfo extends Component {
  render() {
    let produkt = this.props.mach.params
    return (
      <div>
        <h4>{produkt}</h4>
      </div>
    )
  }
}
