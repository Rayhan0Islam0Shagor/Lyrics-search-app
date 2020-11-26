import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Components/Layout/Index';
import { Provider } from './context';
import Lyrics from './Components/Tracks/Lyrics';
import Footer from './Components/Layout/Footer';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
