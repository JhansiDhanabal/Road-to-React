import './App.css';
import LoginPage from "./pages/LoginPage";
import Restaurantlist from './pages/RestaurantlistPage';
import { Routes,Route } from 'react-router-dom';

//only one element is send
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/restaurant" element={<Restaurantlist></Restaurantlist>}></Route>
    </Routes>
    </div>
  );
}

export default App;
