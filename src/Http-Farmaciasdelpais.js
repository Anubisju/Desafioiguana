import axios from "axios";

export default axios.create({
    baseURL: "https://farmanet.minsal.cl/index.php/ws/getLocales",
    headers: {
        "Content-type": "application/json"
    }
})
