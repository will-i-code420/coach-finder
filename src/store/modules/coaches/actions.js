export default {
	register({ commit }, coachForm) {
		const newCoach = {
			id: coachForm.id,
			firstName: coachForm.firstName,
			lastName: coachForm.lastName,
			areas: coachForm.areas,
			description: coachForm.description,
			hourlyRate: coachForm.hourlyRate
		};
		commit('register', newCoach);
	}
};
