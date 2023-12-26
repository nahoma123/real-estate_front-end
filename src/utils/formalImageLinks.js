import { BASE_URL } from "../constants/api";
// http://localhost:8001/files/1701436673029129555.png
export function formatImage(img) {
    let imgArray = img?.split(",");
    return imgArray.map((imgLink) => {
        return `${BASE_URL}files/${imgLink}`;
    });
}
