import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { MEDICINE, medicineTitle } from "../../Data/medicineData";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const heads = [
  "id",
  "name",
  "Group Name",
  "miligrames",
  "type",
  "stock Amount",
];
const buttons = [
  <Button key="one" color="error">
    Delete
  </Button>,
  <Button key="two" sx={{ backgroundColor: "#0288d1" }}>
    Update
  </Button>,
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const TableHeaderSection = ({ tableHeaders }) => {
  const { order, orderBy, onRequestSort } = tableHeaders;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="success" />
        </TableCell>
        {tableHeaders.map((h) => (
          <TableCell align="center">
            <TableSortLabel
              active={orderBy === h}
              direction={orderBy === h ? order : "asc"}
              onClick={createSortHandler(h)}
            >
              {h}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center">
          <Button
            size="small"
            variant="contained"
            endIcon={<AddIcon />}
            color="success"
          >
            ADD ITEM
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

// const TableToolBarSection = () => {
//   return (
//     <Toolbar>
//       <Stack direction="row" justifyContent="space-between">
//         <Box>Inventry</Box>
//         <Button variant="contained" endIcon={<AddIcon />} color="success">
//           ADD
//         </Button>
//         <Box>dfdfsdf</Box>
//       </Stack>
//     </Toolbar>
//   );
// };

const TableComponent = ({ tableData, tableHeaders }) => {
  // const { tableData, tableHeaders } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");

  const sortReuestHandler = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: 4,
        }}
      >
        <h3>INVENTRY</h3>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            height: 50,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Item"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Paper>
        {/* <TableToolBarSection /> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeaderSection
              tableHeaders={tableHeaders}
              order={order}
              orderBy={orderBy}
              onRequestSort={sortReuestHandler}
            />
            <TableBody>
              {tableData
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  // const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover role="checkbox">
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      {tableHeaders.map((r) => {
                        return <TableCell align="center">{row[r]}</TableCell>;
                      })}
                      <TableCell align="center">
                        <ButtonGroup
                          variant="contained"
                          size="small"
                          aria-label="small button group"
                        >
                          {buttons}
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {/* {MEDICINE.map((me) => {
                console.log(me);
                return (
                  <TableRow>
                    {medicineTitle.map((m, index) => {
                      console.log(m);
                      return <TableCell>{me[m]}</TableCell>;
                    })}
                  </TableRow>
                );
              })} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableComponent;
