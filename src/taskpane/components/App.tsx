import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import SearchBar from "./SearchBar";
import ActiveLogo from './ActiveLogo';
import InsertLogoButton from './InsertLogoButton';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <SearchBar />
      <ActiveLogo />
      <InsertLogoButton />
    </div>
  );
};

export default App;
