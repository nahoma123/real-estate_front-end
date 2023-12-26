import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Container, Box, Typography, Grid, styled, Divider, } from "@mui/material";
import { handleFormSubmit } from "../../services/findPropertyFilter";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { useParams } from "react-router-dom";
import { ImageCarousel } from "../../components/common/carousel";
import { MapView } from "../../components/common/map";
const BlackBackground = styled("div")({
    backgroundColor: "#333",
    color: "#fff",
    margin: "10px",
});
const PropertyDetails = () => {
    const { property_id } = useParams();
    const [property, setProperty] = useState();
    const [loading, setLoading] = useState(false);
    const [visiting, setVisiting] = useState(true);
    const [properties, setProperties] = useState([]);
    const [err, setError] = useState("");
    const [filterRequest, setFilterRequest] = useState();
    async function handleFilter(data) {
        setVisiting(false);
        try {
            setLoading(true);
            const res = await handleFormSubmit(data, 1);
            setFilterRequest(data);
            setProperties(res?.data);
            if (res?.data.length !== 0) {
                setProperty(res?.data[0]);
            }
            setLoading(false);
            setError("");
            console.log("PropertiesData", res);
        }
        catch (error) {
            console.log("esaese", error);
            setError("err");
        }
    }
    useEffect(() => {
        let prId = property_id ? property_id : "";
        let pf = {
            propertyId: prId,
            address: "",
            images: "",
            propertyTypes: [],
            mustHaves: [],
            furnished: "",
            studentProperties: false,
        };
        handleFilter(pf);
    }, []);
    return (_jsxs(Box, { marginTop: "100px", children: [_jsx(Container, { children: _jsxs(Box, { marginTop: 3, marginBottom: 4, children: [_jsx(Box, { marginBottom: 2, children: _jsx(Typography, { fontSize: "2em", children: "Property Details" }) }), _jsx(Box, { marginBottom: 1, children: _jsx(Divider, {}) }), _jsxs(Grid, { container: true, children: [_jsx(Grid, { item: true, md: 3, sm: 3, children: _jsxs(Box, { padding: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", children: [_jsx(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", justifyItems: "center", children: _jsxs(Box, { children: [_jsxs(Typography, { variant: "h5", component: "div", display: "inline", fontWeight: "bolder", children: [_jsx(CurrencyPoundIcon, {}), " ", property?.amount] }), _jsx(Typography, { display: "inline", paddingLeft: 1, variant: "h6", fontWeight: "bolder", children: "pcm" })] }) }), _jsxs(Box, { display: "flex", padding: 1, children: [_jsxs(Box, { flexGrow: 1, children: [_jsxs(Typography, { variant: "body1", component: "div", textAlign: "right", children: ["Reception: ", property?.reception_number] }), _jsxs(Typography, { variant: "body1", component: "div", textAlign: "right", children: ["Beds: ", property?.bed_number] })] }), _jsx(Box, { flexGrow: 1, children: _jsxs(Typography, { variant: "body1", component: "div", textAlign: "right", children: ["Bath Rooms: ", property?.bath_number] }) })] }), _jsx(Box, { children: _jsxs(Typography, { variant: "h6", component: "div", children: ["Address: ", property?.address] }) }), _jsx(Box, { children: _jsxs(Typography, { variant: "body1", component: "div", children: ["Property Type: ", property?.property_type] }) }), _jsx(Box, { marginTop: 4, children: _jsxs(Typography, { variant: "body1", component: "div", children: ["Property Details: ", property?.property_details] }) })] }) }), _jsx(Grid, { item: true, md: 9, sm: 9, children: _jsx(ImageCarousel, { images: property?.images.split(",") }) })] })] }) }), _jsxs(Container, { children: [_jsx(Box, { marginBottom: 2, children: _jsx(Typography, { fontSize: "2em", children: "Property Location" }) }), _jsx(Box, { marginBottom: 1, children: _jsx(Divider, {}) })] }), _jsx(Container, { children: _jsx(Box, { m: 4, children: _jsx(MapView, { address: property?.address }) }) })] }));
};
export default PropertyDetails;
