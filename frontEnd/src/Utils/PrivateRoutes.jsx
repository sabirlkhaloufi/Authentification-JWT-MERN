import { Navigate, Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie';
const PrivateRoutes = () => {
    const [cookies, setCookie] = useCookies();
    const auth = cookies;
    console.log(auth);
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes