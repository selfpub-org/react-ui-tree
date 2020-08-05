import styled, { css } from "styled-components";

const TreeContainer = styled.div`
  position: relative;
  overflow: hidden;
  user-select: none;
`;

const Draggable = styled.div`
  position: absolute;
  opacity: 0.8;
  user-select: none;
`;

const Children = styled.div``;

const Node = styled.div(
  ({ displayPlaceDrop }) =>
    css`
      border-width: ${displayPlaceDrop ? "1px" : "0"};
      border-style: dashed;
      border-color: ${displayPlaceDrop ? "rgba(0, 0, 0, 0.4)" : "transparent"};

      > * {
        visibility: ${displayPlaceDrop ? "hidden" : "inherit"};
      }
    `
);

const Inner = styled.div`
  position: relative;
  cursor: pointer;
`;

export {
  TreeContainer,
  Draggable,
  Children,
  Node,
  Inner
};
