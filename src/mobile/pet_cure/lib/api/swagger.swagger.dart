// ignore_for_file: type=lint

import 'package:json_annotation/json_annotation.dart';
import 'package:collection/collection.dart';
import 'dart:convert';

import 'package:chopper/chopper.dart';

import 'client_mapping.dart';
import 'dart:async';
import 'package:http/http.dart' as http;
import 'package:http/http.dart' show MultipartFile;
import 'package:chopper/chopper.dart' as chopper;
import 'swagger.enums.swagger.dart' as enums;
export 'swagger.enums.swagger.dart';

part 'swagger.swagger.chopper.dart';
part 'swagger.swagger.g.dart';

// **************************************************************************
// SwaggerChopperGenerator
// **************************************************************************

@ChopperApi()
abstract class Swagger extends ChopperService {
  static Swagger create({
    ChopperClient? client,
    http.Client? httpClient,
    Authenticator? authenticator,
    ErrorConverter? errorConverter,
    Converter? converter,
    Uri? baseUrl,
    List<Interceptor>? interceptors,
  }) {
    if (client != null) {
      return _$Swagger(client);
    }

    final newClient = ChopperClient(
        services: [_$Swagger()],
        converter: converter ?? $JsonSerializableConverter(),
        interceptors: interceptors ?? [],
        client: httpClient,
        authenticator: authenticator,
        errorConverter: errorConverter,
        baseUrl: baseUrl ?? Uri.parse('http://'));
    return _$Swagger(newClient);
  }

  ///
  ///@param PageSize
  ///@param Page
  Future<chopper.Response<AppointmentQueryDTOPaginationResult>>
      apiAppointmentsQueryGet({
    int? pageSize,
    int? page,
  }) {
    generatedMapping.putIfAbsent(AppointmentQueryDTOPaginationResult,
        () => AppointmentQueryDTOPaginationResult.fromJsonFactory);

    return _apiAppointmentsQueryGet(pageSize: pageSize, page: page);
  }

  ///
  ///@param PageSize
  ///@param Page
  @Get(path: '/api/Appointments/Query')
  Future<chopper.Response<AppointmentQueryDTOPaginationResult>>
      _apiAppointmentsQueryGet({
    @Query('PageSize') int? pageSize,
    @Query('Page') int? page,
  });

  ///
  Future<chopper.Response<List<AppointmentDTO>>> apiAppointmentsGet() {
    generatedMapping.putIfAbsent(
        AppointmentDTO, () => AppointmentDTO.fromJsonFactory);

    return _apiAppointmentsGet();
  }

  ///
  @Get(path: '/api/Appointments')
  Future<chopper.Response<List<AppointmentDTO>>> _apiAppointmentsGet();

  ///
  Future<chopper.Response> apiAppointmentsPost(
      {required CreateAppointmentCommand? body}) {
    return _apiAppointmentsPost(body: body);
  }

  ///
  @Post(
    path: '/api/Appointments',
    optionalBody: true,
  )
  Future<chopper.Response> _apiAppointmentsPost(
      {@Body() required CreateAppointmentCommand? body});

  ///
  ///@param id
  Future<chopper.Response<AppointmentDetailsDTO>> apiAppointmentsIdGet(
      {required int? id}) {
    generatedMapping.putIfAbsent(
        AppointmentDetailsDTO, () => AppointmentDetailsDTO.fromJsonFactory);

    return _apiAppointmentsIdGet(id: id);
  }

  ///
  ///@param id
  @Get(path: '/api/Appointments/{id}')
  Future<chopper.Response<AppointmentDetailsDTO>> _apiAppointmentsIdGet(
      {@Path('id') required int? id});

  ///
  ///@param id
  Future<chopper.Response> apiAppointmentsIdPut({
    required int? id,
    required UpdateAppointmentCommand? body,
  }) {
    return _apiAppointmentsIdPut(id: id, body: body);
  }

  ///
  ///@param id
  @Put(
    path: '/api/Appointments/{id}',
    optionalBody: true,
  )
  Future<chopper.Response> _apiAppointmentsIdPut({
    @Path('id') required int? id,
    @Body() required UpdateAppointmentCommand? body,
  });

  ///
  ///@param id
  Future<chopper.Response> apiAppointmentsIdDelete({required int? id}) {
    return _apiAppointmentsIdDelete(id: id);
  }

  ///
  ///@param id
  @Delete(path: '/api/Appointments/{id}')
  Future<chopper.Response> _apiAppointmentsIdDelete(
      {@Path('id') required int? id});

  ///
  ///@param vetId
  Future<chopper.Response<VeterinarianBookedDatesDTO>>
      apiAppointmentsGetBookedDatesByVetIdGet({int? vetId}) {
    generatedMapping.putIfAbsent(VeterinarianBookedDatesDTO,
        () => VeterinarianBookedDatesDTO.fromJsonFactory);

    return _apiAppointmentsGetBookedDatesByVetIdGet(vetId: vetId);
  }

  ///
  ///@param vetId
  @Get(path: '/api/Appointments/GetBookedDatesByVetId')
  Future<chopper.Response<VeterinarianBookedDatesDTO>>
      _apiAppointmentsGetBookedDatesByVetIdGet({@Query('vetId') int? vetId});

  ///
  ///@param from
  ///@param to
  Future<chopper.Response<List<AppointmentDTO>>>
      apiAppointmentsGetByDateRangeGet({
    DateTime? from,
    DateTime? to,
  }) {
    generatedMapping.putIfAbsent(
        AppointmentDTO, () => AppointmentDTO.fromJsonFactory);

    return _apiAppointmentsGetByDateRangeGet(from: from, to: to);
  }

  ///
  ///@param from
  ///@param to
  @Get(path: '/api/Appointments/GetByDateRange')
  Future<chopper.Response<List<AppointmentDTO>>>
      _apiAppointmentsGetByDateRangeGet({
    @Query('from') DateTime? from,
    @Query('to') DateTime? to,
  });

  ///
  Future<chopper.Response<List<UpcomingAppointmentDTO>>>
      apiDashboardUpcomingAppointmentsGet() {
    generatedMapping.putIfAbsent(
        UpcomingAppointmentDTO, () => UpcomingAppointmentDTO.fromJsonFactory);

    return _apiDashboardUpcomingAppointmentsGet();
  }

  ///
  @Get(path: '/api/Dashboard/UpcomingAppointments')
  Future<chopper.Response<List<UpcomingAppointmentDTO>>>
      _apiDashboardUpcomingAppointmentsGet();

  ///
  ///@param from
  ///@param to
  Future<chopper.Response<ApptsCountByDateRangeDTO>>
      apiDashboardGetApptsCountByDateRangeGet({
    DateTime? from,
    DateTime? to,
  }) {
    generatedMapping.putIfAbsent(ApptsCountByDateRangeDTO,
        () => ApptsCountByDateRangeDTO.fromJsonFactory);

    return _apiDashboardGetApptsCountByDateRangeGet(from: from, to: to);
  }

  ///
  ///@param from
  ///@param to
  @Get(path: '/api/Dashboard/GetApptsCountByDateRange')
  Future<chopper.Response<ApptsCountByDateRangeDTO>>
      _apiDashboardGetApptsCountByDateRangeGet({
    @Query('from') DateTime? from,
    @Query('to') DateTime? to,
  });

  ///
  Future<chopper.Response> developmentEnsureDatabaseCreatedPost() {
    return _developmentEnsureDatabaseCreatedPost();
  }

  ///
  @Post(
    path: '/Development/EnsureDatabaseCreated',
    optionalBody: true,
  )
  Future<chopper.Response> _developmentEnsureDatabaseCreatedPost();

  ///
  Future<chopper.Response> developmentEnsureDatabaseDeletedPost() {
    return _developmentEnsureDatabaseDeletedPost();
  }

  ///
  @Post(
    path: '/Development/EnsureDatabaseDeleted',
    optionalBody: true,
  )
  Future<chopper.Response> _developmentEnsureDatabaseDeletedPost();

  ///
  Future<chopper.Response> developmentMigrateDatabasePost() {
    return _developmentMigrateDatabasePost();
  }

  ///
  @Post(
    path: '/Development/MigrateDatabase',
    optionalBody: true,
  )
  Future<chopper.Response> _developmentMigrateDatabasePost();

  ///
  ///@param seeds
  ///@param recreateDb
  Future<chopper.Response> developmentSeedPost({
    enums.SeedServiceType? seeds,
    bool? recreateDb,
  }) {
    return _developmentSeedPost(
        seeds: seeds?.value?.toString(), recreateDb: recreateDb);
  }

  ///
  ///@param seeds
  ///@param recreateDb
  @Post(
    path: '/Development/Seed',
    optionalBody: true,
  )
  Future<chopper.Response> _developmentSeedPost({
    @Query('seeds') String? seeds,
    @Query('recreateDb') bool? recreateDb,
  });

  ///
  ///@param Phone
  ///@param MicroChipId
  ///@param PageSize
  ///@param Page
  Future<chopper.Response<PetRecordDTOPaginationResult>> apiPetsGet({
    String? phone,
    String? microChipId,
    int? pageSize,
    int? page,
  }) {
    generatedMapping.putIfAbsent(PetRecordDTOPaginationResult,
        () => PetRecordDTOPaginationResult.fromJsonFactory);

    return _apiPetsGet(
        phone: phone, microChipId: microChipId, pageSize: pageSize, page: page);
  }

  ///
  ///@param Phone
  ///@param MicroChipId
  ///@param PageSize
  ///@param Page
  @Get(path: '/api/Pets')
  Future<chopper.Response<PetRecordDTOPaginationResult>> _apiPetsGet({
    @Query('Phone') String? phone,
    @Query('MicroChipId') String? microChipId,
    @Query('PageSize') int? pageSize,
    @Query('Page') int? page,
  });

  ///
  Future<chopper.Response> apiPetsPost({required CreatePetCommand? body}) {
    return _apiPetsPost(body: body);
  }

  ///
  @Post(
    path: '/api/Pets',
    optionalBody: true,
  )
  Future<chopper.Response> _apiPetsPost(
      {@Body() required CreatePetCommand? body});

  ///
  ///@param id
  Future<chopper.Response<ExistingPetRecordDTO>> apiPetsIdExistingRecordsGet(
      {required int? id}) {
    generatedMapping.putIfAbsent(
        ExistingPetRecordDTO, () => ExistingPetRecordDTO.fromJsonFactory);

    return _apiPetsIdExistingRecordsGet(id: id);
  }

  ///
  ///@param id
  @Get(path: '/api/Pets/{id}/ExistingRecords')
  Future<chopper.Response<ExistingPetRecordDTO>> _apiPetsIdExistingRecordsGet(
      {@Path('id') required int? id});

  ///
  Future<chopper.Response> apiPetsAddAppointmentPost(
      {required AddAppointmentCommand? body}) {
    return _apiPetsAddAppointmentPost(body: body);
  }

  ///
  @Post(
    path: '/api/Pets/AddAppointment',
    optionalBody: true,
  )
  Future<chopper.Response> _apiPetsAddAppointmentPost(
      {@Body() required AddAppointmentCommand? body});

  ///
  ///@param PageSize
  ///@param Page
  Future<chopper.Response<VeterinarianDTOPaginationResult>>
      apiVeterinariansQueryGet({
    int? pageSize,
    int? page,
  }) {
    generatedMapping.putIfAbsent(VeterinarianDTOPaginationResult,
        () => VeterinarianDTOPaginationResult.fromJsonFactory);

    return _apiVeterinariansQueryGet(pageSize: pageSize, page: page);
  }

  ///
  ///@param PageSize
  ///@param Page
  @Get(path: '/api/Veterinarians/Query')
  Future<chopper.Response<VeterinarianDTOPaginationResult>>
      _apiVeterinariansQueryGet({
    @Query('PageSize') int? pageSize,
    @Query('Page') int? page,
  });

  ///
  Future<chopper.Response<List<VeterinarianDTO>>> apiVeterinariansGet() {
    generatedMapping.putIfAbsent(
        VeterinarianDTO, () => VeterinarianDTO.fromJsonFactory);

    return _apiVeterinariansGet();
  }

  ///
  @Get(path: '/api/Veterinarians')
  Future<chopper.Response<List<VeterinarianDTO>>> _apiVeterinariansGet();

  ///
  Future<chopper.Response> apiVeterinariansPost(
      {required CreateVeterinarianCommand? body}) {
    return _apiVeterinariansPost(body: body);
  }

  ///
  @Post(
    path: '/api/Veterinarians',
    optionalBody: true,
  )
  Future<chopper.Response> _apiVeterinariansPost(
      {@Body() required CreateVeterinarianCommand? body});

  ///
  ///@param id
  Future<chopper.Response<VeterinarianDTO>> apiVeterinariansIdGet(
      {required int? id}) {
    generatedMapping.putIfAbsent(
        VeterinarianDTO, () => VeterinarianDTO.fromJsonFactory);

    return _apiVeterinariansIdGet(id: id);
  }

  ///
  ///@param id
  @Get(path: '/api/Veterinarians/{id}')
  Future<chopper.Response<VeterinarianDTO>> _apiVeterinariansIdGet(
      {@Path('id') required int? id});

  ///
  ///@param id
  Future<chopper.Response> apiVeterinariansIdPut({
    required int? id,
    required UpdateVeterinarianCommand? body,
  }) {
    return _apiVeterinariansIdPut(id: id, body: body);
  }

  ///
  ///@param id
  @Put(
    path: '/api/Veterinarians/{id}',
    optionalBody: true,
  )
  Future<chopper.Response> _apiVeterinariansIdPut({
    @Path('id') required int? id,
    @Body() required UpdateVeterinarianCommand? body,
  });

  ///
  ///@param id
  Future<chopper.Response> apiVeterinariansIdDelete({required int? id}) {
    return _apiVeterinariansIdDelete(id: id);
  }

  ///
  ///@param id
  @Delete(path: '/api/Veterinarians/{id}')
  Future<chopper.Response> _apiVeterinariansIdDelete(
      {@Path('id') required int? id});
}

@JsonSerializable(explicitToJson: true)
class AddAppointmentCommand {
  const AddAppointmentCommand({
    this.petId,
    this.ownerId,
    this.vetId,
    this.apptDate,
    this.reason,
    this.notes,
  });

