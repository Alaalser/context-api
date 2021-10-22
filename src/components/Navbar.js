import React, { Component } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
  static contextType = AuthContext;
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              const { isAuthenticated, toggleAuth } = authContext;
              return (
                <nav style={{ color: theme.syntax, background: theme.ui }}>
                  <h3>Context App</h3>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Log in' : 'Log out'}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
