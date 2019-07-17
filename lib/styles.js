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

export const Node = styled.div`
  ${({ displayPlaceDrop }) =>
    displayPlaceDrop &&
    css`
      border: 1px dashed rgba(0, 0, 0, 0.4);

      > * {
        visibility: hidden;
      }
    `}
`;

export const Inner = styled.div`
  position: relative;
  cursor: pointer;
  padding-left: 10px;
  color: #9da5b4;
`;
