import React from "react";
import AppLink from "../AppLink";

import styles from "./AppMenu.module.css";

const AppMenu = () => (
  <nav className={styles.root}>
    <AppLink to="/" exact label="Home" />
    <AppLink to="/photoshop-shadow" label="Photoshop Shadow" />
    <AppLink to="/rgb-convertor" label="RGB Convertor" />
    <AppLink to="/url-encode-decode" label="URL Encode/Decode" />
    <AppLink to="/timestamp" label="Timestamp Convertor" />
    <AppLink to="/bezier-curves" label="Bezier Curves" />
    <AppLink to="/base-64" label="Base 64" />
    <AppLink to="/pretty" label="Pretty JSON" />
    <AppLink to="/sha" label="Sha" />
    <AppLink to="/uuid" label="Uuid" />
  </nav>
);

export default AppMenu;
