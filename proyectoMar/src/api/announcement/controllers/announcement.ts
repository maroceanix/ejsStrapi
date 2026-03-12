/**
 * announcement controller
 */

import { factories } from "@strapi/strapi";
export default factories.createCoreController(
        "api::announcement.announcement",
        ({ strapi }) => ({
                async getAnnouncementsFiveOrHigher(ctx) {
                        try {
                                const total = await strapi
                                        .documents("api::announcement.announcement")
                                        .findMany({
                                                filters: {
                                                        updateCount: {
                                                                $gt: 5,
                                                        },
                                                },
                                                fields: ["title", "slug", "updateCount"],
                                        });

                                ctx.body = total;
                        } catch (err) {
                                ctx.throw(500, err);
                        }
                },
                async resetCount(ctx) {
                        try {
                                const updated = await strapi
                                        .documents("api::announcement.announcement")
                                        .update({
                                                documentId: ctx.params,
                                                data: {
                                                        updateCount: 0,
                                                },
                                        });

                                ctx.body = updated;
                        } catch (err) {
                                ctx.throw(500, err);
                        }
                },
        })
);
