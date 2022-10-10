import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { API } from "../config";

const Transaction = () => {
    const [transaction, setTransaction] = useState([]);

    const getTransaction = async () => {
        try {
            const response = await axios.get(`${API}/transactionlists`);
            setTransaction(response.data)
            console.log(transaction)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTransaction()
    }, [])

    const columns = [
        {
            name: "Stock Name",
            selector: (row) => row.stock_name.stock_name
        },

        {
            name: "Type",
            selector: (row) => row.transaction_type
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity
        },
        {
            name: "Price (/Unit)",
            selector: (row) => row.price_per_unit
        },
        {
            name: "Total",
            selector: (row) => row.quantity * row.price_per_unit
        },
        {
            name: "Date",
            selector: (row) => row.transaction_date
        }
    ]

    return (
        <>
            <DataTable
                title="Transaction Lists"
                columns={columns}
                data={transaction}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                subHeader

            />
        </>
    )

}

export default Transaction