  factory AddAppointmentCommand.fromJson(Map<String, dynamic> json) =>
      _$AddAppointmentCommandFromJson(json);

  static const toJsonFactory = _$AddAppointmentCommandToJson;
  Map<String, dynamic> toJson() => _$AddAppointmentCommandToJson(this);

  @JsonKey(name: 'petId')
  final int? petId;
  @JsonKey(name: 'ownerId')
  final int? ownerId;
  @JsonKey(name: 'vetId')
  final int? vetId;
  @JsonKey(name: 'apptDate')
  final DateTime? apptDate;
  @JsonKey(name: 'reason')
  final String? reason;
  @JsonKey(name: 'notes')
  final String? notes;
  static const fromJsonFactory = _$AddAppointmentCommandFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is AddAppointmentCommand &&
            (identical(other.petId, petId) ||
                const DeepCollectionEquality().equals(other.petId, petId)) &&
            (identical(other.ownerId, ownerId) ||
                const DeepCollectionEquality()
                    .equals(other.ownerId, ownerId)) &&
            (identical(other.vetId, vetId) ||
                const DeepCollectionEquality().equals(other.vetId, vetId)) &&
            (identical(other.apptDate, apptDate) ||
                const DeepCollectionEquality()
                    .equals(other.apptDate, apptDate)) &&
            (identical(other.reason, reason) ||
                const DeepCollectionEquality().equals(other.reason, reason)) &&
            (identical(other.notes, notes) ||
                const DeepCollectionEquality().equals(other.notes, notes)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(petId) ^
      const DeepCollectionEquality().hash(ownerId) ^
      const DeepCollectionEquality().hash(vetId) ^
      const DeepCollectionEquality().hash(apptDate) ^
      const DeepCollectionEquality().hash(reason) ^
      const DeepCollectionEquality().hash(notes) ^
      runtimeType.hashCode;
}

extension $AddAppointmentCommandExtension on AddAppointmentCommand {
  AddAppointmentCommand copyWith(
      {int? petId,
      int? ownerId,
      int? vetId,
      DateTime? apptDate,
      String? reason,
      String? notes}) {
    return AddAppointmentCommand(
        petId: petId ?? this.petId,
        ownerId: ownerId ?? this.ownerId,
        vetId: vetId ?? this.vetId,
        apptDate: apptDate ?? this.apptDate,
        reason: reason ?? this.reason,
        notes: notes ?? this.notes);
  }

  AddAppointmentCommand copyWithWrapped(
      {Wrapped<int?>? petId,
      Wrapped<int?>? ownerId,
      Wrapped<int?>? vetId,
      Wrapped<DateTime?>? apptDate,
      Wrapped<String?>? reason,
      Wrapped<String?>? notes}) {
    return AddAppointmentCommand(
        petId: (petId != null ? petId.value : this.petId),
        ownerId: (ownerId != null ? ownerId.value : this.ownerId),
        vetId: (vetId != null ? vetId.value : this.vetId),
        apptDate: (apptDate != null ? apptDate.value : this.apptDate),
        reason: (reason != null ? reason.value : this.reason),
        notes: (notes != null ? notes.value : this.notes));
  }
}

@JsonSerializable(explicitToJson: true)
class AppointmentDTO {
  const AppointmentDTO({
    this.id,
    this.petId,
    this.ownerId,
    this.vetId,
    this.appointmentDate,
    this.reason,
    this.status,
    this.notes,
  });

  factory AppointmentDTO.fromJson(Map<String, dynamic> json) =>
      _$AppointmentDTOFromJson(json);

  static const toJsonFactory = _$AppointmentDTOToJson;
  Map<String, dynamic> toJson() => _$AppointmentDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'petId')
  final int? petId;
  @JsonKey(name: 'ownerId')
  final int? ownerId;
  @JsonKey(name: 'vetId')
  final int? vetId;
  @JsonKey(name: 'appointmentDate')
  final DateTime? appointmentDate;
  @JsonKey(name: 'reason')
  final String? reason;
  @JsonKey(
    name: 'status',
    toJson: appointmentStatusNullableToJson,
    fromJson: appointmentStatusNullableFromJson,
  )
  final enums.AppointmentStatus? status;
  @JsonKey(name: 'notes')
  final String? notes;
  static const fromJsonFactory = _$AppointmentDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is AppointmentDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.petId, petId) ||
                const DeepCollectionEquality().equals(other.petId, petId)) &&
            (identical(other.ownerId, ownerId) ||
                const DeepCollectionEquality()
                    .equals(other.ownerId, ownerId)) &&
            (identical(other.vetId, vetId) ||
                const DeepCollectionEquality().equals(other.vetId, vetId)) &&
            (identical(other.appointmentDate, appointmentDate) ||
                const DeepCollectionEquality()
                    .equals(other.appointmentDate, appointmentDate)) &&
            (identical(other.reason, reason) ||
                const DeepCollectionEquality().equals(other.reason, reason)) &&
            (identical(other.status, status) ||
                const DeepCollectionEquality().equals(other.status, status)) &&
            (identical(other.notes, notes) ||
                const DeepCollectionEquality().equals(other.notes, notes)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(petId) ^
      const DeepCollectionEquality().hash(ownerId) ^
      const DeepCollectionEquality().hash(vetId) ^
      const DeepCollectionEquality().hash(appointmentDate) ^
      const DeepCollectionEquality().hash(reason) ^
      const DeepCollectionEquality().hash(status) ^
      const DeepCollectionEquality().hash(notes) ^
      runtimeType.hashCode;
}

extension $AppointmentDTOExtension on AppointmentDTO {
  AppointmentDTO copyWith(
      {int? id,
      int? petId,
      int? ownerId,
      int? vetId,
      DateTime? appointmentDate,
      String? reason,
      enums.AppointmentStatus? status,
      String? notes}) {
    return AppointmentDTO(
        id: id ?? this.id,
        petId: petId ?? this.petId,
        ownerId: ownerId ?? this.ownerId,
        vetId: vetId ?? this.vetId,
        appointmentDate: appointmentDate ?? this.appointmentDate,
        reason: reason ?? this.reason,
        status: status ?? this.status,
        notes: notes ?? this.notes);
  }

  AppointmentDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<int?>? petId,
      Wrapped<int?>? ownerId,
      Wrapped<int?>? vetId,
      Wrapped<DateTime?>? appointmentDate,
      Wrapped<String?>? reason,
      Wrapped<enums.AppointmentStatus?>? status,
      Wrapped<String?>? notes}) {
    return AppointmentDTO(
        id: (id != null ? id.value : this.id),
        petId: (petId != null ? petId.value : this.petId),
        ownerId: (ownerId != null ? ownerId.value : this.ownerId),
        vetId: (vetId != null ? vetId.value : this.vetId),
        appointmentDate: (appointmentDate != null
            ? appointmentDate.value
            : this.appointmentDate),
        reason: (reason != null ? reason.value : this.reason),
        status: (status != null ? status.value : this.status),
        notes: (notes != null ? notes.value : this.notes));
  }
}

@JsonSerializable(explicitToJson: true)
class AppointmentDetailsDTO {
  const AppointmentDetailsDTO({
    this.id,
    this.appointmentDate,
    this.reason,
    this.status,
    this.notes,
    this.petDetails,
    this.ownerDetails,
    this.vetDetails,
    this.completedAt,
  });

  factory AppointmentDetailsDTO.fromJson(Map<String, dynamic> json) =>
      _$AppointmentDetailsDTOFromJson(json);

  static const toJsonFactory = _$AppointmentDetailsDTOToJson;
  Map<String, dynamic> toJson() => _$AppointmentDetailsDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'appointmentDate')
  final DateTime? appointmentDate;
  @JsonKey(name: 'reason')
  final String? reason;
  @JsonKey(
    name: 'status',
    toJson: appointmentStatusNullableToJson,
    fromJson: appointmentStatusNullableFromJson,
  )
  final enums.AppointmentStatus? status;
  @JsonKey(name: 'notes')
  final String? notes;
  @JsonKey(name: 'petDetails')
  final PetDetailsDTO? petDetails;
  @JsonKey(name: 'ownerDetails')
  final PetOwnerDetailsDTO? ownerDetails;
  @JsonKey(name: 'vetDetails')
  final VetDetailsDTO? vetDetails;
  @JsonKey(name: 'completedAt')
  final DateTime? completedAt;
  static const fromJsonFactory = _$AppointmentDetailsDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is AppointmentDetailsDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.appointmentDate, appointmentDate) ||
                const DeepCollectionEquality()
                    .equals(other.appointmentDate, appointmentDate)) &&
            (identical(other.reason, reason) ||
                const DeepCollectionEquality().equals(other.reason, reason)) &&
            (identical(other.status, status) ||
                const DeepCollectionEquality().equals(other.status, status)) &&
            (identical(other.notes, notes) ||
                const DeepCollectionEquality().equals(other.notes, notes)) &&
            (identical(other.petDetails, petDetails) ||
                const DeepCollectionEquality()
                    .equals(other.petDetails, petDetails)) &&
            (identical(other.ownerDetails, ownerDetails) ||
                const DeepCollectionEquality()
                    .equals(other.ownerDetails, ownerDetails)) &&
            (identical(other.vetDetails, vetDetails) ||
                const DeepCollectionEquality()
                    .equals(other.vetDetails, vetDetails)) &&
            (identical(other.completedAt, completedAt) ||
                const DeepCollectionEquality()
                    .equals(other.completedAt, completedAt)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(appointmentDate) ^
      const DeepCollectionEquality().hash(reason) ^
      const DeepCollectionEquality().hash(status) ^
      const DeepCollectionEquality().hash(notes) ^
      const DeepCollectionEquality().hash(petDetails) ^
      const DeepCollectionEquality().hash(ownerDetails) ^
      const DeepCollectionEquality().hash(vetDetails) ^
      const DeepCollectionEquality().hash(completedAt) ^
      runtimeType.hashCode;
}

extension $AppointmentDetailsDTOExtension on AppointmentDetailsDTO {
  AppointmentDetailsDTO copyWith(
      {int? id,
      DateTime? appointmentDate,
      String? reason,
      enums.AppointmentStatus? status,
      String? notes,
      PetDetailsDTO? petDetails,
      PetOwnerDetailsDTO? ownerDetails,
      VetDetailsDTO? vetDetails,
      DateTime? completedAt}) {
    return AppointmentDetailsDTO(
        id: id ?? this.id,
        appointmentDate: appointmentDate ?? this.appointmentDate,
        reason: reason ?? this.reason,
        status: status ?? this.status,
        notes: notes ?? this.notes,
        petDetails: petDetails ?? this.petDetails,
        ownerDetails: ownerDetails ?? this.ownerDetails,
        vetDetails: vetDetails ?? this.vetDetails,
        completedAt: completedAt ?? this.completedAt);
  }

  AppointmentDetailsDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<DateTime?>? appointmentDate,
      Wrapped<String?>? reason,
      Wrapped<enums.AppointmentStatus?>? status,
      Wrapped<String?>? notes,
      Wrapped<PetDetailsDTO?>? petDetails,
      Wrapped<PetOwnerDetailsDTO?>? ownerDetails,
      Wrapped<VetDetailsDTO?>? vetDetails,
      Wrapped<DateTime?>? completedAt}) {
    return AppointmentDetailsDTO(
        id: (id != null ? id.value : this.id),
        appointmentDate: (appointmentDate != null
            ? appointmentDate.value
            : this.appointmentDate),
        reason: (reason != null ? reason.value : this.reason),
        status: (status != null ? status.value : this.status),
        notes: (notes != null ? notes.value : this.notes),
        petDetails: (petDetails != null ? petDetails.value : this.petDetails),
        ownerDetails:
            (ownerDetails != null ? ownerDetails.value : this.ownerDetails),
        vetDetails: (vetDetails != null ? vetDetails.value : this.vetDetails),
        completedAt:
            (completedAt != null ? completedAt.value : this.completedAt));
  }
}

@JsonSerializable(explicitToJson: true)
class AppointmentQueryDTO {
  const AppointmentQueryDTO({
    this.id,
    this.petId,
    this.ownerId,
    this.vetId,
    this.name,
    this.species,
    this.phone,
    this.ownerName,
    this.vetName,
    this.appointmentDate,
    this.reason,
    this.status,
    this.notes,
    this.completedAt,
  });

  factory AppointmentQueryDTO.fromJson(Map<String, dynamic> json) =>
      _$AppointmentQueryDTOFromJson(json);

  static const toJsonFactory = _$AppointmentQueryDTOToJson;
  Map<String, dynamic> toJson() => _$AppointmentQueryDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'petId')
  final int? petId;
  @JsonKey(name: 'ownerId')
  final int? ownerId;
  @JsonKey(name: 'vetId')
  final int? vetId;
  @JsonKey(name: 'name')
  final String? name;
  @JsonKey(
    name: 'species',
    toJson: petSpeciesNullableToJson,
    fromJson: petSpeciesNullableFromJson,
  )
  final enums.PetSpecies? species;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'ownerName')
  final String? ownerName;
  @JsonKey(name: 'vetName')
  final String? vetName;
  @JsonKey(name: 'appointmentDate')
  final DateTime? appointmentDate;
  @JsonKey(name: 'reason')
  final String? reason;
  @JsonKey(
    name: 'status',
    toJson: appointmentStatusNullableToJson,
    fromJson: appointmentStatusNullableFromJson,
  )
  final enums.AppointmentStatus? status;
  @JsonKey(name: 'notes')
  final String? notes;
  @JsonKey(name: 'completedAt')
  final DateTime? completedAt;
  static const fromJsonFactory = _$AppointmentQueryDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is AppointmentQueryDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.petId, petId) ||
                const DeepCollectionEquality().equals(other.petId, petId)) &&
            (identical(other.ownerId, ownerId) ||
                const DeepCollectionEquality()
                    .equals(other.ownerId, ownerId)) &&
            (identical(other.vetId, vetId) ||
                const DeepCollectionEquality().equals(other.vetId, vetId)) &&
            (identical(other.name, name) ||
                const DeepCollectionEquality().equals(other.name, name)) &&
            (identical(other.species, species) ||
                const DeepCollectionEquality()
                    .equals(other.species, species)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.ownerName, ownerName) ||
                const DeepCollectionEquality()
                    .equals(other.ownerName, ownerName)) &&
            (identical(other.vetName, vetName) ||
                const DeepCollectionEquality()
                    .equals(other.vetName, vetName)) &&
            (identical(other.appointmentDate, appointmentDate) ||
                const DeepCollectionEquality()
                    .equals(other.appointmentDate, appointmentDate)) &&
            (identical(other.reason, reason) ||
                const DeepCollectionEquality().equals(other.reason, reason)) &&
            (identical(other.status, status) ||
                const DeepCollectionEquality().equals(other.status, status)) &&
            (identical(other.notes, notes) ||
                const DeepCollectionEquality().equals(other.notes, notes)) &&
            (identical(other.completedAt, completedAt) ||
                const DeepCollectionEquality()
                    .equals(other.completedAt, completedAt)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(petId) ^
      const DeepCollectionEquality().hash(ownerId) ^
      const DeepCollectionEquality().hash(vetId) ^
      const DeepCollectionEquality().hash(name) ^
      const DeepCollectionEquality().hash(species) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(ownerName) ^
      const DeepCollectionEquality().hash(vetName) ^
      const DeepCollectionEquality().hash(appointmentDate) ^
      const DeepCollectionEquality().hash(reason) ^
      const DeepCollectionEquality().hash(status) ^
      const DeepCollectionEquality().hash(notes) ^
      const DeepCollectionEquality().hash(completedAt) ^
      runtimeType.hashCode;
}

