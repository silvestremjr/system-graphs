/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import StatussService from "../services/StatussService";

import SideMenu from "../components/SideMenu";
import { CpuChart } from "../components/CpuChart.component";
import { ClusterStatus } from "../components/ClusterStatus.component";

import { graphs } from "./Index.style";

const Index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="w-25 mt-3">
          <SideMenu />
        </div>
        <div className="w-75">
          <section className="container">
            <div css={graphs} className="p-3">
              <div className="graph card p-3">
                <h3>CPU Usage</h3>
                <div className="content">
                  <CpuChart method={StatussService.GetCpuUsageData} />
                </div>
              </div>
              <div className="graph card p-3">
                <h3>Memory Usage</h3>
                <div className="content">
                  <CpuChart method={StatussService.GetMemoryUsageData} />
                </div>
              </div>
              <div className="graph card p-3">
                <h3>Server Status</h3>
                <div className="content">
                  <ClusterStatus method={StatussService.GetClusterStatusInfo} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
