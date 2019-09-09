// 用户管理
export const state =()=> {
   return{
    userInfo: {
        // 然后在页面里面拿到的值存储到这里,利用commit再调用
        token: "",
        user: {}
    }
   }
}

export const mutations = {
    //   设置用户信息,mutation下的方法第一个参数固定是state
    // data参数是必须的,是调用方法时候传入的参数
    setUserInfo(state, data) {
        state.userInfo = data;
    },
    // 清空userInfo
    clearUserInfo(state) {
        state.userInfo = {
            token: '',
            user: {}
        }
    }
}




export const actions = {
    login({ commit }, data) {
        return this.$axios({
            url: "/accounts/login",
            method: "post",
            data: data
        }).then(res => {
            const data = res.data;
            // 保存到本地state
            commit('setUserInfo', data);
            return data;
        })
    }
}
