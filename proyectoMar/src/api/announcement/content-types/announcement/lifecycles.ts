export default {
        async beforeCreate(event) {
                if (!event.params.data.title) return;

                let titulo = event.params.data.title.trim();
                let tituloDividido: string[] = [...titulo].filter(
                        (char) => !/\d/.test(char),
                );

                event.params.data.slug = tituloDividido.join(" - ");

                if (tituloDividido.length > 0) {
                        tituloDividido[0] = tituloDividido[0].toUpperCase();
                }

                event.params.data.title = tituloDividido.join("");
                event.params.data.updateCount = 0;
        },

        async afterCreate(event) {
                console.log("Simulating email: new announcement created");
        },

        async beforeUpdate(event) {
                const { data, where } = event.params;
                if (!data.title) return;

                const documentoConAntiguoTitulo = await strapi
                        .documents("api::announcement.announcement")
                        .findFirst({
                                documentId: where.documentId,
                                fields: ["title", "updateCount"],
                        });

                if (
                        documentoConAntiguoTitulo &&
                        data.title !== documentoConAntiguoTitulo.title
                ) {
                        let tituloNuevo = data.title.trim();
                        let tituloDividido: string[] = [...tituloNuevo].filter(
                                (char) => !/\d/.test(char),
                        );

                        event.params.data.slug = tituloDividido.join(" - ");
                        event.params.data.title = tituloDividido.join("").toUpperCase();

                        const previoCount = documentoConAntiguoTitulo.updateCount || 0;
                        event.params.data.updateCount = previoCount + 1;
                }
        },

        async afterUpdate(event) {
                console.log("Simulating email: announcement updated!!:)");
        },
};
