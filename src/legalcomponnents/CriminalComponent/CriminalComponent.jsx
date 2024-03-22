import React from 'react';
import MurderComponent from './MurderComponent/MurderComponent';
import RobberyComponent from './RobberyComponent/RobberyComponent';
import KidnappingComponent from './KidnappingComponent/KidnappingComponent';
import AssaultComponent from './AssaultComponent/AssaultComponent';

const CriminalComponent = () => {
  return (
    <div>
      <h2>Criminal</h2>
      <MurderComponent />
      <RobberyComponent />
      <KidnappingComponent />
      <AssaultComponent />
    </div>
  );
};

export default CriminalComponent;
