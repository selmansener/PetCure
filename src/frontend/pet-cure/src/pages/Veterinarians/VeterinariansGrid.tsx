import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { useGetApiVeterinariansQuery } from '../../store/api';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { tr } from "date-fns/locale";
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        renderCell: (params: GridCellParams) => {
            return <Link to={`/veterinarians/${params.row.id}`}>
                {params.row.id}
            </Link>
        }
    },
    {
        field: 'firstName',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.FirstName',
    },
    {
        field: 'lastName',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.LastName',

    },
    {
        field: 'phone',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.Phone',

    },
    {
        field: 'email',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.Email',

    },
    {
        field: 'specialization',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.Specialization',

    },
    {
        field: 'yearsOfExperience',
        headerName: 'Pages.Veterinarians.Grid.YearsOfExperience',
    },
    {
        field: 'currentAppointmentCount',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.CurrentAppointmentCount',
    },
    {
        field: 'updatedAt',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.UpdatedAt',
        valueFormatter: (value) => {
            return format(new Date(value), 'dd.MM.yyyy', { locale: tr })
        }
    },
    {
        field: 'createdAt',
        width: 150,
        headerName: 'Pages.Veterinarians.Grid.CreatedAt',
        valueFormatter: (value) => {
            return format(new Date(value), 'dd.MM.yyyy', { locale: tr })
        }
    }
];


export function VeterinariansGrid() {
    const { t } = useTranslation();
    const { data, isError, isFetching, isLoading, error } = useGetApiVeterinariansQuery();


    return <React.Fragment>
        <Box sx={{ height: 400 }}>
            <DataGrid
                autoHeight                
                loading={isLoading || isFetching}
                rows={data}
                columns={columns.map(col => {
                    return {
                        ...col,
                        headerName: t(col.headerName ?? "")
                    }
                })} />
        </Box>
    </React.Fragment>

}