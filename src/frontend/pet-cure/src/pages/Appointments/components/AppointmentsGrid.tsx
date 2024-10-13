import { Box, Link, Typography } from "@mui/material"
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetApiAppointmentsQueryQuery } from "../../../store/api";
import { NavLink } from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import * as emoji from 'node-emoji'
import { EmptyGridValue } from "../../../components/grid/EmptyGridValue";
import dayjs from "dayjs";

export function AppointsmentsGrid() {
    const { t } = useTranslation();
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });

    const { data, isLoading, isFetching, isError } = useGetApiAppointmentsQueryQuery({
        pageSize: paginationModel.pageSize,
        page: paginationModel.page
    });

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            align: "center",
            renderCell: (params: GridCellParams) => {
                return <Link to={`/appointment/${params.row.id}`}
                    target="_blank"
                    component={NavLink}>
                    {params.row.id}
                    <OpenInNewIcon sx={{ ml: 0.5, verticalAlign: 'text-top', fontSize: "0.75em" }} />
                </Link>
            }
        },
        {
            field: 'name',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.PetName',
            renderCell: (params: GridCellParams) => {
                return <Link to={`/pet/${params.row.petId}`}
                    target="_blank"
                    component={NavLink}>
                    {params.row.name}
                    <OpenInNewIcon sx={{ ml: 0.5, verticalAlign: 'text-top', fontSize: "0.75em" }} />
                </Link>
            }
        },
        {
            field: 'species',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.PetSpecies',
            renderCell: (params: GridCellParams) => {
                return <Box height="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center">
                    <Typography>
                        {emoji.get(params.row.species.toLowerCase())}
                    </Typography>
                    <Typography>
                        {t(`Pages.CreateAppointment.AppointmentsGrid.PetSpeciesMap.${params.row.species}`)}
                    </Typography>
                </Box>
            }

        },
        {
            field: 'phone',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.Phone'
        },
        {
            field: 'ownerName',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.OwnerName',
            renderCell: (params: GridCellParams) => {
                return <Link to={`/pet-owner/${params.row.ownerId}`}
                    target="_blank"
                    component={NavLink}>
                    {params.row.ownerName}
                    <OpenInNewIcon sx={{ ml: 0.5, verticalAlign: 'text-top', fontSize: "0.75em" }} />
                </Link>
            }
        },
        {
            field: 'vetName',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.VetName',
            renderCell: (params: GridCellParams) => {
                return <Link to={`/veterinarians/${params.row.vetId}`}
                    target="_blank"
                    component={NavLink}>
                    {params.row.vetName}
                    <OpenInNewIcon sx={{ ml: 0.5, verticalAlign: 'text-top', fontSize: "0.75em" }} />
                </Link>
            }
        },
        {
            field: 'appointmentDate',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.AppointmentDate',
            align: "center",
            renderCell: (params: GridCellParams) => {
                const value = params.row.appointmentDate;
                if (!value) {
                    return <EmptyGridValue />
                }
                return dayjs(value).format("DD/MM/YYYY HH:mm")
            },
        },
        {
            field: 'reason',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.Reason'
        },
        {
            field: 'status',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.Status'
        },
        {
            field: 'notes',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.Notes'
        },
        {
            field: 'completedAt',
            width: 150,
            headerName: 'Pages.CreateAppointment.AppointmentsGrid.CompletedAt',
            align: "center",
            renderCell: (params: GridCellParams) => {
                const value = params.row.completedAt;
                if (!value) {
                    return <EmptyGridValue />
                }
                return dayjs(value).format("DD/MM/YYYY HH:mm")
            },
        },
    ];

    return <Box display="flex" flexDirection="column">

        <DataGrid
            rowSelection={false}
            autoHeight
            loading={isLoading || isFetching}
            rows={data?.data ?? []}
            rowCount={data?.totalRowCount}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            paginationMode="server"
            pageSizeOptions={[5, 10, 25, 50]}
            columns={columns.map(col => {
                return {
                    ...col,
                    headerName: t(col.headerName ?? "")
                }
            })} />
    </Box>
}