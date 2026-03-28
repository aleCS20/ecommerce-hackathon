import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Definição das rotas seguindo o escopo do Hackathon [cite: 27, 28]
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        // Layout padrão para o consumidor (Header + Conteúdo)
        component: () => import('../layouts/DefaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
                path: 'product/:id',
                name: 'ProductDetails',
                component: () => import('../views/ProductDetails.vue'),
                props: true // Permite receber o ID da URL como prop [cite: 37]
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import('../views/Cart.vue')
            },
            {
                path: 'checkout',
                name: 'Checkout',
                component: () => import('../views/Checkout.vue'),
                meta: { requiresAuth: true } // Guard de segurança para o checkout [cite: 39]
            }
        ]
    },
    {
        path: '/admin',
        // Layout diferenciado para área administrativa [cite: 24, 52]
        component: () => import('../layouts/AdminLayout.vue'),
        meta: { requiresAdmin: true },
        children: [
            {
                path: '',
                name: 'AdminDashboard',
                component: () => import('../views/AdminDashboard.vue')
            },
            {
                path: 'products',
                name: 'AdminProducts',
                component: () => import('../views/AdminProducts.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // Garante que a página sempre carregue no topo ao mudar de rota
    scrollBehavior() {
        return { top: 0 };
    }
});

/**
 * Guards de Proteção de Acesso (Requisito Atividade 5)
 */
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('user_token');
    const userRole = localStorage.getItem('user_role');

    if (to.meta.requiresAuth && !isAuthenticated) {
        alert('Por favor, faça login para acessar o checkout.');
        next({ name: 'Home' });
    }

    else if (to.meta.requiresAdmin && userRole !== 'ADMIN') {
        alert('Acesso restrito a administradores.');
        next({ name: 'Home' });
    }
    else {
        next();
    }
});

export default router;
