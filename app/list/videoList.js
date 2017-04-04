angular.module('videos', [
    'youtube.models.details'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('youtube.videos', {
                url: '/',
                views: {
                    'details-tablet@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/videoDetail-tablet.tmpl.html'
                    },
                    'details-mobile@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/videoDetail-mobile.tmpl.html'
                    },
                    'videos-mobile@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/videoList-mobile.tmpl.html'
                    },
                    'videos-tablet@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/videoList-tablet.tmpl.html'
                    }
                }
            });
        $stateProvider
            .state('youtube.videos.details', {
                url: 'videos/:videoId/details',
                views: {
                    'details-mobile@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/videoDetail-mobile.tmpl.html'
                    },
                    'details-tablet@': {
                        controller: 'DetailsCtrl as detailsCtrl',
                        templateUrl: 'app/list/videoDetail-tablet.tmpl.html'
                    }
                }
            });

    })
    .controller('DetailsCtrl', function DetailsCtrl($state, $stateParams, DetailsModel) {
        let detailsCtrl = this,
            video;

        DetailsModel.getAllVideos()
            .then(function(result) {
                detailsCtrl.videos = result;
            });

        DetailsModel.getVideo(video)
            .then(function(result) {
                detailsCtrl.video = result;
                if(detailsCtrl.video) {
                    detailsCtrl.video.url = "https://www.youtube.com/embed/" + result.contentDetails.videoId;
                }
            });

        function checkListView() {
            return $state.current.name === 'youtube.videos';
        }

        function returnToVideos() {
            detailsCtrl.video = undefined;

            $state.go('youtube.videos', {

            });
        }

        detailsCtrl.checkListView = checkListView;
        detailsCtrl.returnToVideos = returnToVideos;
        detailsCtrl.trustSrc = DetailsModel.trustSrc;
    })
;
