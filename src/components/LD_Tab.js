// import React from "react";
// import { Button, TextField, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import InputLabel from "@mui/material/InputLabel";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import SelectTextField from "./SelectTextField";
// import { bottom } from "@popperjs/core";
// import SearchIcon from "@mui/icons-material/Search";
// import InputAdornment from "@mui/material/InputAdornment";

// const GreyBox = styled(Box)(({ theme }) => ({
//   backgroundColor: "#f2f2f2",
//   padding: theme.spacing(2),
// }));

// export default function LD_tab() {
//   return (
//     <>
//       <Box marginBottom={2}>
//         <Button variant="contained" color="success" sx={{ width: "15%" }}>
//           Save
//         </Button>
//       </Box>
//       {/* --------------------------------------- */}

//       <Box marginTop={1.5} marginBottom={1.5}>
//         <Grid container spacing={2}>
//           <Grid
//             item
//             xs={12}
//             md={4}
//             sx={{ width: "100%", display: "flex", flexDirection: "row" }}
//           >
//             <Grid item xs={4} sx={{ bgcolor: "#d2d2d2", height: 300 }}>
//               <Typography
//                 variant="h4"
//                 sx={{ fontWeight: "bold", marginBottom: "0.5rem", position:"relative", top:10, left:10}}
//               >
//                 Booking With Line
//               </Typography>
//               <TextField
//                 variant="standard"
//                 size="small"
//                 id="line-booking-no"
//                 label="Line Booking No"
//                 sx={{ width: "6.5rem", marginLeft: "0.5rem" }}
//               />
//               <Grid item xs={6} sx={{ marginTop: "1.4rem" }}>
//                 <TextField
//                   variant="standard"
//                   size="small"
//                   id="si-cutoff-date"
//                   label="SI Cut-off Date"
//                   sx={{ width: "6.5rem", marginLeft: "0.5rem" }}
//                 />
//               </Grid>
//               <Grid item xs={6} sx={{ marginTop: "1.4rem" }}>
//                 <TextField
//                   variant="standard"
//                   size="small"
//                   id="pickup-point"
//                   label="Pickup Point"
//                   sx={{ width: "6.5rem", marginLeft: "0.5rem" }}
//                 />
//               </Grid>
//             </Grid>
//             <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
//               <TextField
//                 variant="standard"
//                 size="small"
//                 id="line-booking-date"
//                 label="Line Booking Date"
//                 sx={{
//                   width: "6.5rem",
//                   marginTop: "1.4rem",
//                   marginLeft: "0.5rem",
//                 }}
//               />

//               <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
//                 <TextField
//                   variant="standard"
//                   size="small"
//                   id="service-contract-number"
//                   label="Service Contract Number"
//                   sx={{
//                     width: "6.5rem",
//                     marginTop: "1.4rem",
//                     marginLeft: "0.5rem",
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
//               <TextField
//                 variant="standard"
//                 size="small"
//                 id="line-booking-validity"
//                 label="Line Booking Validity"
//                 sx={{
//                   width: "6.5rem",
//                   marginTop: "1.4rem",
//                   marginLeft: "0.5rem",
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* ----------------------------------------- second one*/}

//       {/* --------------------------------------- */}

//       <Grid
//         container
//         spacing={2}
//         sx={{ position: "relative", bottom: "19.5rem", left: "24rem" }}
//       >
//         <Grid
//           item
//           xs={12}
//           md={4}
//           sx={{ width: "100%", display: "flex", flexDirection: "row" }}
//         >
//           <Grid item xs={4} sx={{ bgcolor: "#d2d2d2", height: 300 }}>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: "bold", marginBottom: "0.5rem", position:"relative", top:10, left:10 }}
//             >
//               Vessel Information
//             </Typography>

//             <TextField
//               variant="standard"
//               size="small"
//               id="vessel-voyage"
//               label="Vessel Voyage"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <SearchIcon sx={{  }}/>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ width: "6.5rem", marginLeft: "0.5rem" }}
//             />

//             <Grid item xs={6} sx={{ marginTop: "1.4rem" }}>
//               <TextField
//                 variant="filled"
//                 size="small"
//                 id="cutoff-date"
//                 label="Cut-off Date"
//                 sx={{ width: "6.5rem", marginLeft: "0.5rem" }}
//               />
//             </Grid>
 
           

            
//             <Grid item xs={6} sx={{ marginTop: "1.4rem" }}>
//               <TextField
//                 variant="standard"
//                 size="small"
//                 id="eta-at-destination"
//                 label="E.T.A at Destination"
//                 sx={{ width: "6.5rem", marginLeft: "0.5rem" }}
//               />
//             </Grid>
//           </Grid>
//           <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
//             <TextField
//               variant="filled"
//               size="small"
//               id="terminal"
//               label="Terminal"
             
//               sx={{
//                 width: "11rem",
//                 marginTop: "1.4rem",
//                 marginLeft: "0.5rem",
//               }}
//             />

             


//             <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
//               <TextField
//                 variant="filled"
//                 size="small"
//                 id="eta"
//                 label="E.T.A"
//                 sx={{
//                   width: "6.5rem",
//                   marginTop: "1.4rem",
//                   marginLeft: "0.5rem",
//                 }}
//               />
//             </Grid>
            
            
//           </Grid>
//           <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
       
            
//             <Grid item xs={6} sx={{ marginTop: "1.4rem" ,bgcolor: "#d2d2d2", marginTop:"5.3rem"}}>
//               <TextField
//                 variant="filled"
//                 size="small"
//                 id="etd"
//                 label="E.T.D"
//                 sx={{ width: "6.5rem", marginLeft: "0.5rem" }}
//               />
//             </Grid>
//           </Grid>
          
//         </Grid>
        
//       </Grid>
//       {/* 
//         ------------------------------------------third one---- */}

//       <Grid
//         container
//         spacing={2}
//         sx={{ position: "relative", bottom: "38.2rem", left: "48rem" }}
//       >
//         <Grid
//           item
//           xs={12}
//           md={4}
//           sx={{ width: "100%", display: "flex", flexDirection: "row" }}
//         >
//           <Grid item xs={4} sx={{ bgcolor: "#d2d2d2", height: 150 }}>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: "bold", marginBottom: "0.5rem", position:"relative", top:10, left:10 }}
//             >
//               Transhipment Ports
//             </Typography>
//             <TextField
//               variant="standard"
//               size="small"
//               id="port-one"
//               label="Port 1"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <SearchIcon sx={{  }}/>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ width: "6.5rem", marginLeft: "1.5rem" }}
//             />
//             <Grid item xs={6} sx={{ marginTop: "1.4rem" }}>
//               <TextField
//                 variant="standard"
//                 size="small"
//                 id="port-three"
//                 label="Port 3"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <SearchIcon sx={{  }}/>
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{ width: "6.5rem", marginLeft: "8.7rem" }}
//               />
//             </Grid>
           
//           </Grid>
//           <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
          

          
//           </Grid>
//           <Grid item xs={4} sx={{ bgcolor: "#d2d2d2" }}>
//             <TextField
//               variant="standard"
//               size="small"
//               id="port-two"
//               label="Port 2"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <SearchIcon sx={{  }}/>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 width: "6.5rem",
//                 marginTop: "1.4rem",
//                marginRight:"1.5rem"
//               }}
//             />
//           </Grid>
         
//         </Grid>
      
//       </Grid>
//     </>
//   );
// }
