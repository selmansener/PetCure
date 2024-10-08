import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { RouteConfig } from "../../router/routes";
import { Header } from "../shared/Header";

export function MainLayout() {
    return <React.Fragment>
        <Header />
        <Container maxWidth="xl" sx={{
            mt: 15
        }}>
            <Outlet />
        </Container>
    </React.Fragment>
}

const MainPage = React.lazy(() => import("../../pages/main/Main"));
const VeterinariansPage = React.lazy(() => import("../../pages/Veterinarians/Veterinarians"));
const CreateVeterinarianPage = React.lazy(() => import("../../pages/Veterinarians/CreateVeterinarian"));
const UpdateVeterinarianPage = React.lazy(() => import("../../pages/Veterinarians/UpdateVeterinarian"));
const VeterinarianDetailsPage = React.lazy(() => import("../../pages/Veterinarians/VeterinarianDetails"));
const AppointmentsPage = React.lazy(() => import("../../pages/Appointments/Appointments"));
const CreateAppointmentPage = React.lazy(() => import("../../pages/Appointments/CreateAppointment"));

export const mainRoutes: RouteConfig = {
    path: "/",
    element: <MainLayout />,
    isPublic: true,
    leafNodes: [
        {
            path: "",
            element: <MainPage />
        },
        {
            path: "veterinarians",
            element: <VeterinariansPage />
        },
        {
            path: "veterinarians/create",
            element: <CreateVeterinarianPage />
        },
        {
            path: "veterinarians/update/:id",
            element: <UpdateVeterinarianPage />
        },
        {
            path: "veterinarians/:id",
            element: <VeterinarianDetailsPage />
        },
        {
            path: "appointments",
            element: <AppointmentsPage />
        },
        {
            path: "appointments/create",
            element: <CreateAppointmentPage />
        }
        // {
        //     path: "sales-orders",
        //     element: <SalesOrdersPage />
        // },
        // {
        //     path: "products",
        //     element: <ProductsPage />,
        //     leafNodes: [
        //         {
        //             path: "",
        //             element: <ProductListPage />,
        //             leafNodes: [
        //                 {
        //                     path: "",
        //                     element: <ProductListGridPage />
        //                 },
        //                 {
        //                     path: "active",
        //                     element: <ProductListGridPage />
        //                 },
        //                 {
        //                     path: "in-review",
        //                     element: <ProductListGridPage />
        //                 },
        //                 {
        //                     path: "out-of-stock",
        //                     element: <ProductListGridPage />
        //                 },
        //                 {
        //                     path: "missing-info",
        //                     element: <ProductListGridPage />
        //                 },
        //                 {
        //                     path: "rejected",
        //                     element: <ProductListGridPage />
        //                 },
        //                 {
        //                     path: "passive",
        //                     element: <ProductListGridPage />
        //                 }
        //             ]
        //         },
        //         {
        //             path: "new",
        //             element: <NewProductPage />
        //         },
        //         {
        //             path: ":productId",
        //             element: <ProductDetailsPage />
        //         },
        //         {
        //             path: ":productId/update",
        //             element: <UpdateProductPage />
        //         },
        //         {
        //             path: "product-upload-history",
        //             element: <ProductUploadHistoryPage />
        //         },
        //         {
        //             path: "product-upload-history/:productExcelUploadId",
        //             element: <ProductUploadHistoryDetailsPage />
        //         },
        //         {
        //             path: "product-variant-upload-history",
        //             element: <ProductVariantUploadHistoryPage />
        //         }
        //     ]
        // },
        // {
        //     path: "returns",
        //     element: <ReturnsPage />
        // },
        // {
        //     path: "tenant",
        //     element: <TenantPage />
        // }
    ]
}