import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ReviewPage from "./pages/ReviewPage";
import CreatePage from "./pages/CreatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // path: "/" 와 동일
        element: <ReviewPage />,
      },
      {
        path: "create",
        element: <CreatePage />,
      },
    ],
  },
]);

export default router;