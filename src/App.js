import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import Layout from "../src/components/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
