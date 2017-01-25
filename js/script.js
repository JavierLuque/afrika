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
    $('.slider-item,.tp-box').slick({
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
      max: 1000,
      values: [ 100, 500 ],
      slide: function( event, ui ) {

        $( "#price-from" ).val( + ui.values[ 0 ]);
        $( "#price-to" ).val( + ui.values[ 1 ]);

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
            $(""+$(this).attr('href')+"").fadeIn();
            $('body').addClass('body-hidden');
        }
        return false;
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
    (function () {
      //Page-image variable height
      var width_ = 1920;
      var height_ = 400;
      var initial_height_ = 400;

      function resizeBlock(init_height){

        var d_w = $(document).width();
        var d_h = $(window).height();
        var coef = 1;
        var min_h = 200;
        var max_h = d_h - $('header').height() - $('.spanning .search-box').height();
        var h = 400;

        if( d_w > 1400 ){
           coef =  1;
           min_h = 400;
        } else if( d_w > 990 && d_w < 1401 ) {
          coef =  0.9;
           min_h = 400;
        } else if( d_w > 767 && d_w < 991 ) {
          coef =  0.8;
          min_h = 300;
        } else if( d_w > 520 && d_w < 768 ) {
          coef =  0.7;
          max_h = 300;
        } else if( d_w > 420 && d_w < 521 ) {
          coef =  0.6;
          max_h = 280;
        } else{
          coef =  0.5;
          max_h = 250;
        }

        h = Math.max(min_h, init_height);
        h = Math.min(h, max_h);
        // if( h > max_h ) { h = max_h }
        return h;
      }
      var block = $('#page-image');
      var image_url = block.css('background-image'),
      image="";
      // Remove url() or in case of Chrome url("")
      if(block.length !=0 ){
        image_url = image_url.match(/^url\("?(.+?)"?\)$/);

        if (image_url[1]) {
            image_url = image_url[1];
            image = new Image();


            // just in case it is not already loaded
            $(image).load(function () {
                // alert(image.width + 'x' + image.height);
                
                initial_height_ = image.height;
                console.log(initial_height_);
                height_ = resizeBlock(initial_height_) - 10;
                block.css("height", height_);
            });

            $(window).resize(function() {
              height_ = resizeBlock(initial_height_) - 10;
              block.css("height", height_);
              // console.log($(document).width());
            });
            image.src = image_url;
        }
      }

    })();

    //------------------------------------------------------------------------//

    //Popup country
    // function deselect(e) {
    //   $('.popup-country').slideFadeToggle(function() {
    //     e.removeClass('select_p');

    //   });
    // }

    $(function() {
      $('.co').on('click', function() {

        var target_ = $(this).attr('data-target');
console.log(target_);
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
