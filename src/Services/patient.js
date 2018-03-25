import datelib from './date';

var patients = {};

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
    patients[dt].push({id: datelib.toTimestamp(dt), name: "Patient " + len, content: "Patient " + len});
};
var saveNote = function(date,id,content) {
    var dt = date.toDateString();
    patients[dt].find(x => x.id === id).content = content;
};

export default {
    getPatients: getPatients,
    addPatient: addPatient,
    saveNote: saveNote
};