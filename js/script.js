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
                $li = $( "<li/>" ).appendTo( ul );
            
            // Create and return the custom menu item content.
            $( "<a/>" ).attr( "href", "#" )
                       .html( label )
                       .appendTo( $li );
            
            return $li;
            
        }
        
    });
    var availableTags = [
      "Aventour Madagascar",
      "Madagascar Tour Guide",
      "Cactus Tours Madagascar",
      "Madagascar Tourism Expeditions",
      "Cactus Tours Madagascar",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
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
        $( "#price-from" ).val( + ui.values[ 0 ] + " Euro" );
        $( "#price-to" ).val( + ui.values[ 1 ] + " Euro" );
      }
    });
    $( "#price-from" ).val(  + $( "#slider-price" ).slider( "values", 0 ) +
      " Euro" );
    $( "#price-to" ).val( + $( "#slider-price" ).slider( "values", 1 ) +
      " Euro" );
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
      $('.share-box').fadeToggle();
    })

});//document ready