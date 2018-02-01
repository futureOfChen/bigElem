import { RECORD_USERINFO } from './mutation_type'
import {setStore} from '../config/mUtils'

export default {
    [RECORD_USERINFO](state,info) {
        state.userInfo = info;
        state.login = true;
        setStore('user_id',info.user_id);
    }
}