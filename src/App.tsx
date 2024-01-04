import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
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
import FreeLetsHubTenant from "./pages/tenant/Tenant";
import { AdminProperties } from "./pages/admin_properties/adminProperties";
import { AdminDrawer } from "./pages/admin_dashboard/adminDrawer";
import { AdminValuation } from "./pages/admin_valuations/adminValuations";
import AddProperties from "./pages/admin_properties/addProperties";
import AdminDashboardLayout from "./components/layouts/adminLayout";
import { SnackbarProvider } from "notistack";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import EditProperty from "./pages/admin_properties/editProperties";
import { PrivateWrapper } from "./components/common/privateRoute";
import { UpcomingInspections } from "./pages/admin_inspections/upcomming_inspections";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Welcome to the about page!</p>
    </div>
  );
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

function Contained({ children }: { children: JSX.Element }): JSX.Element {
  return <Container>{children}</Container>;
}

function UnContained({ children }: { children: JSX.Element }): JSX.Element {
  return <Box>{children}</Box>;
}

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <MainLayout>
                    <UnContained>
                      <LandingPage />
                    </UnContained>
                  </MainLayout>
                }
              />
              <Route
                path="/about"
                element={
                  <Contained>
                    <About />
                  </Contained>
                }
              />
              <Route
                path="/book_valuation"
                element={
                  <SecondaryLayout>
                    <BookValuation />
                  </SecondaryLayout>
                }
              />
              <Route
                path="/user_account/:loginas"
                element={
                  <SecondaryLayout
                    dynamicComponent={
                      <FlexibleImgComponent
                        alt="login"
                        style={{ height: "300px" }}
                        imageUrl={LoginMemberShip}
                      />
                    }
                  >
                    <AuthContainer />
                  </SecondaryLayout>
                }
              />

              <Route
                path="/book_valuation_registration"
                element={
                  <PrivateWrapper>
                    <SecondaryLayout>
                      <BookValuationRegistration />
                    </SecondaryLayout>
                  </PrivateWrapper>
                }
              />

              <Route
                path="/book_valuation_registration_confirmation"
                element={
                  <SecondaryLayout>
                    <PrivateWrapper>
                      <BookValuationRegistrationConfirmation />
                    </PrivateWrapper>
                  </SecondaryLayout>
                }
              />

              <Route
                path="/find_properties"
                element={
                  <MainLayout>
                    <UnContained>
                      <PrivateWrapper>
                        <FindProperties />
                      </PrivateWrapper>
                    </UnContained>
                  </MainLayout>
                }
              />

              <Route
                path="/property_details/:property_id"
                element={
                  <MainLayout>
                    <UnContained>
                      <PrivateWrapper>
                        <PropertyDetails />
                      </PrivateWrapper>
                    </UnContained>
                  </MainLayout>
                }
              />
              <Route
                path="/landlord/:subRoute"
                element={
                  <MainLayout>
                    <UnContained>
                      <PrivateWrapper>
                        <FreeLetsHub />
                      </PrivateWrapper>
                    </UnContained>
                  </MainLayout>
                }
              />
              <Route
                path="/tenant/:subRoute"
                element={
                  <MainLayout>
                    <UnContained>
                      <PrivateWrapper>
                        <FreeLetsHubTenant />
                      </PrivateWrapper>
                    </UnContained>
                  </MainLayout>
                }
              />
              <Route
                path="/admin_dashboard"
                element={
                  <>
                    <PrivateWrapper>
                      <AdminDashboardLayout />
                    </PrivateWrapper>
                  </>
                }
              >
                <Route index path="valuations" element={<AdminValuation />} />
                <Route
                  path="properties"
                  element={
                    <PrivateWrapper>
                      <AdminProperties />
                    </PrivateWrapper>
                  }
                />
                <Route path="add_properties" element={<AddProperties />} />
                <Route
                  path="edit_properties/:property_id"
                  element={
                    <PrivateWrapper>
                      <EditProperty />
                    </PrivateWrapper>
                  }
                />
                <Route
                  path="inspections"
                  element={
                    <PrivateWrapper>
                      <UpcomingInspections />
                    </PrivateWrapper>
                  }
                />
              </Route>
            </Routes>
            <ReactQueryDevtools />
          </BrowserRouter>
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
