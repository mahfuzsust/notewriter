var patients = {};

var date = new Date().toDateString();
patients[date] = [{id: 1, name: "Patient 1", content: "Patient 1"}, 
{id: 2, name: "Patient 2", content: "Patient 2"}, 
{id: 3, name: "Patient 3", content: "Patient 3"}, 
{id: 4, name: "Patient 4", content: "Patient 4"}]

var getPatients = function(date) {
    var dt = date.toDateString();
    if(!patients.hasOwnProperty(dt)) {
        patients[dt] = [];
    }
    return patients[dt];
};
var addPatient = function(date) {
    var dt = date.toDateString();
    var len = patients[dt].length + 1;
    patients[dt].push({name: "Patient " + len, content: "Patient " + len});
};


export default {
    getPatients: getPatients,
    addPatient: addPatient
};