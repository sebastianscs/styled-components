import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import  Theme from "./components/theme";
import GlobalStyle from "./components/theme/global-styles";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/movies" element={ <MovieList /> } />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
