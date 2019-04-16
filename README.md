# react-ui-tree

React tree component

This is a fork of the library: https://github.com/pqx/react-ui-tree

Original author: https://github.com/pqx/

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
  tree={this.state.tree}        // tree object
  onChange={this.handleChange}  // onChange(tree) tree object changed
  renderNode={this.renderNode}  // renderNode(node) return react element
/>

// a sample tree object
// node.children, node.collapsed, node.leaf properties are hardcoded
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

- npm install
- npm start
- http://localhost:8080/example

### License

MIT
