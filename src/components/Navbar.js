import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme, light ,dark} = this.context
        const theme = isLightTheme ? light : dark;
        console.log(this.context);
        return (
      <nav style={{color:theme.syntax,background:theme.ui}}>
        <h3>Context App</h3>
        <ul>
          <li style={{background:theme.bg}}>Home</li>
          <li style={{background:theme.bg}}>About</li>
          <li style={{background:theme.bg}}>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
