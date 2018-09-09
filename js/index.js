/**
 * 模块
 */
var app = angular.module('indexApp', []);

/**
 * 服务，用来后端api（这里暂时没用到）
 */
app.service("PurchaseService", ["$http", function ($http) {
    return {

    }
}]);

/**
 * 控制器
 */
app.controller("indexController",["$scope",function ($scope) {

    // 初始化一个list数组，用来展示记录
    $scope.list = [
        { value: "一条已完成的记录", completeFlag: true },
        { value: "一条未完成的记录", completeFlag: false }
    ];

    // 新建记录
    $scope.addRecord = function () {
        if ($scope.input == null || $scope.input == ''){
            alert("请输入内容！");
            return;
        }

        // 新建一条记录
        let record = { value: $scope.input, completeFlag: false };
        // 把新增的记录，存放进list
        $scope.list.unshift(record);
        // 完成后，清空输入框
        $scope.input = "";
    };

    // 给某条记录添加或者移除删除线
    $scope.completeRecord = function(index){
      $scope.list[index].completeFlag = !$scope.list[index].completeFlag;
    };

    // 删除一条记录
    $scope.deleteRecord = function (index) {
        // 从list中移除该记录
        $scope.list.splice(index,1);
    };

}]);