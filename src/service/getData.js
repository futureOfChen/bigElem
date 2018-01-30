import fetch from './../config/fetch'
import {getStore} from '../config/mUtils'

export const cityGuess = () => fetch('/v1/cities',{
    type:'guess'
})

export const hotCity = () => fetch('/v1/cities',{
    type:'hot'
})

export const groupCity = () => fetch('/v1/cities',{type:'group'})