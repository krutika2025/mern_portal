// import React from 'react';
// import './Home.css';
// import { Routes, Route, Link } from 'react-router-dom';
// import SideeNav from '../../components/SideeNav';
// import LandingPage from '../LandingPage/LandingPage';
// import ManageUsers from '../manage users/ManageUsers';
// import Audit from '../Audit/Audit';
// import RegisterCase from '../CaseRegist/RegisterCase';
// import CasesList from '../CaseList/CasesList';
// import CaseDetails from '../CaseList/CaseDetails';
// import Dashboard from '../../Dashboards/Dashboard';
// import jwtDecode from 'jwt-decode';
// import work from '../../assets/police.png'; // Ensure you import the image
// import districtBanner from '../../assets/police.png'; // Assuming the header image is imported

// const Home = () => {
//   const token = localStorage.getItem('userInfo');
//   let decodedToken = jwtDecode(token);
//   const role = decodedToken.data.is_admin;

//   return (
//     <div className="home-container">
//       <header className="header">
//         {/* Title and Logo */}
//         <div className="header-content">
//           <img src={work} alt="Valsad Police" className="header-logo" />
//           <h1>Valsad District Police Portal</h1>
//         </div>

        
//       </header>

//       {/* Sub-header Navigation */}
//       <nav className="sub-header-nav">
//   <ul>
//     <li><Link to="/">Home</Link></li>
//     <li>
//       <div className="dropdown">
//         <Link to="/about">About District</Link>
//         <div className="dropdown-content">
//           <Link to="/about/history">History</Link>
//           <Link to="/about/geography">Geography</Link>
//         </div>
//       </div>
//     </li>
//     <li><Link to="/contact">Contact</Link></li>
//   </ul>
// </nav>


//       <div className="side-nav-container">
//         <SideeNav />
//       </div>
      
//       <div className="content-container" id="main-content">
//         <Routes>
//           <Route path="/LandingPage" element={<LandingPage />} />
//           <Route path="/registerCase" element={<RegisterCase />} />
//           <Route path="/Caseslist" element={<CasesList />} />
//           <Route path="/Caseslist/:id" element={<CaseDetails />} />

//           {role === 1 && (
//             <>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/employees" element={<ManageUsers />} />
//               <Route path="/audit" element={<Audit />} />
//             </>
//           )}
//         </Routes>
//       </div>

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} Valsad District Police. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import './Home.css';
import { Routes, Route } from 'react-router-dom';

import SideeNav from '../../components/SideeNav';
import LandingPage from '../LandingPage/LandingPage';
import ManageUsers from '../manage users/ManageUsers';
import Audit from '../Audit/Audit';
import RegisterCase from '../CaseRegist/RegisterCase';
import CasesList from '../CaseList/CasesList';
import CaseDetails from '../CaseList/CaseDetails';
import Dashboard from '../../Dashboards/Dashboard';
import work from '../../assets/police.png';
import jwtDecode from 'jwt-decode';
const Home = () => {

  const token = localStorage.getItem('userInfo');
  let decodedToken = jwtDecode(token);
  console.log(decodedToken, 'decodedToken');
  const role = decodedToken.data.is_admin;
  console.log(role, 'ghg');
  return (
    <div className="home-container">
      <div className="side-nav-container">
     
        <SideeNav />
      </div>
      <div className="content-container">
        <div className="heading-tab">
          {/* <h1>Valsad District Police Portal</h1>
           */}
        </div>
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />
         
          <Route path="/registerCase" element={<RegisterCase />} />
          <Route path="/Caseslist" element={<CasesList />} />
          <Route path="/Caseslist/:id" element={<CaseDetails />} />
         
      

          {role == 1 && (
            <>
            <Route path="/dashboard" element={ <Dashboard/> } />
            <Route path="/employees" element={<ManageUsers />} />
            <Route path="/audit" element={<Audit />} />

            </>
          )}


        </Routes>
      </div>
      {/* <footer className="footer">
         <p>&copy; {new Date().getFullYear()} Valsad District Police. All rights reserved.</p>
       </footer> */}
    </div>
  );
};

export default Home;