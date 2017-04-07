import React from 'react';
import store from '../store'
import { getData } from '../api/bcbc';
getData()

export default React.createClass({

  render() {

    return (

      <h1>Hello world</h1>

    )
  }
})