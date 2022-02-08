import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "index.css";

// custom
import Carousel from "components/Carousel/index";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/donatee";
// import Index from "views/Index.js";
import About from "views/About";
import Stories from "views/Stories";
import Donate from "views/Donate";
import StoryOne from "views/Story_impact_1";
import StoryTwo from "views/Story_impact_2";
import StoryThree from "views/Story_impact_3";
// Programs routes
import ReconsProgram from "views/ReconsProgram";
import LeadershipProgram from "views/LeadershipProgram";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Index} /> */}
      <Route path="/about" component={About} />
      <Route path="/programs/peacebuilding" component={ReconsProgram} />
      <Route path="/programs/peacebuilding" component={LeadershipProgram} />
      <Route path="/donate" exact component={Donate} />
      <Route path="/stories" component={Stories} />
      <Route path="/stories/storyone" exact component={StoryOne} />
      <Route path="/stories/storytwo" exact component={StoryTwo} />
      <Route path="/stories/storythree" exact component={StoryThree} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Landing} />
      <Route path="/carousel" exact component={Carousel} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
