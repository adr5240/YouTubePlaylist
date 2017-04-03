angular.module('videos.details', [
    'youtube.models.details'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('youtube.videos.details', {
                url: 'videos/:videoId/details',
                views: {
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
    .controller('DetailsCtrl', function DetailsCtrl(DetailsModel) {

    })
;
