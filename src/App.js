import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Route>
          <Route exact path="/">
            <Redirect to="/business" />
          </Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key={"Business"} pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key={"Entertainment"} pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key={"General"} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key={"Health"} pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key={"Science"} pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key={"Sports"} pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key={"Technology"} pageSize={pageSize} country="in" category="technology" /></Route>
        </Route>
      </Router>
    </div>
  );
};

export default App;