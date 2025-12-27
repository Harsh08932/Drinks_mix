import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  Landing,
  Error,
  HomeLayout,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./Pages";
import { loader as landingLoader } from "./Pages/Landing.jsx";
import { loader as singleCocktailLoader } from "./Pages/Cocktail.jsx";
import { action as NewsletterAction } from "./Pages/Newsletter.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: "/Newsletter",
        action: NewsletterAction,
        element: <Newsletter />,
      },
      {
        path: "/Cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "/Error",
        element: <Error />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;
