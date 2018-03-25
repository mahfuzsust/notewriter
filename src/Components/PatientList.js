import React from 'react';

function PatientList(props) {
    const items = props.items;

    function selectPatient(patient, e) {
        e.preventDefault();

        window.CKEDITOR.instances["notewriter"].setData(patient.content);
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