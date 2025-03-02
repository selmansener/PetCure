import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import table from "text-table";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// Create server instance
const server = new McpServer({
    name: "petcure",
    version: "1.0.0",
});
async function getUpcomingAppointments() {
    try {
        const response = await fetch("https://localhost:7296/api/Dashboard/UpcomingAppointments");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return (await response.json());
    }
    catch (error) {
        console.error("Error making appointments request:", error);
        return null;
    }
}
server.tool("get-upcoming-appointments", "Get upcoming appointments", async () => {
    const appointments = await getUpcomingAppointments();
    var results = table([
        ["id", "species", "apptDate", "ownerName", "phone", "notes"],
        ...appointments.map((item) => [item["id"].toString(), item["species"], item["apptDate"], item["ownerName"], item["phone"], item["reason"]])
    ]);
    return {
        content: [
            {
                type: "text",
                text: results,
            },
        ],
    };
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("PetCure MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
