import React from 'react';
import Routes from './routes';
// import Header from './components/Header';


const App = () => {
  return (
    <div>
      {/* Error: Invariant failed: You should not use <Link> outside a <Router></Router> */}
      {/* <Header />  */}
      <Routes />
    </div>
  );
}

export default App;
