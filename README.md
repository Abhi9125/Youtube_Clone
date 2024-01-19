### 17.(BONUS) Machine Coding Interview & Building YouTube

- 00:00 - Intro to Youtube features
- Requirement Clarification
- Features – Discuss the feature that we want to build.
- Tech Stack – Tell the interview what tech we use like below.
-        - Redux --
-        - Tailwind
-        - React Router DOM
-        - Bundler
-        - Jest, React-testing
- 08:00 - 17:37 => Interview Tips & make a Diagram of project that we want to create (Mock UI) and explain it to the interview to approach to make that things.

- 19:18 - npx create-react app my-youtube – create-react app is package that executed here and it give most of the thing that is nessesary to run the react app.
- 21:00 - Installed Packages Explanation
- 24:35 - reportWebVitals.js -->
- 25:45 - <React .StrictMode>
- 28:17 - Command - npm i -D tailwind CSS ad npm tailwind css init.
- 31:10 - 3 command should be there in App.css
  `@tailwind base
@tailwind components
@tailwind utilities`
- 36:38 - Rough blueprint of what we need to build
- Head
- Body
  - Sidebar
  - MenuItems - MainContainer - ButtonList - VideoContainer - VideoCard
    <br>
    `-->>Notes -- Shortcut for creating a component `rafce``
- 39:00 - Coding Starts
- 42:22 - Building Header Component
- 46:34 - Using CSS Grid --> Grid divide the page into 12 part to use grid we write className="grid grid-flow-col"
  Styling Header Component using Tailwind CSS
- 54:22 - Building Search bar <br>
  `Commit - 1`
- 56:28 to 01:06:56 - Building Side Bar We will keep our state of side ar I redux store bcz sidebar I all the component.
- 01:09:06 - npm i @reduxjs/toolkit<br>
  Npm i react-redux
- 01:11:00 -Till 01:15:20 -Building Redux Store
- 01:16:40 - Toggle Functionality
- 01:19:20 - Cursor Pointer
- 01:21:30 - Subscribe to the store
- 01:22:35 - Coding Pattern: Early Return Pattern means return before rendring in the component if case not satisfy.
  `Commit - 2`
- 01:25:25 - Let’s build Main Container

  - Button Component
  - ButtonList Component
  - Props Usage
  - Make list and map the on the list.
    <br>
    `Commit - 3`
  - 01:31:25 - Asking question to interviewer (APIs or Hardcoded)
  - 01:33:30 - YouTune APIs and YouTube API Keys
  - 01:35:00 - How to get own api key.-- go to youtube api key auth.
  - 01:38:12 - API Call - Axios v/s Fetch -- Both are use for fetching the data.
  - 01:45:00 - UseState Hook
  - 01:47:45 - Tips: Don’t use Map function at the first time use the programming.
  - 01:52:00 - Developing Video Card Component
  - 01:58:00 - Calling 50 videos through API
  - 02:01:00- “India” - Regional Code to get popular youtube videos in India
    <br>
    `Commit - 4`
  - 02:02:00 - Routing - npm react router-dom
  - 02:07:00 Report of explanation about Routing once again
  - 02:10:46 Start building “watchpage”
  - 02:13:40 - make “home” as clickable functionality
  - 02:19:00 - Usage of useSearchParams--> read more about it (H.w)
  - 02:21:06 till 02:27:00 - Making WatchPage video fullscreen
  - 02:28:00 - API for Youtube “comments”
  - 02:28:22 -Tips for machine Coding interview
    <br>
    `Commit - 5`

### Learning

## useEffect() - when use return and when not use return inside it.

The useEffect hook is a way to run some code when your component renders or changes. Sometimes, you need to clean up some code when your component unmounts or before it renders again. For example, you may want to remove an event listener or cancel a timer. To do this, you can return a function from your useEffect hook that will do the cleanup. This function is called a cleanup function.<br>
However, sometimes you don’t need to do any cleanup. In that case, you don’t need to return anything from your useEffect hook. If you do return something that is not a function, React will think that it is a cleanup function and try to call it. This will cause an error if the thing you return is not callable, like a number or an object.

## Axios and Fetch are both JavaScript libraries that can be used to make HTTP requests. They have some similarities and differences, which I will explain with examples.

`Similarities`:

Both Axios and Fetch use promises to handle asynchronous requests and responses. This means that they can use the .then() and .catch() methods to handle success and error cases, respectively.
Both Axios and Fetch can send GET and POST requests, as well as other HTTP methods, by specifying the method property in the options object. They can also set custom headers and body data for the requests.
Both Axios and Fetch can parse JSON data from the server, either automatically or manually, by using the response.json() method.
`Differences:`

Axios is a third-party library that needs to be installed from npm, while Fetch is a built-in API that is available in most modern browsers. This means that Axios has wider browser support, but Fetch does not require any installation.
Axios has some extra features that Fetch does not have, such as request timeout, progress events, interceptors, and cancellation. These features can make Axios more convenient and flexible for some use cases, but they can also be implemented with Fetch with some extra code.
Axios uses the data property to send and receive data, while Fetch uses the body property. Axios also automatically converts the data to JSON, while Fetch requires the use of JSON.stringify() and response.json() methods. This means that Axios has less boilerplate code, but Fetch has more control over the data format.
Axios has a simpler way of checking the status of the response, by using the status and statusText properties. Fetch requires the use of the ok property, which is a boolean value that indicates whether the response was successful or not.
Examples:

