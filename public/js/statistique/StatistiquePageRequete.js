
class ProductsService {
    // initialise the data at the url string

    async function performGetRequest() {

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

export default ProductsService;