extension $AppointmentQueryDTOExtension on AppointmentQueryDTO {
  AppointmentQueryDTO copyWith(
      {int? id,
      int? petId,
      int? ownerId,
      int? vetId,
      String? name,
      enums.PetSpecies? species,
      String? phone,
      String? ownerName,
      String? vetName,
      DateTime? appointmentDate,
      String? reason,
      enums.AppointmentStatus? status,
      String? notes,
      DateTime? completedAt}) {
    return AppointmentQueryDTO(
        id: id ?? this.id,
        petId: petId ?? this.petId,
        ownerId: ownerId ?? this.ownerId,
        vetId: vetId ?? this.vetId,
        name: name ?? this.name,
        species: species ?? this.species,
        phone: phone ?? this.phone,
        ownerName: ownerName ?? this.ownerName,
        vetName: vetName ?? this.vetName,
        appointmentDate: appointmentDate ?? this.appointmentDate,
        reason: reason ?? this.reason,
        status: status ?? this.status,
        notes: notes ?? this.notes,
        completedAt: completedAt ?? this.completedAt);
  }

  AppointmentQueryDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<int?>? petId,
      Wrapped<int?>? ownerId,
      Wrapped<int?>? vetId,
      Wrapped<String?>? name,
      Wrapped<enums.PetSpecies?>? species,
      Wrapped<String?>? phone,
      Wrapped<String?>? ownerName,
      Wrapped<String?>? vetName,
      Wrapped<DateTime?>? appointmentDate,
      Wrapped<String?>? reason,
      Wrapped<enums.AppointmentStatus?>? status,
      Wrapped<String?>? notes,
      Wrapped<DateTime?>? completedAt}) {
    return AppointmentQueryDTO(
        id: (id != null ? id.value : this.id),
        petId: (petId != null ? petId.value : this.petId),
        ownerId: (ownerId != null ? ownerId.value : this.ownerId),
        vetId: (vetId != null ? vetId.value : this.vetId),
        name: (name != null ? name.value : this.name),
        species: (species != null ? species.value : this.species),
        phone: (phone != null ? phone.value : this.phone),
        ownerName: (ownerName != null ? ownerName.value : this.ownerName),
        vetName: (vetName != null ? vetName.value : this.vetName),
        appointmentDate: (appointmentDate != null
            ? appointmentDate.value
            : this.appointmentDate),
        reason: (reason != null ? reason.value : this.reason),
        status: (status != null ? status.value : this.status),
        notes: (notes != null ? notes.value : this.notes),
        completedAt:
            (completedAt != null ? completedAt.value : this.completedAt));
  }
}

@JsonSerializable(explicitToJson: true)
class AppointmentQueryDTOPaginationResult {
  const AppointmentQueryDTOPaginationResult({
    this.data,
    this.totalRowCount,
  });

  factory AppointmentQueryDTOPaginationResult.fromJson(
          Map<String, dynamic> json) =>
      _$AppointmentQueryDTOPaginationResultFromJson(json);

  static const toJsonFactory = _$AppointmentQueryDTOPaginationResultToJson;
  Map<String, dynamic> toJson() =>
      _$AppointmentQueryDTOPaginationResultToJson(this);

  @JsonKey(name: 'data', defaultValue: <AppointmentQueryDTO>[])
  final List<AppointmentQueryDTO>? data;
  @JsonKey(name: 'totalRowCount')
  final int? totalRowCount;
  static const fromJsonFactory = _$AppointmentQueryDTOPaginationResultFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is AppointmentQueryDTOPaginationResult &&
            (identical(other.data, data) ||
                const DeepCollectionEquality().equals(other.data, data)) &&
            (identical(other.totalRowCount, totalRowCount) ||
                const DeepCollectionEquality()
                    .equals(other.totalRowCount, totalRowCount)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(data) ^
      const DeepCollectionEquality().hash(totalRowCount) ^
      runtimeType.hashCode;
}

extension $AppointmentQueryDTOPaginationResultExtension
    on AppointmentQueryDTOPaginationResult {
  AppointmentQueryDTOPaginationResult copyWith(
      {List<AppointmentQueryDTO>? data, int? totalRowCount}) {
    return AppointmentQueryDTOPaginationResult(
        data: data ?? this.data,
        totalRowCount: totalRowCount ?? this.totalRowCount);
  }

  AppointmentQueryDTOPaginationResult copyWithWrapped(
      {Wrapped<List<AppointmentQueryDTO>?>? data,
      Wrapped<int?>? totalRowCount}) {
    return AppointmentQueryDTOPaginationResult(
        data: (data != null ? data.value : this.data),
        totalRowCount:
            (totalRowCount != null ? totalRowCount.value : this.totalRowCount));
  }
}

@JsonSerializable(explicitToJson: true)
class ApptsCountByDateRangeDTO {
  const ApptsCountByDateRangeDTO({
    this.totalCount,
    this.changeAsPercent,
  });

  factory ApptsCountByDateRangeDTO.fromJson(Map<String, dynamic> json) =>
      _$ApptsCountByDateRangeDTOFromJson(json);

  static const toJsonFactory = _$ApptsCountByDateRangeDTOToJson;
  Map<String, dynamic> toJson() => _$ApptsCountByDateRangeDTOToJson(this);

  @JsonKey(name: 'totalCount')
  final int? totalCount;
  @JsonKey(name: 'changeAsPercent')
  final double? changeAsPercent;
  static const fromJsonFactory = _$ApptsCountByDateRangeDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is ApptsCountByDateRangeDTO &&
            (identical(other.totalCount, totalCount) ||
                const DeepCollectionEquality()
                    .equals(other.totalCount, totalCount)) &&
            (identical(other.changeAsPercent, changeAsPercent) ||
                const DeepCollectionEquality()
                    .equals(other.changeAsPercent, changeAsPercent)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(totalCount) ^
      const DeepCollectionEquality().hash(changeAsPercent) ^
      runtimeType.hashCode;
}

extension $ApptsCountByDateRangeDTOExtension on ApptsCountByDateRangeDTO {
  ApptsCountByDateRangeDTO copyWith(
      {int? totalCount, double? changeAsPercent}) {
    return ApptsCountByDateRangeDTO(
        totalCount: totalCount ?? this.totalCount,
        changeAsPercent: changeAsPercent ?? this.changeAsPercent);
  }

  ApptsCountByDateRangeDTO copyWithWrapped(
      {Wrapped<int?>? totalCount, Wrapped<double?>? changeAsPercent}) {
    return ApptsCountByDateRangeDTO(
        totalCount: (totalCount != null ? totalCount.value : this.totalCount),
        changeAsPercent: (changeAsPercent != null
            ? changeAsPercent.value
            : this.changeAsPercent));
  }
}

@JsonSerializable(explicitToJson: true)
class CreateAppointmentCommand {
  const CreateAppointmentCommand({
    this.vetId,
    this.apptDate,
    this.reason,
    this.notes,
    this.petInfo,
    this.ownerInfo,
  });

  factory CreateAppointmentCommand.fromJson(Map<String, dynamic> json) =>
      _$CreateAppointmentCommandFromJson(json);

  static const toJsonFactory = _$CreateAppointmentCommandToJson;
  Map<String, dynamic> toJson() => _$CreateAppointmentCommandToJson(this);

  @JsonKey(name: 'vetId')
  final int? vetId;
  @JsonKey(name: 'apptDate')
  final DateTime? apptDate;
  @JsonKey(name: 'reason')
  final String? reason;
  @JsonKey(name: 'notes')
  final String? notes;
  @JsonKey(name: 'petInfo')
  final PetDTO? petInfo;
  @JsonKey(name: 'ownerInfo')
  final OwnerDTO? ownerInfo;
  static const fromJsonFactory = _$CreateAppointmentCommandFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is CreateAppointmentCommand &&
            (identical(other.vetId, vetId) ||
                const DeepCollectionEquality().equals(other.vetId, vetId)) &&
            (identical(other.apptDate, apptDate) ||
                const DeepCollectionEquality()
                    .equals(other.apptDate, apptDate)) &&
            (identical(other.reason, reason) ||
                const DeepCollectionEquality().equals(other.reason, reason)) &&
            (identical(other.notes, notes) ||
                const DeepCollectionEquality().equals(other.notes, notes)) &&
            (identical(other.petInfo, petInfo) ||
                const DeepCollectionEquality()
                    .equals(other.petInfo, petInfo)) &&
            (identical(other.ownerInfo, ownerInfo) ||
                const DeepCollectionEquality()
                    .equals(other.ownerInfo, ownerInfo)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(vetId) ^
      const DeepCollectionEquality().hash(apptDate) ^
      const DeepCollectionEquality().hash(reason) ^
      const DeepCollectionEquality().hash(notes) ^
      const DeepCollectionEquality().hash(petInfo) ^
      const DeepCollectionEquality().hash(ownerInfo) ^
      runtimeType.hashCode;
}

extension $CreateAppointmentCommandExtension on CreateAppointmentCommand {
  CreateAppointmentCommand copyWith(
      {int? vetId,
      DateTime? apptDate,
      String? reason,
      String? notes,
      PetDTO? petInfo,
      OwnerDTO? ownerInfo}) {
    return CreateAppointmentCommand(
        vetId: vetId ?? this.vetId,
        apptDate: apptDate ?? this.apptDate,
        reason: reason ?? this.reason,
        notes: notes ?? this.notes,
        petInfo: petInfo ?? this.petInfo,
        ownerInfo: ownerInfo ?? this.ownerInfo);
  }

  CreateAppointmentCommand copyWithWrapped(
      {Wrapped<int?>? vetId,
      Wrapped<DateTime?>? apptDate,
      Wrapped<String?>? reason,
      Wrapped<String?>? notes,
      Wrapped<PetDTO?>? petInfo,
      Wrapped<OwnerDTO?>? ownerInfo}) {
    return CreateAppointmentCommand(
        vetId: (vetId != null ? vetId.value : this.vetId),
        apptDate: (apptDate != null ? apptDate.value : this.apptDate),
        reason: (reason != null ? reason.value : this.reason),
        notes: (notes != null ? notes.value : this.notes),
        petInfo: (petInfo != null ? petInfo.value : this.petInfo),
        ownerInfo: (ownerInfo != null ? ownerInfo.value : this.ownerInfo));
  }
}

@JsonSerializable(explicitToJson: true)
class CreatePetCommand {
  const CreatePetCommand();

  factory CreatePetCommand.fromJson(Map<String, dynamic> json) =>
      _$CreatePetCommandFromJson(json);

  static const toJsonFactory = _$CreatePetCommandToJson;
  Map<String, dynamic> toJson() => _$CreatePetCommandToJson(this);

  static const fromJsonFactory = _$CreatePetCommandFromJson;

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode => runtimeType.hashCode;
}

@JsonSerializable(explicitToJson: true)
class CreateVeterinarianCommand {
  const CreateVeterinarianCommand({
    this.firstName,
    this.lastName,
    this.phone,
    this.email,
    this.specialization,
    this.yearsOfExperience,
  });

  factory CreateVeterinarianCommand.fromJson(Map<String, dynamic> json) =>
      _$CreateVeterinarianCommandFromJson(json);

  static const toJsonFactory = _$CreateVeterinarianCommandToJson;
  Map<String, dynamic> toJson() => _$CreateVeterinarianCommandToJson(this);

  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'email')
  final String? email;
  @JsonKey(name: 'specialization')
  final String? specialization;
  @JsonKey(name: 'yearsOfExperience')
  final int? yearsOfExperience;
  static const fromJsonFactory = _$CreateVeterinarianCommandFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is CreateVeterinarianCommand &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.email, email) ||
                const DeepCollectionEquality().equals(other.email, email)) &&
            (identical(other.specialization, specialization) ||
                const DeepCollectionEquality()
                    .equals(other.specialization, specialization)) &&
            (identical(other.yearsOfExperience, yearsOfExperience) ||
                const DeepCollectionEquality()
                    .equals(other.yearsOfExperience, yearsOfExperience)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(email) ^
      const DeepCollectionEquality().hash(specialization) ^
      const DeepCollectionEquality().hash(yearsOfExperience) ^
      runtimeType.hashCode;
}

extension $CreateVeterinarianCommandExtension on CreateVeterinarianCommand {
  CreateVeterinarianCommand copyWith(
      {String? firstName,
      String? lastName,
      String? phone,
      String? email,
      String? specialization,
      int? yearsOfExperience}) {
    return CreateVeterinarianCommand(
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        specialization: specialization ?? this.specialization,
        yearsOfExperience: yearsOfExperience ?? this.yearsOfExperience);
  }

