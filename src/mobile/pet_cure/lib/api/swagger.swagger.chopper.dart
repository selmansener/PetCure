//Generated code

part of 'swagger.swagger.dart';

// **************************************************************************
// ChopperGenerator
// **************************************************************************

// coverage:ignore-file
// ignore_for_file: type=lint
final class _$Swagger extends Swagger {
  _$Swagger([ChopperClient? client]) {
    if (client == null) return;
    this.client = client;
  }

  @override
  final Type definitionType = Swagger;

  @override
  Future<Response<AppointmentQueryDTOPaginationResult>>
      _apiAppointmentsQueryGet({
    int? pageSize,
    int? page,
  }) {
    final Uri $url = Uri.parse('/api/Appointments/Query');
    final Map<String, dynamic> $params = <String, dynamic>{
      'PageSize': pageSize,
      'Page': page,
    };
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
      parameters: $params,
    );
    return client.send<AppointmentQueryDTOPaginationResult,
        AppointmentQueryDTOPaginationResult>($request);
  }

  @override
  Future<Response<List<AppointmentDTO>>> _apiAppointmentsGet() {
    final Uri $url = Uri.parse('/api/Appointments');
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
    );
    return client.send<List<AppointmentDTO>, AppointmentDTO>($request);
  }

  @override
  Future<Response<dynamic>> _apiAppointmentsPost(
      {required CreateAppointmentCommand? body}) {
    final Uri $url = Uri.parse('/api/Appointments');
    final $body = body;
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
      body: $body,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<AppointmentDetailsDTO>> _apiAppointmentsIdGet(
      {required int? id}) {
    final Uri $url = Uri.parse('/api/Appointments/${id}');
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
    );
    return client.send<AppointmentDetailsDTO, AppointmentDetailsDTO>($request);
  }

  @override
  Future<Response<dynamic>> _apiAppointmentsIdPut({
    required int? id,
    required UpdateAppointmentCommand? body,
  }) {
    final Uri $url = Uri.parse('/api/Appointments/${id}');
    final $body = body;
    final Request $request = Request(
      'PUT',
      $url,
      client.baseUrl,
      body: $body,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<dynamic>> _apiAppointmentsIdDelete({required int? id}) {
    final Uri $url = Uri.parse('/api/Appointments/${id}');
    final Request $request = Request(
      'DELETE',
      $url,
      client.baseUrl,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<VeterinarianBookedDatesDTO>>
      _apiAppointmentsGetBookedDatesByVetIdGet({int? vetId}) {
    final Uri $url = Uri.parse('/api/Appointments/GetBookedDatesByVetId');
    final Map<String, dynamic> $params = <String, dynamic>{'vetId': vetId};
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
      parameters: $params,
    );
    return client
        .send<VeterinarianBookedDatesDTO, VeterinarianBookedDatesDTO>($request);
  }

  @override
  Future<Response<List<AppointmentDTO>>> _apiAppointmentsGetByDateRangeGet({
    DateTime? from,
    DateTime? to,
  }) {
    final Uri $url = Uri.parse('/api/Appointments/GetByDateRange');
    final Map<String, dynamic> $params = <String, dynamic>{
      'from': from,
      'to': to,
    };
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
      parameters: $params,
    );
    return client.send<List<AppointmentDTO>, AppointmentDTO>($request);
  }

  @override
  Future<Response<List<UpcomingAppointmentDTO>>>
      _apiDashboardUpcomingAppointmentsGet() {
    final Uri $url = Uri.parse('/api/Dashboard/UpcomingAppointments');
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
    );
    return client
        .send<List<UpcomingAppointmentDTO>, UpcomingAppointmentDTO>($request);
  }

  @override
  Future<Response<ApptsCountByDateRangeDTO>>
      _apiDashboardGetApptsCountByDateRangeGet({
    DateTime? from,
    DateTime? to,
  }) {
    final Uri $url = Uri.parse('/api/Dashboard/GetApptsCountByDateRange');
    final Map<String, dynamic> $params = <String, dynamic>{
      'from': from,
      'to': to,
    };
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
      parameters: $params,
    );
    return client
        .send<ApptsCountByDateRangeDTO, ApptsCountByDateRangeDTO>($request);
  }

  @override
  Future<Response<dynamic>> _developmentEnsureDatabaseCreatedPost() {
    final Uri $url = Uri.parse('/Development/EnsureDatabaseCreated');
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<dynamic>> _developmentEnsureDatabaseDeletedPost() {
    final Uri $url = Uri.parse('/Development/EnsureDatabaseDeleted');
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<dynamic>> _developmentMigrateDatabasePost() {
    final Uri $url = Uri.parse('/Development/MigrateDatabase');
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<dynamic>> _developmentSeedPost({
    String? seeds,
    bool? recreateDb,
  }) {
    final Uri $url = Uri.parse('/Development/Seed');
    final Map<String, dynamic> $params = <String, dynamic>{
      'seeds': seeds,
      'recreateDb': recreateDb,
    };
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
      parameters: $params,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<PetRecordDTOPaginationResult>> _apiPetsGet({
    String? phone,
    String? microChipId,
    int? pageSize,
    int? page,
  }) {
    final Uri $url = Uri.parse('/api/Pets');
    final Map<String, dynamic> $params = <String, dynamic>{
      'Phone': phone,
      'MicroChipId': microChipId,
      'PageSize': pageSize,
      'Page': page,
    };
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
      parameters: $params,
    );
    return client.send<PetRecordDTOPaginationResult,
        PetRecordDTOPaginationResult>($request);
  }

  @override
  Future<Response<dynamic>> _apiPetsPost({required CreatePetCommand? body}) {
    final Uri $url = Uri.parse('/api/Pets');
    final $body = body;
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
      body: $body,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<ExistingPetRecordDTO>> _apiPetsIdExistingRecordsGet(
      {required int? id}) {
    final Uri $url = Uri.parse('/api/Pets/${id}/ExistingRecords');
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
    );
    return client.send<ExistingPetRecordDTO, ExistingPetRecordDTO>($request);
  }

  @override
  Future<Response<dynamic>> _apiPetsAddAppointmentPost(
      {required AddAppointmentCommand? body}) {
    final Uri $url = Uri.parse('/api/Pets/AddAppointment');
    final $body = body;
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
      body: $body,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<VeterinarianDTOPaginationResult>> _apiVeterinariansQueryGet({
    int? pageSize,
    int? page,
  }) {
    final Uri $url = Uri.parse('/api/Veterinarians/Query');
    final Map<String, dynamic> $params = <String, dynamic>{
      'PageSize': pageSize,
      'Page': page,
    };
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
      parameters: $params,
    );
    return client.send<VeterinarianDTOPaginationResult,
        VeterinarianDTOPaginationResult>($request);
  }

  @override
  Future<Response<List<VeterinarianDTO>>> _apiVeterinariansGet() {
    final Uri $url = Uri.parse('/api/Veterinarians');
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
    );
    return client.send<List<VeterinarianDTO>, VeterinarianDTO>($request);
  }

  @override
  Future<Response<dynamic>> _apiVeterinariansPost(
      {required CreateVeterinarianCommand? body}) {
    final Uri $url = Uri.parse('/api/Veterinarians');
    final $body = body;
    final Request $request = Request(
      'POST',
      $url,
      client.baseUrl,
      body: $body,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<VeterinarianDTO>> _apiVeterinariansIdGet({required int? id}) {
    final Uri $url = Uri.parse('/api/Veterinarians/${id}');
    final Request $request = Request(
      'GET',
      $url,
      client.baseUrl,
    );
    return client.send<VeterinarianDTO, VeterinarianDTO>($request);
  }

  @override
  Future<Response<dynamic>> _apiVeterinariansIdPut({
    required int? id,
    required UpdateVeterinarianCommand? body,
  }) {
    final Uri $url = Uri.parse('/api/Veterinarians/${id}');
    final $body = body;
    final Request $request = Request(
      'PUT',
      $url,
      client.baseUrl,
      body: $body,
    );
    return client.send<dynamic, dynamic>($request);
  }

  @override
  Future<Response<dynamic>> _apiVeterinariansIdDelete({required int? id}) {
    final Uri $url = Uri.parse('/api/Veterinarians/${id}');
    final Request $request = Request(
      'DELETE',
      $url,
      client.baseUrl,
    );
    return client.send<dynamic, dynamic>($request);
  }
}
