import "./App.css";
import Body from "./Components/BodyContainer";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
// import {createBrowserRouter} from
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContianer from "./Components/MainContianer";
import WatchPage from "./Components/WatchPage";
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
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContianer />,
      },
      {
        // /watch?v -- this is Query param
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        {/*** the <RouterProvider> component is the place where you provide
         * the router object to your app, and where the component routing will
         *  happen. Component routing is the process of rendering the appropriate
         *  element for each route, based on the URL and the data. */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
