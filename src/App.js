
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SidebarDash from './components/sidebarDash/SidebarDash';
import MyDashboard from './pages/myDashboard/MyDashboard';
import MyInsights from './pages/myInsights/MyInsights';
import MyOrders from './pages/myOrders/MyOrders';
import MyProducts from './pages/myProducts/MyProducts';
import MyQutations from './pages/myQutations/MyQutations';
import MainContentHeader from './components/mainContentHeader/MainContentHeader';
import NewCatalogItemForm from './components/newCatalogItemForm/NewCatalogItemForm';

function App() {
  return (
    <div className='dashboard__handler'>
      
        <div className='row m-0'>
          <div className='col-lg-4 p-0 m-0'>
            <SidebarDash />
          </div>
          <div className='col-lg-8 p-0 m-0'>
            <div className='main__content container'>
              <MainContentHeader />
              <>
                <Routes>
                  <Route path='/' element={<MyDashboard />} />
                  <Route path='/catalog' element={<MyInsights />} />
                  <Route path='/catalog/addNewItem' element={<NewCatalogItemForm />} />
                  <Route path='/orders' element={<MyOrders />} />
                  <Route path='/products' element={<MyProducts />} />
                  <Route path='/qutations' element={<MyQutations />} />
                </Routes>
              </>
            </div>
          </div>
        
      </div>
      {/* <SidebarDash />
      <div className='main__content'>
        <>
          <Routes>
            <Route path='/' element={<MyDashboard />} />
            <Route path='/insights' element={<MyInsights />} />
            <Route path='/orders' element={<MyOrders />} />
            <Route path='/products' element={<MyProducts />} />
            <Route path='/qutations' element={<MyQutations />} />
          </Routes>
        </>
      </div> */}
    </div>
  );
}

export default App;
