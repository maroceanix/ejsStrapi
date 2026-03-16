// export default{

//     async afterCreate(event){
//         if(event.result.proffesor.id){
//             await updateProfessorCount(event.result.professor.documentId, 1);
//         }
//     },

//     async beforeUpdate(event){

//     }

// };

// async function updateProfessorCount(docId:string, increment:number) {
//     const teacher: any = await strapi.documents('api::professor.professor').findOne({
//     documentId: docId,
//   });

//   if (!teacher) return;

//   await strapi.documents('api::professor.professor').update({
//     documentId: docId ,
//     data: {
//       classes_count: teacher.classes_count+increment,
//     },
//   });

// }
