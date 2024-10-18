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
  ScrollController _scrollController = ScrollController();
  late final Swagger _api = Swagger.create(
      baseUrl: Uri(scheme: "https", host: "d09d-78-175-53-255.ngrok-free.app"));
  late Future<Response<AppointmentQueryDTOPaginationResult>> _futureAppts;
  bool _isLoading = true;
  int _page = 0;
  final int _pageSize = 25;
  List<AppointmentQueryDTO> _appointments = [];

  @override
  void initState() {
    super.initState();

    _scrollController.addListener(() {
      if (_scrollController.position.pixels ==
          _scrollController.position.maxScrollExtent) {
        setState(() {
          _isLoading = true;
          _page++;
        });

        _futureAppts =
            _api.apiAppointmentsQueryGet(page: _page, pageSize: _pageSize);

        _futureAppts.then((response) {
          setState(() {
            _isLoading = false;
            _appointments.addAll(response.body?.data ?? []);
          });
        });
      }
    });

    _futureAppts =
        _api.apiAppointmentsQueryGet(page: _page, pageSize: _pageSize);

    _futureAppts.then((response) {
      setState(() {
        _isLoading = false;
        _appointments.addAll(response.body?.data ?? []);
      });
    });
  }

  String getImage(String? species) {
    switch (species) {
      case 'Cat':
        return 'assets/images/cat.png';
      case 'Dog':
        return 'assets/images/dog.png';
      case 'Bird':
        return 'assets/images/bird.png';
      default:
        return '';
    }
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
            if (snapshot.connectionState == ConnectionState.waiting &&
                _appointments.isEmpty) {
              return Center(
                  child: CircularProgressIndicator()); // Initial loading
            }

            if (snapshot.hasError) {
              return Center(child: Text('Error loading appointments'));
            }

            if (snapshot.hasData) {
              var appts = _appointments;

              return ListView.builder(
                controller: _scrollController,
                itemCount: appts?.length ?? 0 + (_isLoading ? 1 : 0),
                itemBuilder: (context, index) {
                  if (index == _appointments.length) {
                    return Center(
                        child:
                            CircularProgressIndicator()); // Show loading at bottom
                  }

                  final appt = appts?[index];
                  final icon = getImage(appt!.species!.value);

                  return ListTile(
                    title: Text(DateFormat.yMd(locale.languageCode)
                        .format(appt.appointmentDate!)),
                    subtitle: Text(appt.reason!),
                    leading: CircleAvatar(
                      // Display the Flutter Logo image asset.
                      foregroundImage: AssetImage(icon),
                    ),
                  );
                },
              );
            }

            return const CircularProgressIndicator();
          },
        ),
      ),
    );
  }
}
