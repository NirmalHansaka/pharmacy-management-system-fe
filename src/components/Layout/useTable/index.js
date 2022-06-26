import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import MEDICINE from "../../../Data/medicineData";
import TableSortLabel from "@mui/material/TableSortLabel";

// Reuseable table components
const useTable = (headCells) => {
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[0]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortRequest = (cellId) => {
    const isAscending = orderBy === cellId && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(cellId);
    console.log(order, cellId);
  };

  const TableContainerComponent = (props) => (
    <TableContainer component={Paper}>{props.children}</TableContainer>
  );

  const TableComponent = (props) => <Table>{props.children}</Table>;

  const TableHearderComponent = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((cell) => (
            <TableCell key={cell.id}>
              <TableSortLabel
                // active={}
                direction={orderBy === cell.id ? order : "desc"}
                onClick={() => {
                  handleSortRequest(cell.id);
                }}
              >
                {cell.lable}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TablePaginationComponent = () => (
    <TablePagination
      component="div"
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={pages}
      count={MEDICINE.length}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  const recordsAfterPagingAndSorting = () => {
    return MEDICINE.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return {
    TableComponent,
    TableContainerComponent,
    TableHearderComponent,
    TablePaginationComponent,
    recordsAfterPagingAndSorting,
  };
};

export default useTable;
