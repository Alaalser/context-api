import React, { Component } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    static contextType = AuthContext
  render() {
      const {isAuthenticated,toggleAuth} = this.context
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ color: theme.syntax, background: theme.ui }}>
              <h3>Context App</h3>
              <div onClick={toggleAuth}>{isAuthenticated?'Log in':'Log out'}</div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
