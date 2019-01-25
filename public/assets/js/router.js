maolu = typeof maolu == 'undefined' ? angular.module('maolu',['ui.router']) : maolu;


//路由控制
maolu.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    
    $locationProvider.hashPrefix('');  

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:"maolu/framework.html",
        controller:'home'
    })
    .state('home.nongtang',{
        url:'^/nongtang',
        templateUrl:'maolu/nongtang.html',
        controller:"home"
    })
    .state('home.sangu',{
        url:'^/sangu',
        templateUrl:'maolu/sangu.html',
        controller:'sangu'
    })
    .state('home.houses',{
        url:"^/houses",
        templateUrl:'maolu/houses.html',
        controller:'house'
    })
    .state('home.house',{
        url:'^/house/:id',
        templateUrl:'maolu/house.html',
        controller:'house',
    })
    .state('home.map',{
        url:'^/map',
        templateUrl:'maolu/map.html',
        controller:'map'
    })
    .state('home.blogs',{
        url:"^/blogs",
        templateUrl:'maolu/blogs.html',
        controller:"blog"
    });
})

