import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, TextField, Box, Typography, useMediaQuery, Button, } from "@mui/material";
import { Toc, } from "@mui/icons-material";
import { postcodeValidator, } from "postcode-validator";
import { useSnackbar } from "notistack";
function BookValuation({}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [postcode, setPostcode] = useState("");
    const [address, setAddress] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const postcodeValue = searchParams.get("value") || "";
        setPostcode(postcodeValue);
    }, [location.search]);
    const handlePostcodeChange = (event) => {
        setPostcode(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    // const handleFindAddress = async () => {
    //   try {
    //     const response = await axios.get(GetAddressUrl(postcode));
    //     const result = response?.data?.suggestions;
    //     console.log("Result-", result);
    //     if (result && result.length > 0) {
    //       setAddresses(result); // Update addresses with the list of address objects
    //       setIsModalOpen(true);
    //     } else {
    //       setIsModalOpen(false);
    //       setAddresses([]); // Clear the addresses if there are no results
    //     }
    //   } catch (error) {
    //     console.error("Error fetching addresses:", error);
    //     setIsModalOpen(false);
    //   }
    // };
    const handleAddressClick = (address) => {
        if (!postcode || !address) {
            enqueueSnackbar("fill both postcode and address to proceed", {
                variant: "error",
            });
            // Show an error message or perform any necessary action
            return;
        }
        // Validate the postcode format
        if (!postcodeValidator(postcode, "UK")) {
            console.log(postcode);
            // Show an error message or perform any necessary action
            enqueueSnackbar("postcode should be a valid postcode", {
                variant: "error",
            });
            return;
        }
        if (!(address.split(",").length >= 2)) {
            console.log("Address", address.split(",").length);
            enqueueSnackbar("please enter the full address", {
                variant: "error",
            });
            return;
        }
        sessionStorage.setItem("address", address);
        navigate(`/book_valuation_registration?value=${postcode}`);
    };
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (_jsx(Box, { children: _jsxs(Grid, { container: true, justifyContent: "center", alignItems: "center", spacing: 2, children: [_jsx(Grid, { md: 3, xs: 0 }), _jsxs(Grid, { item: true, sm: 6, children: [_jsx(Box, { paddingTop: 5, paddingBottom: 2, margin: 3, children: _jsxs(Grid, { justifyContent: "left", children: [_jsx(Typography, { sx: { fontWeight: "bold" }, variant: "h3", align: "left", gutterBottom: true, children: "Let's value your home" }), _jsx(Typography, { variant: "h5", align: "left", style: { display: "inline" }, children: "Book a no-obligation home valuation with our Strike agent:" })] }) }), _jsx(Box, { margin: 3, children: _jsx(TextField, { label: "Enter postcode", value: postcode, onChange: handlePostcodeChange, variant: "outlined", fullWidth: true }) }), _jsx(Box, { margin: 3, children: _jsx(TextField, { label: "Enter full Address", value: address, onChange: handleAddressChange, variant: "outlined", fullWidth: true }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(Box, { margin: 3, children: _jsx(Button, { endIcon: _jsx(Toc, {}), style: { borderRadius: "0px", width: "100%" }, variant: "contained", onClick: () => handleAddressClick(address), children: "Next" }) }) })] }), _jsx(Grid, { md: 3, xs: 0 })] }) }));
}
export { BookValuation };
