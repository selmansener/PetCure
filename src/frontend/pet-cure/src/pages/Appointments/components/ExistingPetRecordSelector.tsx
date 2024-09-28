import { Box, Button, Grid2, Typography } from "@mui/material";
import { useGetApiPetsQuery } from "../../../store/api";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { EmptyGridValue } from "../../../components/grid/EmptyGridValue";
import * as emoji from 'node-emoji'

export type PetRecordQueryParams = {
    phone: string | undefined;
    microChipId: string | undefined;
    onPetRecordSelected: (id: number) => void;
}


export function ExistingPetRecordSelector(props: PetRecordQueryParams) {
    const { t } = useTranslation();
    const { phone, microChipId, onPetRecordSelected } = props;
    const { data, isFetching, isLoading, isError } = useGetApiPetsQuery({
        phone: phone !== "" ? phone : undefined,
        microChipId: microChipId !== "" ? microChipId : undefined
    });

    // TODO: move pagination and sorting to backend
    const columns: GridColDef[] = [ 
        {
            field: 'action',
            sortable: false,
            headerName: '',
            renderCell: (params) => {
                return <Grid2  >
                    <Button variant="outlined" onClick={() => onPetRecordSelected(params.row.id)}>
                        {t("Generic.Forms.Select")}
                    </Button>
                </Grid2>
            }
        },
        {
            field: 'id',
            headerName: 'ID',
            align: "center",
            renderCell: (params: GridCellParams) => {
                return <Link to={`/pet/${params.row.id}`}>
                    {params.row.id}
                </Link>
            }
        },
        {
            field: 'microChipId',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.MicroChipId',
        },
        {
            field: 'name',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.PetName',
        },
        {
            field: 'firstName',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.FirstName',
        },
        {
            field: 'lastName',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.LastName',

        },
        {
            field: 'ownerPhone',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.Phone',

        },
        {
            field: 'species',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.PetSpecies',
            renderCell: (params: GridCellParams) => {
                return <Box height="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center">
                    <Typography>
                        {emoji.get(params.row.species.toLowerCase())}
                    </Typography>
                    <Typography>
                        {t(`Pages.CreateAppointment.PetRecordGrid.PetSpeciesMap.${params.row.species}`)}
                    </Typography>
                </Box>
            }

        },
        {
            field: 'breed',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.Breed',
            align: "center",
            valueFormatter: (value) => {
                return value ?? "-";
            }
        },
        {
            field: 'gender',
            headerName: 'Pages.CreateAppointment.PetRecordGrid.Gender',
        },
        {
            field: 'dateOfBirth',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.DateOfBirth',
            valueFormatter: (value) => {
                return format(new Date(value), 'dd.MM.yyyy', { locale: tr })
            },
        },
        {
            field: 'weight',
            headerName: 'Pages.CreateAppointment.PetRecordGrid.Weight',
        },
        {
            field: 'color',
            headerName: 'Pages.CreateAppointment.PetRecordGrid.Color',
        },
        {
            field: 'medicalHistory',
            headerName: 'Pages.CreateAppointment.PetRecordGrid.MedicalHistory',
        },
        {
            field: 'lastMedicalRecord',
            headerName: 'Pages.CreateAppointment.PetRecordGrid.LastMedicalRecord',
            align: "center",
            renderCell: (params: GridCellParams) => {
                return <Link to={`/pet/${params.row.id}/medical-records/${params.row.lastMedicalRecord}`}>
                    {params.row.id}
                </Link>
            }
        },
        {
            field: 'lastAppointmentDate',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.LastAppointmentDate',
            align: "center",
            renderCell: (params: GridCellParams) => {
                const value = params.row.lastAppointmentDate;
                if (!value) {
                    return <EmptyGridValue />
                }
                return format(new Date(value), 'dd.MM.yyyy', { locale: tr })
            },
        },
        {
            field: 'updatedAt',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.UpdatedAt',
            align: "center",
            renderCell: (params: GridCellParams) => {
                const value = params.row.updatedAt;
                if (!value) {
                    return <EmptyGridValue />
                }
                return format(new Date(value), 'dd.MM.yyyy', { locale: tr })
            }
        },
        {
            field: 'createdAt',
            width: 150,
            headerName: 'Pages.CreateAppointment.PetRecordGrid.CreatedAt',
            align: "center",
            valueFormatter: (value) => {
                return format(new Date(value), 'dd.MM.yyyy', { locale: tr })
            }
        },
    ];

    return <Grid2>
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
    </Grid2>
}