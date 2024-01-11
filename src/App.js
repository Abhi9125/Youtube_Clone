import "./App.css";
import Body from "./Components/BodyContainer";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
/***
 *
 * Header
 *   -
 *   - search bar
 *   - ser
 *   - user logo
 * body
 *   - aside
 *   - MainConatiner
 *      - uttonn tag
 *      - video contenter
 *
 */

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
