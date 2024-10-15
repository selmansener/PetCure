import { Chip, Grid2 as Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetApiDashboardGetApptsCountByDateRangeQuery } from "../../../store/api";
import dayjs from "dayjs";
import React from "react";

export interface TotalApptCountProps {
    selectedDateRange: {
        title: string;
        from: Date;
        to: Date;
    }
}

export function TotalApptCount(props: TotalApptCountProps) {
    const { t } = useTranslation();
    const { title, from, to } = props.selectedDateRange;
    const { data, isLoading, isFetching, isError } = useGetApiDashboardGetApptsCountByDateRangeQuery({
        from: dayjs(from).toISOString(),
        to: dayjs(to).toISOString()
    });

    return <Paper sx={{
        p: 2,
        mb: 2
    }}>
        <Grid container spacing={2}>
            <Grid size={8}>
                <Typography variant="subtitle2">
                    {t(`Pages.Dashboard.TotalAppointmentCountByDateRange.Title`, {
                        dateRange: t(`Pages.Dashboard.DateRanges.${title}`)
                    })}
                </Typography>
            </Grid>
            <Grid size={4} display="flex" justifyContent="flex-end">
                <Chip label={t(`Pages.Dashboard.DateRanges.${title}`)} />
            </Grid>
            <Grid size={12}>
                {(isLoading || isFetching) && <Skeleton variant="rounded" width="50px" height="50px" />}
                {!isLoading && !isFetching && <Typography variant="h3">
                    {data?.totalCount}
                </Typography>}
            </Grid>
            <Grid size={12} display="inline-flex" alignItems="center">
                {(isLoading || isFetching) && <Skeleton width="100%" />}
                {!isLoading && !isFetching &&
                    <React.Fragment>
                        <Typography variant="subtitle2" color={data?.changeAsPercent && data?.changeAsPercent > 0 ? "success" : "error"}>
                            {`${data?.changeAsPercent} %`}
                        </Typography>
                        <Typography variant="overline" ml={2}>
                            {data?.changeAsPercent && data?.changeAsPercent > 0
                                ? t("Pages.Dashboard.TotalAppointmentCountByDateRange.PositiveChange")
                                : t("Pages.Dashboard.TotalAppointmentCountByDateRange.NegativeChange")}
                        </Typography>
                    </React.Fragment>}
            </Grid>
        </Grid>
    </Paper>
}