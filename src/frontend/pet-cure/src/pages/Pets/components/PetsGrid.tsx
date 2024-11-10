import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2 as Grid, IconButton, Link, Snackbar, SnackbarCloseReason, Typography } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useGetApiPetsQuery } from "../../../store/api";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import dayjs from "dayjs";
import * as emoji from 'node-emoji'
import { EmptyGridValue } from "../../../components/grid/EmptyGridValue";

type DeleteConfirmationData = {
    id: number;
    name: string;
    species: string;
}

export function PetsGrid() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteConfirmationData, setDeleteConfirmationData] = useState<DeleteConfirmationData>();

    const { data, isLoading, isFetching, isError } = useGetApiPetsQuery({
        pageSize: paginationModel.pageSize,
        page: paginationModel.page
    })

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            align: "center",
            renderCell: (params: GridCellParams) => {
                return <Link to={`/pets/${params.row.id}`}
                    component={NavLink}>
                    {params.row.id}
                </Link>
            }
        },
        {
            field: 'microChipId',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.MicroChipId',
        },
        {
            field: 'name',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.Name',
        },
        {
            field: 'species',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.PetSpecies',
            renderCell: (params: GridCellParams) => {
                return <Box height="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center">
                    <Typography>
                        {emoji.get(params.row.species.toLowerCase())}
                    </Typography>
                    <Typography>
                        {t(`Pages.Pets.PetsGrid.PetSpeciesMap.${params.row.species}`)}
                    </Typography>
                </Box>
            }
        },
        {
            field: 'breed',
            width: 100,
            headerName: 'Pages.Pets.PetsGrid.Breed',
        },
        {
            field: 'gender',
            width: 100,
            headerName: 'Pages.Pets.PetsGrid.Gender',
        },
        {
            field: 'dateOfBirth',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.DateOfBirth',
            valueFormatter: (value) => {
                return dayjs(value).format("DD.MM.YYYY")
            }
        },
        {
            field: 'weight',
            width: 100,
            headerName: 'Pages.Pets.PetsGrid.Weight',
        },
        {
            field: 'color',
            width: 100,
            headerName: 'Pages.Pets.PetsGrid.Color',
        },
        {
            field: 'medicalHistory',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.MedicalHistory',
        },
        {
            field: 'owner',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.Owner',
            renderCell: (params: GridCellParams) => {
                return <Typography>
                    {`${params.row.firstName} ${params.row.lastName}`}
                </Typography>
            }
        },
        {
            field: 'ownerPhone',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.OwnerPhone',
        },
        {
            field: 'lastMedicalRecord',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.LastMedicalRecord',
            renderCell: (params: GridCellParams) => {
                if (params.row.lastMedicalRecord === 0) {
                    return <EmptyGridValue />;
                }

                return <Link to={`/medical-records/${params.row.lastMedicalRecord}`}
                    target="_blank"
                    component={NavLink}>
                    {params.row.lastMedicalRecord}
                    <OpenInNewIcon sx={{ ml: 0.5, verticalAlign: 'text-top', fontSize: "0.75em" }} />
                </Link>
            }
        },
        {
            field: 'lastAppointmentDate',
            width: 150,
            headerName: 'Pages.Pets.PetsGrid.LastAppointmentDate',
            valueFormatter: (value) => {
                return dayjs(value).format("DD.MM.YYYY HH:mm")
            }
        },
        {
            field: 'updatedAt',
            width: 150,
            headerName: 'Generic.Grid.UpdatedAt',
            valueFormatter: (value) => {
                return dayjs(value).format("DD.MM.YYYY HH:mm")
            }
        },
        {
            field: 'createdAt',
            width: 150,
            headerName: 'Generic.Grid.CreatedAt',
            valueFormatter: (value) => {
                return dayjs(value).format("DD.MM.YYYY HH:mm")
            }
        },
        {
            field: 'action',
            width: 200,
            sortable: false,
            headerName: '',
            renderCell: (params) => {
                return <Grid container spacing={2}  >
                    <Grid size={8}>
                        <Button variant='outlined' onClick={() => navigate(`/pets/${params.row["id"]}/update`)}>
                            {t("Generic.Forms.Update")}
                        </Button>
                    </Grid>
                    <Grid size={4}>
                        <IconButton color='error' onClick={() => handleDeleteClickOpen(params.row)}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            }
        }

    ];


    const handleDeleteClickOpen = (row: any) => {
        setDeleteDialogOpen(true);

        setDeleteConfirmationData({
            id: row["id"],
            name: row["name"],
            species: row["species"],
        });
    };

    const handleErrorClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorSnackbarOpen(false);
    };

    const handleDeleteClose = (approved: boolean) => {
        if (approved && deleteConfirmationData) {
            // DeleteVeterinarian({
            //     id: deleteConfirmationData.id
            // }).then(() => {
            //     setDeleteConfirmationData(undefined);
            //     dispatch(api.endpoints.getApiVeterinarians.initiate());
            // }).catch(() => {
            //     setDeleteDialogOpen(true);
            //     setDeleteConfirmationData(undefined);
            // });
        }

        setDeleteDialogOpen(false);
    };

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

        {/* TODO: Move delete action to another component */}
        <React.Fragment>
            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteClose}
            >
                <DialogTitle>
                    {t("Pages.Pets.DeleteConfirmationTitle")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Trans
                            i18nKey="Pages.Pets.DeleteConfirmationDescription"
                            values={{
                                name: `${deleteConfirmationData?.name} ${deleteConfirmationData?.name}`,
                                species: `${deleteConfirmationData?.species}`,
                            }}
                            components={{
                                bold: <strong />,
                                newline: <br />,
                                red: <Typography color="error" display="inline" />
                            }}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={() => handleDeleteClose(true)}>
                        {t("Generic.Forms.Cancel")}
                    </Button>
                    <Button variant='contained' color='error' onClick={() => handleDeleteClose(true)} autoFocus>
                        {t("Generic.Forms.Delete")}
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
                {t(`Pages.Pets.DeleteError`)}
            </Alert>
        </Snackbar>
    </Box>
}