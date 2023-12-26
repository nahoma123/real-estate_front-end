import { PROPERTIES } from "../constants/api";
import { callApi } from "../services/apiService";
export async function getRequest(route, page = 1, perPage = 10, filter, sort) {
    let apiUrl = `${route}?page=${page}&per_page=${perPage}`;
    if (filter) {
        const filterString = JSON.stringify(filter);
        apiUrl += `&filter=${encodeURIComponent(filterString)}`;
    }
    if (sort) {
        const sortString = JSON.stringify(sort);
        apiUrl += `&sort=${encodeURIComponent(sortString)}`;
    }
    const response = await callApi(apiUrl, "GET");
    return response;
}
export async function getPropertyById(prop_id) {
    const filters = [
        {
            field: "property_id",
            operator: "=",
            value: prop_id,
        },
    ];
    return getRequest(PROPERTIES, 1, 1, filters).then((prop) => {
        return prop?.data[0];
    });
}
