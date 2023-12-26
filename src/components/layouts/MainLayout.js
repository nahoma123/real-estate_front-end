import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "../presentational/header/Header";
import Footer from "./footer/footer";
import { Box } from "@mui/material";
import { ModalProvider } from "../../context/modal_container";
// const StyledBox = styled(Container)({
//   marginTop: "64px", // Adjust this value to match the height of your AppBar
// });
function MainLayout({ children }) {
    return (_jsx("div", { children: _jsxs(ModalProvider, { children: [_jsx(Header, {}), _jsx(Box, { sx: { marginTop: "64px" }, children: children }), _jsx(Footer, {})] }) }));
}
export { MainLayout };
