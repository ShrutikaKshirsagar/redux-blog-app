import logo from './logo.svg';
import User from './User';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import Home from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
