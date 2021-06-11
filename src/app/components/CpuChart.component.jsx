import { useEffect, useState } from "react";

import Chart from "react-apexcharts";
import { chartOptions } from "../helpers/chart";

export const CpuChart = ({ method }) => {
  const [loading, setLoading] = useState(true);

  const [cpuData, setCpuData] = useState([]);
  const [cpuOptions, setCpuOptions] = useState({});
  const [cpuLabels, setCpuLabels] = useState([]);
  const [cpuSeries, setCpuSeries] = useState({});

  useEffect(() => {
    getCpuUsage();
  }, []);

  useEffect(() => {
    setCpuOptions({ ...chartOptions, labels: cpuLabels });
  }, [cpuLabels]);
  useEffect(() => {
    setCpuSeries({ data: cpuData });
  }, [cpuData]);

  const getCpuUsage = () => {
    const cpuData = method();
    cpuData.then((data) => {
      setCpuData(data.data);
      setCpuLabels(data.labels);
      setLoading(false);
    });
  };

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && (
        <Chart
          options={cpuOptions}
          series={[cpuSeries]}
          type="area"
          height={350}
        />
      )}
    </>
  );
};
