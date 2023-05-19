import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../global.css";
import "axios";
import { Link } from "react-router-dom";

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

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

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
          pageSizeOptions={[100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default Interfaces;
