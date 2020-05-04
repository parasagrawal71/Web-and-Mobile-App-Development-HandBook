import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import history from "./history";

import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import StreamDelete from "./components/streams/StreamDelete";

import Header from "./components/Header";

const Routes = () => {
  return (
    // <BrowserRouter history={history}>
    <Router history={history}>
      <Header />
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        {/* <Route path="/streams/edit/:anything" exact component={StreamEdit} /> */}
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
      </div>
      {/* </BrowserRouter> */}
    </Router>
  );
};

export default Routes;
