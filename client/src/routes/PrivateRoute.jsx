import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
     const {user, loading} = useAuth()
     const location = useLocation()
     console.log(loading);
     

     if(loading){
          return <Loader />
     }

     if(user){
          return children 
     }

     return <Navigate state={{from: location}} to='/login'  replace='true' />
};

export default PrivateRoute;