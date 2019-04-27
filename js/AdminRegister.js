window.onload = function () {
  new Vue({
    el: "#content",
    data: {
      account: "",
      password: "",
      name: "",
      phone: "",
      identifyingCode: "",
      identifyingCodeServer: '',
      regionalCode: ""
    },
    methods: {
      register: function (event) {
        if (this.account == null || this.account == '') {
          alert("账号为空，请填写账号");
        }
        else if (this.password == null || this.password == '') {
          alert("密码为空，请填写密码");
        }
        else if (this.name == null || this.name == '') {
          alert("姓名为空，请填写姓名");
        }
        else if (this.phone == null || this.phone == '') {
          alert("电话号码为空，请填写电话号码");
        }
        else if (this.identifyingCode == null || this.identifyingCode == '') {
          alert("验证码为空，请填写验证码");
        }
        else if(this.identifyingCode != this.identifyingCodeServer){
          alert("验证码错误，请重新填写");
        }
        else if (this.regionalCode == null || this.regionalCode == '') {
          alert("负者区域为空，请填写负者区域名称");
        }
        else {
          //post传递参数
          this.$http
            .post(
              "http://127.0.0.1:8080/Admin/register",
              {
                account: this.account,
                password: this.password,
                name: this.name,
                phone: this.phone,
                regionalCode: this.regionalCode
              },
              {
                emulateJSON: true
              }
            )
            .then(function (res) {
              var stat = res.bodyText.split(",")[0];
              var adminName = res.bodyText.split(",")[1];
              if (stat == "该账号已存在") {
                alert("该账号已存在,请重新注册");
              }
              if (stat == "注册失败") {
                alert("注册失败，请重试");
              }
              if (stat == "注册成功") {
                window.location.href = "Admin.html?name=" + adminName;
              }
            });
        }
      },
      login: function () {
        //返回到登录页面
        window.location.href = "AdminLogin.html";
      },
      identify: function (event) {
        this.$http
          .post(
            "http://127.0.0.1:8080/Admin/verification",
            {
              phone: this.phone,
            },
            {
              emulateJSON: true
            }
          )
          .then(function (res) {
            this.identifyingCodeServer = res.bodyText;
          });
      }
    }
  });
};
