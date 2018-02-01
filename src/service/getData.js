import fetch from './../config/fetch'
import {getStore} from '../config/mUtils'

// 获取定位城市
export const cityGuess = () => fetch('/v1/cities',{
    type:'guess'
})

// 获取热门城市
export const hotCity = () => fetch('/v1/cities',{
    type:'hot'
})

//  获取所有城市
export const groupCity = () => fetch('/v1/cities',{type:'group'})

//获取登录验证码
export const getCheckCode = () => fetch('/v1/captchas',{},'POST')

//用户密码登录
export const accountLogin = (username,password,captcha_code) => fetch('/v2/login',{username,password,captcha_code},'POST')