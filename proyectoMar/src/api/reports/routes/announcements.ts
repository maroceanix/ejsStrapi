export default {
        routes: [
                {
                        method: "GET",
                        path: "/reports/announcements-summary",
                        handler: "announcement.getSummary",
                        config: { auth: false },
                },
        ],
};
