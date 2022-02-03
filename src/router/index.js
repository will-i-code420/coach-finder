import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/coaches',
		name: 'Coaches',
		component: null
	},
	{
		path: '/coaches/:id',
		component: null,
		children: [ { path: 'contact', component: null } ]
	},
	{
		path: '/register',
		name: 'Register',
		component: null
	},
	{
		path: '/requests',
		name: 'Requests',
		component: null
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
		component: null
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
