window.onload = function () {
    new Vue({
        el: "#main-menu",
        data: {
            name: ''
        },
        created: function () {
            this.GetQueryString();
        },
        methods: {
            GetQueryString() {
                var url = location.href;
                var adminName = url.split('=')[1];
                this.name = adminName;
            }
        }
    });
    new Vue({
        el: "#all-content",
        data: {
            ContentHtml: ''
        },
        created: function () {
            this.shabi()
        },
        methods: {
            shabi() {
                this.template = '<div>shabi</div>'

            },
            ModifyAccount: function () {
                this.ContentHtml = '<div class="logCon"><div class="line"><span>原账号:</span><input v-model = "OldAccount" class="bt_input" type="text" placeholder="原账号"/></div>'+
                '<div class="line"><span>新账号:</span><input v-model = "NewAccount" class="bt_input" type="text" placeholder="新账号"/></div>'+
                '<div class="line"><span>密码:</span><input v-model = "password" class="bt_input" type="password" placeholder="密码"/></div></div>'
            }
        }
    })
}