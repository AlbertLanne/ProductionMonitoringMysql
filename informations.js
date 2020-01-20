// import axios from "axios";
//
// //  DOCS POUR LES REQUETES HTTP POUR Create Update Delete la BDD -->  https://www.npmjs.com/package/axios
//
// const url = "http://localhost:4000/api/informations";
//
// class informationsinformations {
//
//
//
//     // static getinformations() {
//     //                 const res = axios.get(url);
//     //                 const data = res.data;
//     //                 return data;
//     // }
//
//     static getinformations() {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const res = await axios.get(url); // Requete de type HTTP "GET" sur l'URL de l'api
//                 const data = res.data;
//                 resolve(
//                     data.map(post => ({
//                         ...post,
//                         createdAt: new Date(post.createdAt)
//                     }))
//                 );
//             } catch (err) {
//                 reject(err);
//             }
//         });
//     }
//     static insertinformations(text) {
//         return axios.post(url, {
//             text
//         });
//     }
//
//     // static methode delete
//
//     static deleteinformations(id) {
//         return axios.delete('${url}/${id}');
//     }
// }
//
// export default informationsinformations;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
