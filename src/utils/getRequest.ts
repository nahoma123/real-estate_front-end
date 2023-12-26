import { PROPERTIES } from "../constants/api";
import { callApi } from "../services/apiService";

export interface FilterType {
  field: string;
  value: number | string;
  operator: "contains" | "gte" | "lte" | "=";
}

export async function getRequest(
  route: string,
  page: number = 1,
  perPage: number = 10,
  filter?: FilterType[],
  sort?: { [key: string]: string }
): Promise<any> {
  let apiUrl = `${route}?page=${page}&per_page=${perPage}`;

  if (filter) {
    const filterString = JSON.stringify(filter);
    apiUrl += `&filter=${encodeURIComponent(filterString)}`;
  }

  if (sort) {
    const sortString = JSON.stringify(sort);
    apiUrl += `&sort=${encodeURIComponent(sortString)}`;
  }

  const response = await callApi<void>(apiUrl, "GET");
  return response;
}

export async function getPropertyById(prop_id: string) {
  const filters: FilterType[] = [
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
