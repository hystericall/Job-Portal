import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


function Blocking (props) {
  return (
    <div class= "testing-block">
      <h1>{props.title}</h1>
      <p>{props.comment}</p>
    </div>
  );
}

var app = (
  <div>
    <Blocking title = "Title" comment = "Try hard len cac ban" />
    <Blocking title = "Title 2" comment = "Van phai try hard len cac ban" />
  </div>
);
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    app, document.querySelector('#app')
  );
}
);

