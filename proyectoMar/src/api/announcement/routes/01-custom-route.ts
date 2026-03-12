export default {
        routes: [
                {
                        method: "GET",
                        path: "/announcements/frequently-updated",
                        handler: "announcement.getAnnouncementsFiveOrHigher",
                        config: {
                                policies: [],
                                middlewares: [],
                                auth: false,
                        },
                },

                {
                        method: "POST",
                        path: "/announcements/reset-update-count/:id",
                        handler: "announcement.resetCount",
                        config: {
                                policies: [],
                                middlewares: [],
                                auth: false,
                        },
                },
        ],
};
