import StatusReview from './StatusReview'
import MultilingualService from './MultilingualService'
import SharingDesk from './SharingDesk'
import BasicInfo from './BasicInfo'
import WelcomeDesk from './WelcomeDesk'
import OperatingHours from './OperatingHours'
import TicketAssignmentRule from './TicketAssignmentRule'
import SatisfactionSurvey from './SatisfactionSurvey'
import TicketFields from './TicketFields'
import ApiToken from './ApiToken'
import Triggers from './Triggers'
import Roles from './Roles'
import Tags from './Tags'

const routes = [
  { path: '/setting/review', exact: true, name: 'WorkOrder', component: StatusReview, auth: [1] },
  { path: '/setting/multilingual', exact: false, name: 'MultilingualService', component: MultilingualService, auth: [1] },
  { path: '/setting/sharing_desk', exact: false, name: 'SharingDesk', component: SharingDesk, auth: [1] },
  { path: '/setting/basic_info', exact: false, name: 'BasicInfo', component: BasicInfo, auth: [1] },
  { path: '/setting/welcome', exact: false, name: 'WelcomeDesk', component: WelcomeDesk, auth: [1] },
  { path: '/setting/operating', exact: false, name: 'OperatingHours', component: OperatingHours, auth: [1] },
  { path: '/setting/ticket_assignment_rule', exact: false, name: 'TicketAssignmentRule', component: TicketAssignmentRule, auth: [1] },
  { path: '/setting/satisfaction_survey', exact: false, name: 'SatisfactionSurvey', component: SatisfactionSurvey, auth: [1] },
  { path: '/setting/tags', exact: false, name: 'Tags', component: Tags, auth: [1] },
  { path: '/setting/ticket_fields', exact: false, name: 'TicketFields', component: TicketFields, auth: [1] },
  { path: '/setting/triggers', exact: false, name: 'Triggers', component: Triggers, auth: [1] },
  { path: '/setting/roles', exact: false, name: 'Roles', component: Roles, auth: [1] },
  { path: '/setting/api_token', exact: false, name: 'ApiToken', component: ApiToken, auth: [1] }
]

export default routes
