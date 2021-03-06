import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Result from './Result';
import Header from './Header';
import Typography from '../styles/Typography';

/*eslint-disable */

// const Result = () => (
//   <>
//     <Link to="/">Start Over</Link>
//   </>
// );

function App() {
  return (
    <>
      <Typography />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
