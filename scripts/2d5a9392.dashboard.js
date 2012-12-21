
var Dashboard = function(params) {
    var defaults = {
        mirror : true
    }

    var options = $.extend({}, defaults, params);
    var $video ;

    function updateSettings() {
        $video.toggleClass("mirror", options.mirror);
    }

    $(function() {
      $video = $.findByRole("video");
      var gui = new dat.GUI();
      gui.add(options, 'mirror')
        .onFinishChange(updateSettings);

      updateSettings();
    });

};
