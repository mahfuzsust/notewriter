var addDays = function(date, days) {
    var dat = new Date(date);
    dat.setDate(dat.getDate() + days);
    return dat;
}

var toTimestamp = function (strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }

function getServiceDateList() {
    let arr = [];
    arr.push({ date: addDays(new Date(), -2).toDateString()});
    arr.push({ date: addDays(new Date(), -1).toDateString()});
    arr.push({ date: new Date().toDateString(), className: " selected"});
    arr.push({ date: addDays(new Date(), 1).toDateString()});
    arr.push({ date: addDays(new Date(), 2).toDateString()});
    return arr;
}
function getCurrentDate() {
    return new Date().toDateString();
}

export default {
    getCurrentDate: getCurrentDate,
    getServiceDateList: getServiceDateList,
    toTimestamp: toTimestamp
};