import axios from "axios";
export default axios.create({
    baseURL: "https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos",
    headers: {
        "Content-type": "application/json"
    }
});