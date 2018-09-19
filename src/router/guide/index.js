export default [
    {
        path: 'guide/install',
        name: 'install',
        component: resolve => require(['@/views/guide/install'], resolve)
    }, {
        path: 'guide/international',
        name: 'international',
        component: resolve => require(['@/views/guide/international'], resolve)
    }, {
        path: 'guide/update',
        name: 'update',
        component: resolve => require(['@/views/guide/update'], resolve)
    }
];

