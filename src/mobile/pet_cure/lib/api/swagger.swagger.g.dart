// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'swagger.swagger.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

AddAppointmentCommand _$AddAppointmentCommandFromJson(
        Map<String, dynamic> json) =>
    AddAppointmentCommand(
      petId: (json['petId'] as num?)?.toInt(),
      ownerId: (json['ownerId'] as num?)?.toInt(),
      vetId: (json['vetId'] as num?)?.toInt(),
      apptDate: json['apptDate'] == null
          ? null
          : DateTime.parse(json['apptDate'] as String),
      reason: json['reason'] as String?,
      notes: json['notes'] as String?,
    );

Map<String, dynamic> _$AddAppointmentCommandToJson(
        AddAppointmentCommand instance) =>
    <String, dynamic>{
      'petId': instance.petId,
      'ownerId': instance.ownerId,
      'vetId': instance.vetId,
      'apptDate': instance.apptDate?.toIso8601String(),
      'reason': instance.reason,
      'notes': instance.notes,
    };

AppointmentDTO _$AppointmentDTOFromJson(Map<String, dynamic> json) =>
    AppointmentDTO(
      id: (json['id'] as num?)?.toInt(),
      petId: (json['petId'] as num?)?.toInt(),
      ownerId: (json['ownerId'] as num?)?.toInt(),
      vetId: (json['vetId'] as num?)?.toInt(),
      appointmentDate: json['appointmentDate'] == null
          ? null
          : DateTime.parse(json['appointmentDate'] as String),
      reason: json['reason'] as String?,
      status: appointmentStatusNullableFromJson(json['status']),
      notes: json['notes'] as String?,
    );

Map<String, dynamic> _$AppointmentDTOToJson(AppointmentDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'petId': instance.petId,
      'ownerId': instance.ownerId,
      'vetId': instance.vetId,
      'appointmentDate': instance.appointmentDate?.toIso8601String(),
      'reason': instance.reason,
      'status': appointmentStatusNullableToJson(instance.status),
      'notes': instance.notes,
    };

AppointmentDetailsDTO _$AppointmentDetailsDTOFromJson(
        Map<String, dynamic> json) =>
    AppointmentDetailsDTO(
      id: (json['id'] as num?)?.toInt(),
      appointmentDate: json['appointmentDate'] == null
          ? null
          : DateTime.parse(json['appointmentDate'] as String),
      reason: json['reason'] as String?,
      status: appointmentStatusNullableFromJson(json['status']),
      notes: json['notes'] as String?,
      petDetails: json['petDetails'] == null
          ? null
          : PetDetailsDTO.fromJson(json['petDetails'] as Map<String, dynamic>),
      ownerDetails: json['ownerDetails'] == null
          ? null
          : PetOwnerDetailsDTO.fromJson(
              json['ownerDetails'] as Map<String, dynamic>),
      vetDetails: json['vetDetails'] == null
          ? null
          : VetDetailsDTO.fromJson(json['vetDetails'] as Map<String, dynamic>),
      completedAt: json['completedAt'] == null
          ? null
          : DateTime.parse(json['completedAt'] as String),
    );

Map<String, dynamic> _$AppointmentDetailsDTOToJson(
        AppointmentDetailsDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'appointmentDate': instance.appointmentDate?.toIso8601String(),
      'reason': instance.reason,
      'status': appointmentStatusNullableToJson(instance.status),
      'notes': instance.notes,
      'petDetails': instance.petDetails?.toJson(),
      'ownerDetails': instance.ownerDetails?.toJson(),
      'vetDetails': instance.vetDetails?.toJson(),
      'completedAt': instance.completedAt?.toIso8601String(),
    };

AppointmentQueryDTO _$AppointmentQueryDTOFromJson(Map<String, dynamic> json) =>
    AppointmentQueryDTO(
      id: (json['id'] as num?)?.toInt(),
      petId: (json['petId'] as num?)?.toInt(),
      ownerId: (json['ownerId'] as num?)?.toInt(),
      vetId: (json['vetId'] as num?)?.toInt(),
      name: json['name'] as String?,
      species: petSpeciesNullableFromJson(json['species']),
      phone: json['phone'] as String?,
      ownerName: json['ownerName'] as String?,
      vetName: json['vetName'] as String?,
      appointmentDate: json['appointmentDate'] == null
          ? null
          : DateTime.parse(json['appointmentDate'] as String),
      reason: json['reason'] as String?,
      status: appointmentStatusNullableFromJson(json['status']),
      notes: json['notes'] as String?,
      completedAt: json['completedAt'] == null
          ? null
          : DateTime.parse(json['completedAt'] as String),
    );