  CreateVeterinarianCommand copyWithWrapped(
      {Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? phone,
      Wrapped<String?>? email,
      Wrapped<String?>? specialization,
      Wrapped<int?>? yearsOfExperience}) {
    return CreateVeterinarianCommand(
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        phone: (phone != null ? phone.value : this.phone),
        email: (email != null ? email.value : this.email),
        specialization: (specialization != null
            ? specialization.value
            : this.specialization),
        yearsOfExperience: (yearsOfExperience != null
            ? yearsOfExperience.value
            : this.yearsOfExperience));
  }
}

@JsonSerializable(explicitToJson: true)
class ExistingPetRecordDTO {
  const ExistingPetRecordDTO({
    this.id,
    this.name,
    this.species,
    this.breed,
    this.gender,
    this.dateOfBirth,
    this.weight,
    this.color,
    this.microChipId,
    this.medicalHistory,
    this.ownerInfo,
    this.medicalRecords,
    this.prescriptions,
  });

  factory ExistingPetRecordDTO.fromJson(Map<String, dynamic> json) =>
      _$ExistingPetRecordDTOFromJson(json);

  static const toJsonFactory = _$ExistingPetRecordDTOToJson;
  Map<String, dynamic> toJson() => _$ExistingPetRecordDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'name')
  final String? name;
  @JsonKey(
    name: 'species',
    toJson: petSpeciesNullableToJson,
    fromJson: petSpeciesNullableFromJson,
  )
  final enums.PetSpecies? species;
  @JsonKey(name: 'breed')
  final String? breed;
  @JsonKey(name: 'gender')
  final String? gender;
  @JsonKey(name: 'dateOfBirth')
  final DateTime? dateOfBirth;
  @JsonKey(name: 'weight')
  final double? weight;
  @JsonKey(name: 'color')
  final String? color;
  @JsonKey(name: 'microChipId')
  final String? microChipId;
  @JsonKey(name: 'medicalHistory')
  final String? medicalHistory;
  @JsonKey(name: 'ownerInfo')
  final OwnerInfoDTO? ownerInfo;
  @JsonKey(name: 'medicalRecords', defaultValue: <MedicalRecordDTO>[])
  final List<MedicalRecordDTO>? medicalRecords;
  @JsonKey(name: 'prescriptions', defaultValue: <PrescriptionDTO>[])
  final List<PrescriptionDTO>? prescriptions;
  static const fromJsonFactory = _$ExistingPetRecordDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is ExistingPetRecordDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.name, name) ||
                const DeepCollectionEquality().equals(other.name, name)) &&
            (identical(other.species, species) ||
                const DeepCollectionEquality()
                    .equals(other.species, species)) &&
            (identical(other.breed, breed) ||
                const DeepCollectionEquality().equals(other.breed, breed)) &&
            (identical(other.gender, gender) ||
                const DeepCollectionEquality().equals(other.gender, gender)) &&
            (identical(other.dateOfBirth, dateOfBirth) ||
                const DeepCollectionEquality()
                    .equals(other.dateOfBirth, dateOfBirth)) &&
            (identical(other.weight, weight) ||
                const DeepCollectionEquality().equals(other.weight, weight)) &&
            (identical(other.color, color) ||
                const DeepCollectionEquality().equals(other.color, color)) &&
            (identical(other.microChipId, microChipId) ||
                const DeepCollectionEquality()
                    .equals(other.microChipId, microChipId)) &&
            (identical(other.medicalHistory, medicalHistory) ||
                const DeepCollectionEquality()
                    .equals(other.medicalHistory, medicalHistory)) &&
            (identical(other.ownerInfo, ownerInfo) ||
                const DeepCollectionEquality()
                    .equals(other.ownerInfo, ownerInfo)) &&
            (identical(other.medicalRecords, medicalRecords) ||
                const DeepCollectionEquality()
                    .equals(other.medicalRecords, medicalRecords)) &&
            (identical(other.prescriptions, prescriptions) ||
                const DeepCollectionEquality()
                    .equals(other.prescriptions, prescriptions)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(name) ^
      const DeepCollectionEquality().hash(species) ^
      const DeepCollectionEquality().hash(breed) ^
      const DeepCollectionEquality().hash(gender) ^
      const DeepCollectionEquality().hash(dateOfBirth) ^
      const DeepCollectionEquality().hash(weight) ^
      const DeepCollectionEquality().hash(color) ^
      const DeepCollectionEquality().hash(microChipId) ^
      const DeepCollectionEquality().hash(medicalHistory) ^
      const DeepCollectionEquality().hash(ownerInfo) ^
      const DeepCollectionEquality().hash(medicalRecords) ^
      const DeepCollectionEquality().hash(prescriptions) ^
      runtimeType.hashCode;
}

extension $ExistingPetRecordDTOExtension on ExistingPetRecordDTO {
  ExistingPetRecordDTO copyWith(
      {int? id,
      String? name,
      enums.PetSpecies? species,
      String? breed,
      String? gender,
      DateTime? dateOfBirth,
      double? weight,
      String? color,
      String? microChipId,
      String? medicalHistory,
      OwnerInfoDTO? ownerInfo,
      List<MedicalRecordDTO>? medicalRecords,
      List<PrescriptionDTO>? prescriptions}) {
    return ExistingPetRecordDTO(
        id: id ?? this.id,
        name: name ?? this.name,
        species: species ?? this.species,
        breed: breed ?? this.breed,
        gender: gender ?? this.gender,
        dateOfBirth: dateOfBirth ?? this.dateOfBirth,
        weight: weight ?? this.weight,
        color: color ?? this.color,
        microChipId: microChipId ?? this.microChipId,
        medicalHistory: medicalHistory ?? this.medicalHistory,
        ownerInfo: ownerInfo ?? this.ownerInfo,
        medicalRecords: medicalRecords ?? this.medicalRecords,
        prescriptions: prescriptions ?? this.prescriptions);
  }

  ExistingPetRecordDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? name,
      Wrapped<enums.PetSpecies?>? species,
      Wrapped<String?>? breed,
      Wrapped<String?>? gender,
      Wrapped<DateTime?>? dateOfBirth,
      Wrapped<double?>? weight,
      Wrapped<String?>? color,
      Wrapped<String?>? microChipId,
      Wrapped<String?>? medicalHistory,
      Wrapped<OwnerInfoDTO?>? ownerInfo,
      Wrapped<List<MedicalRecordDTO>?>? medicalRecords,
      Wrapped<List<PrescriptionDTO>?>? prescriptions}) {
    return ExistingPetRecordDTO(
        id: (id != null ? id.value : this.id),
        name: (name != null ? name.value : this.name),
        species: (species != null ? species.value : this.species),
        breed: (breed != null ? breed.value : this.breed),
        gender: (gender != null ? gender.value : this.gender),
        dateOfBirth:
            (dateOfBirth != null ? dateOfBirth.value : this.dateOfBirth),
        weight: (weight != null ? weight.value : this.weight),
        color: (color != null ? color.value : this.color),
        microChipId:
            (microChipId != null ? microChipId.value : this.microChipId),
        medicalHistory: (medicalHistory != null
            ? medicalHistory.value
            : this.medicalHistory),
        ownerInfo: (ownerInfo != null ? ownerInfo.value : this.ownerInfo),
        medicalRecords: (medicalRecords != null
            ? medicalRecords.value
            : this.medicalRecords),
        prescriptions:
            (prescriptions != null ? prescriptions.value : this.prescriptions));
  }
}

@JsonSerializable(explicitToJson: true)
class MedicalRecordDTO {
  const MedicalRecordDTO({
    this.id,
    this.visitDate,
    this.symptoms,
    this.diagnosis,
    this.treatment,
    this.medication,
    this.followUpDate,
    this.notes,
  });

  factory MedicalRecordDTO.fromJson(Map<String, dynamic> json) =>
      _$MedicalRecordDTOFromJson(json);

  static const toJsonFactory = _$MedicalRecordDTOToJson;
  Map<String, dynamic> toJson() => _$MedicalRecordDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'visitDate')
  final DateTime? visitDate;
  @JsonKey(name: 'symptoms')
  final String? symptoms;
  @JsonKey(name: 'diagnosis')
  final String? diagnosis;
  @JsonKey(name: 'treatment')
  final String? treatment;
  @JsonKey(name: 'medication')
  final String? medication;
  @JsonKey(name: 'followUpDate')
  final DateTime? followUpDate;
  @JsonKey(name: 'notes')
  final String? notes;
  static const fromJsonFactory = _$MedicalRecordDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is MedicalRecordDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.visitDate, visitDate) ||
                const DeepCollectionEquality()
                    .equals(other.visitDate, visitDate)) &&
            (identical(other.symptoms, symptoms) ||
                const DeepCollectionEquality()
                    .equals(other.symptoms, symptoms)) &&
            (identical(other.diagnosis, diagnosis) ||
                const DeepCollectionEquality()
                    .equals(other.diagnosis, diagnosis)) &&
            (identical(other.treatment, treatment) ||
                const DeepCollectionEquality()
                    .equals(other.treatment, treatment)) &&
            (identical(other.medication, medication) ||
                const DeepCollectionEquality()
                    .equals(other.medication, medication)) &&
            (identical(other.followUpDate, followUpDate) ||
                const DeepCollectionEquality()
                    .equals(other.followUpDate, followUpDate)) &&
            (identical(other.notes, notes) ||
                const DeepCollectionEquality().equals(other.notes, notes)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(visitDate) ^
      const DeepCollectionEquality().hash(symptoms) ^
      const DeepCollectionEquality().hash(diagnosis) ^
      const DeepCollectionEquality().hash(treatment) ^
      const DeepCollectionEquality().hash(medication) ^
      const DeepCollectionEquality().hash(followUpDate) ^
      const DeepCollectionEquality().hash(notes) ^
      runtimeType.hashCode;
}

extension $MedicalRecordDTOExtension on MedicalRecordDTO {
  MedicalRecordDTO copyWith(
      {int? id,
      DateTime? visitDate,
      String? symptoms,
      String? diagnosis,
      String? treatment,
      String? medication,
      DateTime? followUpDate,
      String? notes}) {
    return MedicalRecordDTO(
        id: id ?? this.id,
        visitDate: visitDate ?? this.visitDate,
        symptoms: symptoms ?? this.symptoms,
        diagnosis: diagnosis ?? this.diagnosis,
        treatment: treatment ?? this.treatment,
        medication: medication ?? this.medication,
        followUpDate: followUpDate ?? this.followUpDate,
        notes: notes ?? this.notes);
  }

  MedicalRecordDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<DateTime?>? visitDate,
      Wrapped<String?>? symptoms,
      Wrapped<String?>? diagnosis,
      Wrapped<String?>? treatment,
      Wrapped<String?>? medication,
      Wrapped<DateTime?>? followUpDate,
      Wrapped<String?>? notes}) {
    return MedicalRecordDTO(
        id: (id != null ? id.value : this.id),
        visitDate: (visitDate != null ? visitDate.value : this.visitDate),
        symptoms: (symptoms != null ? symptoms.value : this.symptoms),
        diagnosis: (diagnosis != null ? diagnosis.value : this.diagnosis),
        treatment: (treatment != null ? treatment.value : this.treatment),
        medication: (medication != null ? medication.value : this.medication),
        followUpDate:
            (followUpDate != null ? followUpDate.value : this.followUpDate),
        notes: (notes != null ? notes.value : this.notes));
  }
}

@JsonSerializable(explicitToJson: true)
class OwnerDTO {
  const OwnerDTO({
    this.firstName,
    this.lastName,
    this.phone,
    this.email,
    this.address,
    this.city,
    this.state,
    this.zipCode,
    this.emergencyContact,
  });

  factory OwnerDTO.fromJson(Map<String, dynamic> json) =>
      _$OwnerDTOFromJson(json);

  static const toJsonFactory = _$OwnerDTOToJson;
  Map<String, dynamic> toJson() => _$OwnerDTOToJson(this);

  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'email')
  final String? email;
  @JsonKey(name: 'address')
  final String? address;
  @JsonKey(name: 'city')
  final String? city;
  @JsonKey(name: 'state')
  final String? state;
  @JsonKey(name: 'zipCode')
  final String? zipCode;
  @JsonKey(name: 'emergencyContact')
  final String? emergencyContact;
  static const fromJsonFactory = _$OwnerDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is OwnerDTO &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.email, email) ||
                const DeepCollectionEquality().equals(other.email, email)) &&
            (identical(other.address, address) ||
                const DeepCollectionEquality()
                    .equals(other.address, address)) &&
            (identical(other.city, city) ||
                const DeepCollectionEquality().equals(other.city, city)) &&
            (identical(other.state, state) ||
                const DeepCollectionEquality().equals(other.state, state)) &&
            (identical(other.zipCode, zipCode) ||
                const DeepCollectionEquality()
                    .equals(other.zipCode, zipCode)) &&
            (identical(other.emergencyContact, emergencyContact) ||
                const DeepCollectionEquality()
                    .equals(other.emergencyContact, emergencyContact)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(email) ^
      const DeepCollectionEquality().hash(address) ^
      const DeepCollectionEquality().hash(city) ^
      const DeepCollectionEquality().hash(state) ^
      const DeepCollectionEquality().hash(zipCode) ^
      const DeepCollectionEquality().hash(emergencyContact) ^
      runtimeType.hashCode;
}

extension $OwnerDTOExtension on OwnerDTO {
  OwnerDTO copyWith(
      {String? firstName,
      String? lastName,
      String? phone,
      String? email,
      String? address,
      String? city,
      String? state,
      String? zipCode,
      String? emergencyContact}) {
    return OwnerDTO(
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        address: address ?? this.address,
        city: city ?? this.city,
        state: state ?? this.state,
        zipCode: zipCode ?? this.zipCode,
        emergencyContact: emergencyContact ?? this.emergencyContact);
  }

  OwnerDTO copyWithWrapped(
      {Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? phone,
      Wrapped<String?>? email,
      Wrapped<String?>? address,
      Wrapped<String?>? city,
      Wrapped<String?>? state,
      Wrapped<String?>? zipCode,
      Wrapped<String?>? emergencyContact}) {
    return OwnerDTO(
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        phone: (phone != null ? phone.value : this.phone),
        email: (email != null ? email.value : this.email),
        address: (address != null ? address.value : this.address),
        city: (city != null ? city.value : this.city),
        state: (state != null ? state.value : this.state),
        zipCode: (zipCode != null ? zipCode.value : this.zipCode),
        emergencyContact: (emergencyContact != null
            ? emergencyContact.value
            : this.emergencyContact));
  }
}

@JsonSerializable(explicitToJson: true)
class OwnerInfoDTO {
  const OwnerInfoDTO({
    this.id,
    this.firstName,
    this.lastName,
    this.phone,
    this.email,
    this.address,
    this.city,
    this.state,
    this.zipCode,
    this.emergencyContact,
  });

