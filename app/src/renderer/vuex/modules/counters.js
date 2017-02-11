import * as types from '../mutation-types';
import service from '../../helpers/services';

const state = {
  main: 0,
};

const mutations = {
  [types.DECREMENT_MAIN_COUNTER](state) {
    service.info();
    state.main--;
  },
  [types.INCREMENT_MAIN_COUNTER](state) {
    state.main++;
  },
};

export default {
  state,
  mutations,
};
