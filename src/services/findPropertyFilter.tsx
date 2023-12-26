import { callApi } from "./apiService";

export async function sendFilterRequest(
  filterString: string,
  page: number = 1
): Promise<any> {
  const apiUrl = `/properties?filter=${encodeURIComponent(
    filterString
  )}&page=${page}`;
  const response = await callApi<void>(apiUrl, "GET");
  return response;
}

export interface PropertyData {
  inspected: boolean;
  id: number;
  property_id: string;
  status: string;
  user_id: string;
  amount: number;
  address: string;
  coordinate: string;
  created_at: string;
  epc: string;
  features: string;
  furnished: string;
  bath_number: number;
  bed_number: number;
  images: string;
  is_student_property: boolean;
  location: string;
  next_inspection_date: string;
  postal_code: string;
  property_details: string;
  property_type: string;
  reception_number: number;
  updated_at: string;
}

export interface PropertyForm {
  address?: string;
  images?: string;
  minAmount?: number;
  maxAmount?: number;
  minBeds?: number;
  maxBeds?: number;
  propertyTypes?: string[];
  mustHaves?: string[];
  furnished?: string;
  propertyId?: string;
  studentProperties?: boolean;
}

export const handleFormSubmit = async (data: PropertyForm | null, page: number) => {
  // Create the filter array based on the form data
  const filterArray = [];
  if (data ===null){
    data = {}
  }
  // Add address filter
  if (data.address) {
    filterArray.push({
      field: "address",
      value: data.address,
      operator: "contains",
    });
  }

  // Add other filters as needed
  // Example: Add mustHaves filter
  if (data.mustHaves && data.mustHaves?.length > 0) {
    data.mustHaves.forEach((value) => {
      filterArray.push({
        field: "features",
        value: value,
        operator: "contains",
      });
    });
  }
  // Example: Add minAmount filter
  if (data.minAmount) {
    filterArray.push({
      field: "amount",
      value: data.minAmount,
      operator: "gte",
    });
  }

  // Example: Add maxAmount filter
  if (data.maxAmount) {
    filterArray.push({
      field: "amount",
      value: data.maxAmount,
      operator: "lte",
    });
  }

  if (data.propertyId) {
    filterArray.push({
      field: "property_id",
      value: data.propertyId,
      operator: "contains",
    });
  }

  if (data.furnished && data.furnished !== "any") {
    filterArray.push({
      field: "furnished",
      value: data.furnished,
      operator: "=",
    });
  }

  if (data.studentProperties) {
    filterArray.push({
      field: "student_properties",
      value: data.studentProperties,
      operator: "=",
    });
  }

  if (data.propertyTypes && data.propertyTypes.length > 0) {
    const propertyTypeValue = data.propertyTypes.join("||");
    filterArray.push({
      field: "property_type",
      value: propertyTypeValue,
      operator: "contains",
    });
  }

  if (data.minBeds) {
    filterArray.push({
      field: "bed_number",
      value: data.minBeds,
      operator: "gte",
    });
  }

  // Example: Add maxAmount filter
  if (data.maxBeds) {
    filterArray.push({
      field: "bed_number",
      value: data.maxBeds,
      operator: "lte",
    });
  }
  filterArray.push({
    field: "status",
    value: "Active",
    operator: "=",
  });
  // ...

  // Convert the filter array to JSON string
  const filterString = JSON.stringify(filterArray);
  console.log(filterString);

  return sendFilterRequest(filterString, page);
};
