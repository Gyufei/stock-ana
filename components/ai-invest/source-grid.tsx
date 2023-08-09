'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, RowSelectedEvent } from 'ag-grid-community';
import { Button } from 'antd';
import { AG_GRID_LOCALE_ZH } from '@/lib/ag-grid-local-text';

function checkValueType(value: any) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return 'dateString';
  } else {
    return 'text';
  }
}

export default function SourceGrid({ data }: { data: Array<Record<string, any>> }) {
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[]>([]);

  const gridRef = useRef<AgGridReact>(null);

  const [gridData, setGridData] = useState<Array<Record<string, any>>>([]);

  useEffect(() => {
    if (data) {
      setGridData(JSON.parse(JSON.stringify(data)));
    }
  }, [data]);

  const columnDefs = useMemo(() => {
    if (!gridData || gridData.length === 0) {
      return [];
    }

    const firstRow = gridData[0];
    const keys = Object.keys(firstRow);
    const colDefs = keys.map((key, index) => {
      return {
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: index === 0,
        checkboxSelection: index === 0,
        editable: index !== 0,
        field: key,
        cellDataType: checkValueType(firstRow[key]),
      };
    });

    return colDefs;
  }, [gridData]);

  const onBtnExport = useCallback(() => {
    gridRef.current!.api.exportDataAsCsv();
  }, []);

  const onRowSelected = useCallback((_event: RowSelectedEvent) => {
    const selected = gridRef.current!.api.getSelectedRows();
    setSelectedRows(selected.map((item) => item.id));
  }, []);

  const onDelete = useCallback(() => {
    setGridData((prev) => {
      const newData = prev.filter((item) => !selectedRows.includes(item.id));
      return newData;
    });
  }, [selectedRows]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: true,
      filter: true,
      sortable: true,
    };
  }, []);

  return (
    <div className="relative ag-theme-alpine mt-4 p-4 h-[90%]">
      <div className="absolute flex items-center top-[-50px] right-4 gap-x-3">
        {selectedRows.length > 0 && (
          // <span className="text-sm text-gray-500">已选中{selected.length}条数据</span>
          <Button size="middle" onClick={onDelete}>
            删除
          </Button>
        )}
        <Button size="middle" onClick={onBtnExport}>
          下载
        </Button>
        <Button className="bg-primary" type="primary" size="middle" onClick={onBtnExport}>
          保存
        </Button>
      </div>
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        pagination={true}
        rowData={gridData}
        columnDefs={columnDefs}
        localeText={AG_GRID_LOCALE_ZH}
        rowSelection={'multiple'}
        rowMultiSelectWithClick={true}
        onRowSelected={onRowSelected}
      ></AgGridReact>
    </div>
  );
}
