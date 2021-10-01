import {Switch, Route } from 'react-router-dom';
// import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        {/* <Route exact path="/register" component={Register}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
