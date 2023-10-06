$(document).ready(function () {
    $('#customer_register').validate({
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
  $(document).ready(function () {
    $('#customer_login').validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 8
        },
      },
      messages: {
        email: {
          required: "Vui lòng nhập email.",
          email: "Vui lòng nhập đúng định dạng email."
        },
        password: {
          required: "Vui lòng nhập mật khẩu.",
          minlength: "Mật khẩu ít nhất {8} ký tự."
        },
      },
      submitHandler: function (form) {
        alert("Đăng ký thành công!");
        form.submit();
      },
    });
  });