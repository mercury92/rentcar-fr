import HeroPage from '../components/pages/Hero'
import BillPage from '../components/pages/Bill'
import ProfilePage from '../components/pages/Profile'
import LoginPage from '../components/pages/Login'
import RegisterPage from '../components/pages/Register'

const component = {
    hero: {
        url:"/",
        component:HeroPage
    },
    bill:{
        url:"/bill",
        component:BillPage
    },
    login:{
        url:"/login",
        component:LoginPage
    },
    register:{
        url:"/register",
        component:RegisterPage
    },
    profile:{
        url:"/profile",
        component:ProfilePage
    }
}
export default {
    guest:{
        allowedRoutes: [
            component.hero,
            component.login,
            component.register
        ],
        redirectRoutes:"/login"
    },
    user:{
        allowedRoutes:[
            component.hero,
            component.bill,
            component.profile,
            component.login,
            component.register

        ],
        redirectRoutes:"/profile"
    }
}