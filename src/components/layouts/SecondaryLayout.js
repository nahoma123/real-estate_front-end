import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalProvider } from "../../context/modal_container";
import { Box, Container, Grid } from "@mui/material";
import { SecondaryHeader } from "../presentational/header/secondary_header";
function SecondaryLayout({ children, dynamicComponent }) {
    return (_jsx(ModalProvider, { children: _jsxs(Grid, { container: true, height: "100%", children: [_jsxs(Grid, { item: true, md: 8, children: [_jsx(SecondaryHeader, {}), _jsx(Container, { children: _jsx(Box, { marginTop: 15, height: "100%", children: children }) })] }), dynamicComponent && (_jsx(Grid, { item: true, md: 4, display: "center", container: true, justifyContent: "center", alignItems: "center", children: dynamicComponent }))] }) }));
}
export { SecondaryLayout };
