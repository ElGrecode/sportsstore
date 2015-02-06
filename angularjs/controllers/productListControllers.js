angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount){

        var selectedCategory = null;

        // Initializations
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function (newCategory){
            selectedCategory = newCategory;
            // If we select a new category, start at page 1
            $scope.selectedPage = 1;
        };

        $scope.selectPage = function (newPage){
            $scope.selectedPage = newPage;
        };

        $scope.categoryFilterFn = function (product){
            return selectedCategory == null ||
                product.category == selectedCategory;
        };

        $scope.getCategoryClass = function (category){
            return selectedCategory == category ? productListActiveClass : "";
        };

        $scope.getPageClass = function (page){
            return $scope.selectedPage == page ? productListActiveClass : "";
        };

    });