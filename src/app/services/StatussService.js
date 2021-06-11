import { http } from "./http";

const GetCpuUsageData = () => {
  return fetch(`${http.baseURL}/b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f`, { ...http.headers }).then(
    (response) => response.json()
  );
};
const GetMemoryUsageData = () => {
  return fetch(`${http.baseURL}/d23c3262-967e-4567-b7f6-2fd263748811`).then(
    (response) => response.json()
  );
};
const GetClusterStatusInfo = () => {
  return fetch(`${http.baseURL}/cab2791c-7c85-4461-b95c-86bc1a12dc72`).then(
    (response) => response.json()
  );
};
const GraphsService = {
  GetCpuUsageData,
  GetMemoryUsageData,
  GetClusterStatusInfo,
};

export default GraphsService;
