import {Route,Switch} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Signup/Signup';
import Order from '../pages/Order/Order';
import Wish from '../pages/Wish/Wish';
import Admin from '../pages/Admin-Home/AdminHome';
import ViewAll from '../pages/Home/ViewAll';

const Routes = () =>
{
    return (
        <>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/signup" component={SignUp}/>
          <Route  path="/order" component={Order}/>
          <Route  path="/wishlist" component={Wish}/>
          <Route  path="/admin" component={Admin}/>
          <Route  path="/view/:category" component={ViewAll}/>
        </Switch>
        </>
    )
}

export default Routes;