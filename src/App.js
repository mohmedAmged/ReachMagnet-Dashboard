
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
import { useState } from 'react';
import MyNewSidebarDash from './components/myNewSidebarDash/MyNewSidebarDash';

function App() {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
//   const toggleSidebar = () => {
//     setIsSidebarExpanded(!isSidebarExpanded);
// };
  return (
  //   <div className='dashboard__handler d-flex'>
  //   <SidebarDash isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} toggleSidebar={toggleSidebar}/>
  //   <div className={`main__content container ${isSidebarExpanded ? 'expanded' : ''}`}>
  //     <MainContentHeader isSidebarExpanded={isSidebarExpanded}/>
  //     <>
  //       <Routes>
  //         <Route path='/' element={<MyDashboard />} />
  //         <Route path='/catalog' element={<MyInsights />} />
  //         <Route path='/catalog/addNewItem' element={<NewCatalogItemForm />} />
  //         <Route path='/orders' element={<MyOrders />} />
  //         <Route path='/products' element={<MyProducts />} />
  //         <Route path='/qutations' element={<MyQutations />} />
  //       </Routes>
  //     </>
  //   </div>
  // </div>
  <div className='dashboard__handler d-flex'>
  <MyNewSidebarDash />
  <div className='main__content container'>
    <MainContentHeader />
    <Routes>
      <Route path='/' element={<MyDashboard />} />
      <Route path='/catalog' element={<MyInsights />} />
      <Route path='/catalog/addNewItem' element={<NewCatalogItemForm />} />
      <Route path='/orders' element={<MyOrders />} />
      <Route path='/products' element={<MyProducts />} />
      <Route path='/qutations' element={<MyQutations />} />
    </Routes>
  </div>
</div>
  );
}

export default App;
