var paths = [
    {
        path: "/:catchAll(.*)",
        meta: {
            public: true,
        },
        redirect: {
            path: "/404",
        },
    },
    {
        path: "/",
        meta: {
            public: true,
        },
        name: "Home",
        component: () => import(`@/components/pages/Home.vue`),
    },
    {
        path: "/404",
        meta: {
            public: true,
        },
        name: "NotFound",
        component: () => import(`@/components/pages/NotFound.vue`),
    },
    {
        path: "/403",
        meta: {
            public: true,
        },
        name: "AccessDenied",
        component: () => import(`@/components/pages/Deny.vue`),
    },
    {
        path: "/500",
        meta: {
            public: true,
        },
        name: "ServerError",
        component: () => import(`@/components/pages/Error.vue`),
    },
    {
        path: "/thankyou",
        meta: {
            public: true,
        },
        name: "ThankYou",
        component: () => import(`@/components/pages/ThankYou.vue`),
    },
  
];

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

export default paths;
