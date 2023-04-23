import {Route,Routes} from 'react-router-dom'
import Dashboard from '../containers/dashboard';
import Content from '../containers/content';
import Analytics from '../containers/analytics/analytics';
import Customization from '../containers/customization';
const AppRoutes = () => {
    return (  
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/content' element={<Content/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/customization' element={<Customization/>}/>
        </Routes>
    );
}
 
export default AppRoutes;