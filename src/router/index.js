import { createRouter, createWebHistory } from "vue-router";

// 佩璇
import Review from "../views/customerzied/Review.vue";
import Message from "../views/customerzied/Message.vue";
import WebGL from "../views/customerzied/CustomizedP.vue";
import Cart from "../views/customerzied/Cart.vue";
// 一生
import ProductPage from "../views/ProductCart/productSurvey.vue";
import CartDetailDisplayPage from "../views/ProductCart/Cartt.vue";
import OrderSuccess from "../views/ProductCart/OrderSuccess.vue";

// Ma
import Member from "../views/Member/Member.vue";
import MemberUpdate from "../views/Member/MemberUpdate.vue";
import OrderHistory from "../views/Member/OrderHistory.vue";

import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
import ACAlerts from "../layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "../layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "../layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";
import Signup from "../views/LandingPages/SignIn/Signin.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    // 佩璇
    {
      path: "/Review", //路徑
      component: Review, //對應要載入的元件
    },
    {
      path: "/message",
      component: Message,
    },
    {
      path: "/customized",
      component: WebGL,
    },
    {
      path: "/cart",
      component: Cart,
    },
    // 一生
<<<<<<< HEAD
<<<<<<< HEAD
=======
    {
      path: "/productList",
      component: ProductPage,
    },
    {
      path: "/cartDetailDisplay",
      component: CartDetailDisplayPage,
    },
    {
      path: "/OrderSuccess",
      component: OrderSuccess,
    },
    {
      // Ma star
      path: "/Member",
      component: Member,
    },
    {
      path: "/MemberUpdate",
      component: MemberUpdate,
    },
    {
      // end
      path: "/OrderHistory",
      component: OrderHistory,
    },
=======
>>>>>>> CPX3
    { 
      path: '/productList', 
  component: ProductPage ,
},
    { 
  path: '/cartDetailDisplay', 
  component: CartDetailDisplayPage ,
},
{ // Ma star
  path: "/Member",
  component: Member,
},
{
  path: "/MemberUpdate",
  component: MemberUpdate,
},
{
  path: "/Signup",
  component: Signup,
},
{ // end
  path: "/OrderHistory",
  component: OrderHistory,
},
<<<<<<< HEAD
=======
    {
      path: "/productList",
      component: ProductPage,
    },
    {
      path: "/cartDetailDisplay",
      component: CartDetailDisplayPage,
    },
    {
      path: "/OrderSuccess",
      component: OrderSuccess,
    },
    {
      // Ma star
      path: "/Member",
      component: Member,
    },
    {
      path: "/MemberUpdate",
      component: MemberUpdate,
    },
    {
      // end
      path: "/OrderHistory",
      component: OrderHistory,
    },
>>>>>>> origin/CPX3
=======
>>>>>>> origin/nassim
>>>>>>> CPX3
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
  ],
});

export default router;
