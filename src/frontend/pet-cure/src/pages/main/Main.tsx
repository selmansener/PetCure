import { Button, ButtonGroup, Chip, Divider, Grid2 as Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const dateRanges = [
    "LastWeek",
    "LastThreeWeeks",
    "LastMonth",
    "LastThreeMonths",
]

export default function Main() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [dateRange, setDateRange] = useState("LastWeek");

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
                {dateRanges.map(range => <Button key={range}
                    onClick={() => setDateRange(range)}>
                    {t(`Pages.Dashboard.DateRanges.${range}`)}
                </Button>)}
            </ButtonGroup>
        </Grid>
        <Grid size={12}>
            <Divider />
        </Grid>
        <Grid size={4}>
            <Paper sx={{
                p: 2,
                mb: 2
            }}>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography variant="subtitle2">
                            {t(`Pages.Dashboard.TotalAppointmentCountByDateRange.Title`, {
                                dateRange: t(`Pages.Dashboard.DateRanges.${dateRange}`)
                            })}
                        </Typography>
                    </Grid>
                    <Grid size={4} display="flex" justifyContent="flex-end">
                        <Chip label={t(`Pages.Dashboard.DateRanges.${dateRange}`)} />
                    </Grid>
                    <Grid size={12}>
                        <Typography variant="h3">
                            1654
                        </Typography>
                    </Grid>
                    <Grid size={12} display="inline-flex" alignItems="center">
                        <Typography variant="subtitle2" color="success">
                            +55 %
                        </Typography>
                        <Typography variant="overline" ml={2}>
                            increased since last week
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper sx={{
                p: 2
            }}>
                <Typography>
                    {t(`Pages.Dashboard.AppointmentsByDateRange.Title`, {
                        dateRange: t(`Pages.Dashboard.DateRanges.${dateRange}`)
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
        <Grid size={8}>
            <Paper sx={{
                p: 2
            }}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    events={[
                        { title: 'event 1', date: '2024-10-15' },
                        { title: 'event 2', date: '2024-10-16' },
                    ]}
                />
            </Paper>
        </Grid>
    </Grid>
}