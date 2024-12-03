import React from 'react'
import { columns } from "./ColumnsTest"
import { DataTable } from "./data-table"

async function getData() {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f", 
        amount: 100, 
        status: "pending", 
        email: "m@example.com",
      },
      // ... other data items
    ]
  }

  async function PageData() {
    const data = await getData()
    
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
  }

export default PageData