import React, { useState } from "react";
import Header from "../../header";
import { Box, Button, Typography, useTheme } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../data/MockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Modal from "@mui/material/Modal";
import logo from "../../../assets/logo.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from '@mui/icons-material/Search';
import pic from "../../../assets/image.jpg"

const ReservationPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("none");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 50,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "Details",
      cellClassName: "name-column--cell-color",
    },
    {
      field: "start",
      headerName: "Start",
      cellClassName: "name-column--cell",
      width: 200,
    },
    {
      field: "end",
      headerName: "End",
      type: "number",
      align: "left",
      headerAlign: "left",
      cellClassName: "name-column--cell",
      width: 200,
    },
    {
      field: "status",
      headerName: "Current Status",
      width: 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "tickets",
      headerName: "Tickets",
      width: 80,
      cellClassName: "name-column--cell",
    },
    {
      field: "roomNum",
      headerName: "Room Number",

      width: 120,
      cellClassName: "name-column--cell",
    },
    {
      field: "billing",
      headerName: "Ext. Billing",
      width: 120,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            mt="10px"
            display="flex"
            justifyContent="center"
            backgroundColor={status === "Paid" ? "#e9fce9" : "#fce8e8"}
            borderRadius="4px"
          >
            <Typography
              color={status === "Paid" ? "#1fc71f" : "#e41b1b"}
              sx={{ ml: "5px" }}
            >
              {status}
            </Typography>
          </Box>
        );
      },
    },
    {
      headerName: "Action",
      width: 120,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: "30px",
          ml: "20px",
          mb: "10px",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Header
            title="Reservations"
            subtitle="Location setting > Reservation Listing"
          />
        </Box>
        <Box
          sx={{
            width: "10%",
            height: "50px",
            m: "15px 50px 15px 20px",
            borderRadius: "10px",
            borderWidth: "thick",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            bgcolor: "white",
          }}
        >
          <img
            style={{ borderRadius: "5px" }}
            width="30"
            height="30"
            src={logo}
          />
          <Box sx={{ paddingLeft: "8px" }}>
            <Typography sx={{ color: "black" }}>Adram L..</Typography>
            <Typography sx={{ color: colors.greenAccent[700] }}>
              Admin
            </Typography>
          </Box>
          <a href="#"><ArrowDropDownIcon color="primary"/></a>
        </Box>
      </Box>
      <hr />
      <Box
        sx={{
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
          m: "20px 60px 20px 20px",
        }}
      >
        <Box sx={{ display: "flex" }}>
            <Box sx={{position: 'absolute', m: '10px '}}>
            <SearchIcon color="primary"/>
            </Box>
          <input style={{borderRadius:'5px', borderWidth:'thin', width: '250px', paddingLeft: '30px'}} type="text" placeholder="Search Ticket" />
        </Box>

        <Box sx={{ display: "flex" }}>
          <Button
            className="myAddButton"
            sx={{
              "&.myAddButton": {
                background: colors.greenAccent[800],
                color: colors.grey[100],
              },
              mr: "10px",
            }}
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Add Reservation
          </Button>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "47%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                width: 300,
                bgcolor: "white",
                color: "black",
                border: "2px #000",
                boxShadow: 24,
                p: 4,
                borderRadius: "20px",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Location
              </Typography>
              <Box
                sx={{ m: "10px 0 10px 10px", height: "30px", display: "flex" }}
              >
                <select
                  style={{ width: "90%", borderRadius: "5px" }}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="Select location">Select location</option>
                  <option value="Location 1">Location 1</option>
                  <option value="Location 2">Location 2</option>
                  <option value="Location 3">Location 3</option>
                </select>
              </Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Date & Time
              </Typography>
              <Box
                sx={{ m: "10px 0 10px 10px", height: "30px", display: "flex" }}
              >
                <input
                  style={{ width: "90%", borderRadius: "5px" }}
                  type="date"
                />
              </Box>

              <Typography id="modal-modal-title" variant="h6" component="h2">
                Date & Time
              </Typography>
              <Box
                sx={{ m: "10px 0 10px 10px", height: "30px", display: "flex" }}
              >
                <input
                  style={{ width: "90%", borderRadius: "5px" }}
                  type="date"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  height: "40px",
                }}
              >
                <Button
                  className="myCancleButton"
                  sx={{
                    "&.myCancleButton": {
                      background: colors.grey[200],
                      color: colors.greenAccent[800],
                    },
                    mr: "10px",
                    width: "100%",
                  }}
                  onClick={handleClose}
                  variant="contained"
                >
                  Cancle
                </Button>
                <Button
                  className="mySubmitButton"
                  sx={{
                    "&.mySubmitButton": {
                      background: colors.greenAccent[800],
                      color: colors.grey[100],
                    },
                    mr: "10px",
                    width: "100%",
                  }}
                 
                  variant="contained"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Modal>

          <Button startIcon={<CloudDownloadIcon />} variant="contained">
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        m="20px 0 0 20px"
        height="50vh"
        width="95%"
        sx={{
          "& .MuiDataGrid-root": {
            // border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.grey[900],
          },
          "& .name-column--cell-color": {
            color: colors.greenAccent[700],
          },
          "& .MuiDataGrid-columnHeaders": {
            color: colors.grey[400],
            fontWeight: "bolder",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[900]} !important`,
          },
        }}
      >
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          rows={mockDataTeam}
          columns={columns}
        ></DataGrid>
      </Box>
    </>
  );
};

export default ReservationPage;
