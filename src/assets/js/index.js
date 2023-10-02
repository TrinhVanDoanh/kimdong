
// Slider
$(document).ready(function(){
    $('.main_banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      dots:false,
      // <div class="banner_slider-icon"></div>
      prevArrow: `<button type='button' class='slick-prev '><i class=" banner_slider-icon-prev fa-solid fa-chevron-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class=" banner_slider-icon-next fa-solid fa-chevron-right"></i></button>`,
    });
  });

  $(document).ready(function(){
    $('.book-list').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows:true,
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: true,
      dots:false,
      // <div class="banner_slider-icon"></div>
      prevArrow: `<button type='button' class='slick-prev '><i class=" banner_slider-icon-prev fa-solid fa-chevron-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class=" banner_slider-icon-next fa-solid fa-chevron-right"></i></button>`,
    });
  });

  // Trở lại đầu trang
  var $backToTop = $("#backtop");
  $backToTop.hide();
  
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });
  
  $backToTop.on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 1000);
  });

  // Ẩn hiện rõ hàng
  const cartIcon = document.querySelector('.cart_icon i')
  const viewCart = document.querySelector('.view_cart')
  const btnCloseCart = document.querySelector('#view_cart-close ')
  const viewCartMain = document.querySelector('.view_cart-main')

 
  $(cartIcon).click(function() {
    viewCart.style.display = 'block';
  })
  $(btnCloseCart).click(function() {
    viewCart.style.display = 'none';
  })
  $(document).click(function(e) {
    if (!viewCart.contains(e.target) && e.target !== cartIcon) {
      viewCart.style.display = 'none';
    }
  })
 

  // Form đăng nhập
  const singIn = document.querySelector('.signin')
  const register = document.querySelector('.register')
  $(register).click(function() {
    $('.overlay').removeClass('d-none');
    $('#form_container').removeClass('d-none');
    $('#form_register').removeClass('d-none');
    $('#form_singin').addClass('d-none');
    $('html, body').css('overflow', 'hidden');
  });
  $(singIn).click(function() {
    $('.overlay').removeClass('d-none');
    $('#form_container').removeClass('d-none');
    $('#form_register').addClass('d-none');
    $('#form_singin').removeClass('d-none');
    $('html, body').css('overflow', 'hidden');
  });

  $('#link_singin').click(function() {
    $('#form_register').addClass('d-none');
    $('#form_singin').removeClass('d-none');
  });
  $('#link_register').click(function() {
    $('#form_register').removeClass('d-none');
    $('#form_singin').addClass('d-none');
  });

  $('.close_form').click(function() {
    $('.overlay').addClass('d-none');
    $('#form_container').addClass('d-none');
    $('html, body').css('overflow', '');
  });

  $(document).ready(function() {
    $('#form_register').validate({
      rules: {
        name: {
          required: true
        },
        phone: {
          required: true,
          minlength: 2, 
          pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g 
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 8 
        },
        gender: {
          required: true
        },
        date: {
          required: true
        },
        "checkbox-infor": {
          required: true
        }
      },
      messages: {
        name: {
          required: "Vui lòng nhập tên."
        },
        phone: {
          required: "Vui lòng nhập số điện thoại.",
          minlength: "Ít nhất {0} ký tự cần thiết.",
          pattern: "Bạn phải nhập đúng số điện thoại."
        },
        email: {
          required: "Vui lòng nhập email.",
          email: "Vui lòng nhập đúng định dạng email."
        },
        password: {
          required: "Vui lòng nhập mật khẩu.",
          minlength: "Mật khẩu ít nhất {8} ký tự."
        },
        gender: {
          required: "Vui lòng chọn giới tính."
        },
        date: {
          required: "Vui lòng nhập ngày sinh."
        },
        "checkbox-infor": {
          required: "Bạn phải chấp nhận các điều khoản."
        }
      },
      submitHandler: function(form) {
        alert("Đăng ký thành công!");
        form.submit();
      },
    });
  });


  // Tìm kiếm
  $(document).ready(function(){
    console.log($('.search-input'));

    $('.search-input').keydown(function(e){
        var inputValue = $(this).val();
        if(inputValue) {
            $('.search_smart').css('display','block')
        }
        else {
            $('.search_smart').css('display','none')
        }
    });
 
});







