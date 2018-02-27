(() => {
    const _A_data = [
            {
                key: "用户名称"
            },
            {
                key: "密码"
            },
            {
                key: "真实姓名"
            },
            {
                key: "手机号码"
            },
            {
                key: "QQ"
            },
            {
                key: "邮箱"
            }
        ],
        _A_inps = this.inputs,      //============================
        _F_testValue = (N_cate, S_val) => {
            switch (N_cate) {
                case 0:
                    return true;    //用户名称验证
                case 1:
                    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(S_val);   //密码验证
                case 2:
                    return true;    //真实姓名验证
                case 3:
                    return /^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(Number.parseInt(S_val));    //电话号码验证
                case 4:
                    return Number.parseInt(S_val) > 10000;    //QQ验证
                case 5:
                    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(S_val);   //邮箱验证
                default:
                    break;
            }
        };

    for (let N_i in _A_inps) {
        const _S_val = _A_inps[N_i].value.trim();

        N_i = Number.parseInt(N_i);

        if (_S_val) {
            if (_F_testValue(N_i, _S_val)) {   //输入正确
                _A_data[N_i].value = _S_val;

                continue;
            } else {    //输入错误
                this.$message({type: "waring", text: "请输入正确的" + _A_data[N_i].key});

                return false;
            }
        } else {    //输入为空
            this.$message({type: "waring", text: "请输入" + _A_data[N_i].key});
            
            return false;
        }
    }

    console.log("用户输入的信息：", _A_data);
    this.$message({type: "success", text: "信息全部正确"});

    //在这里继续写处理提交的程序============================
})();