import Admin from './components/Admin';
import Telo from './components/Telo';
import Header from './components/Header';
import HeaderAdmin from './components/HeaderAdmin';
import PromeniKurs from './components/PromeniKurs';
import Kalendar from './components/Kalendar';
import Analiza from './components/Analiza';
import PrimljenePoruke from './components/PrimljenePoruke';
import PoslatePoruke from './components/PoslatePoruke';
import PorukeAdmin from './components/PorukeAdmin';
import Valute from './components/ValuteAdmin';
import NovaPoruka from './components/NovaPoruka';
import PorukeHeader from './components/PorukeHeader';
export const routes=[
    {
        path : '/admin', name: 'admin',components : {
            default: Admin,
            'header-left':HeaderAdmin
        },children:[
            {
                path:'', component: PromeniKurs
            },
            {
                path:'kalendar', component: Kalendar
            },
            {
                path:'valute', component: Valute
            },
            {
                path:'analiza', component: Analiza
            },
            {
                path:'poruke', 
                name:'poruke',
                components: {
                    default:PorukeAdmin,
                    'header-poruke':PorukeHeader
                },
                children:[
                    {
                        path:'', component: PrimljenePoruke
                    },
                    {
                        path:'novaPoruka', component: NovaPoruka
                    },
                    {
                        path:'poslate', component: PoslatePoruke
                    }
                ]
            }
        ]
    },
    {
        path : '/', name: 'home',components : {
            default: Telo,
            'header':Header
        }
    }
];