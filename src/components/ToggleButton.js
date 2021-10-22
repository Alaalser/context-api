import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

class ToggleTheme extends React.Component {
    static contextType = ThemeContext
    render() { 
        const {toggleTheme} = this.context
        return <button onClick={toggleTheme}>
            Toggle Theme
        </button>;
    }
}
 
export default ToggleTheme;