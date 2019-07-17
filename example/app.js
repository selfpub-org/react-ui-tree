import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./app.css";

import Tree from "./../lib/react-ui-tree.js";
import tree from "./tree";
import notes from "./notes";
import { filterTree } from "./helpers";

import packageJSON from "./../package.json";
import {
  Panel,
  Title,
  Container,
  Item,
  BookName,
  EmptyTitle,
  WarningTitle,
  Caret,
  Button,
  Header,
  Buttons,
  Overlay,
} from "./styles";

class App extends Component {
  state = {
    active: null,
    tree: tree,
    isEditing: false,
    dirty: false,
    prevTreeHash: null,
  };

  getEditing = () => {
    const { tree, prevTreeHash } = this.state;
    if (!prevTreeHash) return false;
    return JSON.stringify(filterTree(tree)) !== prevTreeHash;
  };

  updateTree = () => {
    const { tree } = this.state;
    tree.children.push({ title: { text: "test", type: "tl" } });
    this.setState({
      tree: tree,
    });
  };

  _onChange = tree => {
    this.setState({
      tree: tree,
      dirty: this.getEditing(),
    });
  };

  _onClickNode = node => {
    this.setState({
      active: node,
    });
  };

  _onChangeEdit = () => {
    this.setState(({ isEditing, tree }) => {
      if (isEditing) {
        return { isEditing: false };
      }

      return {
        isEditing: true,
        prevTree: JSON.stringify(tree),
        prevTreeHash: JSON.stringify(filterTree(tree)),
      };
    });
  };

  _onChangeReset = () => {
    this.setState(({ prevTree }) => {
      if (prevTree) {
        return { tree: JSON.parse(prevTree), dirty: false, isEditing: false };
      }
    });
  };

  _onChangeSave = () => {
    this.setState(({ prevTree }) => {
      if (prevTree) {
        return {
          prevTree: JSON.stringify(tree),
          dirty: false,
          isEditing: false,
        };
      }
    });
  };

  renderNode = ({ __id, title, root = false, disabled }) => {
    if (!title || root) {
      return;
    }
    const props = {
      href: `#${__id || 0}`,
      disabled: disabled === true,
      title: title.text,
    };

    if (title.type !== "name" && !disabled) {
      props.onClick = this._onClickNode;
    }

    return <Item {...props}>{this.renderTitle(title)}</Item>;
  };

  renderTitle = ({ text, type }) => {
    if (!text) {
      return <EmptyTitle />;
    }

    switch (type) {
      case "tl":
        return text;
      case "name":
        return <BookName>{text}</BookName>;
      default:
        return <WarningTitle>{text}</WarningTitle>;
    }
  };

  renderCaret = props => {
    return <Caret {...props} />;
  };

  render() {
    const { dirty, tree, isEditing } = this.state;

    return (
      <div className="app">
        <Panel isEditing={isEditing}>
          <Header>
            <Title>Оглавление</Title>
            <Buttons>
              {!isEditing && (
                <Button onClick={this._onChangeEdit}>Изменить</Button>
              )}
              {dirty && <Button onClick={this._onChangeSave}>Сохранить</Button>}
              {isEditing && (
                <Button onClick={this._onChangeReset}>Отменить</Button>
              )}
            </Buttons>
          </Header>
          <Container>
            <Tree
              tree={tree}
              draggable={isEditing}
              onChange={this._onChange}
              isNodeCollapsed={this.isNodeCollapsed}
              renderNode={this.renderNode}
              renderCaret={this.renderCaret}
            />
            <Tree
              tree={notes}
              renderNode={this.renderNode}
              renderCaret={this.renderCaret}
              draggable={false}
            />
          </Container>
        </Panel>
        <div className="inspector">
          <h1>
            {packageJSON.name} {packageJSON.version}
          </h1>
          <button onClick={this.updateTree}>update tree</button>
          <pre>{JSON.stringify(tree, null, "  ")}</pre>
        </div>
        {isEditing && <Overlay />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
