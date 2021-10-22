import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleButton';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
