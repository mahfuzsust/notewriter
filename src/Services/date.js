Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

var toTimestamp = function (strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }

function getServiceDateList() {
    let arr = [];
    arr.push(new Date().addDays(-1).toDateString());
    arr.push(new Date().addDays(-2).toDateString());
    arr.push(new Date().toDateString());
    arr.push(new Date().addDays(1).toDateString());
    arr.push(new Date().addDays(2).toDateString());
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