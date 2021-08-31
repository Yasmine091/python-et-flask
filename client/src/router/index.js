import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Topic from '../views/Topic.vue';
import New from '../views/New.vue';
import Edit from '../views/Edit.vue';
import Message from '../views/Message.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list',
    name: 'List',
    component: Home,
  },
  {
    path: '/topic/:id',
    name: 'Topic',
    component: Topic,
  },
  {
    path: '/delete/:id',
    name: 'Delete',
    component: Message,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Message,
  },
  {
    path: '/new',
    name: 'New',
    component: New,
  },
  {
    path: '/save',
    name: 'Save',
    component: Message,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
