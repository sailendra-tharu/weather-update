import AppRouter from "./app/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
