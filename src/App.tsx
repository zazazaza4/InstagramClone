import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./pages/AppRouter";


const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
