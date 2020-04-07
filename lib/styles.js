import styled, { css } from "styled-components";

export const TreeContainer = styled.div`
  position: relative;
  overflow: hidden;
  user-select: none;
`;

export const Draggable = styled.div`
  position: absolute;
  opacity: 0.8;
  user-select: none;
`;

export const Children = styled.div``;

export const Node = styled.div(({ displayPlaceDrop }) =>
     css`
      border-width: 1px;
      border-style: dashed;
      border-color: ${displayPlaceDrop ? "rgba(0, 0, 0, 0.4)" : "transparent"};

      > * {
        visibility: ${displayPlaceDrop ? "hidden" : "inherit"};
      }
    `
);

export const Inner = styled.div`
  position: relative;
  cursor: pointer;
  padding-left: 10px;
  color: #9da5b4;
`;
