angular.module('videos', [
    'youtube.models.videos'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('youtube.videos', {
                url: '/',
                views: {
                    'videos-tablet@': {
                        controller: 'VideosListCtrl as videosListCtrl',
                        templateUrl: 'app/list/videoList-tablet.tmpl.html'
                    },
                    'videos-mobile@': {
                        controller: 'VideosListCtrl as videosListCtrl',
                        templateUrl: 'app/list/videoList-mobile.tmpl.html'
                    },
                    'details-tablet@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/detail/videoDetail-tablet.tmpl.html'
                    },
                    'details-mobile@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/detail/videoDetail-mobile.tmpl.html'
                    }
                }
            });

    })
    .controller('VideosListCtrl', function VideosCtrl(VideosModel) {

    })
;
