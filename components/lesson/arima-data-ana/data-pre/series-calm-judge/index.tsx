import BoxCheck from './box-check';
import RelLnIncome2Chart from './ref-ln-income-2-chart';
import RelLnIncome1Chart from './rel-ln-income-1-chart';
import RelRatio from './rel-ratio';

export default function SeriesCalmJudge() {
  return (
    <>
      <RelRatio />
      <BoxCheck />
      <RelLnIncome1Chart />
      <RelLnIncome2Chart />
    </>
  );
}
