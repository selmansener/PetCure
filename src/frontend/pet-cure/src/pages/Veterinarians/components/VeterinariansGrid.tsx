import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { api, useDeleteApiVeterinariansByIdMutation, useGetApiVeterinariansQuery, useGetApiVeterinariansQueryQuery } from '../../../store/api';
import { NavLink, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { tr } from "date-fns/locale";
import { Trans, useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, IconButton, Link, Snackbar, SnackbarCloseReason } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../store/hooks';

type DeleteConfirmationData = {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

export function VeterinariansGrid() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteConfirmationData, setDeleteConfirmationData] = useState<DeleteConfirmationData>();
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });
    const { data, isError, isFetching, isLoading, error } = useGetApiVeterinariansQueryQuery({
        page: paginationModel.page,
        pageSize: paginationModel.pageSize
    });
    const [DeleteVeterinarian, results] = useDeleteApiVeterinariansByIdMutation();
    const dispatch = useAppDispatch();

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            renderCell: (params: GridCellParams) => {
                return <Link to={`/veterinarians/${params.row.id}`}
                    component={NavLink}>
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
        },
        {
            field: 'action',
            width: 200,
            sortable: false,
            headerName: '',
            renderCell: (params) => {
                return <Grid2 container spacing={2}  >
                    <Grid2 size={8}>
                        <Button variant='outlined' onClick={() => navigate(`/veterinarians/${params.row["id"]}/update`)}>
                            {t("Generic.Forms.Update")}
                        </Button>
                    </Grid2>
                    <Grid2 size={4}>
                        <IconButton color='error' onClick={() => handleDeleteClickOpen(params.row)}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid2>
                </Grid2>
            }
        }
    ];

    const handleErrorClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorSnackbarOpen(false);
    };

    const handleDeleteClickOpen = (row: any) => {
        setDeleteDialogOpen(true);

        setDeleteConfirmationData({
            id: row["id"],
            firstName: row["firstName"],
            lastName: row["lastName"],
            phone: row["phone"],
            email: row["email"]
        });
    };

    const handleDeleteClose = (approved: boolean) => {
        if (approved && deleteConfirmationData) {
            DeleteVeterinarian({
                id: deleteConfirmationData.id
            }).then(() => {
                setDeleteConfirmationData(undefined);
                dispatch(api.endpoints.getApiVeterinarians.initiate());
            }).catch(() => {
                setDeleteDialogOpen(true);
                setDeleteConfirmationData(undefined);
            });
        }

        setDeleteDialogOpen(false);
    };

    return <React.Fragment>
        {/* <Box sx={{ height: 400 }}> */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            <React.Fragment>
                <Dialog
                    open={deleteDialogOpen}
                    onClose={handleDeleteClose}
                >
                    <DialogTitle>
                        {t("Pages.Veterinarians.DeleteConfirmationTitle")}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Trans
                                i18nKey="Pages.Veterinarians.DeleteConfirmationDescription"
                                values={{
                                    fullName: `${deleteConfirmationData?.firstName} ${deleteConfirmationData?.lastName}`,
                                    phone: `${deleteConfirmationData?.phone}`,
                                    email: `${deleteConfirmationData?.email}`
                                }}
                                components={{
                                    bold: <strong />,
                                    newline: <br />
                                }}
                            />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='outlined' onClick={() => handleDeleteClose(true)}>
                            {t("Generic.Forms.Cancel")}
                        </Button>
                        <Button variant='contained' color='error' onClick={() => handleDeleteClose(true)} autoFocus>
                            {t("Generic.Forms.Approve")}
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

            <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert
                    onClose={handleErrorClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {t(`Pages.Veterinarians.DeleteError`)}
                </Alert>
            </Snackbar>
        </Box>
    </React.Fragment>

}