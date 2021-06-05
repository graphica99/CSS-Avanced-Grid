import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
const theme = createMuiTheme({
  overrides: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
