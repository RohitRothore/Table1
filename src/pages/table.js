import DataTable from '@/components/DataTable/DataTable/DataTable';
import React, { useEffect, useState } from 'react';
const items = [
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 1050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 1050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 1050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 150, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 150, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 1050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "001", Date: "2024-02-13", Name: "John Doe", ModeofPayment: "Credit Card", Amount: 10050, Action: "Edit" },
    { VoucherNo: "002", Date: "2024-02-14", Name: "Jane Smith", ModeofPayment: "Cash", Amount: 7525, Action: "Delete" },
    { VoucherNo: "003", Date: "2024-02-15", Name: "Alice Johnson", ModeofPayment: "Bank Transfer", Amount: 2000, Action: "Edit" },
    { VoucherNo: "004", Date: "2024-02-16", Name: "Bob Brown", ModeofPayment: "PayPal", Amount: 15075, Action: "Delete" },
    { VoucherNo: "005", Date: "2024-02-17", Name: "Emily Davis", ModeofPayment: "Cash", Amount: 500, Action: "Edit" },
    // Additional entries
    { VoucherNo: "006", Date: "2024-02-18", Name: "Michael Johnson", ModeofPayment: "Credit Card", Amount: 12000, Action: "Edit" },
    { VoucherNo: "007", Date: "2024-02-19", Name: "Sarah Williams", ModeofPayment: "Bank Transfer", Amount: 8050, Action: "Delete" },
    { VoucherNo: "008", Date: "2024-02-20", Name: "Christopher Lee", ModeofPayment: "Cash", Amount: 9025, Action: "Edit" },
    { VoucherNo: "009", Date: "2024-02-21", Name: "Jessica Martinez", ModeofPayment: "PayPal", Amount: 1805, Action: "Delete" },
    { VoucherNo: "010", Date: "2024-02-22", Name: "David Wilson", ModeofPayment: "Credit Card", Amount: 600, Action: "Edit" },
    { VoucherNo: "011", Date: "2024-02-23", Name: "Amanda Anderson", ModeofPayment: "Cash", Amount: 3050, Action: "Delete" },
    { VoucherNo: "012", Date: "2024-02-24", Name: "James Thompson", ModeofPayment: "Bank Transfer", Amount: 955, Action: "Edit" },
    { VoucherNo: "013", Date: "2024-02-25", Name: "Stephanie Garcia", ModeofPayment: "PayPal", Amount: 1175, Action: "Delete" },
    { VoucherNo: "014", Date: "2024-02-26", Name: "Daniel Hernandez", ModeofPayment: "Credit Card", Amount: 400, Action: "Edit" },
    { VoucherNo: "015", Date: "2024-02-27", Name: "Melissa Lopez", ModeofPayment: "Cash", Amount: 850, Action: "Delete" },
    { VoucherNo: "016", Date: "2024-02-28", Name: "Andrew Perez", ModeofPayment: "Bank Transfer", Amount: 705, Action: "Edit" },
    { VoucherNo: "017", Date: "2024-02-29", Name: "Nicole Roberts", ModeofPayment: "PayPal", Amount: 1305, Action: "Delete" },
    { VoucherNo: "018", Date: "2024-03-01", Name: "Kevin King", ModeofPayment: "Credit Card", Amount: 550, Action: "Edit" },
    { VoucherNo: "019", Date: "2024-03-02", Name: "Lauren Young", ModeofPayment: "Cash", Amount: 450, Action: "Delete" },
    { VoucherNo: "020", Date: "2024-03-03", Name: "Ryan Scott", ModeofPayment: "Bank Transfer", Amount: 1505, Action: "Edit" },
    { VoucherNo: "006", Date: "2024-02-18", Name: "Michael Johnson", ModeofPayment: "Credit Card", Amount: 12000, Action: "Edit" },
    { VoucherNo: "007", Date: "2024-02-19", Name: "Sarah Williams", ModeofPayment: "Bank Transfer", Amount: 800, Action: "Delete" },
    { VoucherNo: "008", Date: "2024-02-20", Name: "Christopher Lee", ModeofPayment: "Cash", Amount: 925, Action: "Edit" },
    { VoucherNo: "009", Date: "2024-02-21", Name: "Jessica Martinez", ModeofPayment: "PayPal", Amount: 18075, Action: "Delete" },
    { VoucherNo: "010", Date: "2024-02-22", Name: "David Wilson", ModeofPayment: "Credit Card", Amount: 6000, Action: "Edit" },
    { VoucherNo: "011", Date: "2024-02-23", Name: "Amanda Anderson", ModeofPayment: "Cash", Amount: 3050, Action: "Delete" },
    { VoucherNo: "012", Date: "2024-02-24", Name: "James Thompson", ModeofPayment: "Bank Transfer", Amount: 9525, Action: "Edit" },
    { VoucherNo: "013", Date: "2024-02-25", Name: "Stephanie Garcia", ModeofPayment: "PayPal", Amount: 1105, Action: "Delete" },
    { VoucherNo: "014", Date: "2024-02-26", Name: "Daniel Hernandez", ModeofPayment: "Credit Card", Amount: 400, Action: "Edit" },
    { VoucherNo: "015", Date: "2024-02-27", Name: "Melissa Lopez", ModeofPayment: "Cash", Amount: 8550, Action: "Delete" },
    { VoucherNo: "016", Date: "2024-02-28", Name: "Andrew Perez", ModeofPayment: "Bank Transfer", Amount: 7025, Action: "Edit" },
    { VoucherNo: "017", Date: "2024-02-29", Name: "Nicole Roberts", ModeofPayment: "PayPal", Amount: 13075, Action: "Delete" },
    { VoucherNo: "018", Date: "2024-03-01", Name: "Kevin King", ModeofPayment: "Credit Card", Amount: 550, Action: "Edit" },
    { VoucherNo: "019", Date: "2024-03-02", Name: "Lauren Young", ModeofPayment: "Cash", Amount: 4550, Action: "Delete" },
    { VoucherNo: "020", Date: "2024-03-03", Name: "Ryan Scott", ModeofPayment: "Bank Transfer", Amount: 15025, Action: "Edit" }
  ];
  
const Table = () => {
    const columnsData = [
        { field: 'VoucherNo', name: "Voucher No" },
        { field: 'Date', name: "Date" },
        { field: 'Name', name: "Name" },
        { field: 'ModeofPayment', name: "Mode of Payment" },
        { field: 'Amount', name: "Amount",  },
        { field: 'Action', name: "Action", sortable: false }
    ];


    return (
        <div className='flex items-center justify-center mt-5'>
            <DataTable columns={columnsData} rows={items} />
        </div>
    );
}

export default Table;
