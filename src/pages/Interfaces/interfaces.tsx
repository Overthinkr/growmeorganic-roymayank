import * as React from "react";
import { Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../global.css";
import "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "User ID",
    width: 200,
    editable: true,
  },
  {
    field: "id",
    headerName: "ID",
    width: 200,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 200,
    editable: true,
  },
];

interface Table {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Interfaces() {
  const [data, setData] = React.useState<Table[]>([]);
  const [open, setOpen] = React.useState(false);
  const [Transition, setTransition] = React.useState<typeof Fade>(Fade);

  const navigate = useNavigate();
  if (localStorage.getItem("authentication") === null) {
    navigate("/", { state: { redirected: true } });
  }
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <Link to="/departments"> Departments </Link>
      <br />
      <br />
      <br />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        message="You are not logged in"
        key={Transition.name}
      />
    </div>
  );
}

export default Interfaces;
