import loadable from '@/utils/loadable'

const WorkOrder = loadable(() => import(/* webpackChunkName: 'Application' */ '@/pages/WorkOrder'))
const Customer = loadable(() => import(/* webpackChunkName: 'Application' */ '@/pages/Customer'))
const Knowledge = loadable(() => import(/* webpackChunkName: 'Application' */ '@/pages/Knowledge'))
const DataReport = loadable(() => import(/* webpackChunkName: 'Application' */ '@/pages/DataReport'))
const Push = loadable(() => import(/* webpackChunkName: 'Application' */ '@/pages/Push'))
const Setting = loadable(() => import(/* webpackChunkName: 'Application' */ '@/pages/Setting'))

const routes = [
  { path: '/workorder', exact: false, name: 'WorkOrder', component: WorkOrder, auth: [1] },
  { path: '/customer', exact: false, name: 'Customer', component: Customer, auth: [1] },
  { path: '/knowledge', exact: false, name: 'Knowledge', component: Knowledge, auth: [1] },
  { path: '/datareport', exact: false, name: 'DataReport', component: DataReport, auth: [1] },
  { path: '/push', exact: false, name: 'Push', component: Push, auth: [1] },
  { path: '/setting', exact: false, name: 'Setting', component: Setting, auth: [1] }
]

export default routes
