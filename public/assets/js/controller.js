function fresh_init(){
    setTimeout(function(){

        app_init(jQuery);
    })
}

maolu = typeof maolu == 'undefined' ? angular.module('maolu',['ui.router']) : maolu;

maolu.controller('home',function($scope,$state){

    $scope.houseList    = [
        {img:"assets/images/properties/3.jpg"},
        {img:"assets/images/properties/11.jpg"},
        {img:"assets/images/properties/5.jpg"},
        {img:"assets/images/properties/4.jpg"},
        {img:"assets/images/properties/2.jpg"},
        {img:"assets/images/properties/3.jpg"},
    ];
    // 或者
    $scope.$watch('$viewContentLoaded', function() { 
        //app_init(jQuery);
    }); 



    /**
     * 初始化框架
     * */
    $scope.initFramework = function(){
        
        if($state.getCurrentPath().length == 2){
            
            $state.go('home.nongtang');
        }
    }



    $scope.initHome = function(){
        
        setTimeout(function(){
            app_init(jQuery);
        },100);
        
    }

})


maolu.controller('sangu',function($scope){

    $scope.initSangu = function(){
        
        setTimeout(function(){
            app_init(jQuery);
        },100);

    }
})


maolu.controller('house',function($scope){

    $scope.initHouse = function(){

        fresh_init();
    }

    $scope.initHouses = function(){
        fresh_init();
        $scope.initMap();
    }

    $scope.initMap = function(){

        var map = new BMap.Map("googleMap");    // 创建Map实例
        map.centerAndZoom("上海",16);  //初始化地图,设置城市和地图级别。
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.addControl(new BMap.MapTypeControl());
    }

})


maolu.controller('map',function($scope){

    $scope.initMap = function(){

        fresh_init();

        map.centerAndZoom("上海",16);

    }


    $scope.initMap = function(){

        var map = new BMap.Map("googleMap");    // 创建Map实例
        map.centerAndZoom("上海",16);  //初始化地图,设置城市和地图级别。
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.addControl(new BMap.MapTypeControl());
    }
})

maolu.controller('blog',function($scope){

    $scope.initBlogs = function(){

        fresh_init();

    }


    

})
