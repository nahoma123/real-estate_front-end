import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Grid } from "@mui/material";

interface AdminDrawerProps {
  children: ReactNode;
}

function AdminDrawer({ children }: AdminDrawerProps) {
  return (
    <Box display={"flex"}>
      <Box flexGrow={1}>
        <Drawer
          variant="permanent"
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 250,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
        >
          <List>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Properties" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Pricing" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary="Apartments" />
            </ListItemButton>
          </List>
        </Drawer>
      </Box>
      <Box flexGrow={5}>
        {children}
      </Box>
    </Box>
  );
}

export { AdminDrawer };
