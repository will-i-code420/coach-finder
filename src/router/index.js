import { createRouter, createWebHistory } from 'vue-router';

import CoachRegister from '@/views/CoachRegister.vue';
import CoachesList from '@/views/CoachesList.vue';
import CoachDetail from '@/views/CoachDetail.vue';
import ContactCoach from '@/views/ContactCoach.vue';
import RequestsReceived from '@/views/RequestsReceived.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
	{
		path: '/',
		redirect: '/coaches'
	},
	{
		path: '/coaches',
		name: 'Coaches',
		component: CoachesList
	},
	{
		path: '/coaches/:id',
		component: CoachDetail,
		props: true,
		children: [ { path: 'contact', component: ContactCoach } ]
	},
	{
		path: '/register',
		name: 'Register',
		component: CoachRegister
	},
	{
		path: '/requests',
		name: 'RequestsReceived',
		component: RequestsReceived
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/:notFound(.*)',
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
