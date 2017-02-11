/**
 * Created by stas on 11.02.17.
 */
angular
    .module('bio', [])
    .controller('appController', appController);


function appController($scope) {
        $scope.about = '';
    $scope.click1 = function () {
        $scope.bio = 'Меня зовут Тетеревятников Станислав Сергеевич. Родился в 1995 году в селе Александровском Cтавропольского края, учился в средней образовательной школе №1 ';
        $scope.about = $scope.bio;
    };
    $scope.click2 = function () {
        $scope.learn = 'Студент ИТА ЮФУ, четвёртый курс, ИКТИБ.';
        $scope.about = $scope.learn;
    };
    $scope.click3 = function () {
        $scope.hobby = 'Играю на электрогитаре... И в World Of Tanks';
        $scope.about = $scope.hobby;
    }

}