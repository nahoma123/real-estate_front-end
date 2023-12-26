import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Box, Typography, LinearProgress, Grid, styled, Button, Divider, } from "@mui/material";
import PropertyFilter from "./propertiesFilter";
import { handleFormSubmit } from "../../services/findPropertyFilter";
import SavingsCalculator from "../../components/presentational/saving/saving";
import PropertyCard from "./property";
const BlackBackground = styled("div")({
    backgroundColor: "#333",
    color: "#fff",
    margin: "10px",
});
function PropertyFilterSection({ onSubmit }) {
    return (_jsx(Box, { marginTop: 3, marginBottom: 4, children: _jsx(PropertyFilter, { onSubmit: onSubmit }) }));
}
function LoadingSection() {
    return (_jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 4, paddingBottom: 4, children: _jsx(LinearProgress, {}) }));
}
function PropertiesHeaderSection({ filterRequest, count }) {
    return (_jsxs(BlackBackground, { children: [_jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 1, paddingBottom: 1, children: _jsxs(Typography, { variant: "h6", children: ["Properties to rent in location: [", filterRequest?.address, "]"] }) }), _jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 1, paddingBottom: 1, children: _jsxs(Typography, { variant: "body1", display: "block", children: ["Total Properties Found in location: [", count, "]"] }) })] }));
}
function VisitingSection() {
    return (_jsx(BlackBackground, { children: _jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 4, paddingBottom: 4, children: _jsx(Typography, { variant: "h6", children: "Enter location and search for properties!" }) }) }));
}
function ConnectionErrorSection() {
    return (_jsx(BlackBackground, { children: _jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 4, paddingBottom: 4, children: _jsx(Typography, { variant: "h6", children: "Connection error, try again later!" }) }) }));
}
function PropertyGridSection({ properties }) {
    return (_jsx(Grid, { container: true, children: properties?.map((data) => (_jsx(Grid, { md: 4, xs: 12, sm: 6, item: true, padding: 2, children: _jsx(PropertyCard, { property: data }) }, data.id))) }));
}
function SavingsCalculatorSection() {
    return _jsx(SavingsCalculator, {});
}
const FindProperties = () => {
    const [loading, setLoading] = useState(false);
    const [visiting, setVisiting] = useState(true);
    const [properties, setProperties] = useState([]);
    const [metaData, setMetaData] = useState({});
    const [err, setError] = useState("");
    const [filterRequest, setFilterRequest] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMore, setShowMore] = useState(false);
    async function handleFilter(data) {
        setVisiting(false);
        try {
            setLoading(true);
            const res = await handleFormSubmit(data, 1);
            setFilterRequest(data);
            setProperties(res?.data);
            setMetaData(res?.meta_data);
            console.log("print", metaData);
            setCurrentPage(1);
            setShowMore(res?.meta_data?.TotalPages > 1);
            setLoading(false);
            setError("");
            console.log("PropertiesData", res);
        }
        catch (error) {
            console.log("esaese", error);
            setError("err");
        }
    }
    async function handleShowMore() {
        try {
            setLoading(true);
            const res = await handleFormSubmit(filterRequest, currentPage + 1);
            setProperties((prevProperties) => [...prevProperties, ...res?.data]);
            setCurrentPage((prevPage) => prevPage + 1);
            setShowMore(res?.meta_data?.TotalPages > currentPage + 1);
            setLoading(false);
            setError("");
            console.log("PropertiesData", res);
        }
        catch (error) {
            console.log("esaese", error);
            setError("err");
        }
    }
    let headerSection = null;
    if (loading) {
        headerSection = _jsx(LoadingSection, {});
    }
    else if (properties?.length > 0) {
        headerSection = (_jsx(PropertiesHeaderSection, { count: metaData?.TotalCount, filterRequest: filterRequest }));
    }
    else if (visiting) {
        headerSection = _jsx(VisitingSection, {});
    }
    else if (err) {
        headerSection = _jsx(ConnectionErrorSection, {});
    }
    else {
        headerSection = _jsx(PropertiesHeaderSection, { filterRequest: filterRequest });
    }
    return (_jsxs(Box, { marginTop: "100px", children: [_jsx(Container, { children: _jsx(PropertyFilterSection, { onSubmit: handleFilter }) }), _jsx(Divider, {}), _jsxs(Container, { children: [headerSection, _jsx(PropertyGridSection, { properties: properties }), showMore && (_jsx(Box, { display: "flex", justifyContent: "center", marginTop: 4, children: _jsx(Button, { variant: "outlined", color: "primary", fullWidth: true, onClick: handleShowMore, children: "Show More" }) }))] }), _jsx(Divider, {}), _jsx(Container, { children: _jsxs(Grid, { container: true, paddingBottom: 1, marginTop: 1, marginBottom: 5, direction: "row", children: [_jsx(Grid, { item: true, md: 6, container: true, alignItems: "center", direction: "column", justifyContent: "center", children: _jsx(Typography, { variant: "h4", align: "center", textAlign: "left", children: "See how much you could save per year when you let your home for free" }) }), _jsx(Grid, { item: true, container: true, md: 6, paddingLeft: 4, children: _jsx(SavingsCalculatorSection, {}) })] }) })] }));
};
export default FindProperties;
