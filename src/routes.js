import CustomerHome from "./pages/CustomerHome";
import SellerHome from "./pages/SellerHome";
import SellerMenu from "./pages/SellerMenu";
import Sitemap from "./pages/Sitemap";


const routes = [
    {
        path: '/',
        element: <Sitemap />,
    },
    {
        path: '/sellerhome',
        element: <SellerHome />,
        name: '판매자 홈 페이지(민재)'
    },
    {
        path: '/sellermenu',
        element: <SellerMenu />,
        name: '판매자 메뉴 입력(진선)'
    },
    {
        path: '/customerhome',
        element: <CustomerHome />,
        name: '구매자 홈 페이지(한서)'
    },
]

export default routes;