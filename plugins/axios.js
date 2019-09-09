// 引入插件
import {Message} from 'element-ui'

export default ({ $axios }) =>{
        // 错误的拦截器onError用于错误拦截
        $axios.onError(res =>{
            // 结构出错误代码
            console.log(res)
            const {message , statusCode} = res.response.data
            // 判断返回信息
            if(statusCode ===400){
                Message.error(message)
            }
        })
} 