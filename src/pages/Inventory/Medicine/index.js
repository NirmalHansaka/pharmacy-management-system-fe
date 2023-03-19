import * as React from "react";
import Box from "@mui/material/Box";
import MEDICINE from "../../../Data/medicineData"; // Dummy Data (Remove after connect with the api)
import Paper from "@mui/material/Paper";
import TableComponent from "../../../components/TableComponent";
import { MEDICINEDATA, medicineTitle } from "../../../Data/medicineData";

const Medicine = () => {
  //***** temp */
  const tableData = [
    "id",
    "name",
    "Group Name",
    "miligrames",
    "type",
    "stock Amount",
  ];

  return (
    <>
      <Paper>
        <TableComponent
          tableData={MEDICINEDATA}
          tableHeaders={medicineTitle}
        ></TableComponent>
      </Paper>
    </>
  );
};

export default Medicine;
