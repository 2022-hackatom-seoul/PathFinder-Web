import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Main from './component/Main';
import Result from './component/Result';
import Assets from './component/Assets';
import Calculator from './component/Calculator';
import AboutUs from './component/AboutUs';
import Membership from './component/Membership';
import { Route, Link,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/result" element={<Result />}></Route>
          <Route path="/assets" element={<Assets />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/membership" element={<Membership />}></Route>
		</Routes>
      {/* <Nav/>
      <Main/> */}
    </div>
  );
}

export default App;
