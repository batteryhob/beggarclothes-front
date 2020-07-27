
/* eslint-disable */

import {
    FEEDS
} from '../../constant/index';
import axios from 'axios'

const feeds = {
    //상태(데이터)
    state: {
        data: {

        }
    },
    getters: {
        bannerData(state) {
            return state.data;
        },
    },
    //동기
    mutations: {
       [FEEDS.GET_LIST]: (state, payload) => {           
            state.data = payload.data;
        }
    },
    //비동기
    actions: {
        [FEEDS.GET_LIST]({
            state,
            commit
        }, payload) {
            
        }
    }
}

export default feeds