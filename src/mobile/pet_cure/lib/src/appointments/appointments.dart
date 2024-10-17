import 'package:chopper/chopper.dart';
import 'package:flutter/material.dart';
import 'package:pet_cure/api/swagger.swagger.dart';
import 'package:intl/intl.dart';

class Appointments extends StatefulWidget {
  const Appointments({super.key});

  static const routeName = '/appointments';

  @override
  State<StatefulWidget> createState() => _AppointmentsState();
}

class _AppointmentsState extends State<Appointments> {
  late final Swagger _api = Swagger.create(
      baseUrl: Uri(scheme: "https", host: "daa8-78-175-53-255.ngrok-free.app"));
  late Future<Response<AppointmentQueryDTOPaginationResult>> _futureAppts;

  @override
  void initState() {
    super.initState();

    // _api.apiAppointmentsQueryGet(page: 0, pageSize: 25)
    // .then((response) => {
    //   _futureAppts = response.body.toJson();
    // })
    // .catchError((error) => {
    //   print(error.toString())
    // });

    _futureAppts = _api.apiAppointmentsQueryGet(page: 0, pageSize: 25);
  }

  @override
  Widget build(BuildContext context) {
    Locale locale = Localizations.localeOf(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Appointments'),
      ),
      body: Center(
        child: FutureBuilder<Response<AppointmentQueryDTOPaginationResult>>(
          future: _futureAppts,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              var appts = snapshot.data?.body?.data;
              return ListView.builder(
                itemCount: appts?.length,
                itemBuilder: (context, index) {
                  final appt = appts?[index];

                  if (appt?.appointmentDate != null) {
                    return Text(DateFormat.yMd(locale.languageCode).format(appt!.appointmentDate!));
                  }
                  else {
                    return Text("-");
                  }
                },
              );
            } else if (snapshot.hasError) {
              return Text('${snapshot.error}');
            }

            return const CircularProgressIndicator();
          },
        ),
      ),
    );
  }
}