  factory OwnerInfoDTO.fromJson(Map<String, dynamic> json) =>
      _$OwnerInfoDTOFromJson(json);

  static const toJsonFactory = _$OwnerInfoDTOToJson;
  Map<String, dynamic> toJson() => _$OwnerInfoDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'email')
  final String? email;
  @JsonKey(name: 'address')
  final String? address;
  @JsonKey(name: 'city')
  final String? city;
  @JsonKey(name: 'state')
  final String? state;
  @JsonKey(name: 'zipCode')
  final String? zipCode;
  @JsonKey(name: 'emergencyContact')
  final String? emergencyContact;
  static const fromJsonFactory = _$OwnerInfoDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is OwnerInfoDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.email, email) ||
                const DeepCollectionEquality().equals(other.email, email)) &&
            (identical(other.address, address) ||
                const DeepCollectionEquality()
                    .equals(other.address, address)) &&
            (identical(other.city, city) ||
                const DeepCollectionEquality().equals(other.city, city)) &&
            (identical(other.state, state) ||
                const DeepCollectionEquality().equals(other.state, state)) &&
            (identical(other.zipCode, zipCode) ||
                const DeepCollectionEquality()
                    .equals(other.zipCode, zipCode)) &&
            (identical(other.emergencyContact, emergencyContact) ||
                const DeepCollectionEquality()
                    .equals(other.emergencyContact, emergencyContact)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(email) ^
      const DeepCollectionEquality().hash(address) ^
      const DeepCollectionEquality().hash(city) ^
      const DeepCollectionEquality().hash(state) ^
      const DeepCollectionEquality().hash(zipCode) ^
      const DeepCollectionEquality().hash(emergencyContact) ^
      runtimeType.hashCode;
}

extension $OwnerInfoDTOExtension on OwnerInfoDTO {
  OwnerInfoDTO copyWith(
      {int? id,
      String? firstName,
      String? lastName,
      String? phone,
      String? email,
      String? address,
      String? city,
      String? state,
      String? zipCode,
      String? emergencyContact}) {
    return OwnerInfoDTO(
        id: id ?? this.id,
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        address: address ?? this.address,
        city: city ?? this.city,
        state: state ?? this.state,
        zipCode: zipCode ?? this.zipCode,
        emergencyContact: emergencyContact ?? this.emergencyContact);
  }

  OwnerInfoDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? phone,
      Wrapped<String?>? email,
      Wrapped<String?>? address,
      Wrapped<String?>? city,
      Wrapped<String?>? state,
      Wrapped<String?>? zipCode,
      Wrapped<String?>? emergencyContact}) {
    return OwnerInfoDTO(
        id: (id != null ? id.value : this.id),
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        phone: (phone != null ? phone.value : this.phone),
        email: (email != null ? email.value : this.email),
        address: (address != null ? address.value : this.address),
        city: (city != null ? city.value : this.city),
        state: (state != null ? state.value : this.state),
        zipCode: (zipCode != null ? zipCode.value : this.zipCode),
        emergencyContact: (emergencyContact != null
            ? emergencyContact.value
            : this.emergencyContact));
  }
}

@JsonSerializable(explicitToJson: true)
class PetDTO {
  const PetDTO({
    this.name,
    this.species,
    this.breed,
    this.gender,
    this.dateOfBirth,
    this.weight,
    this.color,
    this.microChipId,
    this.medicalHistory,
  });

  factory PetDTO.fromJson(Map<String, dynamic> json) => _$PetDTOFromJson(json);

  static const toJsonFactory = _$PetDTOToJson;
  Map<String, dynamic> toJson() => _$PetDTOToJson(this);

  @JsonKey(name: 'name')
  final String? name;
  @JsonKey(
    name: 'species',
    toJson: petSpeciesNullableToJson,
    fromJson: petSpeciesNullableFromJson,
  )
  final enums.PetSpecies? species;
  @JsonKey(name: 'breed')
  final String? breed;
  @JsonKey(name: 'gender')
  final String? gender;
  @JsonKey(name: 'dateOfBirth')
  final DateTime? dateOfBirth;
  @JsonKey(name: 'weight')
  final double? weight;
  @JsonKey(name: 'color')
  final String? color;
  @JsonKey(name: 'microChipId')
  final String? microChipId;
  @JsonKey(name: 'medicalHistory')
  final String? medicalHistory;
  static const fromJsonFactory = _$PetDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is PetDTO &&
            (identical(other.name, name) ||
                const DeepCollectionEquality().equals(other.name, name)) &&
            (identical(other.species, species) ||
                const DeepCollectionEquality()
                    .equals(other.species, species)) &&
            (identical(other.breed, breed) ||
                const DeepCollectionEquality().equals(other.breed, breed)) &&
            (identical(other.gender, gender) ||
                const DeepCollectionEquality().equals(other.gender, gender)) &&
            (identical(other.dateOfBirth, dateOfBirth) ||
                const DeepCollectionEquality()
                    .equals(other.dateOfBirth, dateOfBirth)) &&
            (identical(other.weight, weight) ||
                const DeepCollectionEquality().equals(other.weight, weight)) &&
            (identical(other.color, color) ||
                const DeepCollectionEquality().equals(other.color, color)) &&
            (identical(other.microChipId, microChipId) ||
                const DeepCollectionEquality()
                    .equals(other.microChipId, microChipId)) &&
            (identical(other.medicalHistory, medicalHistory) ||
                const DeepCollectionEquality()
                    .equals(other.medicalHistory, medicalHistory)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(name) ^
      const DeepCollectionEquality().hash(species) ^
      const DeepCollectionEquality().hash(breed) ^
      const DeepCollectionEquality().hash(gender) ^
      const DeepCollectionEquality().hash(dateOfBirth) ^
      const DeepCollectionEquality().hash(weight) ^
      const DeepCollectionEquality().hash(color) ^
      const DeepCollectionEquality().hash(microChipId) ^
      const DeepCollectionEquality().hash(medicalHistory) ^
      runtimeType.hashCode;
}

extension $PetDTOExtension on PetDTO {
  PetDTO copyWith(
      {String? name,
      enums.PetSpecies? species,
      String? breed,
      String? gender,
      DateTime? dateOfBirth,
      double? weight,
      String? color,
      String? microChipId,
      String? medicalHistory}) {
    return PetDTO(
        name: name ?? this.name,
        species: species ?? this.species,
        breed: breed ?? this.breed,
        gender: gender ?? this.gender,
        dateOfBirth: dateOfBirth ?? this.dateOfBirth,
        weight: weight ?? this.weight,
        color: color ?? this.color,
        microChipId: microChipId ?? this.microChipId,
        medicalHistory: medicalHistory ?? this.medicalHistory);
  }

  PetDTO copyWithWrapped(
      {Wrapped<String?>? name,
      Wrapped<enums.PetSpecies?>? species,
      Wrapped<String?>? breed,
      Wrapped<String?>? gender,
      Wrapped<DateTime?>? dateOfBirth,
      Wrapped<double?>? weight,
      Wrapped<String?>? color,
      Wrapped<String?>? microChipId,
      Wrapped<String?>? medicalHistory}) {
    return PetDTO(
        name: (name != null ? name.value : this.name),
        species: (species != null ? species.value : this.species),
        breed: (breed != null ? breed.value : this.breed),
        gender: (gender != null ? gender.value : this.gender),
        dateOfBirth:
            (dateOfBirth != null ? dateOfBirth.value : this.dateOfBirth),
        weight: (weight != null ? weight.value : this.weight),
        color: (color != null ? color.value : this.color),
        microChipId:
            (microChipId != null ? microChipId.value : this.microChipId),
        medicalHistory: (medicalHistory != null
            ? medicalHistory.value
            : this.medicalHistory));
  }
}

@JsonSerializable(explicitToJson: true)
class PetDetailsDTO {
  const PetDetailsDTO({
    this.id,
    this.name,
    this.species,
    this.breed,
    this.gender,
    this.dateOfBirth,
    this.weight,
    this.color,
    this.microChipId,
    this.medicalHistory,
  });

  factory PetDetailsDTO.fromJson(Map<String, dynamic> json) =>
      _$PetDetailsDTOFromJson(json);

  static const toJsonFactory = _$PetDetailsDTOToJson;
  Map<String, dynamic> toJson() => _$PetDetailsDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'name')
  final String? name;
  @JsonKey(
    name: 'species',
    toJson: petSpeciesNullableToJson,
    fromJson: petSpeciesNullableFromJson,
  )
  final enums.PetSpecies? species;
  @JsonKey(name: 'breed')
  final String? breed;
  @JsonKey(name: 'gender')
  final String? gender;
  @JsonKey(name: 'dateOfBirth')
  final DateTime? dateOfBirth;
  @JsonKey(name: 'weight')
  final double? weight;
  @JsonKey(name: 'color')
  final String? color;
  @JsonKey(name: 'microChipId')
  final String? microChipId;
  @JsonKey(name: 'medicalHistory')
  final String? medicalHistory;
  static const fromJsonFactory = _$PetDetailsDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is PetDetailsDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.name, name) ||
                const DeepCollectionEquality().equals(other.name, name)) &&
            (identical(other.species, species) ||
                const DeepCollectionEquality()
                    .equals(other.species, species)) &&
            (identical(other.breed, breed) ||
                const DeepCollectionEquality().equals(other.breed, breed)) &&
            (identical(other.gender, gender) ||
                const DeepCollectionEquality().equals(other.gender, gender)) &&
            (identical(other.dateOfBirth, dateOfBirth) ||
                const DeepCollectionEquality()
                    .equals(other.dateOfBirth, dateOfBirth)) &&
            (identical(other.weight, weight) ||
                const DeepCollectionEquality().equals(other.weight, weight)) &&
            (identical(other.color, color) ||
                const DeepCollectionEquality().equals(other.color, color)) &&
            (identical(other.microChipId, microChipId) ||
                const DeepCollectionEquality()
                    .equals(other.microChipId, microChipId)) &&
            (identical(other.medicalHistory, medicalHistory) ||
                const DeepCollectionEquality()
                    .equals(other.medicalHistory, medicalHistory)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(name) ^
      const DeepCollectionEquality().hash(species) ^
      const DeepCollectionEquality().hash(breed) ^
      const DeepCollectionEquality().hash(gender) ^
      const DeepCollectionEquality().hash(dateOfBirth) ^
      const DeepCollectionEquality().hash(weight) ^
      const DeepCollectionEquality().hash(color) ^
      const DeepCollectionEquality().hash(microChipId) ^
      const DeepCollectionEquality().hash(medicalHistory) ^
      runtimeType.hashCode;
}

extension $PetDetailsDTOExtension on PetDetailsDTO {
  PetDetailsDTO copyWith(
      {int? id,
      String? name,
      enums.PetSpecies? species,
      String? breed,
      String? gender,
      DateTime? dateOfBirth,
      double? weight,
      String? color,
      String? microChipId,
      String? medicalHistory}) {
    return PetDetailsDTO(
        id: id ?? this.id,
        name: name ?? this.name,
        species: species ?? this.species,
        breed: breed ?? this.breed,
        gender: gender ?? this.gender,
        dateOfBirth: dateOfBirth ?? this.dateOfBirth,
        weight: weight ?? this.weight,
        color: color ?? this.color,
        microChipId: microChipId ?? this.microChipId,
        medicalHistory: medicalHistory ?? this.medicalHistory);
  }

  PetDetailsDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? name,
      Wrapped<enums.PetSpecies?>? species,
      Wrapped<String?>? breed,
      Wrapped<String?>? gender,
      Wrapped<DateTime?>? dateOfBirth,
      Wrapped<double?>? weight,
      Wrapped<String?>? color,
      Wrapped<String?>? microChipId,
      Wrapped<String?>? medicalHistory}) {
    return PetDetailsDTO(
        id: (id != null ? id.value : this.id),
        name: (name != null ? name.value : this.name),
        species: (species != null ? species.value : this.species),
        breed: (breed != null ? breed.value : this.breed),
        gender: (gender != null ? gender.value : this.gender),
        dateOfBirth:
            (dateOfBirth != null ? dateOfBirth.value : this.dateOfBirth),
        weight: (weight != null ? weight.value : this.weight),
        color: (color != null ? color.value : this.color),
        microChipId:
            (microChipId != null ? microChipId.value : this.microChipId),
        medicalHistory: (medicalHistory != null
            ? medicalHistory.value
            : this.medicalHistory));
  }
}

@JsonSerializable(explicitToJson: true)
class PetOwnerDetailsDTO {
  const PetOwnerDetailsDTO({
    this.id,
    this.firstName,
    this.lastName,
    this.phone,
    this.email,
    this.address,
    this.city,
    this.state,
    this.zipCode,
    this.emergencyContact,
  });

  factory PetOwnerDetailsDTO.fromJson(Map<String, dynamic> json) =>
      _$PetOwnerDetailsDTOFromJson(json);

  static const toJsonFactory = _$PetOwnerDetailsDTOToJson;
  Map<String, dynamic> toJson() => _$PetOwnerDetailsDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'email')
  final String? email;
  @JsonKey(name: 'address')
  final String? address;
  @JsonKey(name: 'city')
  final String? city;
  @JsonKey(name: 'state')
  final String? state;
  @JsonKey(name: 'zipCode')
  final String? zipCode;
  @JsonKey(name: 'emergencyContact')
  final String? emergencyContact;
  static const fromJsonFactory = _$PetOwnerDetailsDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is PetOwnerDetailsDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.email, email) ||
                const DeepCollectionEquality().equals(other.email, email)) &&
            (identical(other.address, address) ||
                const DeepCollectionEquality()
                    .equals(other.address, address)) &&
            (identical(other.city, city) ||
                const DeepCollectionEquality().equals(other.city, city)) &&
            (identical(other.state, state) ||
                const DeepCollectionEquality().equals(other.state, state)) &&
            (identical(other.zipCode, zipCode) ||
                const DeepCollectionEquality()
                    .equals(other.zipCode, zipCode)) &&
            (identical(other.emergencyContact, emergencyContact) ||
                const DeepCollectionEquality()
                    .equals(other.emergencyContact, emergencyContact)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(email) ^
      const DeepCollectionEquality().hash(address) ^
      const DeepCollectionEquality().hash(city) ^
      const DeepCollectionEquality().hash(state) ^
      const DeepCollectionEquality().hash(zipCode) ^
      const DeepCollectionEquality().hash(emergencyContact) ^
      runtimeType.hashCode;
}

