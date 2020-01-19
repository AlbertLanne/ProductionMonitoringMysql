import axios from "axios";


const url = "http://localhost:4000/api/informations";

class informationsinformations {
    // initialise the data at the url string
    static getinformations() {
                    const res = axios.get(url);
                    const data = res.data;
                    return data;
    }
    // static getinformations() {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const res = await axios.get(url);
    //             const data = res.data;
    //             resolve(
    //                 data.map(post => ({
    //                     ...post,
    //                     createdAt: new Date(post.createdAt)
    //                 }))
    //             );
    //         }
    //         catch (err) {
    //             reject(err);
    //         }
    //     });
    // }

    // static methode create

    // static insertinformations(text) {
    //     return axios.post(url, {
    //         text
    //     });
    // }
    //
    // // static methode delete
    //
    // static deleteinformations(id) {
    //     return axios.delete('${url}/${id}');
    // }
}

export default informationsinformations;





















