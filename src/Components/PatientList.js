import React from 'react';
import ckeditorLib from './../Services/ckeditorLib'

function PatientList(props) {
    const items = props.items;

    function selectPatient(patient, e) {
        e.preventDefault();

        ckeditorLib.setData(patient.content);
        if(props.selectPatient) {
            props.selectPatient(patient);
        }
      }

    const listItems = items.map((patient, i) =>
        <li key={i} className="list-group-item" onClick={(e) => selectPatient(patient, e)}>{patient.name}</li>
    );
    return(
        <ul className="list-group">{listItems}</ul>
    )
  };

export default PatientList;