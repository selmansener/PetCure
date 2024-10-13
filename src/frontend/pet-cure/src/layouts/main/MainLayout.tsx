import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { RouteConfig } from "../../router/routes";
import { Header } from "../shared/Header";

export function MainLayout() {
    return <React.Fragment>
        <Container maxWidth="xl" sx={{
            my: [14]
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
const AppointmentsCalendarPage = React.lazy(() => import("../../pages/Appointments/AppointmentsCalendar"));
const AppointmentDetailsPage = React.lazy(() => import("../../pages/Appointments/AppointmentDetails"));

export const mainRoutes: RouteConfig = {
    path: "/",
    element: <MainLayout />,
    header: <Header />,
    isPublic: true,
    leafNodes: [
        {
            path: "",
            element: <MainPage />
        },
        {
            path: "veterinarians",
            element: <VeterinariansPage />,
            leafNodes: [
                {
                    path: "create",
                    element: <CreateVeterinarianPage />
                },
                {
                    path: ":id/update",
                    element: <UpdateVeterinarianPage />
                },
                {
                    path: ":id",
                    element: <VeterinarianDetailsPage />
                },
            ]
        },
        {
            path: "calendar",
            element: <AppointmentsCalendarPage />,
            leafNodes: [
                {
                    path: ":id/appointment",
                    element: <AppointmentDetailsPage />
                }
            ]
        },
        {
            path: "appointments",
            element: <AppointmentsPage />
        },
        {
            path: "appointments/create",
            element: <CreateAppointmentPage />
        },
        {
            path: "appointments/:id",
            element: <AppointmentDetailsPage />
        }
    ]
}