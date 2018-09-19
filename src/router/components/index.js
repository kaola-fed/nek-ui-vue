export default [
    {
        path: 'components/KLCard',
        name: 'KLCard',
        component: resolve => require(['@/views/components/layout/card'], resolve)
    }, {
        path: 'components/KLLayout',
        name: 'KLLayout',
        component: resolve => require(['@/views/components/layout/layout'], resolve)
    }, {
        path: 'components/KLRow',
        name: 'KLRow',
        component: resolve => require(['@/views/components/layout/row'], resolve)
    }, {
        path: 'components/KLSearch',
        name: 'KLSearch',
        component: resolve => require(['@/views/components/layout/search'], resolve)
    }, {
        path: 'components/KLTable',
        name: 'KLTable',
        component: resolve => require(['@/views/components/layout/table'], resolve)
    }, {
        path: 'components/KLButton',
        name: 'KLButton',
        component: resolve => require(['@/views/components/form/button'], resolve)
    }, {
        path: 'components/KLInput',
        name: 'KLInput',
        component: resolve => require(['@/views/components/form/input'], resolve)
    }, {
        path: 'components/KLCheck',
        name: 'KLCheck',
        component: resolve => require(['@/views/components/form/check'], resolve)
    }, {
        path: 'components/KLDatePicker',
        name: 'KLDatePicker',
        component: resolve => require(['@/views/components/form/date'], resolve)
    }, {
        path: 'components/KLForm',
        name: 'KLForm',
        component: resolve => require(['@/views/components/form/form'], resolve)
    }, {
        path: 'components/KLRadio',
        name: 'KLRadio',
        component: resolve => require(['@/views/components/form/radio'], resolve)
    }, {
        path: 'components/KLSelect',
        name: 'KLSelect',
        component: resolve => require(['@/views/components/form/select'], resolve)
    }, {
        path: 'components/KLSwitch',
        name: 'KLSwitch',
        component: resolve => require(['@/views/components/form/switch'], resolve)
    }, {
        path: 'components/KLTag',
        name: 'KLTag',
        component: resolve => require(['@/views/components/form/tag'], resolve)
    }, {
        path: 'components/KLTime',
        name: 'KLTime',
        component: resolve => require(['@/views/components/form/time'], resolve)
    }, {
        path: 'components/KLTreeView',
        name: 'KLTreeView',
        component: resolve => require(['@/views/components/form/tree'], resolve)
    }, {
        path: 'components/KLUpload',
        name: 'KLUpload',
        component: resolve => require(['@/views/components/form/upload'], resolve)
    }, {
        path: 'components/KLCrumb',
        name: 'KLCrumb',
        component: resolve => require(['@/views/components/navbar/crumb'], resolve)
    }, {
        path: 'components/KLMenu',
        name: 'KLMenu',
        component: resolve => require(['@/views/components/navbar/menu'], resolve)
    }, {
        path: 'components/KLPager',
        name: 'KLPager',
        component: resolve => require(['@/views/components/navbar/pager'], resolve)
    }, {
        path: 'components/KLSteps',
        name: 'KLSteps',
        component: resolve => require(['@/views/components/navbar/steps'], resolve)
    }, {
        path: 'components/KLTabs',
        name: 'KLTabs',
        component: resolve => require(['@/views/components/navbar/tabs'], resolve)
    }, {
        path: 'components/KLMessage',
        name: 'KLMessage',
        component: resolve => require(['@/views/components/notify/message'], resolve)
    }, {
        path: 'components/KLModal',
        name: 'KLModal',
        component: resolve => require(['@/views/components/notify/modal'], resolve)
    }, {
        path: 'components/KLNotify',
        name: 'KLNotify',
        component: resolve => require(['@/views/components/notify/notify'], resolve)
    }, {
        path: 'components/KLPopConfirm',
        name: 'KLPopConfirm',
        component: resolve => require(['@/views/components/notify/popConfirm'], resolve)
    }, {
        path: 'components/KLBadge',
        name: 'KLBadge',
        component: resolve => require(['@/views/components/other/badge'], resolve)
    }, {
        path: 'components/KLIcon',
        name: 'KLIcon',
        component: resolve => require(['@/views/components/other/icon'], resolve)
    }, {
        path: 'components/KLLoading',
        name: 'KLLoading',
        component: resolve => require(['@/views/components/other/loading'], resolve)
    }, {
        path: 'components/KLProgress',
        name: 'KLProgress',
        component: resolve => require(['@/views/components/other/progress'], resolve)
    }, {
        path: 'components/KLTooltip',
        name: 'KLTooltip',
        component: resolve => require(['@/views/components/other/tooltip'], resolve)
    }
];

