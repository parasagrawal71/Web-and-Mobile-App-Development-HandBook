import React from 'react';
import { BrowserRouter, Route, Link, HashRouter, MemoryRouter } from 'react-router-dom';

const PageOne = () => {
  return <div>
    PageOne
    {/* BAD !!! */}
    {/* <a href="/pagetwo">Navigate to PageTwo</a>   */}
    <br />
    <Link to="/pagetwo">Navigate to PageTwo With React Router</Link> 
    {/* SPA Single Page Application */}
  </div>;
}

const PageTwo = () => {
  return <div>
    PageTwo
    {/* BAD !!! */}
    {/* <a href="/">Navigate to PageOne</a>  */}
    <br />
    <Link to="/">Navigate to PageOne With React Router</Link>
  </div>;
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* exact means exact={true}. If only keyword is written it means keyword={true} */}
        <Route path="/" exact component={PageOne} />
        {/* <Route path="/" component={PageOne} /> */}
        <Route path="/pagetwo" component={PageTwo} />
        {/* <Route path="/pagetwo/2" component={PageTwo} /> */}
      </div>
    </BrowserRouter>

    // <HashRouter>
    //   <div>
    //     <Route path="/" exact component={PageOne} />
    //     <Route path="/pagetwo" component={PageTwo} />
    //   </div>
    // </HashRouter>

    // <MemoryRouter>
    //   <div>
    //     <Route path="/" exact component={PageOne} />
    //     <Route path="/pagetwo" component={PageTwo} />
    //   </div>
    // </MemoryRouter>
  );
}

export default App;
