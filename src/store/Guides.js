import guide from '@/services/Guides.js';

export const namespaced = true;

export const state = {
	guides: null,
}

export const getters = {
	guides(state) {
    if (state.guides) {
      return state.guides;
    }
  }
}

export const mutations = {
	SET_GUIDES(state, response) {
		if (response) {
			state.guides = response;
		}
	},
}

export const actions = {
	get_all_guides({commit}) {
		return guide.allGuides()
			.then( response => {
				console.log('[*] get_all_guides', response.data);
				commit('SET_GUIDES', response.data);
			})
			.catch( error => {
				console.log('[!] get_all_guides', error);
		})
	},

	get_guides_by_destination( {commit}, {payload}) {
    return guide.guidesByDestination(payload)
      .then( response => {
        commit('SET_GUIDES', response.data);
      })
	}
}