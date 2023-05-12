//import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Index from "./pages/welcomePage";

function App() {
  return (
    <>
    <div className="App">
      <Index />
      <Footer />
    </div>
    </>
  );
}
// import "./App.css";
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
//  import Footer from "./Components/Footer";
//  import Index from "./pages/welcomePage";
// import Index from "./pages/dashboard";

// const router = createBrowserRouter([
//   {path: '/', element: <welcomePage />},
//   {path: '/dashboard', element: <dashboard />}
// ]);

// function App() {
//   return (
//     <>
//     <div className="App">
//       <RouterProvider router={router} />;
//       {/* <Index />
//       <Footer /> */}
//     </div>
//     </>
//   );
// }

export default App;

export default App;