extension $PetOwnerDetailsDTOExtension on PetOwnerDetailsDTO {
  PetOwnerDetailsDTO copyWith(
      {int? id,
      String? firstName,
      String? lastName,
      String? phone,
      String? email,
      String? address,
      String? city,
      String? state,
      String? zipCode,
      String? emergencyContact}) {
    return PetOwnerDetailsDTO(
        id: id ?? this.id,
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        address: address ?? this.address,
        city: city ?? this.city,
        state: state ?? this.state,
        zipCode: zipCode ?? this.zipCode,
        emergencyContact: emergencyContact ?? this.emergencyContact);
  }

  PetOwnerDetailsDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? phone,
      Wrapped<String?>? email,
      Wrapped<String?>? address,
      Wrapped<String?>? city,
      Wrapped<String?>? state,
      Wrapped<String?>? zipCode,
      Wrapped<String?>? emergencyContact}) {
    return PetOwnerDetailsDTO(
        id: (id != null ? id.value : this.id),
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        phone: (phone != null ? phone.value : this.phone),
        email: (email != null ? email.value : this.email),
        address: (address != null ? address.value : this.address),
        city: (city != null ? city.value : this.city),
        state: (state != null ? state.value : this.state),
        zipCode: (zipCode != null ? zipCode.value : this.zipCode),
        emergencyContact: (emergencyContact != null
            ? emergencyContact.value
            : this.emergencyContact));
  }
}

@JsonSerializable(explicitToJson: true)
class PetRecordDTO {
  const PetRecordDTO({
    this.id,
    this.name,
    this.species,
    this.breed,
    this.gender,
    this.dateOfBirth,
    this.weight,
    this.color,
    this.microChipId,
    this.medicalHistory,
    this.firstName,
    this.lastName,
    this.ownerPhone,
    this.lastMedicalRecord,
    this.lastAppointmentDate,
    this.updatedAt,
    this.createdAt,
  });

  factory PetRecordDTO.fromJson(Map<String, dynamic> json) =>
      _$PetRecordDTOFromJson(json);

  static const toJsonFactory = _$PetRecordDTOToJson;
  Map<String, dynamic> toJson() => _$PetRecordDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'name')
  final String? name;
  @JsonKey(
    name: 'species',
    toJson: petSpeciesNullableToJson,
    fromJson: petSpeciesNullableFromJson,
  )
  final enums.PetSpecies? species;
  @JsonKey(name: 'breed')
  final String? breed;
  @JsonKey(name: 'gender')
  final String? gender;
  @JsonKey(name: 'dateOfBirth')
  final DateTime? dateOfBirth;
  @JsonKey(name: 'weight')
  final double? weight;
  @JsonKey(name: 'color')
  final String? color;
  @JsonKey(name: 'microChipId')
  final String? microChipId;
  @JsonKey(name: 'medicalHistory')
  final String? medicalHistory;
  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'ownerPhone')
  final String? ownerPhone;
  @JsonKey(name: 'lastMedicalRecord')
  final int? lastMedicalRecord;
  @JsonKey(name: 'lastAppointmentDate')
  final DateTime? lastAppointmentDate;
  @JsonKey(name: 'updatedAt')
  final DateTime? updatedAt;
  @JsonKey(name: 'createdAt')
  final DateTime? createdAt;
  static const fromJsonFactory = _$PetRecordDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is PetRecordDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.name, name) ||
                const DeepCollectionEquality().equals(other.name, name)) &&
            (identical(other.species, species) ||
                const DeepCollectionEquality()
                    .equals(other.species, species)) &&
            (identical(other.breed, breed) ||
                const DeepCollectionEquality().equals(other.breed, breed)) &&
            (identical(other.gender, gender) ||
                const DeepCollectionEquality().equals(other.gender, gender)) &&
            (identical(other.dateOfBirth, dateOfBirth) ||
                const DeepCollectionEquality()
                    .equals(other.dateOfBirth, dateOfBirth)) &&
            (identical(other.weight, weight) ||
                const DeepCollectionEquality().equals(other.weight, weight)) &&
            (identical(other.color, color) ||
                const DeepCollectionEquality().equals(other.color, color)) &&
            (identical(other.microChipId, microChipId) ||
                const DeepCollectionEquality()
                    .equals(other.microChipId, microChipId)) &&
            (identical(other.medicalHistory, medicalHistory) ||
                const DeepCollectionEquality()
                    .equals(other.medicalHistory, medicalHistory)) &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.ownerPhone, ownerPhone) ||
                const DeepCollectionEquality()
                    .equals(other.ownerPhone, ownerPhone)) &&
            (identical(other.lastMedicalRecord, lastMedicalRecord) ||
                const DeepCollectionEquality()
                    .equals(other.lastMedicalRecord, lastMedicalRecord)) &&
            (identical(other.lastAppointmentDate, lastAppointmentDate) ||
                const DeepCollectionEquality()
                    .equals(other.lastAppointmentDate, lastAppointmentDate)) &&
            (identical(other.updatedAt, updatedAt) ||
                const DeepCollectionEquality()
                    .equals(other.updatedAt, updatedAt)) &&
            (identical(other.createdAt, createdAt) ||
                const DeepCollectionEquality()
                    .equals(other.createdAt, createdAt)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(name) ^
      const DeepCollectionEquality().hash(species) ^
      const DeepCollectionEquality().hash(breed) ^
      const DeepCollectionEquality().hash(gender) ^
      const DeepCollectionEquality().hash(dateOfBirth) ^
      const DeepCollectionEquality().hash(weight) ^
      const DeepCollectionEquality().hash(color) ^
      const DeepCollectionEquality().hash(microChipId) ^
      const DeepCollectionEquality().hash(medicalHistory) ^
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(ownerPhone) ^
      const DeepCollectionEquality().hash(lastMedicalRecord) ^
      const DeepCollectionEquality().hash(lastAppointmentDate) ^
      const DeepCollectionEquality().hash(updatedAt) ^
      const DeepCollectionEquality().hash(createdAt) ^
      runtimeType.hashCode;
}

extension $PetRecordDTOExtension on PetRecordDTO {
  PetRecordDTO copyWith(
      {int? id,
      String? name,
      enums.PetSpecies? species,
      String? breed,
      String? gender,
      DateTime? dateOfBirth,
      double? weight,
      String? color,
      String? microChipId,
      String? medicalHistory,
      String? firstName,
      String? lastName,
      String? ownerPhone,
      int? lastMedicalRecord,
      DateTime? lastAppointmentDate,
      DateTime? updatedAt,
      DateTime? createdAt}) {
    return PetRecordDTO(
        id: id ?? this.id,
        name: name ?? this.name,
        species: species ?? this.species,
        breed: breed ?? this.breed,
        gender: gender ?? this.gender,
        dateOfBirth: dateOfBirth ?? this.dateOfBirth,
        weight: weight ?? this.weight,
        color: color ?? this.color,
        microChipId: microChipId ?? this.microChipId,
        medicalHistory: medicalHistory ?? this.medicalHistory,
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        ownerPhone: ownerPhone ?? this.ownerPhone,
        lastMedicalRecord: lastMedicalRecord ?? this.lastMedicalRecord,
        lastAppointmentDate: lastAppointmentDate ?? this.lastAppointmentDate,
        updatedAt: updatedAt ?? this.updatedAt,
        createdAt: createdAt ?? this.createdAt);
  }

  PetRecordDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? name,
      Wrapped<enums.PetSpecies?>? species,
      Wrapped<String?>? breed,
      Wrapped<String?>? gender,
      Wrapped<DateTime?>? dateOfBirth,
      Wrapped<double?>? weight,
      Wrapped<String?>? color,
      Wrapped<String?>? microChipId,
      Wrapped<String?>? medicalHistory,
      Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? ownerPhone,
      Wrapped<int?>? lastMedicalRecord,
      Wrapped<DateTime?>? lastAppointmentDate,
      Wrapped<DateTime?>? updatedAt,
      Wrapped<DateTime?>? createdAt}) {
    return PetRecordDTO(
        id: (id != null ? id.value : this.id),
        name: (name != null ? name.value : this.name),
        species: (species != null ? species.value : this.species),
        breed: (breed != null ? breed.value : this.breed),
        gender: (gender != null ? gender.value : this.gender),
        dateOfBirth:
            (dateOfBirth != null ? dateOfBirth.value : this.dateOfBirth),
        weight: (weight != null ? weight.value : this.weight),
        color: (color != null ? color.value : this.color),
        microChipId:
            (microChipId != null ? microChipId.value : this.microChipId),
        medicalHistory: (medicalHistory != null
            ? medicalHistory.value
            : this.medicalHistory),
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        ownerPhone: (ownerPhone != null ? ownerPhone.value : this.ownerPhone),
        lastMedicalRecord: (lastMedicalRecord != null
            ? lastMedicalRecord.value
            : this.lastMedicalRecord),
        lastAppointmentDate: (lastAppointmentDate != null
            ? lastAppointmentDate.value
            : this.lastAppointmentDate),
        updatedAt: (updatedAt != null ? updatedAt.value : this.updatedAt),
        createdAt: (createdAt != null ? createdAt.value : this.createdAt));
  }
}

@JsonSerializable(explicitToJson: true)
class PetRecordDTOPaginationResult {
  const PetRecordDTOPaginationResult({
    this.data,
    this.totalRowCount,
  });

  factory PetRecordDTOPaginationResult.fromJson(Map<String, dynamic> json) =>
      _$PetRecordDTOPaginationResultFromJson(json);

  static const toJsonFactory = _$PetRecordDTOPaginationResultToJson;
  Map<String, dynamic> toJson() => _$PetRecordDTOPaginationResultToJson(this);

  @JsonKey(name: 'data', defaultValue: <PetRecordDTO>[])
  final List<PetRecordDTO>? data;
  @JsonKey(name: 'totalRowCount')
  final int? totalRowCount;
  static const fromJsonFactory = _$PetRecordDTOPaginationResultFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is PetRecordDTOPaginationResult &&
            (identical(other.data, data) ||
                const DeepCollectionEquality().equals(other.data, data)) &&
            (identical(other.totalRowCount, totalRowCount) ||
                const DeepCollectionEquality()
                    .equals(other.totalRowCount, totalRowCount)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(data) ^
      const DeepCollectionEquality().hash(totalRowCount) ^
      runtimeType.hashCode;
}

extension $PetRecordDTOPaginationResultExtension
    on PetRecordDTOPaginationResult {
  PetRecordDTOPaginationResult copyWith(
      {List<PetRecordDTO>? data, int? totalRowCount}) {
    return PetRecordDTOPaginationResult(
        data: data ?? this.data,
        totalRowCount: totalRowCount ?? this.totalRowCount);
  }

  PetRecordDTOPaginationResult copyWithWrapped(
      {Wrapped<List<PetRecordDTO>?>? data, Wrapped<int?>? totalRowCount}) {
    return PetRecordDTOPaginationResult(
        data: (data != null ? data.value : this.data),
        totalRowCount:
            (totalRowCount != null ? totalRowCount.value : this.totalRowCount));
  }
}

@JsonSerializable(explicitToJson: true)
class PrescriptionDTO {
  const PrescriptionDTO({
    this.id,
    this.dateIssued,
    this.medicationName,
    this.dosage,
    this.duration,
    this.notes,
  });

  factory PrescriptionDTO.fromJson(Map<String, dynamic> json) =>
      _$PrescriptionDTOFromJson(json);

  static const toJsonFactory = _$PrescriptionDTOToJson;
  Map<String, dynamic> toJson() => _$PrescriptionDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'dateIssued')
  final DateTime? dateIssued;
  @JsonKey(name: 'medicationName')
  final String? medicationName;
  @JsonKey(name: 'dosage')
  final String? dosage;
  @JsonKey(name: 'duration')
  final String? duration;
  @JsonKey(name: 'notes')
  final String? notes;
  static const fromJsonFactory = _$PrescriptionDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is PrescriptionDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.dateIssued, dateIssued) ||
                const DeepCollectionEquality()
                    .equals(other.dateIssued, dateIssued)) &&
            (identical(other.medicationName, medicationName) ||
                const DeepCollectionEquality()
                    .equals(other.medicationName, medicationName)) &&
            (identical(other.dosage, dosage) ||
                const DeepCollectionEquality().equals(other.dosage, dosage)) &&
            (identical(other.duration, duration) ||
                const DeepCollectionEquality()
                    .equals(other.duration, duration)) &&
            (identical(other.notes, notes) ||
                const DeepCollectionEquality().equals(other.notes, notes)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(dateIssued) ^
      const DeepCollectionEquality().hash(medicationName) ^
      const DeepCollectionEquality().hash(dosage) ^
      const DeepCollectionEquality().hash(duration) ^
      const DeepCollectionEquality().hash(notes) ^
      runtimeType.hashCode;
}

extension $PrescriptionDTOExtension on PrescriptionDTO {
  PrescriptionDTO copyWith(
      {int? id,
      DateTime? dateIssued,
      String? medicationName,
      String? dosage,
      String? duration,
      String? notes}) {
    return PrescriptionDTO(
        id: id ?? this.id,
        dateIssued: dateIssued ?? this.dateIssued,
        medicationName: medicationName ?? this.medicationName,
        dosage: dosage ?? this.dosage,
        duration: duration ?? this.duration,
        notes: notes ?? this.notes);
  }

  PrescriptionDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<DateTime?>? dateIssued,
      Wrapped<String?>? medicationName,
      Wrapped<String?>? dosage,
      Wrapped<String?>? duration,
      Wrapped<String?>? notes}) {
    return PrescriptionDTO(
        id: (id != null ? id.value : this.id),
        dateIssued: (dateIssued != null ? dateIssued.value : this.dateIssued),
        medicationName: (medicationName != null
            ? medicationName.value
            : this.medicationName),
        dosage: (dosage != null ? dosage.value : this.dosage),
        duration: (duration != null ? duration.value : this.duration),
        notes: (notes != null ? notes.value : this.notes));
  }
}

