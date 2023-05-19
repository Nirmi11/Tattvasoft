import React from 'react'
// import { Link } from 'react-router-dom'
// import Header from '../componenet/Header'
// import Footer from '../componenet/Footer';
import { addIcon } from '../assets/images';
import {Button, TextField,styled} from '@mui/material'

function Login() {
  // day 3 task adding js in html
  // const name = "john";
  // const styles = {
  //   Link: {
  //     fontSize: '20px',
  //     lineHeight: '24px',
  //     color: 'green'
  //   }

  // }

  const CssTextField = styled(TextField)({

    '& .MuiInputBase-root': {
        color: 'red',
    },
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});
  return (
    <div>
      <h1>Login component</h1>
      {/* <Header /> */}
      {/* {name} <br /> */}
      {/* <Link to="/register" className="link">Register</Link> */}
      <img src={addIcon} alt="" /><br/><br/>
      {/* inline css */}
      {/* <Link to="/register" style={styles.Link}>Register</Link> */}
      {/* <Footer /> */}

      <Button variant="text">Text</Button><br/>
<Button variant="contained">Contained</Button><br/><br/>
<Button variant="outlined">Outlined</Button><br/><br/>
<TextField id="outlined-basic" label="Outlined" variant="outlined" /><br/><br/>
<TextField id="filled-basic" label="Filled" variant="filled" /><br/><br/>
<TextField id="standard-basic" label="Standard" variant="standard" /><br/><br/>
<CssTextField label="Custom CSS" id="custom-css-outlined-input" />

    </div>
  )
}
export default Login