

$( function(){

    function chapter(){
        var self = this;

        self.container = null;
        self.init = function(){

            self.container.find('.chapter-play').on("click", function(e) {
                e.preventDefault();

                var element = $(this);

                 element.addClass('hide');

                self.container.addClass("state1");

                setTimeout( function() {
                     self.container.addClass("state2");
                     setTimeout( function() {
                         self.container.addClass("state3");
                          self.container.find('.chapter-reload').removeClass('hide');
                    }, 3000);
                }, 6000);     
            });

            self.container.find('.chapter-reload').on("click", function(e) {
                e.preventDefault();

                var element = $(this);
                element.addClass('hide');
                location.reload();
            });

        };
        
        return {
            init: function(){
                self.container = $(".stranger-things-container");
                self.init();
            }
        }
    };

    window.hmbr.strangerThings.chapter = chapter;

    $(document).ready( function(){
        var chapter = window.hmbr.strangerThings.chapter();
        chapter.init();
    });
});