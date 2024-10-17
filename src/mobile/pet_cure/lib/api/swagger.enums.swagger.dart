import 'package:json_annotation/json_annotation.dart';
import 'package:collection/collection.dart';

enum AppointmentStatus {
  @JsonValue(null)
  swaggerGeneratedUnknown(null),

  @JsonValue('None')
  none('None'),
  @JsonValue('Created')
  created('Created'),
  @JsonValue('Completed')
  completed('Completed'),
  @JsonValue('Cancelled')
  cancelled('Cancelled');

  final String? value;

  const AppointmentStatus(this.value);
}

enum PetSpecies {
  @JsonValue(null)
  swaggerGeneratedUnknown(null),

  @JsonValue('None')
  none('None'),
  @JsonValue('Cat')
  cat('Cat'),
  @JsonValue('Dog')
  dog('Dog'),
  @JsonValue('Bird')
  bird('Bird');

  final String? value;

  const PetSpecies(this.value);
}

enum SeedServiceType {
  @JsonValue(null)
  swaggerGeneratedUnknown(null),

  @JsonValue('Veterinarian')
  veterinarian('Veterinarian'),
  @JsonValue('PetOwner')
  petowner('PetOwner'),
  @JsonValue('Pet')
  pet('Pet'),
  @JsonValue('Appointment')
  appointment('Appointment'),
  @JsonValue('FullyBookedDates')
  fullybookeddates('FullyBookedDates'),
  @JsonValue('CompletedAppointments')
  completedappointments('CompletedAppointments'),
  @JsonValue('SingleVetFullyBookedDates')
  singlevetfullybookeddates('SingleVetFullyBookedDates'),
  @JsonValue('PetRecords')
  petrecords('PetRecords'),
  @JsonValue('UpcomingAppointments')
  upcomingappointments('UpcomingAppointments'),
  @JsonValue('AppointmentStats')
  appointmentstats('AppointmentStats');

  final String? value;

  const SeedServiceType(this.value);
}
