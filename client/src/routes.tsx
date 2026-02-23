import { createBrowserRouter, Navigate } from "react-router";

import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { OTPPage } from "./pages/OTPPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";

import { DashboardLayout } from "./layouts/DashboardLayout";

import { DashboardView } from "./pages/views/DashboardView";
import { ProfilePage } from "./pages/views/ProfilePageView";
import { ArticlesServicesView } from "./pages/views/ArticlesServicesView";
import { QuotsInvoicesView } from "./pages/views/QuotsInvoicesView";
import { PaymentsExpensesView } from "./pages/views/PaymentsExpensesView";
import { CustomersView } from "./pages/views/CustomersView";
import { PaymentsView } from "./pages/views/PaymentsView";
import { ExpensesView } from "./pages/views/ExpensesView";
import { CADeclarationView } from "./pages/views/CADeclarationView";
import { CNSSPaymentView } from "./pages/views/CNSSPaymentView";
// import { AnalyticsView } from "./pages/views/AnalyticsView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/forgot-password",
    Component: ForgotPasswordPage,
  },
  {
    path: "/otp",
    Component: OTPPage,
  },
  {
    path: "/reset-password",
    Component: ResetPasswordPage,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      { index: true, element: <Navigate to="/app/dashboard" replace /> },
      { path: "dashboard", Component: DashboardView },
      { path: "articles-services", Component: ArticlesServicesView },
      { path: "quots-invoices", Component: QuotsInvoicesView },
 
      { path: "customers", Component: CustomersView },
       { path: "payments", Component: PaymentsView },  
      { path: "expenses", Component: ExpensesView },
       { path: "ca-declaration", Component: CADeclarationView },
      { path: "cnss-payment", Component: CNSSPaymentView },
      // { path: "analytics", Component: AnalyticsView },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);