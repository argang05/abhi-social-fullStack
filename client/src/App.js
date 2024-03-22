import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightBar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';


function App(){
  const { currentUser } = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  // console.log(darkMode);
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
          <div className= {`theme-${darkMode ? "dark" : "light"}`}>
            <NavBar />
            <div style={{display:"flex"}}>
              <LeftBar />
              <div style={{flex:6.5}}>
                <Outlet />
              </div>
              <RightBar />
            </div>
        </div>
      </QueryClientProvider>
    );
  }

  const ProtectedRoute = ({children}) => {
    if(currentUser == null){
      return <Navigate to="/login"/>
    }

    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element : (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>

        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;