Here are some examples of how to use Axios and Fetch to send a GET request to a URL and log the response data to the console.

Axios:

```js
// axios
const url = "https://jsonplaceholder.typicode.com/todos/1";
axios
  .get(url)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

fetch:

```js
// fetch
const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Routing

```JS
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

```

## useSearchParam and useParam

useSearchParam is a hook from React Router that lets you read and modify the query string in the URL for the current location. The query string is the part of the URL that starts with a question mark (?). For example, if the URL looks like this:

```JS
https://example.com/search?keyword=react&page=2&sort=asc
```

The query string has three parameters: keyword, page, and sort. Each parameter has a key and a value, separated by an equal sign (=). The key is the name of the parameter, and the value is the data associated with it.

The useSearchParam hook returns an array of two values: the current location’s search params and a function that can be used to update them. The search params are an instance of the URLSearchParams class, which has methods to get, set, append, and delete the query parameters. The function to update the search params works like navigate, but only for the search portion of the URL.

You can use the useSearchParam hook to create dynamic and interactive search features in your app. You can also use it to read the query parameters from the URL and use them to fetch data or filter results. For example, you can use the useSearchParam hook to create a search input that updates the URL as the user types, and then use the keyword parameter to fetch relevant results from an API. Here is a simplified example:

`Syntex of writeing the useSearchParam`<br>
`const [searchParams, setSearchParams] = useSearchParams();`

```JS
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  // This function will be called whenever the text input changes
  const searchHandler = (event) => {
    let search;
    if (event.target.value) {
      search = { keyword: event.target.value };
    } else {
      search = undefined;
    }
    setSearchParams(search, { replace: true });
  };
  // This function will be called whenever the keyword parameter changes
  const fetchResults = () => {
    let keyword = searchParams.get("keyword");
    if (keyword) {
      // Use the keyword to fetch data from an API
      // and display the results
    } else {
      // Clear the results
    }
  };
  // Use the useEffect hook to call fetchResults when the keyword changes
  useEffect(() => {
    fetchResults();
  }, [searchParams.get("keyword")]);
  return (
    <div>
      <input
        value={searchParams.get("keyword")}
        onChange={searchHandler}
        placeholder="Search..."
      />
      {/* Display the results here */}
    </div>
  );
}

```

#### useParam

useParam is a hook from React Router that lets you access the dynamic parts of the URL that were matched by <Route path>. For example, if you have a route like this:

```JS
<Route path="/post/:id" element={<Post />} />

```

Then the useParam hook will return an object with the id value from the URL. You can use the useParam hook inside the <Post> component to access the id value. For example:

```JS
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}

```

    —-------------------------------------------------------------------------------------------------------

18. (Bonus) Advanced Features in YouTube Project
    00:00 - Higher Order Components
    11:21 - Interview Question - Build Search Functionality, Search API
    21:21 - Debouncing
    30:00 - Google Search API
    33:50 - YouTube Search Suggestions API
    35:30 - Make an API Call
    36:26 - Let’s build Debouncing
    44:45 - Make an API call after every key press that if the difference between 2 API calls is <
    200ms, decline the API call
    55:00 - How many times API has been called ?
    01:03:03 - Building Youtube Search Suggestions bar
    01:24:50 - usage of “Data Structures” in Front-end
    01:32:00 - Spread Operator in JavaScript [ES6]
    01:36:00 Creating A Store
    01:44:00 JavaScript Merge Objects (object.aasign())
    01:49:49 - We have achieved a well organized/optimized search [“debouncing”, “cache”] features
    01:55:20 - Developing LRU Cache(Last Recently Used)
    01:59:00 - Interview Question
    N- level nested components(Reddit Example)
    Comments Component
    —----------------------------------------------------------------------------------------------------------------------------
    19.(Bonus) Wrapping up YouTube Project
    00:00 - API key expired - Added new key
    Building Live Chat in Youtube
    Live Chat - Infinite Scroll - Pagination
    Challenges -
    Data Layer(DL) - Get data live
    UI Layer - Update the UI
    11:15 - Data Live
    Web Sockets - API Polling
    16:50 - Does Gmail is webSocket or API Polling?\
    22:50 - Youtube Comment section uses API Polling
    41:33 - Why page does not freeze despite so much API calls?
    49:20 - Building Chat bar
    01:00:00 - Never write “map” as the first. Later after multiple components working fine.
    01:03:00 - Coding Polling(Live)
    Don’t forget to clear the interval or timeout (setInterval, SetTimeout)
    01:05:52 - Lets build a redux store
    Till 01:13:52 - Perfect mock example of writing Redux Code(Slice)
    01:14:00 use “map”
    01:17:00 “Overflow hidden”
    01:18:00 - Random name Generator
    01:20:40 - Random Strings/ Text Generator
    01:23:45 - Reverse Scrolling - “Unshift” in Redux code - “Splice” usage
    01:30:00 - Build a Imput box to write a comment
    01:37:30 - useState
    01:41:00 - Prevent Default Function
    01:47:00 - Push() instead of unShift()
    01:52:05 - To make infinite Scroll
    End
    —-------------------------**_----------------------------------_**-----------------------------------------------------
