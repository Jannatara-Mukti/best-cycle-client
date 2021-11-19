import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/shared/Header/Header';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import Explore from './components/Explore/Explore';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import GiveReview from './components/Users/GiveReview/GiveReview';
import ShowReview from './components/Home/ShowReview/ShowReview';
import Pay from './components/Users/Pay/Pay';
import NotFound from './components/NotFound/NotFound';
import LatestNews from './components/Home/LatestNews/LatestNews';
import Footer from './components/shared/Footer/Footer';
import MyOrders from './components/Users/MyOrders/MyOrders';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';
import ManageProducts from './components/Admin/ManageProducts/ManageProducts';
import ManageOrders from './components/Admin/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="App">
       <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <AdminRoute path='/addProduct'>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path='/makeAdmin'>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path='/manageProducts'>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path='/manageOrders'>
                <ManageOrders></ManageOrders>
              </AdminRoute>
              <Route path='/explore'>
                <Explore></Explore>
              </Route>
              <PrivateRoute path='/givereview'>
                <GiveReview></GiveReview>
              </PrivateRoute>
              <Route path='/showreview'>
                <ShowReview></ShowReview>
              </Route>
              <PrivateRoute path='/pay'>
                <Pay></Pay>
              </PrivateRoute>
              <PrivateRoute path='/myOrders'>
                <MyOrders></MyOrders>
              </PrivateRoute>
              <Route path='/latestNews'>
                <LatestNews></LatestNews>
              </Route>
              <PrivateRoute path='/placeOrder/:productId'>
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
