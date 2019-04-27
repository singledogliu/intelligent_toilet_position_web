
new Vue({
  el: "#content",
  data: {
    account: '',
    password: ''
  },
  methods: {
    login: function (event) {
      if (this.account == null || this.account == '') {
        alert("账号为空，请填写账号");
      }
      else if (this.password == null || this.password == '') {
        alert("密码为空，请填写密码");
      }
      else {
        //post传递参数
        this.$http
          .post(
            'http://127.0.0.1:8080/Admin/login',
            {
              account: this.account,
              password: this.password
            },
            {
              emulateJSON: true
            }
          )
          .then(function (res) {
            // console.log("wo shou dao fan hui le");
            var stat = res.bodyText.split(",")[0];
            var adminName = res.bodyText.split(",")[1];
            if (stat == "登录成功") {
              console.log("wo jin lai le")
              //跳转到管理员功能界面
              window.location.href = "Admin.html?name=" + adminName;
            }
          });
      }
    },
    register: function () {
      //跳转到注册页面
      // localStorage.setItem("account", account);
      window.location.href = "AdminRegister.html";

    }
  }
});

