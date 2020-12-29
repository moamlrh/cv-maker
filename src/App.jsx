import "./App.scss";
import Index from "./component/CreateCV";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Provider store={Store}>
      <div className="app">
        <div className="bg-green"></div>
        <Container>
          <Index />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