@JsonSerializable(explicitToJson: true)
class ProblemDetails {
  const ProblemDetails({
    this.type,
    this.title,
    this.status,
    this.detail,
    this.instance,
  });

  factory ProblemDetails.fromJson(Map<String, dynamic> json) =>
      _$ProblemDetailsFromJson(json);

  static const toJsonFactory = _$ProblemDetailsToJson;
  Map<String, dynamic> toJson() => _$ProblemDetailsToJson(this);

  @JsonKey(name: 'type')
  final String? type;
  @JsonKey(name: 'title')
  final String? title;
  @JsonKey(name: 'status')
  final int? status;
  @JsonKey(name: 'detail')
  final String? detail;
  @JsonKey(name: 'instance')
  final String? instance;
  static const fromJsonFactory = _$ProblemDetailsFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is ProblemDetails &&
            (identical(other.type, type) ||
                const DeepCollectionEquality().equals(other.type, type)) &&
            (identical(other.title, title) ||
                const DeepCollectionEquality().equals(other.title, title)) &&
            (identical(other.status, status) ||
                const DeepCollectionEquality().equals(other.status, status)) &&
            (identical(other.detail, detail) ||
                const DeepCollectionEquality().equals(other.detail, detail)) &&
            (identical(other.instance, instance) ||
                const DeepCollectionEquality()
                    .equals(other.instance, instance)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(type) ^
      const DeepCollectionEquality().hash(title) ^
      const DeepCollectionEquality().hash(status) ^
      const DeepCollectionEquality().hash(detail) ^
      const DeepCollectionEquality().hash(instance) ^
      runtimeType.hashCode;
}

extension $ProblemDetailsExtension on ProblemDetails {
  ProblemDetails copyWith(
      {String? type,
      String? title,
      int? status,
      String? detail,
      String? instance}) {
    return ProblemDetails(
        type: type ?? this.type,
        title: title ?? this.title,
        status: status ?? this.status,
        detail: detail ?? this.detail,
        instance: instance ?? this.instance);
  }

  ProblemDetails copyWithWrapped(
      {Wrapped<String?>? type,
      Wrapped<String?>? title,
      Wrapped<int?>? status,
      Wrapped<String?>? detail,
      Wrapped<String?>? instance}) {
    return ProblemDetails(
        type: (type != null ? type.value : this.type),
        title: (title != null ? title.value : this.title),
        status: (status != null ? status.value : this.status),
        detail: (detail != null ? detail.value : this.detail),
        instance: (instance != null ? instance.value : this.instance));
  }
}

@JsonSerializable(explicitToJson: true)
class UpcomingAppointmentDTO {
  const UpcomingAppointmentDTO({
    this.id,
    this.species,
    this.apptDate,
    this.ownerName,
    this.phone,
    this.reason,
  });

  factory UpcomingAppointmentDTO.fromJson(Map<String, dynamic> json) =>
      _$UpcomingAppointmentDTOFromJson(json);

  static const toJsonFactory = _$UpcomingAppointmentDTOToJson;
  Map<String, dynamic> toJson() => _$UpcomingAppointmentDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(
    name: 'species',
    toJson: petSpeciesNullableToJson,
    fromJson: petSpeciesNullableFromJson,
  )
  final enums.PetSpecies? species;
  @JsonKey(name: 'apptDate')
  final DateTime? apptDate;
  @JsonKey(name: 'ownerName')
  final String? ownerName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'reason')
  final String? reason;
  static const fromJsonFactory = _$UpcomingAppointmentDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is UpcomingAppointmentDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.species, species) ||
                const DeepCollectionEquality()
                    .equals(other.species, species)) &&
            (identical(other.apptDate, apptDate) ||
                const DeepCollectionEquality()
                    .equals(other.apptDate, apptDate)) &&
            (identical(other.ownerName, ownerName) ||
                const DeepCollectionEquality()
                    .equals(other.ownerName, ownerName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.reason, reason) ||
                const DeepCollectionEquality().equals(other.reason, reason)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(species) ^
      const DeepCollectionEquality().hash(apptDate) ^
      const DeepCollectionEquality().hash(ownerName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(reason) ^
      runtimeType.hashCode;
}

extension $UpcomingAppointmentDTOExtension on UpcomingAppointmentDTO {
  UpcomingAppointmentDTO copyWith(
      {int? id,
      enums.PetSpecies? species,
      DateTime? apptDate,
      String? ownerName,
      String? phone,
      String? reason}) {
    return UpcomingAppointmentDTO(
        id: id ?? this.id,
        species: species ?? this.species,
        apptDate: apptDate ?? this.apptDate,
        ownerName: ownerName ?? this.ownerName,
        phone: phone ?? this.phone,
        reason: reason ?? this.reason);
  }

  UpcomingAppointmentDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<enums.PetSpecies?>? species,
      Wrapped<DateTime?>? apptDate,
      Wrapped<String?>? ownerName,
      Wrapped<String?>? phone,
      Wrapped<String?>? reason}) {
    return UpcomingAppointmentDTO(
        id: (id != null ? id.value : this.id),
        species: (species != null ? species.value : this.species),
        apptDate: (apptDate != null ? apptDate.value : this.apptDate),
        ownerName: (ownerName != null ? ownerName.value : this.ownerName),
        phone: (phone != null ? phone.value : this.phone),
        reason: (reason != null ? reason.value : this.reason));
  }
}

@JsonSerializable(explicitToJson: true)
class UpdateAppointmentCommand {
  const UpdateAppointmentCommand();

  factory UpdateAppointmentCommand.fromJson(Map<String, dynamic> json) =>
      _$UpdateAppointmentCommandFromJson(json);

  static const toJsonFactory = _$UpdateAppointmentCommandToJson;
  Map<String, dynamic> toJson() => _$UpdateAppointmentCommandToJson(this);

  static const fromJsonFactory = _$UpdateAppointmentCommandFromJson;

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode => runtimeType.hashCode;
}

@JsonSerializable(explicitToJson: true)
class UpdateVeterinarianCommand {
  const UpdateVeterinarianCommand({
    this.id,
    this.firstName,
    this.lastName,
    this.phone,
    this.email,
    this.specialization,
    this.yearsOfExperience,
  });

  factory UpdateVeterinarianCommand.fromJson(Map<String, dynamic> json) =>
      _$UpdateVeterinarianCommandFromJson(json);

  static const toJsonFactory = _$UpdateVeterinarianCommandToJson;
  Map<String, dynamic> toJson() => _$UpdateVeterinarianCommandToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'email')
  final String? email;
  @JsonKey(name: 'specialization')
  final String? specialization;
  @JsonKey(name: 'yearsOfExperience')
  final int? yearsOfExperience;
  static const fromJsonFactory = _$UpdateVeterinarianCommandFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is UpdateVeterinarianCommand &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.email, email) ||
                const DeepCollectionEquality().equals(other.email, email)) &&
            (identical(other.specialization, specialization) ||
                const DeepCollectionEquality()
                    .equals(other.specialization, specialization)) &&
            (identical(other.yearsOfExperience, yearsOfExperience) ||
                const DeepCollectionEquality()
                    .equals(other.yearsOfExperience, yearsOfExperience)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(email) ^
      const DeepCollectionEquality().hash(specialization) ^
      const DeepCollectionEquality().hash(yearsOfExperience) ^
      runtimeType.hashCode;
}

extension $UpdateVeterinarianCommandExtension on UpdateVeterinarianCommand {
  UpdateVeterinarianCommand copyWith(
      {int? id,
      String? firstName,
      String? lastName,
      String? phone,
      String? email,
      String? specialization,
      int? yearsOfExperience}) {
    return UpdateVeterinarianCommand(
        id: id ?? this.id,
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        specialization: specialization ?? this.specialization,
        yearsOfExperience: yearsOfExperience ?? this.yearsOfExperience);
  }

  UpdateVeterinarianCommand copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? phone,
      Wrapped<String?>? email,
      Wrapped<String?>? specialization,
      Wrapped<int?>? yearsOfExperience}) {
    return UpdateVeterinarianCommand(
        id: (id != null ? id.value : this.id),
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        phone: (phone != null ? phone.value : this.phone),
        email: (email != null ? email.value : this.email),
        specialization: (specialization != null
            ? specialization.value
            : this.specialization),
        yearsOfExperience: (yearsOfExperience != null
            ? yearsOfExperience.value
            : this.yearsOfExperience));
  }
}

@JsonSerializable(explicitToJson: true)
class VetDetailsDTO {
  const VetDetailsDTO({
    this.id,
    this.firstName,
    this.lastName,
    this.phone,
    this.email,
    this.specialization,
    this.yearsOfExperience,
  });

  factory VetDetailsDTO.fromJson(Map<String, dynamic> json) =>
      _$VetDetailsDTOFromJson(json);

  static const toJsonFactory = _$VetDetailsDTOToJson;
  Map<String, dynamic> toJson() => _$VetDetailsDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'email')
  final String? email;
  @JsonKey(name: 'specialization')
  final String? specialization;
  @JsonKey(name: 'yearsOfExperience')
  final int? yearsOfExperience;
  static const fromJsonFactory = _$VetDetailsDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is VetDetailsDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.email, email) ||
                const DeepCollectionEquality().equals(other.email, email)) &&
            (identical(other.specialization, specialization) ||
                const DeepCollectionEquality()
                    .equals(other.specialization, specialization)) &&
            (identical(other.yearsOfExperience, yearsOfExperience) ||
                const DeepCollectionEquality()
                    .equals(other.yearsOfExperience, yearsOfExperience)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(email) ^
      const DeepCollectionEquality().hash(specialization) ^
      const DeepCollectionEquality().hash(yearsOfExperience) ^
      runtimeType.hashCode;
}

extension $VetDetailsDTOExtension on VetDetailsDTO {
  VetDetailsDTO copyWith(
      {int? id,
      String? firstName,
      String? lastName,
      String? phone,
      String? email,
      String? specialization,
      int? yearsOfExperience}) {
    return VetDetailsDTO(
        id: id ?? this.id,
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        specialization: specialization ?? this.specialization,
        yearsOfExperience: yearsOfExperience ?? this.yearsOfExperience);
  }

  VetDetailsDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? phone,
      Wrapped<String?>? email,
      Wrapped<String?>? specialization,
      Wrapped<int?>? yearsOfExperience}) {
    return VetDetailsDTO(
        id: (id != null ? id.value : this.id),
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        phone: (phone != null ? phone.value : this.phone),
        email: (email != null ? email.value : this.email),
        specialization: (specialization != null
            ? specialization.value
            : this.specialization),
        yearsOfExperience: (yearsOfExperience != null
            ? yearsOfExperience.value
            : this.yearsOfExperience));
  }
}

@JsonSerializable(explicitToJson: true)
class VeterinarianBookedDatesDTO {
  const VeterinarianBookedDatesDTO({
    this.id,
    this.fullName,
    this.appointmentDates,
  });

  factory VeterinarianBookedDatesDTO.fromJson(Map<String, dynamic> json) =>
      _$VeterinarianBookedDatesDTOFromJson(json);

  static const toJsonFactory = _$VeterinarianBookedDatesDTOToJson;
  Map<String, dynamic> toJson() => _$VeterinarianBookedDatesDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'fullName')
  final String? fullName;
  @JsonKey(name: 'appointmentDates', defaultValue: <DateTime>[])
  final List<DateTime>? appointmentDates;
  static const fromJsonFactory = _$VeterinarianBookedDatesDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is VeterinarianBookedDatesDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.fullName, fullName) ||
                const DeepCollectionEquality()
                    .equals(other.fullName, fullName)) &&
            (identical(other.appointmentDates, appointmentDates) ||
                const DeepCollectionEquality()
                    .equals(other.appointmentDates, appointmentDates)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(fullName) ^
      const DeepCollectionEquality().hash(appointmentDates) ^
      runtimeType.hashCode;
}

extension $VeterinarianBookedDatesDTOExtension on VeterinarianBookedDatesDTO {
  VeterinarianBookedDatesDTO copyWith(
      {int? id, String? fullName, List<DateTime>? appointmentDates}) {
    return VeterinarianBookedDatesDTO(
        id: id ?? this.id,
        fullName: fullName ?? this.fullName,
        appointmentDates: appointmentDates ?? this.appointmentDates);
  }

  VeterinarianBookedDatesDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? fullName,
      Wrapped<List<DateTime>?>? appointmentDates}) {
    return VeterinarianBookedDatesDTO(
        id: (id != null ? id.value : this.id),
        fullName: (fullName != null ? fullName.value : this.fullName),
        appointmentDates: (appointmentDates != null
            ? appointmentDates.value
            : this.appointmentDates));
  }
}

@JsonSerializable(explicitToJson: true)
class VeterinarianDTO {
  const VeterinarianDTO({
    this.id,
    this.firstName,
    this.lastName,
    this.phone,
    this.email,
    this.specialization,
    this.yearsOfExperience,
    this.currentAppointmentCount,
    this.updatedAt,
    this.createdAt,
  });

  factory VeterinarianDTO.fromJson(Map<String, dynamic> json) =>
      _$VeterinarianDTOFromJson(json);

  static const toJsonFactory = _$VeterinarianDTOToJson;
  Map<String, dynamic> toJson() => _$VeterinarianDTOToJson(this);

