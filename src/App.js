import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Container, createTheme, CssBaseline, ThemeProvider, } from "@mui/material";
import LandingPage from "./pages/landing/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomePage } from './pages/HomePage/HomePage';
import { MainLayout } from "./components/layouts/MainLayout";
import { SecondaryLayout } from "./components/layouts/SecondaryLayout";
import { BookValuation } from "./pages/book_valuation/book_valuation";
import { BookValuationRegistration } from "./pages/book_valuation/book_valuation_register";
import { AuthContainer } from "./pages/user_account/signin_page";
import FlexibleImgComponent from "./components/presentational/image/flexible_img";
import LoginMemberShip from "./assets/images/login_membership.jpg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookValuationRegistrationConfirmation } from "./pages/book_valuation/book_valuation_confirmation";
import FindProperties from "./pages/find_properties/findProperties";
import PropertyDetails from "./pages/property_detail/propertyDetails";
import FreeLetsHub from "./pages/landlord_tenant/landlordTenant";
import { AdminProperties } from "./pages/admin_properties/adminProperties";
import { AdminValuation } from "./pages/admin_valuations/adminValuations";
import AddProperties from "./pages/admin_properties/addProperties";
import AdminDashboardLayout from "./components/layouts/adminLayout";
import { SnackbarProvider } from "notistack";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import EditProperty from "./pages/admin_properties/editProperties";
import { PrivateWrapper } from "./components/common/privateRoute";
import { UpcomingInspections } from "./pages/admin_inspections/upcomming_inspections";
function About() {
    return (_jsxs("div", { children: [_jsx("h2", { children: "About Page" }), _jsx("p", { children: "Welcome to the about page!" })] }));
}
const theme = createTheme({
    palette: {
        primary: {
            main: "#948c1e",
        },
        secondary: {
            main: "#ff8800",
        },
        text: {
            primary: "#333",
        },
        action: {
            disabledBackground: "#ccc", // Custom disabled background color
            disabled: "#888", // Custom disabled text color
        },
    },
    typography: {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 16,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        h1: {
            fontSize: "2rem",
            fontWeight: 700,
        },
        // ... other typography options
    },
    shape: {
        borderRadius: 8,
    },
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
}); // Create your theme instance
function Contained({ children }) {
    return _jsx(Container, { children: children });
}
function UnContained({ children }) {
    return _jsx(Box, { children: children });
}
const queryClient = new QueryClient();
function App() {
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs(SnackbarProvider, { children: [_jsx(CssBaseline, {}), _jsx(QueryClientProvider, { client: queryClient, children: _jsxs(BrowserRouter, { children: [_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainLayout, { children: _jsx(UnContained, { children: _jsx(LandingPage, {}) }) }) }), _jsx(Route, { path: "/about", element: _jsx(Contained, { children: _jsx(About, {}) }) }), _jsx(Route, { path: "/book_valuation", element: _jsx(SecondaryLayout, { children: _jsx(BookValuation, {}) }) }), _jsx(Route, { path: "/user_account", element: _jsx(SecondaryLayout, { dynamicComponent: _jsx(FlexibleImgComponent, { alt: "login", style: { height: "300px" }, imageUrl: LoginMemberShip }), children: _jsx(AuthContainer, {}) }) }), _jsx(Route, { path: "/book_valuation_registration", element: _jsx(PrivateWrapper, { children: _jsx(SecondaryLayout, { children: _jsx(BookValuationRegistration, {}) }) }) }), _jsx(Route, { path: "/book_valuation_registration_confirmation", element: _jsx(SecondaryLayout, { children: _jsx(PrivateWrapper, { children: _jsx(BookValuationRegistrationConfirmation, {}) }) }) }), _jsx(Route, { path: "/find_properties", element: _jsx(MainLayout, { children: _jsx(UnContained, { children: _jsx(PrivateWrapper, { children: _jsx(FindProperties, {}) }) }) }) }), _jsx(Route, { path: "/property_details/:property_id", element: _jsx(MainLayout, { children: _jsx(UnContained, { children: _jsx(PrivateWrapper, { children: _jsx(PropertyDetails, {}) }) }) }) }), _jsx(Route, { path: "/landlord_tenant/:subRoute", element: _jsx(MainLayout, { children: _jsx(UnContained, { children: _jsx(PrivateWrapper, { children: _jsx(FreeLetsHub, {}) }) }) }) }), _jsxs(Route, { path: "/admin_dashboard", element: _jsx(_Fragment, { children: _jsx(PrivateWrapper, { children: _jsx(AdminDashboardLayout, {}) }) }), children: [_jsx(Route, { index: true, path: "valuations", element: _jsx(AdminValuation, {}) }), _jsx(Route, { path: "properties", element: _jsx(PrivateWrapper, { children: _jsx(AdminProperties, {}) }) }), _jsx(Route, { path: "add_properties", element: _jsx(AddProperties, {}) }), _jsx(Route, { path: "edit_properties/:property_id", element: _jsx(PrivateWrapper, { children: _jsx(EditProperty, {}) }) }), _jsx(Route, { path: "inspections", element: _jsx(PrivateWrapper, { children: _jsx(UpcomingInspections, {}) }) })] })] }), _jsx(ReactQueryDevtools, {})] }) })] }) }));
}
export default App;
