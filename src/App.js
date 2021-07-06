import React from "react";
import Routes from "./components/Routes";
import ShopContextProvider from "./contexts/ShopContext";
import ProductContextProvider from "./contexts/ProductContext";

// Material-UI import
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#778899",
    },
    secondary: {
      main: "#006400",
    },
  },
  typography: {
    h6: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
});

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <ProductContextProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </ProductContextProvider>
      </ShopContextProvider>
    </div>
  );
};

export default App;
