import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { NotFound } from "./pages/NotFound";
import { Post } from "./pages/Post";
import { useTransition, animated } from "react-spring";

export default function Routes() {
  const location = useLocation();
  const transition = useTransition(location, {
    from: { opacity: 0, transform: "translateY(50px)", position: "absolute" },
    enter: { opacity: 1, transform: "translateY(0px)", position: "absolute" },
    leave: { opacity: 0, transform: "translateY(50px)", position: "absolute" },
  });

  return transition((props, item) => {
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route path="*" component={NotFound} />
      </Switch>
      ;
    </animated.div>;
  });
}
