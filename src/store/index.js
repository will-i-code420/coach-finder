import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index';

export default createStore({
	modules: { coaches: coachesModule },
	state() {
		return {
			userId: null
		};
	},
	mutations: {
		setUserId(state, id) {
			state.userId = id;
		}
	},
	actions: {
		setUserId({ commit }, form) {
			const { id } = form;
			if (!this.state.userId) {
				commit('setUserId', id);
			} else {
				throw new Error('Already have userID assigned!!');
			}
		}
	},
	getters: {
		getUserId(state) {
			return state.userId;
		}
	}
});
