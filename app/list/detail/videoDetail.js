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
    .controller('DetailsCtrl', function DetailsCtrl($state, $stateParams, DetailsModel, VideosModel) {
        let detailsCtrl = this,
            video;

        DetailsModel.getVideo(video)
            .then(function(result) {
                detailsCtrl.video = result;
            });

        function returnToVideos() {
            detailsCtrl.video = undefined;
            
            $state.go('youtube.videos', {

            });
        }

        detailsCtrl.returnToVideos = returnToVideos;
    })
;
