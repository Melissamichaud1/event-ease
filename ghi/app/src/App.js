import React from 'react';
import './App.css';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendeeSignupForm from './AttendeeSignupForm';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <React.Fragment>
    <Nav />
    <div className="container">
      <AttendeeSignupForm />
      {/* <ConferenceForm /> */}
      {/* <LocationForm /> */}
      {/* <AttendeesList attendees={props.attendees} /> */}
    </div>
    </React.Fragment>
  );
}

export default App;
