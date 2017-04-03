angular.module('youtube.models.videos', [

])
    .service('VideosModel', function ($http, $q) {
        let model = this,
            URLS = {
                FETCH: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
            },
            videos,
            currentVideo,
            listView = true;

        function cacheVideos(result) {
            videos = extract(result);
            return videos;
        }

        function extract(result) {
            return result.data.items;
        }

        model.checkListView = function () {
            return listView;
        };

        model.getVideos = function () {
            return (videos) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheVideos);
        };

        model.toggleListView = function () {
            listView = !listView;
        };
    })
;
