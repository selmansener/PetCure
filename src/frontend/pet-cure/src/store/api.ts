import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiAppointments: build.query<
      GetApiAppointmentsApiResponse,
      GetApiAppointmentsApiArg
    >({
      query: () => ({ url: `/api/Appointments` }),
    }),
    postApiAppointments: build.mutation<
      PostApiAppointmentsApiResponse,
      PostApiAppointmentsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Appointments`,
        method: "POST",
        body: queryArg.createAppointmentCommand,
      }),
    }),
    getApiAppointmentsById: build.query<
      GetApiAppointmentsByIdApiResponse,
      GetApiAppointmentsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/Appointments/${queryArg.id}` }),
    }),
    putApiAppointmentsById: build.mutation<
      PutApiAppointmentsByIdApiResponse,
      PutApiAppointmentsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Appointments/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateAppointmentCommand,
      }),
    }),
    deleteApiAppointmentsById: build.mutation<
      DeleteApiAppointmentsByIdApiResponse,
      DeleteApiAppointmentsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Appointments/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getApiAppointmentsGetBookedDatesByVetId: build.query<
      GetApiAppointmentsGetBookedDatesByVetIdApiResponse,
      GetApiAppointmentsGetBookedDatesByVetIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Appointments/GetBookedDatesByVetId`,
        params: { vetId: queryArg.vetId },
      }),
    }),
    postDevelopmentEnsureDatabaseCreated: build.mutation<
      PostDevelopmentEnsureDatabaseCreatedApiResponse,
      PostDevelopmentEnsureDatabaseCreatedApiArg
    >({
      query: () => ({
        url: `/Development/EnsureDatabaseCreated`,
        method: "POST",
      }),
    }),
    postDevelopmentEnsureDatabaseDeleted: build.mutation<
      PostDevelopmentEnsureDatabaseDeletedApiResponse,
      PostDevelopmentEnsureDatabaseDeletedApiArg
    >({
      query: () => ({
        url: `/Development/EnsureDatabaseDeleted`,
        method: "POST",
      }),
    }),
    postDevelopmentMigrateDatabase: build.mutation<
      PostDevelopmentMigrateDatabaseApiResponse,
      PostDevelopmentMigrateDatabaseApiArg
    >({
      query: () => ({ url: `/Development/MigrateDatabase`, method: "POST" }),
    }),
    postDevelopmentSeed: build.mutation<
      PostDevelopmentSeedApiResponse,
      PostDevelopmentSeedApiArg
    >({
      query: (queryArg) => ({
        url: `/Development/Seed`,
        method: "POST",
        params: { seeds: queryArg.seeds, recreateDb: queryArg.recreateDb },
      }),
    }),
    getApiPets: build.query<GetApiPetsApiResponse, GetApiPetsApiArg>({
      query: (queryArg) => ({
        url: `/api/Pets`,
        params: {
          Phone: queryArg.phone,
          MicroChipId: queryArg.microChipId,
          PageSize: queryArg.pageSize,
          Page: queryArg.page,
        },
      }),
    }),
    postApiPets: build.mutation<PostApiPetsApiResponse, PostApiPetsApiArg>({
      query: (queryArg) => ({
        url: `/api/Pets`,
        method: "POST",
        body: queryArg.createPetCommand,
      }),
    }),
    postApiPetsAddAppointment: build.mutation<
      PostApiPetsAddAppointmentApiResponse,
      PostApiPetsAddAppointmentApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Pets/AddAppointment`,
        method: "POST",
        body: queryArg.addAppointmentCommand,
      }),
    }),
    getApiVeterinarians: build.query<
      GetApiVeterinariansApiResponse,
      GetApiVeterinariansApiArg
    >({
      query: () => ({ url: `/api/Veterinarians` }),
    }),
    postApiVeterinarians: build.mutation<
      PostApiVeterinariansApiResponse,
      PostApiVeterinariansApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Veterinarians`,
        method: "POST",
        body: queryArg.createVeterinarianCommand,
      }),
    }),
    getApiVeterinariansById: build.query<
      GetApiVeterinariansByIdApiResponse,
      GetApiVeterinariansByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/Veterinarians/${queryArg.id}` }),
    }),
    putApiVeterinariansById: build.mutation<
      PutApiVeterinariansByIdApiResponse,
      PutApiVeterinariansByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Veterinarians/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateVeterinarianCommand,
      }),
    }),
    deleteApiVeterinariansById: build.mutation<
      DeleteApiVeterinariansByIdApiResponse,
      DeleteApiVeterinariansByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Veterinarians/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetApiAppointmentsApiResponse =
  /** status 200 OK */ AppointmentDto[];
export type GetApiAppointmentsApiArg = void;
export type PostApiAppointmentsApiResponse = /** status 204 No Content */ void;
export type PostApiAppointmentsApiArg = {
  createAppointmentCommand: CreateAppointmentCommand;
};
export type GetApiAppointmentsByIdApiResponse =
  /** status 200 OK */ AppointmentDto;
export type GetApiAppointmentsByIdApiArg = {
  id: number;
};
export type PutApiAppointmentsByIdApiResponse =
  /** status 204 No Content */ void;
export type PutApiAppointmentsByIdApiArg = {
  id: number;
  updateAppointmentCommand: UpdateAppointmentCommand;
};
export type DeleteApiAppointmentsByIdApiResponse =
  /** status 204 No Content */ void;
export type DeleteApiAppointmentsByIdApiArg = {
  id: number;
};
export type GetApiAppointmentsGetBookedDatesByVetIdApiResponse =
  /** status 200 OK */ VeterinarianBookedDatesDto;
