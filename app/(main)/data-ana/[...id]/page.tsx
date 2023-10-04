'use client';

import fetcher from '@/lib/http/fetcher';
import { Breadcrumb, Spin } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import useSWR from 'swr';

import GC from '@grapecity/spread-sheets';
import { SpreadSheets, Worksheet } from '@grapecity/spread-sheets-react';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const id = params.id[0];

  const { data: dataset, isLoading } = useSWR(`/api/dataset/${id}`, fetcher);

  const goBack = () => {
    router.back();
  };

  const data = dataset?.content || [];

  const [spreadInstance, setSpreadInstance] = useState<GC.Spread.Sheets.Workbook | null>(null);
  console.log(spreadInstance);

  const initSpread = (e: GC.Spread.Sheets.Workbook) => {
    e.setSheetCount(1);
    setSpreadInstance(e);
    changeOpenMenu(e);
    e.options.newTabVisible = false;
    e.options.tabStripVisible = true;
    e.options.scrollbarMaxAlign = true;
    e.options.scrollbarShowMax = true;
    e.options.scrollByPixel = true;
    e.options.scrollbarAppearance = GC.Spread.Sheets.ScrollbarAppearance.mobile;

    let i = e.getSheet(0);
    setSheetStyle(i);
  };

  const setSheetStyle = (e: GC.Spread.Sheets.Worksheet) => {
    e.defaults.colWidth = 160;
    e.defaults.colHeaderRowHeight = 30;
    e.defaults.rowHeight = 30;
    e.defaults.rowHeaderColWidth = 50;
    e.options.gridline.color = '#E3E4E7';
    e.options.frozenlineColor = '#E3E4E7';
    e.options.isProtected = true;
    e.options.protectionOptions.allowResizeColumns = true;
    e.options.protectionOptions.allowResizeRows = true;

    const i = e.getDefaultStyle();
    i.font = '12px';
    e.setDefaultStyle(i);

    const a = new GC.Spread.Sheets.Style();
    a.showEllipsis = true;
    a.font = '12px';
    a.foreColor = '#2b323d';
    a.vAlign = GC.Spread.Sheets.VerticalAlign.center;
    a.cellPadding = '4 8';

    e.setStyle(-1, -1, a, GC.Spread.Sheets.SheetArea.viewport);
  };

  const changeOpenMenu = (e: GC.Spread.Sheets.Workbook) => {
    e.contextMenu.menuData = [];
    let t = {
      text: '删除',
      name: '删除',
      command: showLoginDialog,
      workArea: 'colHeader',
    };
    e.contextMenu.menuData.push(t);
  };

  const showLoginDialog = () => {
    // if (!spread) return;
    // let e = spread.getActiveSheet().getSelections(),
    //   t = getDelCols(e),
    //   i = columnLength[this.spread.getActiveSheetIndex()],
    //   a = t.filter((e) => e < i);
    // a.length < 1 ||
    //   $confirm(`确定删除所选 ${a.length}个变量吗？`, '删除提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     closeOnClickModal: !1,
    //   })
    //     .then(() => {
    //       $emit('ValueChanged', {
    //         type: 'deleteColumns',
    //         cols: a,
    //       });
    //     })
    //     .catch(() => {});
  };

  return (
    <div className="h-[855px]">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spin />
        </div>
      )}
      {!isLoading && !dataset && (
        <div className="w-full h-full flex items-center justify-center">
          <p>数据集不存在</p>
        </div>
      )}
      {!isLoading && dataset && (
        <div className="flex flex-col h-full">
          <Breadcrumb
            className="mb-10"
            items={[
              {
                title: <a onClick={() => goBack()}>数据处理</a>,
              },
              {
                title: dataset.name,
              },
            ]}
          />
          <div className="con border-t flex-1 flex justify-between h-full w-full">
            <div data-v-78712ae0="" className="container-left">
              <div data-v-78712ae0="" className="label_2 f14 tl">
                <div data-v-78712ae0="">通用方法</div>
              </div>
              <div data-v-78712ae0="" className="algorithm-list">
                <div data-v-78712ae0="" className="algorithm-item">
                  <div data-v-78712ae0="" className="algorithm-box">
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">数据标签</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">数据编码</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">异常值处理</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">无效样本处理</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">生成变量</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">数据标准化</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">虚拟变量转换</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">样本均衡</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">数据降维</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">缺失值处理</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">时序数据滑窗转换</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">特征筛选</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">缩尾/截尾处理</span>
                    </button>
                    <button data-v-78712ae0="" className="algorithm-content">
                      <span data-v-78712ae0="">数据变换</span>
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-78712ae0="" className="label_2 custom-label f14 tl">
                <div data-v-78712ae0="" className="flex justify-between">
                  自定义数据处理
                  <a data-v-78712ae0="">
                    <span className="text-sm text-blue-950"> +新建方法 </span>
                  </a>
                </div>
              </div>
              <div data-v-78712ae0="" className="algorithm-list">
                <div data-v-78712ae0="" className="algorithm-item">
                  <div data-v-78712ae0="" className="algorithm-box"></div>
                </div>
              </div>
            </div>
            <div className="container-right pl-4">
              <SpreadSheets
                workbookInitialized={initSpread}
                newTabVisible={false}
                autoFitType={0}
                scrollbarShowMax={true}
                scrollbarMaxAlign={true}
              >
                <Worksheet name={dataset?.name} dataSource={data} autoGenerateColumns={true}>
                  {/* <Column dataField="name" width={150} style={style} />
                <Column dataField="phone" width={150} />
                <Column dataField="country" width={100} cellType={comboBoxCellType} />
                <Column dataField="email" width={240} cellType={hyperLinkCelleType} />
                <Column dataField="onJob" width={100} cellType={checkBoxCellType} /> */}
                </Worksheet>
              </SpreadSheets>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
