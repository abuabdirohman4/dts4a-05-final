import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
