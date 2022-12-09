$(function () {

  // To fadeInOut scrollup button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });


  // scrollup button click event
  $(document).on("click", ".scrollup", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });



  // Client video play
  $(document).on('click', '#playBtn', () => {
    $('#header').css('z-index', '222');
  })


  // Change attr of form when toggle between contact and hire us
  $(document).on('click', '#openHireComponent', () => {
    $("#contactPage input[name = 'group[6483][1]'").attr('id', 'sss');
    $("#contactPage input[name = 'group[6487][2]'").attr('id', 'ddd');
    $("#hire_us_form input[name = 'group[6487][2]'").attr('token_id', 'hire_us_form');
    $('.for_hire_us_section').css('display','block');
    $('.for_contact_us_section').css('display','none');
    $('.send-btn-hireus').css('margin-top','45px');
  })

  // Change attr of form when toggle between contact and hire us
  $(document).on('click', '#hideme', () => {
    $oneId = $("#contactPage input[name = 'group[6483][1]'").attr('cid');
    $twoId = $("#contactPage input[name = 'group[6487][2]'").attr('cid');
    $("#contactPage input[name = 'group[6483][1]'").attr('id', $oneId);
    $("#contactPage input[name = 'group[6487][2]'").attr('id', $twoId);
    $('.for_hire_us_section').css('display','none');
    $('.for_contact_us_section').css('display','block');
    $('.send-btn-hireus').css('margin-top','25px');
  })


  // Home Section Box content toggle
  $(document).on('click', '.hover-btn', function () {
      
    if ($(this).parent().find('p').css('display') == 'none') {
        $('.hover-btn').parent().find('p').css('display','none');
        $('.hover-btn').removeClass('hover-btn-box');
        $('.hover-btn').parent().find('img').css('display' , 'block');

        $(this).parent().find('p').css({'display': '-webkit-box','-webkit-line-clamp' : '6', '-webkit-box-orient' : 'vertical', 'overflow' : 'hidden'});
        $(this).addClass('hover-btn-box');
        $(this).parent().find('img').css('display', 'none');
    } else {
        $(this).parent().find('p').css('display', 'none');
        $(this).removeClass('hover-btn-box');
        $(this).parent().find('img').css('display', 'block');
    }
  })


  // Home Section Boxes animation   [ mouse enter ]
  $(document).on('mouseenter', '#container > div.item', function(e){
    var $item = $(this),
    direction = $item.entry({ e: event });
    if ($item.hasClass('opened')) $item.find('.hover-wrap').stop(true, true).show();
    $.when($item.find('.hover-wrap').stop(true, true).show("slide", { direction: direction }, 255, 'easeOutQuad')).done(function () {
      $item.addClass('opened');
    });
    var inverted_direction = $item.entry({ e: event, invert: true });
    $item.siblings('.opened').removeClass('opened')
      .find('.hover-wrap').hide("slide", { direction: direction }, 255, 'easeOutQuad');
  });

  // Home Section Boxes animation   [ mouse leave ]
  $(document).on('mouseleave', '#container > div.item', function(e){
    var $item = $(this),
      direction = $item.entry({ e: event });
    $.when($item.find('.hover-wrap').stop(true, true).hide("slide", { direction: direction }, 255, 'easeOutQuad')).done(function () {
      $item.removeClass('opened');
    });
  })




  // show more button


  $(document).on('click','.show_more_btn', function(e) {
    // e.preventDefault();

    $(this).parent().parent().parent().find(".blogs-tumb:hidden")

    $(this).parent().parent().parent().find(".blogs-tumb:hidden").slice(0, 6).show();
    if ($(this).parent().parent().parent().find(".blogs-tumb:hidden").length === 0) {
      $(this).parent().parent().hide();
    }
  });


});
