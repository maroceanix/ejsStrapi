import { factories } from "@strapi/strapi";
export default factories.createCoreController(
        "api::announcement.announcement",
        ({ strapi }) => ({
                async getSummary(ctx) {
                        try {
                                const titulos = await strapi
                                        .documents("api::announcement.announcement")
                                        .findMany({
                                                fields: ["title"],
                                        });
                                const titulosArray = titulos.map((item) => item.title);
                                const cantidad = titulosArray.length;
                                const textoFinal = titulosArray.join(", ");

                                ctx.body = {
                                        total: cantidad,
                                        titles: textoFinal,
                                };
                        } catch (err) {
                                ctx.throw(500, err);
                        }
                },
        })
);
