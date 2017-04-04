angular.module('youtube.models.details', [

])
    .service('DetailsModel', function ($http, $q, $stateParams, $sce) {
        let model = this,
            URLS = {
                FETCH: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
            },
            currentVideo,
            videos;

        function cacheAllVideos(result) {
            videos = extractAll(result);
            return videos;
        }

        function cacheVideo(result) {
            currentVideo = extract(result);
            return currentVideo;
        }

        function extractAll(result) {
            return result.data.items;
        }

        function extract(result) {
            return result;
        }

        function findVideo(videoId) {
            return _.find(videos, function(video) {
                return video.contentDetails.videoId === videoId;
            });
        }

        function getVideoById(videoId) {
            let deferred = $q.defer();

            if(videos) {
                deferred.resolve(findVideo(videoId));
            } else {
                model.getAllVideos().then(function() {
                    deferred.resolve(findVideo(videoId));
                });
            }

            return deferred.promise;
        }

        model.getAllVideos = function() {
            let deferred = $q.defer();

            if(videos) {
                deferred.resolve(videos);
            } else {
                $http.get(URLS.FETCH).then(function(videos) {
                    deferred.resolve(cacheAllVideos(videos));
                });
            }

            return deferred.promise;
        };

        model.getVideo = function () {
            return (currentVideo) ? $q.when(currentVideo) : getVideoById($stateParams.videoId);
        };

        model.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

        this.getAllVideos();
    })
;