Map<String, dynamic> _$AppointmentQueryDTOToJson(
        AppointmentQueryDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'petId': instance.petId,
      'ownerId': instance.ownerId,
      'vetId': instance.vetId,
      'name': instance.name,
      'species': petSpeciesNullableToJson(instance.species),
      'phone': instance.phone,
      'ownerName': instance.ownerName,
      'vetName': instance.vetName,
      'appointmentDate': instance.appointmentDate?.toIso8601String(),
      'reason': instance.reason,
      'status': appointmentStatusNullableToJson(instance.status),
      'notes': instance.notes,
      'completedAt': instance.completedAt?.toIso8601String(),
    };

AppointmentQueryDTOPaginationResult
    _$AppointmentQueryDTOPaginationResultFromJson(Map<String, dynamic> json) =>
        AppointmentQueryDTOPaginationResult(
          data: (json['data'] as List<dynamic>?)
                  ?.map((e) =>
                      AppointmentQueryDTO.fromJson(e as Map<String, dynamic>))
                  .toList() ??
              [],
          totalRowCount: (json['totalRowCount'] as num?)?.toInt(),
        );

Map<String, dynamic> _$AppointmentQueryDTOPaginationResultToJson(
        AppointmentQueryDTOPaginationResult instance) =>
    <String, dynamic>{
      'data': instance.data?.map((e) => e.toJson()).toList(),
      'totalRowCount': instance.totalRowCount,
    };

ApptsCountByDateRangeDTO _$ApptsCountByDateRangeDTOFromJson(
        Map<String, dynamic> json) =>
    ApptsCountByDateRangeDTO(
      totalCount: (json['totalCount'] as num?)?.toInt(),
      changeAsPercent: (json['changeAsPercent'] as num?)?.toDouble(),
    );

Map<String, dynamic> _$ApptsCountByDateRangeDTOToJson(
        ApptsCountByDateRangeDTO instance) =>
    <String, dynamic>{
      'totalCount': instance.totalCount,
      'changeAsPercent': instance.changeAsPercent,
    };

