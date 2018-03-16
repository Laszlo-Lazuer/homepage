import React, { Component } from 'react';
import './projects.css';

class CompProjects extends Component {
  render() {
    return <div>
      <ol>
        <li><a href='https://laszlo-lazuer.github.io/React-Snake-Functional' rel="noopener noreferrer" target='_blank'>React Snake Functional Project</a></li>
        <li><a href='https://laszlo-lazuer.github.io/road-to-react/' rel="noopener noreferrer" target='_blank'>React Hacker News Project</a></li>
        <li><a href='https://laszlo-lazuer.github.io/react-redux-hackernews/' rel="noopener noreferrer" target='_blank'>Redux Hacker News Project</a></li>
        <li><a href='https://laszlo-lazuer.github.io/redux-todo/' rel="noopener noreferrer" target='_blank'>Redux To Do Project</a></li>
      </ol>
    </div>;
  }
}


export default CompProjects;
