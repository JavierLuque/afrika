$(document).ready(function(){
    //window trigger
    $(window).trigger('scroll');

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //drop down menu
    $('.open-menu').on('click',function(){
      $('body').toggleClass('menu-open');
      $('.mobile-menu').toggleClass('active');
    })
    //doubleTapToGo
    //$('.menu > li:has(ul)').doubleTapToGo();

    //------------------------------------------------------------------------//

    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();

    //------------------------------------------------------------------------//

    //slider
    $(".slider-item,.tp-box").not( ".new-model" ).slick({
        arrows: false,
        dots: true,
        autoplay: true
    });


    //------------------------------------------------------------------------//

    //tabs
    $('.tab .tabs').delegate('li:not(.active)','click',function(){$(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);});

    //------------------------------------------------------------------------//
    //mobile tab
    $('ul.tabs-mobile li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs-mobile li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    });
    
    //autocomplite
    $.widget( "app.autocomplete", $.ui.autocomplete, {

        // Which class get's applied to matched text in the menu items.
        options: {
            highlightClass: "ui-state-highlight"
        },

        _renderItem: function( ul, item ) {

            // Replace the matched text with a custom span. This
            // span uses the class found in the "highlightClass" option.
            var re = new RegExp( "(" + this.term + ")", "gi" ),
                cls = this.options.highlightClass,
                template = "<span class='" + cls + "'>$1</span>",
                label = item.label.replace( re, template ),
                icon = item.icon.replace( re, template ),
                $li = $( "<li/>" ).appendTo( ul );

            // Create and return the custom menu item content.
            $( "<a/>" ).attr( "href", "#" )
                       .addClass( icon )
                       .html( label )
                       .appendTo( $li );

            return $li;

        }

    });
    var availableTags = [
      {
        label: " Madagascar tour packages",
        icon: "icon-packages",
      },
      {
        label: " Madagascar photo",
        icon: "icon-photo"
      },
      {
        label: " Madagascar group safaris",
        icon: "icon-group"
      },
      {
        label: " Madagascar Tourism Expeditions  ",
        icon: ""
      },
      {
        label: " Cactus Tours Madagascar  ",
        icon: ""
      }

    ];
    $('.autocomplite').autocomplete({
        source: availableTags,
        open: function (event, ui) {
            var len = $('.ui-autocomplete > li').length;
            $('#count').html('Result <span>(' + len + ')</span>');
        },
        close: function (event, ui) {
            $('#count').html('');
        }
    });

    //------------------------------------------------------------------------//

    //filter
    $('.filter-item ul a').on('click',function(){
      $(this).toggleClass('active');
    })
    $('.filter-item h2 a').on('click',function(){
      $(this).toggleClass('active');
      $(this).parents('.filter-item').find('ul').slideToggle();
      $(this).parents('.filter-item').find('.slider-range').slideToggle();  
    })
    $('.clear-filter').on('click',function(){
      $(this).parents('.filter-item').find('ul a').removeClass('active');
    })

    //------------------------------------------------------------------------//

    //slider range
    $( "#slider-date" ).slider({
      range: true,
      min: 0,
      max: 30,
      values: [ 2, 15 ],
      slide: function( event, ui ) {
        $( "#date-from" ).val( + ui.values[ 0 ] + " day" );
        $( "#date-to" ).val( + ui.values[ 1 ] + " day" );
      },
      stop: function( event, ui ) {
        if ( $('#filter_ml').val() != ui.values[0] ) {
            $( "#filter_ml" ).val(ui.values[ 0 ]).trigger('change');
        }

        if ( $('#filter_xl').val() != ui.values[1] ) {
            $( "#filter_xl" ).val(ui.values[ 1 ]).trigger('change');
        }
      }
    });
    $( "#date-from" ).val(  + $( "#slider-date" ).slider( "values", 0 ) +
      " day" );
    $( "#date-to" ).val( + $( "#slider-date" ).slider( "values", 1 ) +
      " day" );

    //-------------------//

    $( "#slider-price" ).slider({
      range: true,
      min: 0,
      max: 20000,
      values: [ 0, 20000 ],
      slide: function( event, ui ) {

        $( "#price-from" ).val( + ui.values[ 0 ]);
        $( "#price-to" ).val( + ui.values[ 1 ]);
      },
      stop: function( event, ui ) {

        if ( $('#filter_mp').val() != ui.values[0] ) {
            $( "#filter_mp" ).val(ui.values[ 0 ]).trigger('change');
        }

        if ( $('#filter_xp').val() != ui.values[1] ) {
            $( "#filter_xp" ).val(ui.values[ 1 ]).trigger('change');
        }
      }
    });
    $( "#price-from" ).val(  + $( "#slider-price" ).slider( "values", 0 ));
    $( "#price-to" ).val( + $( "#slider-price" ).slider( "values", 1 ));


    //------------------------------------------------------------------------//
    
    //open dropdown
    $('.tp-open-dropdown').on('click',function(){
      $(this).parents('.tp-dates').find('.tp-dropdown').fadeToggle();
    })
    //------------------------------------------------------------------------//

    //table
    $('table').each(function(){
      $(this).wrap('<div class="table-wrapper"></div>')
    });

    //------------------------------------------------------------------------//

    //map-interactive
    $('.map-interactive a').on('click',function(){
      var mapsText = "ajax/map/"+$(this).attr('data-map')+".html";
      var mapsSlider = "ajax/slider/"+$(this).attr('data-slider')+".html";
      $('.map-interactive a').removeClass('active');
      $('.map-description.visible,.slider-item').remove();
      $(this).addClass('active');
      $("#ajax-map-place").fadeOut(100, function() {
        $(this).load(mapsText, function(){
              $(this).fadeIn(100);
        });
      });
      $("#ajax-slider-place").load(mapsSlider);
      return false;
    })

    //------------------------------------------------------------------------//

    //fixed header
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1) {
        $('header').addClass('fixed-header');
      }else{
        $('header').removeClass('fixed-header');
      };
    })
    $(window).scroll(function(){
      if ($(this).scrollTop() > 80) {
        $('header').addClass('fixed-header-transparent');
      }else{
        $('header').removeClass('fixed-header-transparent');
      };
    })

    //------------------------------------------------------------------------//
    //popup
    $(window).bind("touchstart click", function(e){
        if (('.popup-box').length) {
            $('.popup-box').fadeOut();
            $('body').removeClass('body-hidden');
        }
    });
    $('.popup').bind("click touchstart", function(event){
        event.stopPropagation();
    });
    $('.popup-share').bind("click touchstart", function(event){
        event.stopPropagation();
    });
    $(document).keydown(function(e){
        if (e.keyCode == 27){
            $('.popup-box').fadeOut();
            $('body').removeClass('body-hidden');
            e.preventDefault();
        }
    });

    $('.open-popup').on('click',function(){
        if (('.popup-box').length) {
            $('.popup-box').fadeOut();
            $(""+$(this).attr('href')+"").fadeIn();
            $('body').addClass('body-hidden');
        }
        return false;
    });
    
    // $('.change-popup').on('click',function(){
    //     if (('.popup-box').length) {
    //         console.log('changes ');
    //         $('.popup-box').fadeOut();
    //         $(""+$(this).attr('href')+"").fadeIn();
    //         $('body').addClass('body-hidden');
    //     } else{
    //       console.log('there is not popup');
    //     }
    //     return false;
    // });

    $('.iframe-form').load(function(){

            var iframe = $(this).contents();

            iframe.find(".change-popup").click(function(){
            
              $('.popup-box').fadeOut();
              $(""+$(this).attr('href')+"").fadeIn();
              $('body').addClass('body-hidden');

            });

            iframe.find(".close-popup").click(function(){
            
              $('.popup-box').fadeOut();
              $('body').addClass('body-hidden');

            });
    });


    $('.close-popup').on('click', function() {
        $('.popup-box').fadeOut();
            $('body').removeClass('body-hidden');
        return false;
    });
    $('.clos').on('click', function() {
        $('.popup-box').fadeOut();
            $('body').removeClass('body-hidden');
        return false;
    });
    $('.forgotten-link').on('click',function(){
      $('#login').fadeOut();
    });
    $('.register-link').on('click',function(){
      $('#login').fadeOut();
    });
    $('.login-popup-link').on('click',function(){
      $('#register,#forgotten').fadeOut();
    });

    //------------------------------------------------------------------------//

    //copy-link
    $('.copy-link > a').on('click',function(){
      if ( $(this).hasClass('select_p') ) {
        $(this).removeClass('select_p');
      } else {
        $('.copy-link > a').removeClass('select_p');
        $(this).addClass('select_p');
      }
      $('.share-box').fadeToggle();
    })
    //------------------------------------------------------------------------//

    //Select selectric
    if( $('.ss-select select').length !=0){
      $('.ss-select select').selectric({
       disableOnMobile: false
      });
    }
    //------------------------------------------------------------------------//
    // (function () {
    //   //Page-image variable height
    //   var width_ = 1920;
    //   var height_ = 400;
    //   var initial_height_ = 400;

    //   function resizeBlock(init_height){

    //     var d_w = $(document).width();
    //     var d_h = $(window).height();
    //     var coef = 1;
    //     var min_h = 200;
    //     var max_h = d_h - $('header').height() - $('.spanning .search-box').height();
    //     var h = 400;

    //     if( d_w > 1400 ){
    //        coef =  1;
    //        min_h = 400;
    //     } else if( d_w > 990 && d_w < 1401 ) {
    //       coef =  0.9;
    //        min_h = 400;
    //     } else if( d_w > 767 && d_w < 991 ) {
    //       coef =  0.8;
    //       min_h = 300;
    //     } else if( d_w > 520 && d_w < 768 ) {
    //       coef =  0.7;
    //       max_h = 300;
    //     } else if( d_w > 420 && d_w < 521 ) {
    //       coef =  0.6;
    //       max_h = 280;
    //     } else{
    //       coef =  0.5;
    //       max_h = 250;
    //     }

    //     h = Math.max(min_h, init_height);
    //     h = Math.min(h, max_h);
    //     if( $('.page-image').hasClass('full-height') ) {
    //       h = max_h;
    //     }
    //     return h;
    //   }
    //   var block = $('.page-image');
    //   var image_url = block.css('background-image'),
    //   image="";
    //   // Remove url() or in case of Chrome url("")
    //   if(block.length !=0 ){

    //     image_url = image_url.match(/^url\("?(.+?)"?\)$/);

    //     if (image_url[1]) {
    //         image_url = image_url[1];
    //         image = new Image();


    //         // just in case it is not already loaded
    //         $(image).load(function () {
    //             // alert(image.width + 'x' + image.height);
                
    //             initial_height_ = image.height;
    //             height_ = resizeBlock(initial_height_) - 10;
    //             block.css("height", height_);
    //         });

    //         $(window).resize(function() {
    //           height_ = resizeBlock(initial_height_) - 10;
    //           block.css("height", height_);
    //           // console.log($(document).width());
    //         });
    //         image.src = image_url;
    //     }
    //   }

    // })();

    //------------------------------------------------------------------------//
    // Img popup 
    if($('a.popup').length){

        $('a.popup').magnificPopup({
            type:'image', 
            gallery:{
              enabled:true
            }
        });
    }
    //------------------------------------------------------------------------//

    //count-characters
    $(function() {

        if( $('#review_copy_count').length ){
          var dest_p = $( '#review_copy_em' );
          var dest = $( '#review_copy_count' );
          var min_n = 150;
          var val = 0 ;
          $('.count-characters').keyup(function(){
            val = $(this).val().length;
            dest.text(val);
            if( val < min_n && dest_p.hasClass('enough') ){
              dest_p.removeClass('enough');
            } else if(val > min_n && !dest_p.hasClass('enough')){
              dest_p.addClass('enough');
            }
          });
        }

    });
    //------------------------------------------------------------------------//

    //rate-me
    function changeRate(elm){
              $(elm).parent('label').nextAll().removeClass('active');
              $(elm).parent('label').addClass('active').prevAll().addClass('active');
    }
    $(function() {

        if( $('.rate-me').length ){
            
           $('.rate-me input').change(function() {
              changeRate(this);
           });
          
        }

    });
    //------------------------------------------------------------------------//

    //rate-me 2
    function changeRate(elm){
              $(elm).parents('.radio').find('span.active').removeClass('active');
              $(elm).parent('span').addClass('active').prevAll().addClass('active');
    }
    $(function() {

        if( $('.form_container_stars').length ){

          $('.form_container_stars .radio input').each(function( index ) {

            if( $(this).is(':checked') ){
                changeRate(this);
            }
            
          });

           $('.form_container_stars label').click(function(e){

            $(this).prev().prop("checked", true);
            changeRate(this);
            
           });

           
          
        }

    });
  
    //------------------------------------------------------------------------//
    // Dropdown (menu)
      $(function(){  
         $('.btn-menu-dropdown').hover(function(){

           $(this).addClass('opened');
           // console.log('jj');

          // $('.wrap-dropdown.opened').removeClass('opened').fadeOut();
          // $(target).addClass('opened').fadeIn();

        },function(){

           $(this).removeClass('opened');
           console.log('mnn');

          // $('.wrap-dropdown.opened').removeClass('opened').fadeOut();
          // $(target).addClass('opened').fadeIn();

        } );


         $('.wrap-dropdown .country-list li > a').on('click',function(){
            var target = $(this).attr('data-target');
                if( target == '' || target == undefined ) {
                  // console.log('no target');
                  $(this).parents('.wrap-dropdown').removeClass('opened-aside');
                  $(this).parents('.wrap-dropdown').find('.block-active').removeClass('block-active').fadeOut();
                  
                }
          if ( !$(this).hasClass('active') ) {
                // console.log('she is not active');

              
            $(this).parents('.country-list').find('.active').removeClass('active');
            $(this).addClass('active');
            

            if ( $(this).parents('.wrap-dropdown').hasClass('opened-aside') ) {
                // console.log('there is aside');

              $(this).parents('.wrap-dropdown').find('.block-active').removeClass('block-active').fadeOut( 500, function() {
                $(target).addClass('block-active').fadeIn();
               
              });
              
            } else {
              // console.log('activate first time');

              $(target).addClass('block-active').fadeIn(500, function() {
                $(this).parents('.wrap-dropdown').addClass('opened-aside');
              });
              
            
            }
          } else{
            // console.log('closing');
            $(this).removeClass('active');
              $(this).parents('.wrap-dropdown').removeClass('opened-aside');
              $(this).parents('.wrap-dropdown').find('.block-active').removeClass('block-active').fadeOut();
          }
        })
        
          var $win = $(window); // or $box parent container
          var $box = $(".wrap-dropdown,.btn-dropdown");
          
           $win.on("click", function(event){  
             
            if ( 
              $box.has(event.target).length == 0 //checks if descendants of $box was clicked
              &&
              !$box.is(event.target) //checks if the $box itself was clicked
            ){
              $('.wrap-dropdown.opened').removeClass('opened').fadeOut();

            }
          });
  
        });


    
    //------------------------------------------------------------------------//

    //Popup country
    // function deselect(e) {
    //   $('.popup-country').slideFadeToggle(function() {
    //     e.removeClass('select_p');

    //   });
    // }

    $(function() {

        function load_slides(target_, url) {
            $.get(url, function(res) {
                $(target_).html(res);

                $('.tp-box.new-model').not('.slick-initialized').slick({
                    nextArrow: '<i class="slider-left-arrow"></i>',
                    prevArrow: '<i class="slider-right-arrow"></i>',
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    autoplaySpeed: 4000,
                    speed: 400,
                    lazyLoad: 'ondemand',
                });

                $('.tp-box.new-model').on('afterChange', function(event, slick, currentSlide, nextSlide){
                      var load_next = $('#slide_photo_' + currentSlide).attr('url');
                      console.log(currentSlide + ' ' + load_next);

                      load_slides(target_, load_next);
                });


                $('.popup-country .close').on('click', function() {
                    var target_ =$(this).parents('.popup-country').attr('id');
                    $('[data-target="#'+target_+'"]').removeClass('select_p');
                    $(this).parents('.popup-country').fadeOut();
                    return false;
                });

                //set_give_kudu();
                //set_add_comment();

            });
        }

        //slider 2
        $('.tp-box.new-model').not('.slick-initialized').slick({
            nextArrow: '<i class="slider-left-arrow"></i>',
            prevArrow: '<i class="slider-right-arrow"></i>',
            arrows: true,
            dots: false,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 400,
            lazyLoad: 'ondemand',
        });


      $('.co').on('click', function() {

        var target_ = $(this).attr('data-target');
        console.log(target_);

        var url = $(this).attr('href');
        console.log('url: ', url);
        if (url.length) {
            load_slides(target_, url);
        }

        if($(this).hasClass('select_p')) {
          // deselect($(this));
          $(this).removeClass('select_p');
          $(target_).fadeOut();
        } else {
          $('.select_p').removeClass('select_p');
          $('.popup-country').fadeOut();
          $(target_).fadeIn();
          $(this).addClass('select_p');
          // $('.popup-country').slideFadeToggle();
        }
      return false;
    });

    $('.popup-country .close').on('click', function() {
      var target_ =$(this).parents('.popup-country').attr('id');
        $('[data-target="#'+target_+'"]').removeClass('select_p');
        $(this).parents('.popup-country').fadeOut();
        return false;
      });

    });
    // $.fn.slideFadeToggle = function(easing, callback) {
    //   return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
    // };
    $('.icon-like').on('click',function(){
      $(this).addClass('active');
    });
    //Clone sidebar mobile
    var col = {
      md: "screen and (max-width: 1200px)",
      sm: "screen and (max-width: 970px)",
      xs: "screen and (max-width: 768px)",
      mb: "screen and (max-width: 640px)"
    }
    var x;  

    /*
    enquire.register(col.mb, {
      setup : function() {
          x  = $( ".mobile-sidebar" );
      },
      match : function() {
          $( ".app-sidebar" ).find('.mobile-sidebar').detach();
      $( ".clone-sidebar" ).append(x);
      },  
      unmatch : function() {
      $( ".clone-sidebar" ).find('.mobile-sidebar').detach();
      $( ".app-sidebar" ).prepend(x);
      }
  });      
      */

});//document ready
