/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";

export const graphs = css`
  padding: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 30px 20px;
  .graph {
    min-height: 440px;
      height: 100%;
      width: 100%;
      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
  }
`;
