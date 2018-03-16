import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './header.css';
import CompHome from '../Home';
import CompAbout from '../About';
import CompProjects from '../Projects';

const Home = () => (
  <CompHome />
)

const About = () => (
  <CompAbout />
)

const Projects = () => (
  <CompProjects />
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Header = () => (
  <Router>
    <div className='ll-header'>
      <p className='warn'>[WIP]</p>
      <nav className='nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/projects.html">test</Link></li>
        </ul>
      </nav>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/projects.html"/>
    </div>
  </Router>
)

export default Header;
