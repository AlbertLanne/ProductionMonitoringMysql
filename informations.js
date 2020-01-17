import axios from "axios";

const url = "http://localhost:4000/api/products";

class Productsinformations {
    // initialise the data at the url string

    static getProducts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            }
            catch (err) {
                reject(err);
            }
        });
    }

    // static methode create

    static insertProducts(text) {
        return axios.post(url, {
            text
        });
    }

    // static methode delete

    static deleteProducts(id) {
        return axios.delete('${url}/${id}');
    }
}

export default Productsinformations;
