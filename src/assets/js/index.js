
// Slider
$(document).ready(function () {
  $('.main_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    // <div class="banner_slider-icon"></div>
    prevArrow: `<button type='button' class='slick-prev '><i class=" banner_slider-icon-prev fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class=" banner_slider-icon-next fa-solid fa-chevron-right"></i></button>`,
  });
});

$(document).ready(function () {
  $('.book-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    // <div class="banner_slider-icon"></div>
    prevArrow: `<button type='button' class='slick-prev '><i class=" banner_slider-icon-prev fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class=" banner_slider-icon-next fa-solid fa-chevron-right"></i></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
});

// Trở lại đầu trang
var $backToTop = $("#backtop");
$backToTop.hide();

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function (e) {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

// Ẩn hiện rõ hàng
const cartIcon = document.querySelector('.cart_icon i')
const viewCart = document.querySelector('.view_cart')
const btnCloseCart = document.querySelector('#view_cart-close ')
const viewCartMain = document.querySelector('.view_cart-main')


$(cartIcon).click(function () {
  viewCart.style.display = 'block';
})
$(btnCloseCart).click(function () {
  viewCart.style.display = 'none';
})
$(document).click(function (e) {
  if (!viewCart.contains(e.target) && e.target !== cartIcon) {
    viewCart.style.display = 'none';
  }
})


// Form đăng nhập
const singIn = document.querySelector('.signin')
const register = document.querySelector('.register')
$(register).click(function () {
  $('.overlay').removeClass('d-none');
  $('#form_container').removeClass('d-none');
  $('#form_register').removeClass('d-none');
  $('#form_singin').addClass('d-none');
  $('html, body').css('overflow', 'hidden');
});
$(singIn).click(function () {
  $('.overlay').removeClass('d-none');
  $('#form_container').removeClass('d-none');
  $('#form_register').addClass('d-none');
  $('#form_singin').removeClass('d-none');
  $('html, body').css('overflow', 'hidden');
});

$('#link_singin').click(function () {
  $('#form_register').addClass('d-none');
  $('#form_singin').removeClass('d-none');
});
$('#link_register').click(function () {
  $('#form_register').removeClass('d-none');
  $('#form_singin').addClass('d-none');
});

$('.close_form').click(function () {
  $('.overlay').addClass('d-none');
  $('#form_container').addClass('d-none');
  $('html, body').css('overflow', '');
});

$(document).ready(function () {
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
    submitHandler: function (form) {
      alert("Đăng ký thành công!");
      form.submit();
    },
  });
});


// Tìm kiếm
//   $(document).ready(function(){
//     $('.search-input').keyup(function(e){
//         if( $('.search-input').val()) {
//             $('.search_smart').css('display','block')
//             $('.search-input').css('border-bottom','none')
//         }
//         else {
//             $('.search_smart').css('display','none')
//             $('.search-input').css('border-bottom','solid 1px #bebebe ')
//         }
//     });

// });

  data = [
    {
      img : './src/assets/img/search_sp1.webp',
      name : 'Chú thuật hồi chiến - Tập 1',
      currentPrice:25500,
      originalPrice:30000,
    },
    {
      img : './src/assets/img/search_sp1.webp',
      name : 'Chú thuật hồi chiến - Tập 1',
      currentPrice:25500,
      originalPrice:30000,
    },
    {
      img : './src/assets/img/search_sp1.webp',
      name : 'Chú thuật hồi chiến - Tập 1',
      currentPrice:25500,
      originalPrice:30000,
    },
  ]
  function search(){
    $('.search-input').keyup(function () {
      let query = $('.search-input').val();
      if (query == "") {
        $('.search_smart').css('display', 'none')
        $('.search-input').css('border-bottom', 'solid 1px #bebebe ')
      } else {
        $('.search_smart').css('display', 'block')
        $('.search-input').css('border-bottom', 'none')
        // let url = `http://localhost:8080/shop/keyword/${query}`;
        // fetch(url)
        //   .then((response) => {
        //     return response.json();
        //   })
          // .then((data) => {
          //   console.log(data)
        
    
        let htmls = ``;
        data.forEach((item) => {
            if (item) {
              return htmls += `
                <div class="search_smart-product-wrap">
                    <a href="">
                        <div class="search_smart-product-img"><a href=""><img src="${item.img}" alt=""></a></div>
                        <div class="search_smart-product-infor">
                            <div class="search_smart-product-name"><a href="">${item.name}</a></div>
                            <div class="search_smart-product-price">
                                <div class="search_smart-product-current-price">${item.currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</div>
                                <div class="search_smart-product-original-price">${item.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</div>
                            </div>
                        </div>
                    </a>
                </div>
                `
            } 
        });
        $('.search_smart-product').html(htmls);
          // });
          if (data.length > 0) {
            $('.no-product-load').css('display', 'none');
            $('.search_smart-title').css('display', 'flex');
            $('.search_smart-footer').css('display', 'block');
        }
        else{
          $('.no-product-load').css('display', 'block');
        setTimeout(function() {
            $('.no-product-load').css('display', 'none');
            $('.search_smart-title').css('display', 'none');
            $('.search_smart-footer').css('display', 'none');
            $('.search_smart-product').html(`
                <div class="search_smart-no-product-wrap">
                    <div class="search_smart-no-product">
                        <span>Không có sản phẩm nào cho: <span style="font-weight:bold;">${query}</span></span>
                    </div>
                </div>
            `);
        }, 1000); 
        }
      }
    })
  }
search();








