(function($, Drupal) {
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-video', {
            height: '720',
            width: '1280',
            videoId: 'DrONIdbdLZ8',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player = new YT.Player('youtube-review1', {
            height: '700',
            width: '100%',
            videoId: 'DrONIdbdLZ8',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player = new YT.Player('youtube-review2', {
            height: '700',
            width: '100%',
            videoId: 'JJ5n2TzCP-M',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player = new YT.Player('youtube-review3', {
            height: '700',
            width: '100%',
            videoId: 'EAvfKlWUBeE',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player = new YT.Player('youtube-review4', {
            height: '700',
            width: '100%',
            videoId: 'mpQQPcFaiV4',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player = new YT.Player('youtube-review5', {
            height: '700',
            width: '100%',
            videoId: 'dd963rggB90',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player = new YT.Player('youtube-review6', {
            height: '700',
            width: '100%',
            videoId: 'JV3NqVVB4jg',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        player = new YT.Player('desc-video', {
            height: '480',
            width: '100%',
            videoId: 'DrONIdbdLZ8',
            playerVars: { rel: 0, showinfo: 0, controls: 1, autohide: 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        var playButton = document.getElementById("#intro-playbutton");
        $(playButton).on("click", function() {
            player.playVideo();
        });
    }
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;

    function onPlayerStateChange(event) {
        $(".b-intro-filter, .intro-arrow__left, .intro-arrow__right, .intro-slider__content, .s-header, .fp-menu").toggleClass("yt-invisible");
    }

    function stopVideo() {
        player.stopVideo();
        $(".b-intro-filter, .intro-arrow__left, .intro-arrow__right, .intro-slider__content, .s-header, .fp-menu").removeClass("yt-invisible");
    }

    var tag = document.createElement("script");

    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})(jQuery, Drupal);