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

    const listItems = items.map((patient, i) => {
        var className = "list-group-item";
        if(patient.className) {
            className += patient.className
        }
        return <li key={i} className={className} onClick={(e) => selectPatient(patient, e)}>{patient.name}</li>
    });
    return(
        <ul className="list-group">{listItems}</ul>
    )
  };

export default PatientList;