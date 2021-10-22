import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleButton';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
        <Navbar />
        <BookList />
        <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
