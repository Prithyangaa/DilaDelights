import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import BlogList from './components/BlogList';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={BlogList} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={() => <Login setAuth={setAuth} />} />
          <Route path="/register" component={() => <Register setAuth={setAuth} />} />
          <Route path="/search" component={Search} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
