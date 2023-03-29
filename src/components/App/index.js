import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { OrdersProvider } from "../../context/OrdersContext";
import Routes from "../../Routes";
import { Container } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <OrdersProvider>
          <Container>
            <Routes />
          </Container>
        </OrdersProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
