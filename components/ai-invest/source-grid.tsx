'use client';

import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

export default function SourceGrid({ data }: { data: Array<Record<string, any>> }) {
  const columnDefs = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    const keys = Object.keys(data[0]);
    const colDefs = keys.map((key) => {
      return {
        field: key,
      };
    });

    return colDefs;
  }, [data]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: true,
      filter: true,
      sortable: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine mt-4 p-4 h-[80%]">
      <AgGridReact defaultColDef={defaultColDef} pagination={true} rowData={data} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
