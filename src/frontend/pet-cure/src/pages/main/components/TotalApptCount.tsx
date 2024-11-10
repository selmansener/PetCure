import { Chip, Grid2 as Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetApiDashboardGetApptsCountByDateRangeQuery } from "../../../store/api";
import dayjs from "dayjs";
import React, { useEffect } from "react";

export interface TotalApptCountProps {
    selectedDateRange: {
        title: string;
        from: Date;
        to: Date;
    }
}

type ChangePercentageProps = {
    changeAsPercent: number | undefined
}

function ChangePercentage(props: ChangePercentageProps) {
    const { changeAsPercent } = props;
    const { t } = useTranslation();

    if (changeAsPercent === undefined || changeAsPercent === 0) {
        return <Typography variant="overline" ml={2}>
            {t("Pages.Dashboard.TotalAppointmentCountByDateRange.NoChange")}
        </Typography>
    }

    if (changeAsPercent > 0) {
        return <Typography variant="overline" ml={2}>
            {t("Pages.Dashboard.TotalAppointmentCountByDateRange.PositiveChange")}
        </Typography>
    }
    else {
        return <Typography variant="overline" ml={2}>
            {t("Pages.Dashboard.TotalAppointmentCountByDateRange.NegativeChange")}
        </Typography>
    }
}

export function TotalApptCount(props: TotalApptCountProps) {
    const { t } = useTranslation();
    const { title, from, to } = props.selectedDateRange;
    const { data, isLoading, isFetching, isError } = useGetApiDashboardGetApptsCountByDateRangeQuery({
        from: dayjs(from).toISOString(),
        to: dayjs(to).toISOString()
    });

    useEffect(() => {
        console.log(data?.changeAsPercent);
        console.log(data?.changeAsPercent !== 0);
    }, [])

    const getColor = (changeAsPercent: number | undefined) => {
        if (changeAsPercent === undefined || changeAsPercent === 0) {
            return "textPrimary";
        }

        return changeAsPercent > 0 ? "success" : "error";
    }

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
                        <Typography variant="subtitle2" color={getColor(data?.changeAsPercent)}>
                            {`${data?.changeAsPercent} %`}
                        </Typography>
                        {<ChangePercentage changeAsPercent={data?.changeAsPercent} />}
                    </React.Fragment>}
            </Grid>
        </Grid>
    </Paper>
}