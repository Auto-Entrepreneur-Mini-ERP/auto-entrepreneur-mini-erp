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
import { PaymentsView } from "./pages/views/PaymentsView";
import { ExpensesView } from "./pages/views/ExpensesView";
import { CADeclarationView } from "./pages/views/CADeclarationView";
import { CNSSPaymentView } from "./pages/views/CNSSPaymentView";
import { DocumentsView } from "./pages/views/DocumentsView";
import { CustomersView } from "./pages/views/CustomersView";
// import { AnalyticsView } from "./pages/views/AnalyticsView";
import { NotificationsView } from './pages/views/NotificationsView';

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
      { path: "payments", Component: PaymentsView },
      { path: "expenses", Component: ExpensesView },
      { path: "ca-declaration", Component: CADeclarationView },
      { path: "cnss-payment", Component: CNSSPaymentView },
      { path: "documents", Component: DocumentsView },
      { path: "customers", Component: CustomersView },
      // { path: "analytics", Component: AnalyticsView },
      { path: "profile", Component: ProfilePage },
      { path: 'notifications', Component: NotificationsView },
      
    ],
  },
]);