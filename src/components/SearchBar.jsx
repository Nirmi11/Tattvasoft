

// import { Button, List, ListItem,TextField,Box } from "@mui/material";
// // import {Link} from 'react-router-dom';
// import bookService from "../pages/service/book.service";
// import SearchIcon from "@mui/icons-material/Search";
// // import shared from "../utils/shared";

// import React ,{useState,useEffect} from "react";
// function SearchBar() {
  
 
//    // const open=false;
//   const [query,setquery]=useState("");
//   const [bookList,setbookList]=useState([]);
//   const [openSearchResult,setOpenSearchResult]=useState([]);
  
  

//   const searchBook=async ()=>{
//     const res= await bookService.searchBook(query)
//     setbookList(res);
//   };
//   const search=()=>{
//     document.body.classList.add("search-results-open");
//      searchBook();
//      setOpenSearchResult(true);
//   };
//   useEffect(() => {
//     setOpenSearchResult(false);
//     document.body.classList.remove("search-results-open");
//   }, []);
  
//   return (
//     <div>

//     <div className="search-overlay" onClick={() => {
//       setOpenSearchResult(false);
//       document.body.classList.remove("search-results-open");
//     }}>

//     </div>
//     <Box
//       sx={{
//         height: "80px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "10px",
//         padding: "10px",
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <div className="search-container">


//         <div className="text-wrapper">
//           <TextField
//             id="text"
//             name="text"
//             placeholder="What are you looking for..."
//             variant="outlined"
//             value={query}
//             sx={{width: "422px"}}
//             onChange={(e) => setquery(e.target.value)}
//           />
//           {openSearchResult && (
//             <>
//               {bookList.length > 0 ? (
//                 <div className="product-listing">
//                   <List className="related-product-list">
//                     {bookList.map((item, i) => {
//                       return (
//                         <ListItem key={i}>
//                           <div className="inner-block">
//                             <div className="left-col">
//                               <span className="title">{item.name}</span>
//                               <p>{item.description}</p>
//                             </div>
//                             <div className="right-col">
//                               <span className="price">{item.price}</span>
//                               {/* <Link onClick={()=>addToCart(item)}> Add to Cart</Link> */}
//                             </div>
//                           </div>
//                         </ListItem>
//                       );
//                     })}
//                   </List>
//                 </div>
//               ) : (
//                 <div className="product-listing">
//                   <p className="no-product">No product found</p>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//       <Button
//         type="submit"
//         variant="contained"
//         disableElevation
//         onClick={search}
//         style={{ backgroundColor: "#80bf32" }}
//         sx={{ textTransform: "capitalize", fontSize: "16px" }}
//         startIcon={<SearchIcon />}
//       >
//         Search
//       </Button>
//     </Box>
//   </div>
        
    
   
//   )
// }
// export default SearchBar