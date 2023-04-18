import React from 'react'
import PaymentModal from '../../components/modals/PaymentModal'
import PaymentMethods from '../../components/modals/paymentMethods'
import Paper from "@mui/material/Paper";
import TableComponent from "../../components/TableComponent";
import { MEDICINEDATA, medicineTitle } from "../../Data/medicineData";

const Payment = () => {
  return (
    <div>
        <PaymentModal/>
        <PaymentMethods/>
        <Paper>
        <TableComponent
          tableData={MEDICINEDATA}
          tableHeaders={medicineTitle}
        ></TableComponent>
      </Paper>
    </div>
  )
}

export default Payment