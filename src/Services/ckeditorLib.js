var getData = function(instance) {
    var ins = instance || "notewriter";
    return window.CKEDITOR.instances[ins].getData();
}

var setData = function(data, instance) {
    var ins = instance || "notewriter";
    window.CKEDITOR.instances[ins].setData(data);
}

export default {
    getData: getData,
    setData: setData
}