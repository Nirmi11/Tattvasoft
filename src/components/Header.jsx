import React from "react";

import Searchbar from "../components/SearchBar";
import { addIcon } from "../assets/images";
import IconButton from '@mui/material/IconButton';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";
function Header() {
    return (
        <>
            <div className="headeraligntop">
                <img src={addIcon} className='headerimg' alt="" />
                
                     <Button href='/login' variant="text" color='error' className="link">Login</Button> 
                     <Button href='/register' variant="text" color='error' className="link">Register</Button>
                     <Button variant="outlined" className="link" href="/cart">
                        <IconButton color="error">
                                  <AddShoppingCartIcon/>
                         </IconButton><span style={{color:"red" ,fontSize:"20px" ,paddingRight:"2px"}}>0</span>Cart</Button>
                
            </div>
            <div className="headeralignbottom">
                <div className="items">
                    <Searchbar />
                    <span style={{marginLeft:"20px",marginTop:"10px"}}>
                    <Button  variant="contained" style={{ backgroundColor: "#80bf32",marginRight:"23px",height:"40px",paddingTop:"20px"}}>Search</Button>
                    <Button  variant="contained"style={{height:"40px",paddingLeft:"33px"}} >Cancel</Button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header;