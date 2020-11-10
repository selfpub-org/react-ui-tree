# react-ui-tree

[![Build Status](https://travis-ci.org/selfpub-org/react-ui-tree.svg)](https://travis-ci.org/selfpub-org/react-ui-tree)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=selfpub-org/react-ui-tree)](https://dependabot.com)
[![npm](https://badgen.net/npm/v/@selfpub/react-ui-tree)](https://www.npmjs.com/package/@selfpub/react-ui-tree)
[![bundlephobia](https://badgen.net/bundlephobia/min/@selfpub/react-ui-tree)](https://bundlephobia.com/result?p=@selfpub/react-ui-tree)

React tree component

> This is a fork of the library: https://github.com/pqx/react-ui-tree

> Original author: https://github.com/pqx/

Demo: https://selfpub-org.github.io/react-ui-tree/

**And we use styled-components for style**

This project was initially developed for a webpage builder. It maintains an
internal tree structure within the component through
[js-tree](https://github.com/wangzuo/js-tree).

### Installation

```sh
npm install @selfpub/react-ui-tree --save
```

### Usage

```javascript
<Tree
  paddingLeft={20}              // left padding for children nodes in pixels
  hideRoot={true}               // rendering first root tree node
  tree={this.state.tree}        // tree object
  onChange={this.handleChange}  // onChange(tree) tree object changed
  renderNode={this.renderNode}  // renderNode(node) return react element
  renderCaret={this.renderCaret}  // renderCaret(node) return react element
  renderDragIcon={this.renderDragIcon}  // renderDragIcon() return react element
/>

// a sample tree object
// node.children, node.collapsed, node.leaf, node.nodrag properties are hardcoded
{
  "module": "react-ui-tree",
  "children": [{
    "collapsed": true,
    "module": "dist",
    "children": [{
      "module": "node.js"
    }]
  }]
}
```

check [app.js](https://github.com/selfpub-org/react-ui-tree/blob/master/example/app.js)
for a working example

### Development

    npm install
    npm start
    http://localhost:8080/example

### License

MIT
