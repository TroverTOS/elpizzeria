
import { createMemoryHistory, createRouter } from 'vue-router'
import QuatroStagioni from './quatro.vue';
import Napoletana from './napoletana.vue';
import Taraneasca from './taraneasca.vue';
import Index from './index.vue';
import Checkout from './checkout.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/quatro', component: QuatroStagioni },
    { path: '/napoletana', component: Napoletana},
    { path: '/taraneasca', component: Taraneasca},
    { path: '/checkout', component: Checkout},
]

const router = createRouter ({
    history: createMemoryHistory(),
    routes,
})

export default router