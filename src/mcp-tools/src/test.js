import table  from "text-table";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function getUpcomingAppointments() {

    try {
        const response = await fetch("https://localhost:7296/api/Dashboard/UpcomingAppointments");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        var data = await response.json();
        return (data);
    } catch (error) {
        console.error("Error making appointments request:", error);
        return null;
    }
}

getUpcomingAppointments().then((resp) => {
    var results = table([
        ["id", "species", "apptDate", "ownerName", "phone", "notes"],
        ...resp.map((item) => [item["id"].toString(), item["species"],item["apptDate"],item["ownerName"],item["phone"], item["reason"]]) 
    ]);

    console.log(results);
})
