/* Mailchimp Ajax Code start */
$(function () {
    $("#head").load("head.html"); 
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
    $('.cookieBubble').cookieBubble();
    // Initialize
    var validator = $("#mc-embedded-subscribe-form").validate({
        errorClass: 'validation-error-label',
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        onfocusout: function (element) {
            this.element(element);
        },
        errorPlacement: function (error, element) {
            if (element.parents('div').hasClass('input-group')) {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }

        },
        submitHandler: function (form, e) {
            e.preventDefault();
            if ($(form).valid()) {
                $('#mc-embedded-subscribe').val('Sending...');
                var $form = $('#mc-embedded-subscribe-form');
                $.ajax({
                    dataType: 'json',
                    type: $form.attr('method'),
                    url: $form.attr('action'),
                    cache: false,
                    data: $form.serialize(),
                    contentType: 'application/json; charset=utf-8',
                    error: function (err) {
                        alert(
                            'Could not connect to the registration server. Please try again later.'
                        );
                    },
                    success: function (data) {
                        $('#mc-embedded-subscribe').val('Send');
                        if (data.result === 'success') {
                            $('#mce-success-response').html(
                                '<p class="thanks_msg">Thank you for your message!</p><p class="get_msg">We will get back to you in 24 hours.</p><p class="get_msg">Meanwhile take a look at our blog.</p><p class="blog_btn"><a href="#">Read Our Blog</a></p>'
                            );
                            $('.display-form').hide();
                            $('#mce-success-response').show();
                            $('#mce-error-response').hide();
                        } else {
                            $('#mce-error-response').html('<p>' + data.msg +
                                '</p>');
                            $('#mce-error-response').show();
                            $('#mce-success-response').hide();
                        }
                    }
                });

            }
        },
        rules: {
            FNAME: "required",
            LNAME: "required",
            'group[6487][2]': "required",
            EMAIL: {
                required: true,
                email: true
            }
        }
    });
});
/* Mailchimp Ajax Code end */
//aos animation js
$(function () {
    new WOW().init();
});
$(document).ready(function () {
    var dots = $(".dots");
    var moreText = $(".more");
    var btnText = $(".client_review_btn");
    $(".client_review_btn").click(function () {
        $(this).parent().find(".more").show();
        $(this).parent().find(".dots").hide();
        $(this).hide();
        var stHeight = $('.client-slider .slick-track').height() + 100;
        $('.client-slider .slick-slide').css('height', stHeight + 'px');
    });
    $('.header_section input[type="checkbox"]').click(function () {
        if ($(this).is(":checked")) {
            $('.outer-menu').addClass('outer_fixed').addClass('container');
            setTimeout(function () {
                $('.hire-us-modal').addClass('hire-us-modal-menushow')
            }, 200);



        } else if ($(this).is(":not(:checked)")) {
            $('.outer-menu').removeClass('outer_fixed').removeClass('container');
            $('.hire-us-modal').removeClass('hire-us-modal-menushow')
        }
    });




    $(".regular").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $(".client-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
});
$(window).on('load', function () {
    var stHeight = $('.client-slider .slick-track').height();
    $('.client-slider .slick-slide').css('height', stHeight + 'px');
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});