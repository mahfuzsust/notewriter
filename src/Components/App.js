import React from 'react';
import ReactDOM from 'react-dom';
import DateList from './DateList';
import PatientList from './PatientList';
import date from './../Services/date';
import patients from './../Services/patient';
import Button from './Button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients : patients.getPatients(new Date())
        };
        this.serviceDate = new Date();
        this.addPatient = this.addPatient.bind(this);
        this.switchDate = this.switchDate.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.selectPatient = this.selectPatient.bind(this);
    }
    selectPatient(patient) {
        this.patient = patient;
    }

    saveNote() {
        var content = window.CKEDITOR.instances["notewriter"].getData();
        patients.saveNote(this.serviceDate, this.patient.id, content);
    }
  
    addPatient() {
        patients.addPatient(this.serviceDate);
        this.setState(prevState => ({
            patients : patients.getPatients(this.serviceDate)
        }));
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