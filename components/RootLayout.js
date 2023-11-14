import React from "react";
import NavigationBar from "./NavigationBar";
import classes from "./RootLayout.module.css";
import SearchBar from "./SearchBar";

export default function Rootlayout(props) {
  return (
    <>
      <div className={classes.mainFlex}>
        <NavigationBar />
        <SearchBar />
        <div>{props.children}</div>
      </div>
    </>
  );
}
