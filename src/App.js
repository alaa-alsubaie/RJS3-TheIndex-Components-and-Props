import React, { Component } from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";


class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
           <div className="row">
          <div className="col-2">
          <Sidebar />
          </div>
          <AuthorList authors={authors}/>
        </div>
      </div>
    
    );
  }
}

export default App;
