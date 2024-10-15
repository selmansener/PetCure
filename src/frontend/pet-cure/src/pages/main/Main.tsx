import { Button, ButtonGroup, Chip, Divider, Grid2 as Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { UpcomingAppointments } from "./components/UpcomingAppointments";
import dayjs from "dayjs";
import { TotalApptCount } from "./components/TotalApptCount";

const now = dayjs().toDate();

const dateRanges = [
    { 
        title :"LastWeek",
        from: dayjs().add(-7, "day").toDate(),
        to: now
    },
    { 
        title :"LastThreeWeeks",
        from: dayjs().add(-21, "day").toDate(),
        to: now
    },
    { 
        title :"LastMonth",
        from: dayjs().add(-30, "day").toDate(),
        to: now
    },
    { 
        title :"LastThreeMonths",
        from: dayjs().add(-90, "day").toDate(),
        to: now
    },
]

export default function Main() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [dateRange, setDateRange] = useState(dateRanges[0]);

    return <Grid container spacing={2}>
        <Grid size={8}>
            <Typography variant="h2">
                {t("Pages.Dashboard.Title")}
            </Typography>
            <Typography variant="h3">
                {t("Pages.Dashboard.Subtitle")}
            </Typography>
        </Grid>
        <Grid size={4}>
            <ButtonGroup size="small" sx={{
                display: "flex",
                justifyContent: "flex-end"
            }}>
                {dateRanges.map(range => <Button key={range.title}
                    onClick={() => setDateRange(range)}>
                    {t(`Pages.Dashboard.DateRanges.${range.title}`)}
                </Button>)}
            </ButtonGroup>
        </Grid>
        <Grid size={12}>
            <Divider />
        </Grid>
        <Grid size={4}>
            <TotalApptCount selectedDateRange={dateRange} />
            <Paper sx={{
                p: 2
            }}>
                <Typography>
                    {t(`Pages.Dashboard.AppointmentsByDateRange.Title`, {
                        dateRange: t(`Pages.Dashboard.DateRanges.${dateRange.title}`)
                    })}
                </Typography>
                <Divider />
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Cats', 'Dogs', 'Birds'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    width={500}
                    height={300}
                />
            </Paper>
        </Grid>
        <Grid size={8} display="flex">
            <UpcomingAppointments />
        </Grid>
    </Grid>
}