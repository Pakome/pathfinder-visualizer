import React, { Component } from 'react';
import { Button } from '../Buttons/Button';
import './Navbar.css';

export default class Navbar extends Component {
  state = { clicked: false }

  clearGrid() {
    this.props.clearGrid();
    this.setState({
      algorithm: "Visualize Algorithm",
      maze: "Generate Maze",
      pathState: false,
      mazeState: false,
    });
  }

  generateMaze() {
    this.props.generateMaze();
    this.setState({
      algorithm: "Visualize Algorithm",
      maze: "Generate Maze",
      pathState: false,
      mazeState: false,
    });
  }

  visualizeDijkstra() {
    this.props.visualizeDijkstra();
    this.setState({
      algorithm: "Visualize Algorithm",
      maze: "Generate Maze",
      pathState: false,
      mazeState: false,
    });
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Path Finder<i className="fas fa-compass"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Button onClick={() => this.visualizeDijkstra()}>Visualize</Button>
            {/* // eslint-disable-next-line */}
            <a className="nav-links" onClick={() => this.generateMaze()}>Generate maze</a>
            {/* // eslint-disable-next-line */}
            <a className="nav-links" onClick={() => this.clearGrid()}>Reset grid</a>
          </li>
        </ul>
      </nav>
    )
  }
}
