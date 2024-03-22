// import React from 'react';
// import CivilComponent from './CivilComponent/CivilComponent';
// import LabourComponent from './LabourComponent/LabourComponent';
// import CriminalComponent from './CriminalComponent/CriminalComponent';
// import SeniorCitizenComponent from './SeniorCitizensComponent/SeniorCitizensComponent';
// import ChildComponent from './ChildComponent/ChildComponent';
// import EducationComponent from './EducationComponent/EducationComponent';
// import ConsumerComponent from './ConsumerComponent/ConsumerComponent';
// import OtherComponent from './OtherComponent/OtherComponent';

// const LegalResources = () => {
//   return (
//     <div>
//       <h1>Legal Resources</h1>
//       <CivilComponent />
//       <LabourComponent />
//       <CriminalComponent />
//       <SeniorCitizenComponent />
//       <ChildComponent />
//       <EducationComponent />
//       <ConsumerComponent />
//       <OtherComponent />
//     </div>
//   );
// };

// export default LegalResources;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import CivilComponent from './CivilComponent/CivilComponent';
// import LabourComponent from './LabourComponent/LabourComponent';
// import CriminalComponent from './CriminalComponent/CriminalComponent';
// import EducationComponent from './EducationComponent/EducationComponent';
// import OtherComponent from './OtherComponent/OtherComponent';
// import ChildComponent from './ChildComponent/ChildComponent';
// import OtherComponent from './OtherComponent/OtherComponent';



// // Import other legal components

// const LegalResources = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Legal Resources</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/civil">Civil</Link>
//             </li>
//             <li>
//               <Link to="/labour">Labour</Link>
//             </li>
//             <li>
//               <Link to="/criminal">Criminal</Link>
//             </li>

//             <li>
//               <Link to="/Education">Education  </Link>
//             </li>

//             <li>
//               <Link to="/Labour"> Labour </Link>
//             </li>

//             <li>
//               <Link to="/Other">Other </Link>
//             </li>

//             <li>
//               <Link to="/SeniorCitizen"> SeniorCitizen </Link>
//             </li>


//             <li>
//               <Link to="/criminal">Criminal</Link>
//             </li>

//             {/* Add links for other legal components */}
//           </ul>
//         </nav>

//       </div>
//     </Router>
//   );
// };

// export default LegalResources;


import React from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import CivilComponent from './CivilComponent/CivilComponent';
import LabourComponent from './LabourComponent/LabourComponent';
import CriminalComponent from './CriminalComponent/CriminalComponent';
import EducationComponent from './EducationComponent/EducationComponent';
import OtherComponent from './OtherComponent/OtherComponent';
import SeniorCitizenComponent from './SeniorCitizensComponent/SeniorCitizensComponent';
import ChildComponent from './ChildComponent/ChildComponent';

const LegalResources = () => {
  return (
    <Router>
      <div>
        <h1>Legal Resources</h1>
        <nav>
          <ul>
            <li>
              <Link to="/civil">Civil</Link>
            </li>
            <li>
              <Link to="/labour">Labour</Link>
            </li>
            <li>
              <Link to="/criminal">Criminal</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/senior-citizen">Senior Citizen</Link>
            </li>
            <li>
              <Link to="/child">Child</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
          </ul>
        </nav>

      
          <Route path="/civil" component={<CivilComponent/>} />
          <Route path="/labour" component={<LabourComponent />} />
          <Route path="/criminal" component={<CriminalComponent />} />
          <Route path="/education" component={<EducationComponent />} />
          <Route path="/senior-citizen" component={<SeniorCitizenComponent />} />
          <Route path="/child" component={<ChildComponent />} />
          <Route path="/other" component={<OtherComponent />} />
        
      </div>
    </Router>
  );
};

export default LegalResources;
