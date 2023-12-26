import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { HouseRounded, } from "@mui/icons-material";
import { Alert, Box, Button, Divider, Grid, Paper, Snackbar, Typography, lighten, useTheme, } from "@mui/material";
import { VALUATIONS } from "../../constants/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../utils/getRequest";
import CancelBookingDialogDemo from "./cancelbooking";
import RearrangeBookingDialogDemo from "./rearrage";
const CustomListItem = ({ address, status }) => {
    return (_jsxs(Grid, { container: true, children: [_jsx(Grid, { item: true, xs: 2, display: "flex", justifyContent: "center", alignItems: "center", children: _jsx(HouseRounded, { color: "disabled", fontSize: "large" }) }), _jsx(Grid, { item: true, xs: 10, children: _jsxs(Box, { sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                    }, children: [_jsx(Typography, { fontSize: "1em", fontWeight: "bolder", children: address }), _jsx(Typography, { fontSize: "0.9em", fontWeight: "bold", children: status })] }) })] }));
};
const ValuationListItem = ({ id, address, refreshPage, time, handleError, handleSuccess, }) => {
    let timeD = new Date(time || "");
    return (_jsxs(Grid, { container: true, paddingTop: "10px", paddingBottom: "10px", children: [_jsxs(Grid, { item: true, xs: 12, padding: 2, paddingTop: 1, children: [_jsx(Typography, { fontWeight: "bolder", variant: "body1", children: "Valuation Visit" }), _jsxs(Box, { sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                        }, children: [_jsx(Typography, { variant: "body1", fontWeight: "bolder", children: address }), _jsx(Box, { display: "flex", justifyContent: "center", width: "100%", margin: 2, children: _jsx(Typography, { variant: "h6", align: "left", textAlign: "center", fontWeight: "1000", style: {
                                        display: "inline",
                                        padding: "5px",
                                        // backgroundColor: primaryColor,
                                        color: "black",
                                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) calc(100% - 5px), #948c1e calc(100% - 5px), #948c1e 100%, rgba(0, 0, 0, 0) 100%)",
                                    }, children: `${timeD.toDateString()} at ${timeD.toLocaleTimeString("en-GB", {
                                        hour12: false,
                                    })}` }) })] })] }), _jsxs(Box, { sx: {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: [_jsx(CancelBookingDialogDemo, { refreshPage: refreshPage, id: id, handleSuccess: handleSuccess, handleError: handleError }), _jsx(RearrangeBookingDialogDemo, { currentPreferredTime: time, refreshPage: refreshPage, id: id, handleSuccess: handleSuccess, handleError: handleError })] })] }));
};
const LandLordBody = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [userProperties, setUserProperties] = useState();
    const [activeValuations, setActiveValuations] = useState();
    useEffect(() => {
        setUserProperties([
            {
                address: "Address 12, LimbCity",
                status: "Off Market",
                emailAddress: "nahomasnake12@gmail.com",
            },
        ]);
    }, []);
    const [loading, setLoading] = useState(false);
    async function handleFilter() {
        try {
            setLoading(true);
            const currentDate = new Date();
            const currentDateTimeUTC = currentDate.toISOString();
            const filters = [
                {
                    field: "preferred_time",
                    operator: "gte",
                    value: currentDateTimeUTC,
                },
                {
                    field: "status",
                    operator: "=",
                    value: "ACTIVE",
                },
            ];
            const res = await getRequest(VALUATIONS, 1, 10, filters);
            setLoading(false);
            setActiveValuations(res?.data);
            console.log("PropertiesData", res);
        }
        catch (error) { }
    }
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null); // State variable for error message
    const [isSnackBarOpen, setSnackBarOpen] = useState(false);
    const [error, setError] = useState(null); // State variable for error message
    function handleError(errorMessage) {
        setError(errorMessage);
        setSnackBarOpen(true);
    }
    function handleSuccess(message) {
        setSuccessMessage(message);
        setIsSuccess(true);
    }
    useEffect(() => {
        handleFilter();
    }, [isSuccess]);
    return (_jsx(Paper, { sx: {
            marginBottom: "50px",
            marginTop: "50px",
            padding: "16px",
            width: "100%",
        }, children: userProperties?.map(function (item, i) {
            return (_jsxs(_Fragment, { children: [_jsx(CustomListItem, { address: item.address, status: item.status }), _jsx(Divider, { sx: {
                            marginLeft: "5%",
                            marginRight: "5%",
                            marginTop: "10px",
                            marginBottom: "10px",
                        } }), _jsxs(Box, { children: [activeValuations && activeValuations?.length > 0 ? (_jsx(Typography, { fontSize: 30, sx: { margin: "2%", marginTop: "50px", fontWeight: "bold" }, children: "Up Next" })) : (_jsx(_Fragment, {})), _jsx(Paper, { sx: {
                                    margin: "5%",
                                    marginBottom: "0",
                                    backgroundColor: lighten(theme.palette.action.disabledBackground, 0.95),
                                }, children: activeValuations?.map((val) => {
                                    return (_jsx(_Fragment, { children: _jsx(ValuationListItem, { refreshPage: handleFilter, id: val.real_estate_id || "", address: val.address, time: val.preferred_time, handleSuccess: handleSuccess, handleError: handleError }) }));
                                }) })] }), _jsx(Box, { display: "flex", alignContent: "center", justifyContent: "center", children: _jsx(Button, { variant: "outlined", fullWidth: true, sx: { margin: "20px" }, onClick: () => navigate("/book_valuation"), children: "Book Valuation" }) }), _jsx(Snackbar, { open: isSuccess, autoHideDuration: 6000, onClose: () => setIsSuccess(false), message: "Valuation updated", children: _jsx(Alert, { severity: "success", children: "Valuation updated!" }) }), _jsx(Snackbar, { open: isSnackBarOpen, autoHideDuration: 6000, onClose: () => setSnackBarOpen(false), message: error, children: _jsx(Alert, { severity: "error", children: error }) })] }));
        }) }));
};
export { LandLordBody };
