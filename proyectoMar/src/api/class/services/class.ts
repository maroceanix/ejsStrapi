/**
 * class service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::class.class", ({ strapi }) => ({
        async addProfToClass(classDocId: string, tecaherDocIds: string[]) {
                const clase = await strapi.documents("api::class.class").findOne({
                        documentId: classDocId,
                        populate: ["professors"],
                });

                if (!clase) throw new Error("La clase con ese documentId no existe");

                const profesoresDeClase =
                        clase.professors.map((p: any) => p.documentId) || [];
                const profesoresActualizados = Array.from(
                        new Set([...profesoresDeClase, ...tecaherDocIds]),
                );

                const claseActualizada = await strapi
                        .documents("api::class.class")
                        .update({
                                documentId: classDocId,
                                data: {
                                        professors: profesoresActualizados,
                                },
                                populate: ["professors"],
                        });
                return claseActualizada;
        },
}));
