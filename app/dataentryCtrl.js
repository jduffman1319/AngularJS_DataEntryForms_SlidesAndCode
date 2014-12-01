// dateentryCtrl.js 
(function () {
    "use strict";
    angular.module("myCoolApp")
        .controller("DataEntryCtrl", DataEntryCtrl);

    function DataEntryCtrl() {
        var vm = this;
        vm.emailrequired = false;
        vm.theform = false;

        vm.employee = {
            "firstname": "elmer",
            "lastname": "FUDD",
            "email": "info@takenote.com"
        };
        vm.origemployee = angular.copy(vm.employee);
        vm.origemailrequired = false;

        vm.saveData = function () {
            alert("This would be a call to a service to save the data.");
        }

        vm.cancelData = function () {
            alert("Cancelled!");
        }

        vm.clearData = function () {
            vm.employee = angular.copy(vm.origemployee);
            vm.emailrequired = false;
            vm.myForm.$setPristine();
        }

        vm.preventRevert = function () {
            return angular.equals(vm.employee, vm.origemployee) && angular.equals(vm.origemailrequired, vm.emailrequired);
        }
    }
}());