import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import Tabs from "./components/Tabs";
import SearchBar from "./components/SearchBar.js";
import ActiveLogo from './components/SelectedLogos';
import InsertLogoButton from './components/InsertLogoButton';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Tabs />
      <SearchBar />
      <ActiveLogo />
      <InsertLogoButton />
    </div>
  );
};

export default App;
