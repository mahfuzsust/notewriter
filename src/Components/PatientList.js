import React from 'react';

function PatientList(props) {
    const items = props.items;

    function selectPatient(val, e) {
        e.preventDefault();

        window.CKEDITOR.instances["notewriter"].setData(val);
      }

    const listItems = items.map((number, i) =>
    <li key={i} className="list-group-item" onClick={(e) => selectPatient(number.content, e)}>{number.name}</li>
    );
    return(
        <ul className="list-group">{listItems}</ul>
    )
  };

export default PatientList;