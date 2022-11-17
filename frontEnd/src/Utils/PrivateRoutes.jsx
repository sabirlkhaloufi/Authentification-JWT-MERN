import { Navigate, Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie';
function PrivateRoutes(){
  const [cookie] = useCookies();
  const token = cookie.token;

  return(
    <div>
      {token ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRoutes