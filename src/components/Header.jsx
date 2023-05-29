import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar"
import { Box, Button, Container, Divider, Stack } from "@mui/material";
import { addIcon } from "../assets/images";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const linkStyle = {
    textDecoration: "none",
};
function Header() {
    return (
        <>
            
            <div class="top-header"></div>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: "92px",
                    }}
                >
                    <div className="header-img-wrapper"><img src={addIcon} className='headerimg' alt="" /></div>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Stack
                            direction="row"
                            spacing={1}
                            divider={<Divider orientation="vertical" flexItem />}
                        >
                            <Link to="/login" style={linkStyle}>
                                <Button
                                    variant="text"
                                    color="error"
                                    sx={{ textTransform: "capitalize" }}
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register" style={linkStyle}>
                                <Button
                                    variant="text"
                                    color="error"
                                    sx={{ textTransform: "capitalize" }}
                                >
                                    Register
                                </Button>
                            </Link>
                        </Stack>
                        <Link to="/cart" style={linkStyle}>
                            <Button
                                variant="outlined"
                                color="error"
                                sx={{ textTransform: "capitalize" }}
                                startIcon={<ShoppingCartIcon style={{ color: "#f14d54" }} />}
                            >
                                <span style={{ color: "#f14d54", marginRight: "5px" }}>0</span>
                                Cart
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
            <SearchBar />


        </>
    )
}

export default Header;