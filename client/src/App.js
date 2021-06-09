import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './pages/List'
import Create from './pages/Create'
import Update from './pages/Update'
import Login from './pages/Login';
import RequestDetail from './components/RequestDetail';


function App() {
  const [contentStyle, setContentStyle] = useState({
    position:'absolute',
    width: '100%',
    right: 0,
    backgroundColor: '#f2f2f2',
  })
  
  const handleShowSidebar = (width) => {
    setContentStyle({
      ...contentStyle,
      width,
    })
  }
  return (
    <>
      <Router>
        <Navbar showSidebar = {handleShowSidebar}/>
        <div className = "content " style={contentStyle}>
        <Switch>
          <Route path='/' exact component={List} />
          <Route path='/create' component={Create} />
          <Route path='/update' component={Update} />    
          <Route path='/request-detail' component={RequestDetail} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
