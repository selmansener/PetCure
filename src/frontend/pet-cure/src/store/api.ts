import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getVeterinarians: build.query<
      GetVeterinariansApiResponse,
      GetVeterinariansApiArg
    >({
      query: () => ({ url: `/Veterinarians` }),
    }),
    postVeterinarians: build.mutation<
      PostVeterinariansApiResponse,
      PostVeterinariansApiArg
    >({
      query: () => ({ url: `/Veterinarians`, method: "POST" }),
    }),
    getVeterinariansById: build.query<
      GetVeterinariansByIdApiResponse,
      GetVeterinariansByIdApiArg
    >({
      query: (queryArg) => ({ url: `/Veterinarians/${queryArg.id}` }),
    }),
    putVeterinariansById: build.mutation<
      PutVeterinariansByIdApiResponse,
      PutVeterinariansByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/Veterinarians/${queryArg.id}`,
        method: "PUT",
      }),
    }),
    deleteVeterinariansById: build.mutation<
      DeleteVeterinariansByIdApiResponse,
      DeleteVeterinariansByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/Veterinarians/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetVeterinariansApiResponse =
  /** status 200 Success */ VetenarianDto[];
export type GetVeterinariansApiArg = void;
export type PostVeterinariansApiResponse = /** status 204 No Content */ void;
export type PostVeterinariansApiArg = void;
export type GetVeterinariansByIdApiResponse =
  /** status 200 Success */ VetenarianDto;
export type GetVeterinariansByIdApiArg = {
  id: number;
};
export type PutVeterinariansByIdApiResponse = /** status 204 No Content */ void;
export type PutVeterinariansByIdApiArg = {
  id: number;
};
export type DeleteVeterinariansByIdApiResponse =
  /** status 204 No Content */ void;
export type DeleteVeterinariansByIdApiArg = {
  id: number;
};
export type VetenarianDto = {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
  specialization?: string | null;
  yearsOfExperience?: number;
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
export const {
  useGetVeterinariansQuery,
  usePostVeterinariansMutation,
  useGetVeterinariansByIdQuery,
  usePutVeterinariansByIdMutation,
  useDeleteVeterinariansByIdMutation,
} = injectedRtkApi;