export type GetApiAppointmentsGetBookedDatesByVetIdApiArg = {
  vetId?: number;
};
export type PostDevelopmentEnsureDatabaseCreatedApiResponse = unknown;
export type PostDevelopmentEnsureDatabaseCreatedApiArg = void;
export type PostDevelopmentEnsureDatabaseDeletedApiResponse = unknown;
export type PostDevelopmentEnsureDatabaseDeletedApiArg = void;
export type PostDevelopmentMigrateDatabaseApiResponse = unknown;
export type PostDevelopmentMigrateDatabaseApiArg = void;
export type PostDevelopmentSeedApiResponse = unknown;
export type PostDevelopmentSeedApiArg = {
  seeds?: SeedServiceType;
  recreateDb?: boolean;
};
export type GetApiPetsApiResponse =
  /** status 200 OK */ PetRecordDtoPaginationResult;
export type GetApiPetsApiArg = {
  phone?: string;
  microChipId?: string;
  pageSize?: number;
  page?: number;
};
export type PostApiPetsApiResponse = unknown;
export type PostApiPetsApiArg = {
  createPetCommand: CreatePetCommand;
};
export type PostApiPetsAddAppointmentApiResponse = unknown;
export type PostApiPetsAddAppointmentApiArg = {
  addAppointmentCommand: AddAppointmentCommand;
};
export type GetApiVeterinariansApiResponse =
  /** status 200 OK */ VeterinarianDto[];
export type GetApiVeterinariansApiArg = void;
export type PostApiVeterinariansApiResponse = /** status 204 No Content */ void;
export type PostApiVeterinariansApiArg = {
  createVeterinarianCommand: CreateVeterinarianCommand;
};
export type GetApiVeterinariansByIdApiResponse =
  /** status 200 OK */ VeterinarianDto;
export type GetApiVeterinariansByIdApiArg = {
  id: number;
};
export type PutApiVeterinariansByIdApiResponse =
  /** status 204 No Content */ void;
export type PutApiVeterinariansByIdApiArg = {
  id: number;
  updateVeterinarianCommand: UpdateVeterinarianCommand;
};
export type DeleteApiVeterinariansByIdApiResponse =
  /** status 204 No Content */ void;
export type DeleteApiVeterinariansByIdApiArg = {
  id: number;
};
export type AppointmentStatus = "None" | "Created" | "Completed" | "Cancelled";
export type AppointmentDto = {
  petId?: number;
  ownerId?: number;
  vetId?: number;
  appointmentDate?: string;
  reason?: string | null;
  status?: AppointmentStatus;
  notes?: string | null;
};
export type ProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
};
export type PetSpecies = "None" | "Cat" | "Dog" | "Bird";
export type PetDto = {
  name?: string | null;
  species?: PetSpecies;
  breed?: string | null;
  gender?: string | null;
  dateOfBirth?: string;
  weight?: number;
  color?: string | null;
  microChipId?: string | null;
  medicalHistory?: string | null;
};
export type OwnerDto = {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  emergencyContact?: string | null;
};
export type CreateAppointmentCommand = {
  vetId?: number;
  apptDate?: string;
  reason?: string | null;
  notes?: string | null;
  petInfo?: PetDto;
  ownerInfo?: OwnerDto;
};
export type UpdateAppointmentCommand = object;
export type VeterinarianBookedDatesDto = {
  id?: number;
  fullName?: string | null;
  appointmentDates?: string[] | null;
};
export type SeedServiceType =
  | "Veterinarian"
  | "PetOwner"
  | "Pet"
  | "Appointment"
  | "FullyBookedDates"
  | "CompletedAppointments"
  | "SingleVetFullyBookedDates";
export type PetRecordDto = {
  id?: number;
  name?: string | null;
  species?: PetSpecies;
  breed?: string | null;
  gender?: string | null;
  dateOfBirth?: string;
  weight?: number;
  color?: string | null;
  microChipId?: string | null;
  medicalHistory?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  ownerPhone?: string | null;
  lastMedicalRecord?: number;
  lastAppointmentDate?: string | null;
  updatedAt?: string | null;
  createdAt?: string;
};
export type PetRecordDtoPaginationResult = {
  data?: PetRecordDto[] | null;
  totalRowCount?: number;
};
export type CreatePetCommand = object;
export type AddAppointmentCommand = {
  petId?: number;
  ownerId?: number;
  vetId?: number;
  apptDate?: string;
  reason?: string | null;
  notes?: string | null;
};
export type VeterinarianDto = {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  specialization?: string | null;
  yearsOfExperience?: number;
  currentAppointmentCount?: number;
  updatedAt?: string;
  createdAt?: string;
};
export type CreateVeterinarianCommand = {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  specialization?: string | null;
  yearsOfExperience?: number;
};
export type UpdateVeterinarianCommand = {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  specialization?: string | null;
  yearsOfExperience?: number;
};
export const {
  useGetApiAppointmentsQuery,
  usePostApiAppointmentsMutation,
  useGetApiAppointmentsByIdQuery,
  usePutApiAppointmentsByIdMutation,
  useDeleteApiAppointmentsByIdMutation,
  useGetApiAppointmentsGetBookedDatesByVetIdQuery,
  usePostDevelopmentEnsureDatabaseCreatedMutation,
  usePostDevelopmentEnsureDatabaseDeletedMutation,
  usePostDevelopmentMigrateDatabaseMutation,
  usePostDevelopmentSeedMutation,
  useGetApiPetsQuery,
  usePostApiPetsMutation,
  usePostApiPetsAddAppointmentMutation,
  useGetApiVeterinariansQuery,
  usePostApiVeterinariansMutation,
  useGetApiVeterinariansByIdQuery,
  usePutApiVeterinariansByIdMutation,
  useDeleteApiVeterinariansByIdMutation,
} = injectedRtkApi;
