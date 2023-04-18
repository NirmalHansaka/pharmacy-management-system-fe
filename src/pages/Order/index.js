import React from 'react'
import OrderModal from '../../components/modals/OrderModal'
import Paper from "@mui/material/Paper";
import TableComponent from "../../components/TableComponent";
import { MEDICINEDATA, medicineTitle } from "../../Data/medicineData";

const Order = () => {
  return (
    <div>
        <OrderModal/>
      <Paper>
        <TableComponent
          tableData={MEDICINEDATA}
          tableHeaders={medicineTitle}
        ></TableComponent>
      </Paper>
    </div>

  )
}

export default Order