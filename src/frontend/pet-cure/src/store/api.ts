import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
export type PostDevelopmentEnsureDatabaseCreatedApiResponse = unknown;
export type PostDevelopmentEnsureDatabaseCreatedApiArg = void;
export type PostDevelopmentEnsureDatabaseDeletedApiResponse = unknown;
export type PostDevelopmentEnsureDatabaseDeletedApiArg = void;
export type PostDevelopmentMigrateDatabaseApiResponse = unknown;
export type PostDevelopmentMigrateDatabaseApiArg = void;
export type GetApiVeterinariansApiResponse =
  /** status 200 Success */ VeterinarianDto[];
export type GetApiVeterinariansApiArg = void;
export type PostApiVeterinariansApiResponse = /** status 204 No Content */ void;
export type PostApiVeterinariansApiArg = {
  createVeterinarianCommand: CreateVeterinarianCommand;
};
export type GetApiVeterinariansByIdApiResponse =
  /** status 200 Success */ VeterinarianDto;
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
export const {
  usePostDevelopmentEnsureDatabaseCreatedMutation,
  usePostDevelopmentEnsureDatabaseDeletedMutation,
  usePostDevelopmentMigrateDatabaseMutation,
  useGetApiVeterinariansQuery,
  usePostApiVeterinariansMutation,
  useGetApiVeterinariansByIdQuery,
  usePutApiVeterinariansByIdMutation,
  useDeleteApiVeterinariansByIdMutation,
} = injectedRtkApi;
