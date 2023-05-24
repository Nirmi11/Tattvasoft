import React from "react";
import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Header from "../components/Header";
import {useFormik} from "formik";
import { signUpSchema } from "./schemas/Index";

const initialValues = {
    fname: "",
    lname:"",
    email: "",
    password: "",
    confirmpassword: "",
  };
  
function Register(){ 
    //directly destructure the formik in values, errors...  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log( values );
        action.resetForm();
      },
    });
//   console.log( errors );
        return(
        <>
            <Header/>
            <h1>Login or Create an Account</h1>
            <form  onSubmit={handleSubmit}>
            <div className="Content">
            <table>
                <tr>
                    <td colSpan="2">
                    <h3>Personal Information</h3>
                    <hr />
                    <h6>Please enter following information to create your account</h6>
                    </td>
                </tr>
                    <tr>
                        <td>
                            <Box component="form" 
                            sx={{'& .MuiTextField-root': { m: 1, width: '700px'}}}
                            noValidate
                            autoComplete="off">
                                <TextField className="field"
                                required
                                id="outlined-required"
                                name="fname"
                                label="First Name"
                                value={values.fname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />{errors.fname && touched.fname ? (
                                    <p className="form-error">{errors.fname}</p>
                                  ) : null}
                            </Box>
                        </td>
                        <td>
                            <Box component="form"
                            sx={{'& .MuiTextField-root': { m: 1, width: '700px' },}}
                            noValidate
                            autoComplete="off"><TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            name="lname"
                            value={values.lname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />{errors.lname && touched.lname? (
                                <p className="form-error">{errors.lname}</p>
                              ) : null}
                            </Box>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Box component="form"
                            sx={{'& .MuiTextField-root': { m: 1, width: '700px' },}}
                            noValidate
                            autoComplete="off"><TextField
                            required
                            id="outlined-required"
                            name="email"
                            label="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />{errors.email && touched.email ? (
                                <p className="form-error">{errors.email}</p>
                              ) : null}
                            </Box>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        <h3>Login Information</h3>
                        <hr />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Box component="form"
                            sx={{'& .MuiTextField-root': { m: 1, width: '700px' },}}
                            noValidate
                            autoComplete="off">
                                <TextField
                                required
                                id="outlined-required-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                autoComplete="current-Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />{errors.password && touched.password ? (
                                    <p className="form-error">{errors.password}</p>
                                  ) : null}
                            </Box>
                        </td>
                        <td>
                            <Box component="form"
                            sx={{'& .MuiTextField-root': { m: 1, width: '700px' },}}
                            noValidate
                            autoComplete="off"><TextField
                            required
                            id="outlined-required"
                            name="confirmpassword"
                            label="Confirm Password*"
                            value={values.confirmpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />{errors.confirmpassword && touched.confirmpassword ? (
                                <p className="form-error">{errors.confirmpassword}</p>
                              ) : null}
                            </Box>
                        </td>
                    </tr>
                    <tr>
                        <td id="regbtn">
                        <Button variant="contained" type="submit"className="registernbtn">Register</Button>
                        </td>
                    </tr>
                </table>
            
            
            </div>
            </form>
            <Footer />
        </>
    );
}

export default Register;