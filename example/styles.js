import styled, { css } from "styled-components";

export const Panel = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
  -webkit-overflow-scrolling: touch;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  background-color: #f1f1f1;
  z-index: 30;
  max-width: 408px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transform: translate3d(0, 0, 0);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: black;
  padding: 24px 0 8px 32px;
  margin: 0;
  line-height: 24px;
  font-size: 18px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Buttons = styled.div``;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 16px 16px;
  font-size: 16px;
  margin: 2px 2px 2px 0;
  background-color: rgba(255, 255, 255, 0.9);

  :hover {
    background-color: rgba(200, 200, 200, 0.8);
  }
`;

export const Overlay = styled.div`
  display: block;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(33, 33, 33, 0.54);
`;

export const Container = styled.div`
  text-align: left;
  padding: 8px;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: block;
  text-decoration: none;
  padding: 0 8px;
  line-height: 2em;
  height: 2em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #444;
  font-weight: 600;

  &[disabled] {
    color: #999;
    font-weight: 100;
    cursor: not-allowed;
  }

  :hover {
    color: #000;
    background-color: #fff;
  }
`;

export const EmptyTitle = styled.span.attrs({
  children: "Без названия",
})`
  font-style: italic;
  color: #aaa;
`;

export const WarningTitle = styled.span`
  font-style: italic;
  color: #a77;
`;

export const BookName = styled.span`
  font-weight: 800;
  color: #333;
`;

export const Caret = styled.span`
  position: absolute;
  left: 0;
  cursor: pointer;

  &::before {
    content: "${({ collapsed }) => (collapsed ? `▸` : `▾`)}";
  }
`;
