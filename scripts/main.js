

        
        $clone = $('#cardClone');
        
        $lastelement = "";

        lastelement = {
            'top': 0,
                'left': 0,
                'width': 0,
                'height': 0
        };
       
        cloneflipped = false;

      
        $('#cardClone').on("transitionend webkitTransitionEnd oTransitionEnd", function (e) {
            if (e.target === e.currentTarget) {
                if (e.originalEvent.propertyName == 'top') {

   
                    cloneflipped = !cloneflipped;

             
                    if (!cloneflipped) {
                        $($lastelement).css('opacity', 1);
                        $($clone).hide();
                    } else {
                     
                    }
                }
            }
        });




        $(".cards").click(function () {
            if (!cloneflipped) {
             
                $lastelement = $(this);


                var offset = $lastelement.offset();
                lastelement.top = offset.top - 30 - $(document).scrollTop();
                lastelement.left = offset.left - 30;
                lastelement.width = $lastelement.width();
                lastelement.height = $lastelement.height();
            
                var rotatefront = "rotateY(180deg)";
                var rotateback = "rotateY(0deg)";
                if ((lastelement.left + lastelement.width / 2) > $(window).width() / 2) {
                    rotatefront = "rotateY(-180deg)";
                    rotateback = "rotateY(-360deg)";
                }

                // Grab the data from this card
                // CREATE ELEMENTS
                var title = $lastelement.data('title');
                var copy = $lastelement.data('desc');
                var img = $lastelement.data('image');
            
                var h2 = $('<h2>').text(title);
                var p = $('<p>').text(copy);
                var pic = $('<img>').attr('src', img);
               


                $clone.find('#cloneFront').html($lastelement.html());
                $clone.find('#cloneBack').html('').append(h2,p,pic);

            
                $clone.css({
                    'display': 'block',
                        'top': lastelement.top,
                        'left': lastelement.left
                });
                $lastelement.css('opacity', 0);

             
                setTimeout(function () {
                    $clone.css({
                        'top': '40px',
                            'left': '40px',
                        // 'top': '0px',
                        //     'left': '0px',
                            // 'height': '100vh',
                            // 'width': '100vh'
                            'width': $(document).width() - 140 + 'px'

                    });
                    $clone.find('#cloneFront').css({
                        'transform': rotatefront
                    });
                    $clone.find('#cloneBack').css({
                        'transform': rotateback
                    });
                }, 100);
            } else {
                $('body').click();
            }
        });


        $('body').click(function (e) {
            closeCard();
        });

        function closeCard(){
            if (cloneflipped) {

                //Reverse the animation
                $clone.css({
                    'top': lastelement.top + 'px',
                        'left': lastelement.left + 'px',
                        'height': lastelement.height + 'px',
                        'width': lastelement.width + 'px'
                });
                $clone.find('#cloneFront').css({
                    'transform': 'rotateY(0deg)'
                });
                $clone.find('#cloneBack').css({
                    'transform': 'rotateY(-180deg)'
                });

            }
        } 

