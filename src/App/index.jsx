import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import async from "../lib/asyncComponent";
import AppMenu from "./components/AppMenu";

import styles from "./App.module.css";

const Home = async(() => import("../routes/Home").then(m => m.default));
const PhotoshopShadow = async(() => import("../routes/PhotoshopShadow").then(m => m.default));
const RgbConvertor = async(() => import("../routes/RgbConvertor").then(m => m.default));
const UrlEncodeDecode = async(() => import("../routes/UrlEncodeDecode").then(m => m.default));
const TimestampConvertor = async(() => import("../routes/TimestampConvertor").then(m => m.default));
const BezierCurves = async(() => import("../routes/BezierCurves").then(m => m.default));
const BaseSixtyFour = async(() => import("../routes/BaseSixtyFour").then(m => m.default));
const Pretty = async(() => import("../routes/Pretty").then(m => m.default));
const Sha = async(() => import("../routes/Sha").then(m => m.default));
const Uuid = async(() => import("../routes/Uuid").then(m => m.default));

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className={styles.root}>
          <AppMenu />
          <main className={styles.content}>
            <Route location={location} exact path="/" component={Home} />
            <Route location={location} path="/photoshop-shadow" component={PhotoshopShadow} />
            <Route location={location} path="/rgb-convertor" component={RgbConvertor} />
            <Route location={location} path="/url-encode-decode" component={UrlEncodeDecode} />
            <Route location={location} path="/timestamp" component={TimestampConvertor} />
            <Route location={location} path="/bezier-curves" component={BezierCurves} />
            <Route location={location} path="/base-64" component={BaseSixtyFour} />
            <Route location={location} path="/pretty" component={Pretty} />
            <Route location={location} path="/sha" component={Sha} />
            <Route location={location} path="/uuid" component={Uuid} />
          </main>
        </div>
      )}
    />
  </Router>
);

export default App;
