import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";

function App() {
<<<<<<< HEAD
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
=======
  const [details, setDetails] = useState();
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      {showNav && <Nav setShowNav={setShowNav} />}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route
          path="/home/search"
          element={
            <Search
              setDetails={setDetails}
              details={details}
              setShowNav={setShowNav}
            />
          }
        />
        <Route
          path="/home/list"
          element={<List details={details} setShowNav={setShowNav} />}
        />
        <Route path="/home/about" element={<About setShowNav={setShowNav} />} />
        <Route path="/github" element={<Github />} />
        <Route path="*" element={<NotFound setShowNav={setShowNav} />} />
      </Routes>
    </div>
>>>>>>> parent of a9c5bfc (finished)
  );
}

export default App;
