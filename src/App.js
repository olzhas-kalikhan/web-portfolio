import './App.css';
import MainPage from './screens/MainPage';
import NavBar from './components/NavBar';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <NavBar />
      <MainPage />
    </div>
  );
}

export default App;
