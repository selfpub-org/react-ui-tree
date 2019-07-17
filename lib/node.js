import React, { Component } from "react";

import { Caret, Children, Inner, Node } from "./styles";

export default class UITreeNode extends Component {
  innerRef = React.createRef();

  _onCollapse = e => {
    const { index, onCollapse } = this.props;
    e.stopPropagation();
    const nodeId = index.id;

    if (onCollapse) {
      onCollapse(nodeId);
    }
  };

  _onMouseDown = e => {
    const { index, onDragStart } = this.props;
    const nodeId = index.id;
    const dom = this.innerRef.current;

    if (onDragStart) {
      onDragStart(nodeId, dom, e);
    }
  };

  renderCollapse = () => {
    const {
      index,
      tree: { renderCaret },
    } = this.props;

    if (index.children && index.children.length) {
      const { collapsed } = index.node;

      return renderCaret({
        collapsed,
        onMouseDown: e => e.stopPropagation(),
        onClick: this._onCollapse,
      });
    }

    return null;
  };

  renderChildren = () => {
    const {
      index,
      tree,
      dragging,
      paddingLeft,
      onCollapse,
      onDragStart,
    } = this.props;

    if (index.children && index.children.length) {
      const childrenStyles = {
        paddingLeft,
      };

      return (
        <Children style={childrenStyles}>
          {index.children.map(child => {
            const childIndex = tree.getIndex(child);

            return (
              <UITreeNode
                tree={tree}
                index={childIndex}
                key={childIndex.id}
                dragging={dragging}
                paddingLeft={paddingLeft}
                onCollapse={onCollapse}
                onDragStart={onDragStart}
              />
            );
          })}
        </Children>
      );
    }

    return null;
  };

  render() {
    const { tree, index, dragging } = this.props;
    const { node } = index;

    return (
      <Node displayPlaceDrop={index.id === dragging}>
        <Inner ref={this.innerRef} onMouseDown={this._onMouseDown}>
          {this.renderCollapse()}
          {tree.renderNode(node)}
        </Inner>
        {node.collapsed ? null : this.renderChildren()}
      </Node>
    );
  }
}
