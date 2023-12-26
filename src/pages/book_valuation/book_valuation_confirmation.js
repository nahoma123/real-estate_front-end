import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const ListItem = ({ text }) => {
    return (_jsxs(Box, { m: 3, children: [_jsx(CheckIcon, { display: "inline", sx: {
                    marginRight: "10px",
                } }), _jsx(Typography, { variant: "h6", display: "inline", children: text })] }));
};
const BookValuationRegistrationConfirmation = () => {
    const [selectedDatetime, setSelectedDatetime] = useState("");
    const [address, setAddress] = useState("");
    const [formattedDate, setFormattedDate] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        let address = sessionStorage.getItem("address");
        let selectedDateTime = sessionStorage.getItem("selected_datetime");
        setAddress(address === null ? "" : address);
        setSelectedDatetime(selectedDateTime === null ? "" : selectedDateTime);
        const selectedDatetime = new Date();
        const options = {
            day: "numeric",
            month: "long",
        };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        const formattedDate = formatter.format(selectedDatetime);
        setFormattedDate(formattedDate);
        if (address == null) {
            setAddress("");
        }
        else {
            setAddress(address);
        }
    }, []);
    return (_jsx(Box, { children: _jsx(Grid, { container: true, justifyContent: "center", alignItems: "center", spacing: 2, children: _jsxs(Grid, { item: true, sm: 8, children: [_jsx(Box, { paddingTop: 5, paddingBottom: 2, margin: 3, children: _jsxs(Grid, { justifyContent: "center", children: [_jsx(Typography, { sx: { fontWeight: "bolder", color: "black" }, variant: "h6", align: "left", gutterBottom: true, children: "You're booked In!" }), _jsxs(Typography, { align: "left", fontWeight: "bold", style: { display: "inline" }, children: ["We will value ", address, " on"] }), _jsxs(Typography, { variant: "h4", align: "center", fontWeight: "1000", marginTop: 2, style: {
                                        padding: "5px",
                                        // backgroundColor: primaryColor,
                                        color: "black",
                                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) calc(100% - 5px), #948c1e calc(100% - 5px), #948c1e 100%, rgba(0, 0, 0, 0) 100%)",
                                    }, children: [formattedDate, " at", " ", new Date(selectedDatetime).toLocaleTimeString()] })] }) }), _jsx(Box, { marginTop: 5, margin: 3, children: _jsx(Typography, { variant: "h5", children: "Login to Freelets to:" }) }), _jsx(ListItem, { text: "Meet your Freelet agent who will value your home" }), _jsx(ListItem, { text: "Meet any changes to your valuation appointment" }), _jsx(Box, { margin: 3, children: _jsx(Button, { type: "submit", variant: "contained", style: { borderRadius: "0px", marginTop: "20px" }, fullWidth: true, onClick: () => navigate("/user_account"), startIcon: _jsx(Login, {}), children: "Login to Freelets" }) })] }) }) }));
};
export { BookValuationRegistrationConfirmation };
