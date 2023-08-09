'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, RowSelectedEvent } from 'ag-grid-community';
import { Button, Input, Modal } from 'antd';
import { AG_GRID_LOCALE_ZH } from '@/lib/ag-grid-local-text';
import { PathMap } from '@/lib/path-map';
import fetcher from '@/lib/fetcher';
import useSWRMutation from 'swr/mutation';

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

  const [colDefs, setColDefs] = useState([]);

  useEffect(() => {
    if (!gridData || gridData.length === 0) {
      return;
    }

    const firstRow = gridData[0];
    const keys = Object.keys(firstRow);
    const cDefs = keys.map((key, index) => {
      return {
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: index === 0,
        checkboxSelection: index === 0,
        editable: index !== 0,
        field: key,
        cellDataType: checkValueType(firstRow[key]),
      };
    });

    setColDefs(cDefs as any);
  }, [gridData]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    const title = inputRef.current?.input.value;
    const data = getCurrentData();

    saveTrigger({ title, data } as any);
  };

  const getCurrentData = () => {
    let data = [];
    if (!selectedRows || selectedRows.length === 0) {
      const allNodes = (gridRef.current!.api.getModel() as any).getRootNode().allLeafChildren;
      data = allNodes.map((node: any) => node.data);
    } else {
      const selectedNodes = gridRef.current!.api.getSelectedNodes();
      data = selectedNodes.map((node: any) => node.data);
    }

    return data;
  };

  const saveDataSet = async (url: string, { arg }: any) => {
    const res = await fetcher(`${PathMap.saveDataSet}`, {
      method: 'POST',
      body: JSON.stringify({
        title: arg.title,
        data: arg.data,
      }),
    });

    return res;
  };

  const { trigger: saveTrigger, isMutating: saving } = useSWRMutation(`${PathMap.saveDataSet}`, saveDataSet);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const inputRef = useRef<any>(null);

  const onSave = useCallback(() => {
    setIsModalOpen(true);
  }, []);

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
          <Button size="middle" onClick={onDelete}>
            删除{selectedRows.length ? `(${selectedRows.length})` : ''}
          </Button>
        )}
        <Button disabled={!gridData.length} size="middle" onClick={onBtnExport}>
          下载
        </Button>
        <Button disabled={!gridData.length} loading={saving} className="bg-primary" type="primary" size="middle" onClick={onSave}>
          保存
        </Button>
      </div>
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        pagination={true}
        rowData={gridData}
        columnDefs={colDefs}
        localeText={AG_GRID_LOCALE_ZH}
        rowSelection={'multiple'}
        rowMultiSelectWithClick={true}
        onRowSelected={onRowSelected}
        groupSelectsFiltered={true}
      ></AgGridReact>

      <Modal title="保存数据集" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="flex items-center mt-3">
          <div className="mr-5 whitespace-nowrap">数据集名称:</div>
          <Input ref={inputRef} />
        </div>
      </Modal>
    </div>
  );
}
