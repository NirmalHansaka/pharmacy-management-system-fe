import * as React from "react";
import Box from "@mui/material/Box";
import useTable from "../../../components/Layout/useTable";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import MEDICINE from "../../../Data/medicineData"; // Dummy Data (Remove after connect with the api)
import Paper from "@mui/material/Paper";

const Medicine = () => {
  //***** temp */
  const tableHeders = [
    { id: 1, lable: "id" },
    { id: 2, lable: "name" },
    { id: 3, lable: "GroupName" },
    { id: 4, lable: "miligrames" },
    { id: 5, lable: "type" },
    { id: 6, name: "stockAmounte" },
  ];

  const {
    TableContainerComponent,
    TableComponent,
    TableHearderComponent,
    TablePaginationComponent,
    recordsAfterPagingAndSorting,
  } = useTable(tableHeders);
  return (
    <>
      <Paper>
        <TableContainerComponent>
          <TableComponent>
            <TableHearderComponent />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.GroupName}</TableCell>
                  <TableCell>{item.miligrames}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.stockAmounte}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableComponent>
        </TableContainerComponent>
        <TablePaginationComponent />
      </Paper>
    </>
  );
};

export default Medicine;
