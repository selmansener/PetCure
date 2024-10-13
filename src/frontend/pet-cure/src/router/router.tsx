import React, { Suspense } from "react";
import { createRoutesFromElements, Route, RouterProvider, useRouteError } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/loading";
import NotFound from "../layouts/shared/NotFound";
import { RouteConfig } from "./routes";
import { ErrorPage } from "../layouts/shared/Error";
import { Portal } from "@mui/material";

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    return <ErrorPage />;
}

export interface RouterProps {
    isPublic: boolean;
    routes: RouteConfig[];
    currentAccountRole: string;
    environment: string;
}

export function Router(props: RouterProps) {
    const { routes, isPublic, currentAccountRole } = props;

    function RenderRoutes(route: RouteConfig) {
        if (route === undefined) {
            return;
        }

        if (route.isPublic !== undefined && route.isPublic !== isPublic) {
            return;
        }

        if (route.roles && route.roles.length > 0 && route.roles.every(role => currentAccountRole !== role)) {
            return;
        }

        return <Route
            key={route.path}
            path={route.path}
            element={<Suspense fallback={route.loading ?? <Loading />}>
                {route?.header && route.header}
                {route.element}
                {route?.footer && route.footer}
            </Suspense>}
            errorElement={route.error ?? <ErrorBoundary />}>
            {route.leafNodes && route.leafNodes?.length > 0 && route.leafNodes.map(leafNode => RenderRoutes(leafNode))}
        </Route>
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <React.Fragment>
                {routes.map(route => RenderRoutes(route))}
                <Route path="*" element={<NotFound />} />
            </React.Fragment>
        ));

    return <RouterProvider router={router} />;
}