import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { RouteConfig } from "../../router/routes";
import { Header } from "../shared/Header";

export function MainLayout() {
    return <React.Fragment>
        <Header />
        <Container sx={{
            mt: 15
        }}>
            <Outlet />
        </Container>
    </React.Fragment>
}

const MainPage = React.lazy(() => import("../../pages/main/Main"));
const VeterinariansPage = React.lazy(() => import("../../pages/main/Veterinarians"));
const AppointmentsPage = React.lazy(() => import("../../pages/main/Appointments"));

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
            path: "appointments",
            element: <AppointmentsPage />
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