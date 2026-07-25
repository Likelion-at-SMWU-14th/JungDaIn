import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CommentPage from "./pages/CommentPage";
import DetailPage from "./pages/DetailPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <CommentPage />,
            },
            {
                path: "detail/:id",
                element: <DetailPage />
            },
            {
                path: "write",
                element: <WritePage />
            },
        ],
    },
]);

export default router;