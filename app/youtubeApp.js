angular.module('Youtube', [
    'ngAnimate',
    'ui.router',
    'videos',
    'videos.details'
])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('youtube', {
                url: '',
                abstract: true
            })
        ;
        $urlRouterProvider.otherwise('/');
    })
;
