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
        body: queryArg.createVeterinarianCommand,
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
        body: queryArg.updateVeterinarianCommand,
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
    getApiAppointmentsGetBookedDates: build.query<
      GetApiAppointmentsGetBookedDatesApiResponse,
      GetApiAppointmentsGetBookedDatesApiArg
    >({
      query: () => ({ url: `/api/Appointments/GetBookedDates` }),
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
        params: { phone: queryArg.phone, microChipId: queryArg.microChipId },
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
  /** status 200 OK */ VeterinarianDto[];
export type GetApiAppointmentsApiArg = void;
export type PostApiAppointmentsApiResponse = /** status 204 No Content */ void;
export type PostApiAppointmentsApiArg = {
  createVeterinarianCommand: CreateVeterinarianCommand;
};
export type GetApiAppointmentsByIdApiResponse =
  /** status 200 OK */ VeterinarianDto;
export type GetApiAppointmentsByIdApiArg = {
  id: number;
};
export type PutApiAppointmentsByIdApiResponse =
  /** status 204 No Content */ void;
export type PutApiAppointmentsByIdApiArg = {
  id: number;
  updateVeterinarianCommand: UpdateVeterinarianCommand;
};
export type DeleteApiAppointmentsByIdApiResponse =
  /** status 204 No Content */ void;
export type DeleteApiAppointmentsByIdApiArg = {
  id: number;
};
export type GetApiAppointmentsGetBookedDatesApiResponse =
  /** status 200 OK */ VeterinarianBookedDatesDto[];
export type GetApiAppointmentsGetBookedDatesApiArg = void;
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
export type GetApiPetsApiResponse = /** status 200 OK */ PetRecordDto[];
export type GetApiPetsApiArg = {
  phone?: string;
  microChipId?: string;
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
export type ProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
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
  | "FullyBookedDates";
export type PetSpecies = "None" | "Cat" | "Dog" | "Bird";
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
export const {
  useGetApiAppointmentsQuery,
  usePostApiAppointmentsMutation,
  useGetApiAppointmentsByIdQuery,
  usePutApiAppointmentsByIdMutation,
  useDeleteApiAppointmentsByIdMutation,
  useGetApiAppointmentsGetBookedDatesQuery,
  usePostDevelopmentEnsureDatabaseCreatedMutation,
  usePostDevelopmentEnsureDatabaseDeletedMutation,
  usePostDevelopmentMigrateDatabaseMutation,
  usePostDevelopmentSeedMutation,
  useGetApiPetsQuery,
  useGetApiVeterinariansQuery,
  usePostApiVeterinariansMutation,
  useGetApiVeterinariansByIdQuery,
  usePutApiVeterinariansByIdMutation,
  useDeleteApiVeterinariansByIdMutation,
} = injectedRtkApi;
