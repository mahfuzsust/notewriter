const crypto = require("crypto");

var patients = {};

var generateId = function() {
    return crypto.randomBytes(16).toString("hex");
}

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
    var newPatient = {id: generateId(), name: "Patient " + len, content: ""};
    patients[dt].push(newPatient);
    return newPatient;
};
var saveNote = function(date, id, content) {
    var dt = date.toDateString();
    patients[dt].find(x => x.id === id).content = content;
};

var savePatientName = function(date, id, name) {
    var dt = date.toDateString();
    patients[dt].find(x => x.id === id).name = name;
};

export default {
    getPatients: getPatients,
    addPatient: addPatient,
    saveNote: saveNote,
    savePatientName: savePatientName
};