import React, {lazy, Suspense} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
const HomePage = lazy(() => import('./containers/HomePage/HomePage') );

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>ABC</div>}>
        <Route path="/" exact component={HomePage}/>
      </Suspense>

    </div>
  );
}

export default App;