  @JsonKey(name: 'id')
  final int? id;
  @JsonKey(name: 'firstName')
  final String? firstName;
  @JsonKey(name: 'lastName')
  final String? lastName;
  @JsonKey(name: 'phone')
  final String? phone;
  @JsonKey(name: 'email')
  final String? email;
  @JsonKey(name: 'specialization')
  final String? specialization;
  @JsonKey(name: 'yearsOfExperience')
  final int? yearsOfExperience;
  @JsonKey(name: 'currentAppointmentCount')
  final int? currentAppointmentCount;
  @JsonKey(name: 'updatedAt')
  final DateTime? updatedAt;
  @JsonKey(name: 'createdAt')
  final DateTime? createdAt;
  static const fromJsonFactory = _$VeterinarianDTOFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is VeterinarianDTO &&
            (identical(other.id, id) ||
                const DeepCollectionEquality().equals(other.id, id)) &&
            (identical(other.firstName, firstName) ||
                const DeepCollectionEquality()
                    .equals(other.firstName, firstName)) &&
            (identical(other.lastName, lastName) ||
                const DeepCollectionEquality()
                    .equals(other.lastName, lastName)) &&
            (identical(other.phone, phone) ||
                const DeepCollectionEquality().equals(other.phone, phone)) &&
            (identical(other.email, email) ||
                const DeepCollectionEquality().equals(other.email, email)) &&
            (identical(other.specialization, specialization) ||
                const DeepCollectionEquality()
                    .equals(other.specialization, specialization)) &&
            (identical(other.yearsOfExperience, yearsOfExperience) ||
                const DeepCollectionEquality()
                    .equals(other.yearsOfExperience, yearsOfExperience)) &&
            (identical(
                    other.currentAppointmentCount, currentAppointmentCount) ||
                const DeepCollectionEquality().equals(
                    other.currentAppointmentCount, currentAppointmentCount)) &&
            (identical(other.updatedAt, updatedAt) ||
                const DeepCollectionEquality()
                    .equals(other.updatedAt, updatedAt)) &&
            (identical(other.createdAt, createdAt) ||
                const DeepCollectionEquality()
                    .equals(other.createdAt, createdAt)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(id) ^
      const DeepCollectionEquality().hash(firstName) ^
      const DeepCollectionEquality().hash(lastName) ^
      const DeepCollectionEquality().hash(phone) ^
      const DeepCollectionEquality().hash(email) ^
      const DeepCollectionEquality().hash(specialization) ^
      const DeepCollectionEquality().hash(yearsOfExperience) ^
      const DeepCollectionEquality().hash(currentAppointmentCount) ^
      const DeepCollectionEquality().hash(updatedAt) ^
      const DeepCollectionEquality().hash(createdAt) ^
      runtimeType.hashCode;
}

extension $VeterinarianDTOExtension on VeterinarianDTO {
  VeterinarianDTO copyWith(
      {int? id,
      String? firstName,
      String? lastName,
      String? phone,
      String? email,
      String? specialization,
      int? yearsOfExperience,
      int? currentAppointmentCount,
      DateTime? updatedAt,
      DateTime? createdAt}) {
    return VeterinarianDTO(
        id: id ?? this.id,
        firstName: firstName ?? this.firstName,
        lastName: lastName ?? this.lastName,
        phone: phone ?? this.phone,
        email: email ?? this.email,
        specialization: specialization ?? this.specialization,
        yearsOfExperience: yearsOfExperience ?? this.yearsOfExperience,
        currentAppointmentCount:
            currentAppointmentCount ?? this.currentAppointmentCount,
        updatedAt: updatedAt ?? this.updatedAt,
        createdAt: createdAt ?? this.createdAt);
  }

  VeterinarianDTO copyWithWrapped(
      {Wrapped<int?>? id,
      Wrapped<String?>? firstName,
      Wrapped<String?>? lastName,
      Wrapped<String?>? phone,
      Wrapped<String?>? email,
      Wrapped<String?>? specialization,
      Wrapped<int?>? yearsOfExperience,
      Wrapped<int?>? currentAppointmentCount,
      Wrapped<DateTime?>? updatedAt,
      Wrapped<DateTime?>? createdAt}) {
    return VeterinarianDTO(
        id: (id != null ? id.value : this.id),
        firstName: (firstName != null ? firstName.value : this.firstName),
        lastName: (lastName != null ? lastName.value : this.lastName),
        phone: (phone != null ? phone.value : this.phone),
        email: (email != null ? email.value : this.email),
        specialization: (specialization != null
            ? specialization.value
            : this.specialization),
        yearsOfExperience: (yearsOfExperience != null
            ? yearsOfExperience.value
            : this.yearsOfExperience),
        currentAppointmentCount: (currentAppointmentCount != null
            ? currentAppointmentCount.value
            : this.currentAppointmentCount),
        updatedAt: (updatedAt != null ? updatedAt.value : this.updatedAt),
        createdAt: (createdAt != null ? createdAt.value : this.createdAt));
  }
}

@JsonSerializable(explicitToJson: true)
class VeterinarianDTOPaginationResult {
  const VeterinarianDTOPaginationResult({
    this.data,
    this.totalRowCount,
  });

  factory VeterinarianDTOPaginationResult.fromJson(Map<String, dynamic> json) =>
      _$VeterinarianDTOPaginationResultFromJson(json);

  static const toJsonFactory = _$VeterinarianDTOPaginationResultToJson;
  Map<String, dynamic> toJson() =>
      _$VeterinarianDTOPaginationResultToJson(this);

  @JsonKey(name: 'data', defaultValue: <VeterinarianDTO>[])
  final List<VeterinarianDTO>? data;
  @JsonKey(name: 'totalRowCount')
  final int? totalRowCount;
  static const fromJsonFactory = _$VeterinarianDTOPaginationResultFromJson;

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other is VeterinarianDTOPaginationResult &&
            (identical(other.data, data) ||
                const DeepCollectionEquality().equals(other.data, data)) &&
            (identical(other.totalRowCount, totalRowCount) ||
                const DeepCollectionEquality()
                    .equals(other.totalRowCount, totalRowCount)));
  }

  @override
  String toString() => jsonEncode(this);

  @override
  int get hashCode =>
      const DeepCollectionEquality().hash(data) ^
      const DeepCollectionEquality().hash(totalRowCount) ^
      runtimeType.hashCode;
}

extension $VeterinarianDTOPaginationResultExtension
    on VeterinarianDTOPaginationResult {
  VeterinarianDTOPaginationResult copyWith(
      {List<VeterinarianDTO>? data, int? totalRowCount}) {
    return VeterinarianDTOPaginationResult(
        data: data ?? this.data,
        totalRowCount: totalRowCount ?? this.totalRowCount);
  }

  VeterinarianDTOPaginationResult copyWithWrapped(
      {Wrapped<List<VeterinarianDTO>?>? data, Wrapped<int?>? totalRowCount}) {
    return VeterinarianDTOPaginationResult(
        data: (data != null ? data.value : this.data),
        totalRowCount:
            (totalRowCount != null ? totalRowCount.value : this.totalRowCount));
  }
}

String? appointmentStatusNullableToJson(
    enums.AppointmentStatus? appointmentStatus) {
  return appointmentStatus?.value;
}

String? appointmentStatusToJson(enums.AppointmentStatus appointmentStatus) {
  return appointmentStatus.value;
}

enums.AppointmentStatus appointmentStatusFromJson(
  Object? appointmentStatus, [
  enums.AppointmentStatus? defaultValue,
]) {
  return enums.AppointmentStatus.values
          .firstWhereOrNull((e) => e.value == appointmentStatus) ??
      defaultValue ??
      enums.AppointmentStatus.swaggerGeneratedUnknown;
}

enums.AppointmentStatus? appointmentStatusNullableFromJson(
  Object? appointmentStatus, [
  enums.AppointmentStatus? defaultValue,
]) {
  if (appointmentStatus == null) {
    return null;
  }
  return enums.AppointmentStatus.values
          .firstWhereOrNull((e) => e.value == appointmentStatus) ??
      defaultValue;
}

String appointmentStatusExplodedListToJson(
    List<enums.AppointmentStatus>? appointmentStatus) {
  return appointmentStatus?.map((e) => e.value!).join(',') ?? '';
}

List<String> appointmentStatusListToJson(
    List<enums.AppointmentStatus>? appointmentStatus) {
  if (appointmentStatus == null) {
    return [];
  }

  return appointmentStatus.map((e) => e.value!).toList();
}

List<enums.AppointmentStatus> appointmentStatusListFromJson(
  List? appointmentStatus, [
  List<enums.AppointmentStatus>? defaultValue,
]) {
  if (appointmentStatus == null) {
    return defaultValue ?? [];
  }

  return appointmentStatus
      .map((e) => appointmentStatusFromJson(e.toString()))
      .toList();
}

List<enums.AppointmentStatus>? appointmentStatusNullableListFromJson(
  List? appointmentStatus, [
  List<enums.AppointmentStatus>? defaultValue,
]) {
  if (appointmentStatus == null) {
    return defaultValue;
  }

  return appointmentStatus
      .map((e) => appointmentStatusFromJson(e.toString()))
      .toList();
}

String? petSpeciesNullableToJson(enums.PetSpecies? petSpecies) {
  return petSpecies?.value;
}

String? petSpeciesToJson(enums.PetSpecies petSpecies) {
  return petSpecies.value;
}

enums.PetSpecies petSpeciesFromJson(
  Object? petSpecies, [
  enums.PetSpecies? defaultValue,
]) {
  return enums.PetSpecies.values
          .firstWhereOrNull((e) => e.value == petSpecies) ??
      defaultValue ??
      enums.PetSpecies.swaggerGeneratedUnknown;
}

enums.PetSpecies? petSpeciesNullableFromJson(
  Object? petSpecies, [
  enums.PetSpecies? defaultValue,
]) {
  if (petSpecies == null) {
    return null;
  }
  return enums.PetSpecies.values
          .firstWhereOrNull((e) => e.value == petSpecies) ??
      defaultValue;
}

String petSpeciesExplodedListToJson(List<enums.PetSpecies>? petSpecies) {
  return petSpecies?.map((e) => e.value!).join(',') ?? '';
}

List<String> petSpeciesListToJson(List<enums.PetSpecies>? petSpecies) {
  if (petSpecies == null) {
    return [];
  }

  return petSpecies.map((e) => e.value!).toList();
}

List<enums.PetSpecies> petSpeciesListFromJson(
  List? petSpecies, [
  List<enums.PetSpecies>? defaultValue,
]) {
  if (petSpecies == null) {
    return defaultValue ?? [];
  }

  return petSpecies.map((e) => petSpeciesFromJson(e.toString())).toList();
}

List<enums.PetSpecies>? petSpeciesNullableListFromJson(
  List? petSpecies, [
  List<enums.PetSpecies>? defaultValue,
]) {
  if (petSpecies == null) {
    return defaultValue;
  }

  return petSpecies.map((e) => petSpeciesFromJson(e.toString())).toList();
}

String? seedServiceTypeNullableToJson(enums.SeedServiceType? seedServiceType) {
  return seedServiceType?.value;
}

String? seedServiceTypeToJson(enums.SeedServiceType seedServiceType) {
  return seedServiceType.value;
}

enums.SeedServiceType seedServiceTypeFromJson(
  Object? seedServiceType, [
  enums.SeedServiceType? defaultValue,
]) {
  return enums.SeedServiceType.values
          .firstWhereOrNull((e) => e.value == seedServiceType) ??
      defaultValue ??
      enums.SeedServiceType.swaggerGeneratedUnknown;
}

enums.SeedServiceType? seedServiceTypeNullableFromJson(
  Object? seedServiceType, [
  enums.SeedServiceType? defaultValue,
]) {
  if (seedServiceType == null) {
    return null;
  }
  return enums.SeedServiceType.values
          .firstWhereOrNull((e) => e.value == seedServiceType) ??
      defaultValue;
}

String seedServiceTypeExplodedListToJson(
    List<enums.SeedServiceType>? seedServiceType) {
  return seedServiceType?.map((e) => e.value!).join(',') ?? '';
}

List<String> seedServiceTypeListToJson(
    List<enums.SeedServiceType>? seedServiceType) {
  if (seedServiceType == null) {
    return [];
  }

  return seedServiceType.map((e) => e.value!).toList();
}

List<enums.SeedServiceType> seedServiceTypeListFromJson(
  List? seedServiceType, [
  List<enums.SeedServiceType>? defaultValue,
]) {
  if (seedServiceType == null) {
    return defaultValue ?? [];
  }

  return seedServiceType
      .map((e) => seedServiceTypeFromJson(e.toString()))
      .toList();
}

List<enums.SeedServiceType>? seedServiceTypeNullableListFromJson(
  List? seedServiceType, [
  List<enums.SeedServiceType>? defaultValue,
]) {
  if (seedServiceType == null) {
    return defaultValue;
  }

  return seedServiceType
      .map((e) => seedServiceTypeFromJson(e.toString()))
      .toList();
}

typedef $JsonFactory<T> = T Function(Map<String, dynamic> json);

class $CustomJsonDecoder {
  $CustomJsonDecoder(this.factories);

  final Map<Type, $JsonFactory> factories;

  dynamic decode<T>(dynamic entity) {
    if (entity is Iterable) {
      return _decodeList<T>(entity);
    }

    if (entity is T) {
      return entity;
    }

    if (isTypeOf<T, Map>()) {
      return entity;
    }

    if (isTypeOf<T, Iterable>()) {
      return entity;
    }

    if (entity is Map<String, dynamic>) {
      return _decodeMap<T>(entity);
    }

    return entity;
  }

  T _decodeMap<T>(Map<String, dynamic> values) {
    final jsonFactory = factories[T];
    if (jsonFactory == null || jsonFactory is! $JsonFactory<T>) {
      return throw "Could not find factory for type $T. Is '$T: $T.fromJsonFactory' included in the CustomJsonDecoder instance creation in bootstrapper.dart?";
    }

    return jsonFactory(values);
  }

  List<T> _decodeList<T>(Iterable values) =>
      values.where((v) => v != null).map<T>((v) => decode<T>(v) as T).toList();
}

class $JsonSerializableConverter extends chopper.JsonConverter {
  @override
  FutureOr<chopper.Response<ResultType>> convertResponse<ResultType, Item>(
      chopper.Response response) async {
    if (response.bodyString.isEmpty) {
      // In rare cases, when let's say 204 (no content) is returned -
      // we cannot decode the missing json with the result type specified
      return chopper.Response(response.base, null, error: response.error);
    }

    if (ResultType == String) {
      return response.copyWith();
    }

    if (ResultType == DateTime) {
      return response.copyWith(
          body: DateTime.parse((response.body as String).replaceAll('"', ''))
              as ResultType);
    }

    final jsonRes = await super.convertResponse(response);
    return jsonRes.copyWith<ResultType>(
        body: $jsonDecoder.decode<Item>(jsonRes.body) as ResultType);
  }
}

final $jsonDecoder = $CustomJsonDecoder(generatedMapping);

// ignore: unused_element
String? _dateToJson(DateTime? date) {
  if (date == null) {
    return null;
  }

  final year = date.year.toString();
  final month = date.month < 10 ? '0${date.month}' : date.month.toString();
  final day = date.day < 10 ? '0${date.day}' : date.day.toString();

  return '$year-$month-$day';
}

class Wrapped<T> {
  final T value;
  const Wrapped.value(this.value);
}
