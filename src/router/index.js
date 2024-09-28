import { createRouter, createWebHistory } from 'vue-router'
import QualifyCard from '../unirider/shared/components/qualify-card/qualify-card.component.vue';
import LoginUser from '../unirider/shared/pages/login-user.component.vue';
import ToolbarComponent from "../unirider/public/toolbar.component.vue";
import Home from "../unirider/shared/pages/home.component.vue";
import RegisterUser from "../unirider/shared/pages/register-user.component.vue";
import ChooseUser from "../unirider/shared/pages/choose-user.vue";
import UniRiderServices from "../unirider/shared/pages/UniRider-Services.vue";
import SubscriptionCards from "../unirider/shared/pages/subscription-cards.component.vue";
import RecordView from "../unirider/shared/pages/record-view.vue";
import OtherPaymentMethodComponent from "../unirider/shared/components/other-payment-method-card/other-payment-method.component.vue";
import confirmation from "../unirider/shared/pages/confirmation.component.vue";
import confirmationPassenger from "../unirider/shared/pages/confirmation-passenger.component.vue"
import ChatUser from "../unirider/shared/pages/chat-user.vue";
import NewCard from "../unirider/shared/pages/add-a-card.vue";
import ProfileUser from "../unirider/shared/pages/Profile-user.component.vue";
import MapsPageDriver from "../unirider/shared/pages/maps-page-driver.component.vue"

import AppBookingFastForm from '../unirider/shared/components/app-booking-fast-form/app-booking-fast-form.component.vue';
import BuscarMaps from '../unirider/shared/pages/buscarMaps.vue';

const routes = [
    { path: '/', component: LoginUser },
    { path: '/create', component: RegisterUser },
    { path: '/verify', component: ChooseUser },
    { path: '/home', name: 'Home', component: Home },
    { path: '/main', name:'main', component: ToolbarComponent },
    { path: '/maps', component: MapsPageDriver},


    { path: '/mapsDriver', component: MapsPageDriver},
    { path: '/confirm', component: confirmation},
    { path: '/confirmPassenger', component: confirmationPassenger},
    { path: '/chat', component: ChatUser},
    { path: '/qualify', component: QualifyCard },
    { path: '/services', component: UniRiderServices },
    { path: '/plans', component: SubscriptionCards},
    { path: '/record', component: RecordView},
    { path: '/OtherMethodpayment', component: OtherPaymentMethodComponent},
    {path: '/new-card', component: NewCard },
    {path: '/profile', component: ProfileUser },
    {path: '/reservations', component: AppBookingFastForm}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
