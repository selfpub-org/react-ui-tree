import React, { Component } from "react";

import { Children, Inner, Node } from "./styles";

class UITreeNode extends Component {
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

  renderDrag = () => {
    const {
      index,
      tree: { renderDragIcon },
    } = this.props;

    const { collapsed, nodrag } = index.node;

    if (nodrag) {
      return;
    }

    return renderDragIcon({
      collapsed,
      onMouseDown: this._onMouseDown,
    });
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
    const { tree, index, dragging, hideRoot = false } = this.props;
    const { node } = index;

    if (hideRoot && index.id === 1) {
      return this.renderChildren();
    }

    return (
      <Node displayPlaceDrop={index.id === dragging}>
        <Inner ref={this.innerRef}>
          {this.renderCollapse()}
          {tree.renderNode(node)}
          {this.renderDrag()}
        </Inner>
        {node.collapsed ? null : this.renderChildren()}
      </Node>
    );
  }
}

export default UITreeNode;