CreateAppointmentCommand _$CreateAppointmentCommandFromJson(
        Map<String, dynamic> json) =>
    CreateAppointmentCommand(
      vetId: (json['vetId'] as num?)?.toInt(),
      apptDate: json['apptDate'] == null
          ? null
          : DateTime.parse(json['apptDate'] as String),
      reason: json['reason'] as String?,
      notes: json['notes'] as String?,
      petInfo: json['petInfo'] == null
          ? null
          : PetDTO.fromJson(json['petInfo'] as Map<String, dynamic>),
      ownerInfo: json['ownerInfo'] == null
          ? null
          : OwnerDTO.fromJson(json['ownerInfo'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$CreateAppointmentCommandToJson(
        CreateAppointmentCommand instance) =>
    <String, dynamic>{
      'vetId': instance.vetId,
      'apptDate': instance.apptDate?.toIso8601String(),
      'reason': instance.reason,
      'notes': instance.notes,
      'petInfo': instance.petInfo?.toJson(),
      'ownerInfo': instance.ownerInfo?.toJson(),
    };

CreatePetCommand _$CreatePetCommandFromJson(Map<String, dynamic> json) =>
    CreatePetCommand();

Map<String, dynamic> _$CreatePetCommandToJson(CreatePetCommand instance) =>
    <String, dynamic>{};

CreateVeterinarianCommand _$CreateVeterinarianCommandFromJson(
        Map<String, dynamic> json) =>
    CreateVeterinarianCommand(
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      phone: json['phone'] as String?,
      email: json['email'] as String?,
      specialization: json['specialization'] as String?,
      yearsOfExperience: (json['yearsOfExperience'] as num?)?.toInt(),
    );

Map<String, dynamic> _$CreateVeterinarianCommandToJson(
        CreateVeterinarianCommand instance) =>
    <String, dynamic>{
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'phone': instance.phone,
      'email': instance.email,
      'specialization': instance.specialization,
      'yearsOfExperience': instance.yearsOfExperience,
    };

ExistingPetRecordDTO _$ExistingPetRecordDTOFromJson(
        Map<String, dynamic> json) =>
    ExistingPetRecordDTO(
      id: (json['id'] as num?)?.toInt(),
      name: json['name'] as String?,
      species: petSpeciesNullableFromJson(json['species']),
      breed: json['breed'] as String?,
      gender: json['gender'] as String?,
      dateOfBirth: json['dateOfBirth'] == null
          ? null
          : DateTime.parse(json['dateOfBirth'] as String),
      weight: (json['weight'] as num?)?.toDouble(),
      color: json['color'] as String?,
      microChipId: json['microChipId'] as String?,
      medicalHistory: json['medicalHistory'] as String?,
      ownerInfo: json['ownerInfo'] == null
          ? null
          : OwnerInfoDTO.fromJson(json['ownerInfo'] as Map<String, dynamic>),
      medicalRecords: (json['medicalRecords'] as List<dynamic>?)
              ?.map((e) => MedicalRecordDTO.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      prescriptions: (json['prescriptions'] as List<dynamic>?)
              ?.map((e) => PrescriptionDTO.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
    );

Map<String, dynamic> _$ExistingPetRecordDTOToJson(
        ExistingPetRecordDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'species': petSpeciesNullableToJson(instance.species),
      'breed': instance.breed,
      'gender': instance.gender,
      'dateOfBirth': instance.dateOfBirth?.toIso8601String(),
      'weight': instance.weight,
      'color': instance.color,
      'microChipId': instance.microChipId,
      'medicalHistory': instance.medicalHistory,
      'ownerInfo': instance.ownerInfo?.toJson(),
      'medicalRecords':
          instance.medicalRecords?.map((e) => e.toJson()).toList(),
      'prescriptions': instance.prescriptions?.map((e) => e.toJson()).toList(),
    };

MedicalRecordDTO _$MedicalRecordDTOFromJson(Map<String, dynamic> json) =>
    MedicalRecordDTO(
      id: (json['id'] as num?)?.toInt(),
      visitDate: json['visitDate'] == null
          ? null
          : DateTime.parse(json['visitDate'] as String),
      symptoms: json['symptoms'] as String?,
      diagnosis: json['diagnosis'] as String?,
      treatment: json['treatment'] as String?,
      medication: json['medication'] as String?,
      followUpDate: json['followUpDate'] == null
          ? null
          : DateTime.parse(json['followUpDate'] as String),
      notes: json['notes'] as String?,
    );

Map<String, dynamic> _$MedicalRecordDTOToJson(MedicalRecordDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'visitDate': instance.visitDate?.toIso8601String(),
      'symptoms': instance.symptoms,
      'diagnosis': instance.diagnosis,
      'treatment': instance.treatment,
      'medication': instance.medication,
      'followUpDate': instance.followUpDate?.toIso8601String(),
      'notes': instance.notes,
    };

OwnerDTO _$OwnerDTOFromJson(Map<String, dynamic> json) => OwnerDTO(
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      phone: json['phone'] as String?,
      email: json['email'] as String?,
      address: json['address'] as String?,
      city: json['city'] as String?,
      state: json['state'] as String?,
      zipCode: json['zipCode'] as String?,
      emergencyContact: json['emergencyContact'] as String?,
    );

Map<String, dynamic> _$OwnerDTOToJson(OwnerDTO instance) => <String, dynamic>{
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'phone': instance.phone,
      'email': instance.email,
      'address': instance.address,
      'city': instance.city,
      'state': instance.state,
      'zipCode': instance.zipCode,
      'emergencyContact': instance.emergencyContact,
    };

OwnerInfoDTO _$OwnerInfoDTOFromJson(Map<String, dynamic> json) => OwnerInfoDTO(
      id: (json['id'] as num?)?.toInt(),
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      phone: json['phone'] as String?,
      email: json['email'] as String?,
      address: json['address'] as String?,
      city: json['city'] as String?,
      state: json['state'] as String?,
      zipCode: json['zipCode'] as String?,
      emergencyContact: json['emergencyContact'] as String?,
    );

Map<String, dynamic> _$OwnerInfoDTOToJson(OwnerInfoDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'phone': instance.phone,
      'email': instance.email,
      'address': instance.address,
      'city': instance.city,
      'state': instance.state,
      'zipCode': instance.zipCode,
      'emergencyContact': instance.emergencyContact,
    };

PetDTO _$PetDTOFromJson(Map<String, dynamic> json) => PetDTO(
      name: json['name'] as String?,
      species: petSpeciesNullableFromJson(json['species']),
      breed: json['breed'] as String?,
      gender: json['gender'] as String?,
      dateOfBirth: json['dateOfBirth'] == null
          ? null
          : DateTime.parse(json['dateOfBirth'] as String),
      weight: (json['weight'] as num?)?.toDouble(),
      color: json['color'] as String?,
      microChipId: json['microChipId'] as String?,
      medicalHistory: json['medicalHistory'] as String?,
    );

Map<String, dynamic> _$PetDTOToJson(PetDTO instance) => <String, dynamic>{
      'name': instance.name,
      'species': petSpeciesNullableToJson(instance.species),
      'breed': instance.breed,
      'gender': instance.gender,
      'dateOfBirth': instance.dateOfBirth?.toIso8601String(),
      'weight': instance.weight,
      'color': instance.color,
      'microChipId': instance.microChipId,
      'medicalHistory': instance.medicalHistory,
    };

PetDetailsDTO _$PetDetailsDTOFromJson(Map<String, dynamic> json) =>
    PetDetailsDTO(
      id: (json['id'] as num?)?.toInt(),
      name: json['name'] as String?,
      species: petSpeciesNullableFromJson(json['species']),
      breed: json['breed'] as String?,
      gender: json['gender'] as String?,
      dateOfBirth: json['dateOfBirth'] == null
          ? null
          : DateTime.parse(json['dateOfBirth'] as String),
      weight: (json['weight'] as num?)?.toDouble(),
      color: json['color'] as String?,
      microChipId: json['microChipId'] as String?,
      medicalHistory: json['medicalHistory'] as String?,
    );

Map<String, dynamic> _$PetDetailsDTOToJson(PetDetailsDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'species': petSpeciesNullableToJson(instance.species),
      'breed': instance.breed,
      'gender': instance.gender,
      'dateOfBirth': instance.dateOfBirth?.toIso8601String(),
      'weight': instance.weight,
      'color': instance.color,
      'microChipId': instance.microChipId,
      'medicalHistory': instance.medicalHistory,
    };

PetOwnerDetailsDTO _$PetOwnerDetailsDTOFromJson(Map<String, dynamic> json) =>
    PetOwnerDetailsDTO(
      id: (json['id'] as num?)?.toInt(),
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      phone: json['phone'] as String?,
      email: json['email'] as String?,
      address: json['address'] as String?,
      city: json['city'] as String?,
      state: json['state'] as String?,
      zipCode: json['zipCode'] as String?,
      emergencyContact: json['emergencyContact'] as String?,
    );

Map<String, dynamic> _$PetOwnerDetailsDTOToJson(PetOwnerDetailsDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'phone': instance.phone,
      'email': instance.email,
      'address': instance.address,
      'city': instance.city,
      'state': instance.state,
      'zipCode': instance.zipCode,
      'emergencyContact': instance.emergencyContact,
    };

PetRecordDTO _$PetRecordDTOFromJson(Map<String, dynamic> json) => PetRecordDTO(
      id: (json['id'] as num?)?.toInt(),
      name: json['name'] as String?,
      species: petSpeciesNullableFromJson(json['species']),
      breed: json['breed'] as String?,
      gender: json['gender'] as String?,
      dateOfBirth: json['dateOfBirth'] == null
          ? null
          : DateTime.parse(json['dateOfBirth'] as String),
      weight: (json['weight'] as num?)?.toDouble(),
      color: json['color'] as String?,
      microChipId: json['microChipId'] as String?,
      medicalHistory: json['medicalHistory'] as String?,
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      ownerPhone: json['ownerPhone'] as String?,
      lastMedicalRecord: (json['lastMedicalRecord'] as num?)?.toInt(),
      lastAppointmentDate: json['lastAppointmentDate'] == null
          ? null
          : DateTime.parse(json['lastAppointmentDate'] as String),
      updatedAt: json['updatedAt'] == null
          ? null
          : DateTime.parse(json['updatedAt'] as String),
      createdAt: json['createdAt'] == null
          ? null
          : DateTime.parse(json['createdAt'] as String),
    );

Map<String, dynamic> _$PetRecordDTOToJson(PetRecordDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'species': petSpeciesNullableToJson(instance.species),
      'breed': instance.breed,
      'gender': instance.gender,
      'dateOfBirth': instance.dateOfBirth?.toIso8601String(),
      'weight': instance.weight,
      'color': instance.color,
      'microChipId': instance.microChipId,
      'medicalHistory': instance.medicalHistory,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'ownerPhone': instance.ownerPhone,
      'lastMedicalRecord': instance.lastMedicalRecord,
      'lastAppointmentDate': instance.lastAppointmentDate?.toIso8601String(),
      'updatedAt': instance.updatedAt?.toIso8601String(),
      'createdAt': instance.createdAt?.toIso8601String(),
    };

PetRecordDTOPaginationResult _$PetRecordDTOPaginationResultFromJson(
        Map<String, dynamic> json) =>
    PetRecordDTOPaginationResult(
      data: (json['data'] as List<dynamic>?)
              ?.map((e) => PetRecordDTO.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      totalRowCount: (json['totalRowCount'] as num?)?.toInt(),
    );

Map<String, dynamic> _$PetRecordDTOPaginationResultToJson(
        PetRecordDTOPaginationResult instance) =>
    <String, dynamic>{
      'data': instance.data?.map((e) => e.toJson()).toList(),
      'totalRowCount': instance.totalRowCount,
    };

PrescriptionDTO _$PrescriptionDTOFromJson(Map<String, dynamic> json) =>
    PrescriptionDTO(
      id: (json['id'] as num?)?.toInt(),
      dateIssued: json['dateIssued'] == null
          ? null
          : DateTime.parse(json['dateIssued'] as String),
      medicationName: json['medicationName'] as String?,
      dosage: json['dosage'] as String?,
      duration: json['duration'] as String?,
      notes: json['notes'] as String?,
    );

Map<String, dynamic> _$PrescriptionDTOToJson(PrescriptionDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'dateIssued': instance.dateIssued?.toIso8601String(),
      'medicationName': instance.medicationName,
      'dosage': instance.dosage,
      'duration': instance.duration,
      'notes': instance.notes,
    };

ProblemDetails _$ProblemDetailsFromJson(Map<String, dynamic> json) =>
    ProblemDetails(
      type: json['type'] as String?,
      title: json['title'] as String?,
      status: (json['status'] as num?)?.toInt(),
      detail: json['detail'] as String?,
      instance: json['instance'] as String?,
    );

Map<String, dynamic> _$ProblemDetailsToJson(ProblemDetails instance) =>
    <String, dynamic>{
      'type': instance.type,
      'title': instance.title,
      'status': instance.status,
      'detail': instance.detail,
      'instance': instance.instance,
    };

UpcomingAppointmentDTO _$UpcomingAppointmentDTOFromJson(
        Map<String, dynamic> json) =>
    UpcomingAppointmentDTO(
      id: (json['id'] as num?)?.toInt(),
      species: petSpeciesNullableFromJson(json['species']),
      apptDate: json['apptDate'] == null
          ? null
          : DateTime.parse(json['apptDate'] as String),
      ownerName: json['ownerName'] as String?,
      phone: json['phone'] as String?,
      reason: json['reason'] as String?,
    );

Map<String, dynamic> _$UpcomingAppointmentDTOToJson(
        UpcomingAppointmentDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'species': petSpeciesNullableToJson(instance.species),
      'apptDate': instance.apptDate?.toIso8601String(),
      'ownerName': instance.ownerName,
      'phone': instance.phone,
      'reason': instance.reason,
    };

UpdateAppointmentCommand _$UpdateAppointmentCommandFromJson(
        Map<String, dynamic> json) =>
    UpdateAppointmentCommand();

Map<String, dynamic> _$UpdateAppointmentCommandToJson(
        UpdateAppointmentCommand instance) =>
    <String, dynamic>{};

UpdateVeterinarianCommand _$UpdateVeterinarianCommandFromJson(
        Map<String, dynamic> json) =>
    UpdateVeterinarianCommand(
      id: (json['id'] as num?)?.toInt(),
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      phone: json['phone'] as String?,
      email: json['email'] as String?,
      specialization: json['specialization'] as String?,
      yearsOfExperience: (json['yearsOfExperience'] as num?)?.toInt(),
    );

Map<String, dynamic> _$UpdateVeterinarianCommandToJson(
        UpdateVeterinarianCommand instance) =>
    <String, dynamic>{
      'id': instance.id,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'phone': instance.phone,
      'email': instance.email,
      'specialization': instance.specialization,
      'yearsOfExperience': instance.yearsOfExperience,
    };

VetDetailsDTO _$VetDetailsDTOFromJson(Map<String, dynamic> json) =>
    VetDetailsDTO(
      id: (json['id'] as num?)?.toInt(),
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      phone: json['phone'] as String?,
      email: json['email'] as String?,
      specialization: json['specialization'] as String?,
      yearsOfExperience: (json['yearsOfExperience'] as num?)?.toInt(),
    );

Map<String, dynamic> _$VetDetailsDTOToJson(VetDetailsDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'phone': instance.phone,
      'email': instance.email,
      'specialization': instance.specialization,
      'yearsOfExperience': instance.yearsOfExperience,
    };

VeterinarianBookedDatesDTO _$VeterinarianBookedDatesDTOFromJson(
        Map<String, dynamic> json) =>
    VeterinarianBookedDatesDTO(
      id: (json['id'] as num?)?.toInt(),
      fullName: json['fullName'] as String?,
      appointmentDates: (json['appointmentDates'] as List<dynamic>?)
              ?.map((e) => DateTime.parse(e as String))
              .toList() ??
          [],
    );

Map<String, dynamic> _$VeterinarianBookedDatesDTOToJson(
        VeterinarianBookedDatesDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'fullName': instance.fullName,
      'appointmentDates':
          instance.appointmentDates?.map((e) => e.toIso8601String()).toList(),
    };

VeterinarianDTO _$VeterinarianDTOFromJson(Map<String, dynamic> json) =>
    VeterinarianDTO(
      id: (json['id'] as num?)?.toInt(),
      firstName: json['firstName'] as String?,
      lastName: json['lastName'] as String?,
      phone: json['phone'] as String?,
      email: json['email'] as String?,
      specialization: json['specialization'] as String?,
      yearsOfExperience: (json['yearsOfExperience'] as num?)?.toInt(),
      currentAppointmentCount:
          (json['currentAppointmentCount'] as num?)?.toInt(),
      updatedAt: json['updatedAt'] == null
          ? null
          : DateTime.parse(json['updatedAt'] as String),
      createdAt: json['createdAt'] == null
          ? null
          : DateTime.parse(json['createdAt'] as String),
    );

Map<String, dynamic> _$VeterinarianDTOToJson(VeterinarianDTO instance) =>
    <String, dynamic>{
      'id': instance.id,
      'firstName': instance.firstName,
      'lastName': instance.lastName,
      'phone': instance.phone,
      'email': instance.email,
      'specialization': instance.specialization,
      'yearsOfExperience': instance.yearsOfExperience,
      'currentAppointmentCount': instance.currentAppointmentCount,
      'updatedAt': instance.updatedAt?.toIso8601String(),
      'createdAt': instance.createdAt?.toIso8601String(),
    };

VeterinarianDTOPaginationResult _$VeterinarianDTOPaginationResultFromJson(
        Map<String, dynamic> json) =>
    VeterinarianDTOPaginationResult(
      data: (json['data'] as List<dynamic>?)
              ?.map((e) => VeterinarianDTO.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      totalRowCount: (json['totalRowCount'] as num?)?.toInt(),
    );

Map<String, dynamic> _$VeterinarianDTOPaginationResultToJson(
        VeterinarianDTOPaginationResult instance) =>
    <String, dynamic>{
      'data': instance.data?.map((e) => e.toJson()).toList(),
      'totalRowCount': instance.totalRowCount,
    };
