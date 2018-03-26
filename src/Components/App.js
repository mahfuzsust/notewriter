import React from 'react';
import ReactDOM from 'react-dom';
import DateList from './DateList';
import PatientList from './PatientList';
import TextField from './TextField';
import date from './../Services/date';
import patients from './../Services/patient';
import ckeditorLib from './../Services/ckeditorLib';
import Button from './Button';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients : patients.getPatients(new Date()),
            patient : {},
            name: ""
        };
        this.serviceDate = new Date();
        this.selectedPatient = {};

        this.addPatient = this.addPatient.bind(this);
        this.switchDate = this.switchDate.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.selectPatient = this.selectPatient.bind(this);
        this.savePatientName = this.savePatientName.bind(this);
    }
    savePatientName(value) {
        patients.savePatientName(this.serviceDate, this.selectedPatient.id, value);
        this.setState((prevState, props) => {
            prevState.patient.name = value;
            return {patient: prevState.patient};
        });
    }

    selectPatient(selectedPatient) {
        selectedPatient.className = " selected";
        this.selectedPatient.className = "";
        this.selectedPatient = selectedPatient;
        this.setState((prevState, props) => {
            return {patient: selectedPatient};
        });
    }

    saveNote() {
        patients.saveNote(this.serviceDate, this.selectedPatient.id, ckeditorLib.getData());
    }
  
    addPatient() {
        var newPatient = patients.addPatient(this.serviceDate);
        newPatient.className = " selected";
        this.selectedPatient.className = "";
        this.selectedPatient = newPatient;
        this.setState((prevState, props) => {
            return {patient: newPatient};
        });
    }
    switchDate(date) {
        this.serviceDate = new Date(date);
        this.setState(prevState => ({
            patients : patients.getPatients(this.serviceDate)
        }));
    }
    componentDidMount () {
        const script = document.createElement("script");
  
        const scriptText = document.createTextNode("CKEDITOR.replace('notewriter');window.CKEDITOR = CKEDITOR;");
  
        script.appendChild(scriptText);
        document.head.appendChild(script);
    }
  
    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <DateList items={date.getServiceDateList()} name={date.getCurrentDate()} switchDate={this.switchDate}/>
                </div>
                <div className="col-md-1">
                    <Button text="Add" click={this.addPatient}/>
                </div>
                <div className="col-md-6">
                    <TextField type="text" placeholder="name" value={this.state.patient.name} submit={this.savePatientName}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <PatientList items={this.state.patients} selectPatient={this.selectPatient}/>
                </div>
                <div className="col-md-8">
                    <textarea name="notewriter" id="notewriter" rows="10" cols="80">
                    </textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                    <Button text="Save" click={this.saveNote}/>
                </div>
            </div>
        </div>
      );
    }
  }

export default App;