export const render = (vnode, parent) => {
  diff(undefined, vnode, parent);
};

const diff = (dom, vnode, parent) => {
  if (dom) {
    if (typeof vnode === "string") {
      dom.nodeValue = vnode;
      return dom;
    }

    if (typeof vnode.nodeName === "function") {
      const component = new vnode.nodeName(vnode.attributes);
      const renderedVDom = component.render();
      diff(dom, renderedVDom);
      return dom;
    }

    if (vnode.children.length !== dom.childNodes.length) {
      dom.appendChild(renderNode(vnode.children[vnode.children.length - 1]));
    }

    for (let i = 0; i < vnode.children.length; i++) {
      diff(dom.childNodes[i], vnode.children[i]);
    }

    return dom;
  } else {
    const newDom = renderNode(vnode);
    parent.appendChild(newDom);
    return newDom;
  }
};

const renderNode = vnode => {
  let el;

  const { nodeName, attributes, children } = vnode;

  if (vnode.split) return document.createTextNode(vnode);

  if (typeof nodeName === "string") {
    el = document.createElement(nodeName);

    for (let key in attributes) {
      if (key[0] == "o" && key[1] == "n") {
        el.addEventListener(key.toLowerCase().substring(2), attributes[key]);
      } else if (key === "class") {
        el.className = attributes[key];
      } else {
        el.setAttribute(key, attributes[key]);
      }
    }
  } else if (typeof nodeName === "function") {
    const component = new nodeName(attributes);
    el = renderNode(component.render());
    // save DOM reference to `base` field as in `renderComponent`
    component.base = el;
  }
  // recursively do this to all of its children
  (children || []).forEach(child => el.appendChild(renderNode(child)));

  return el;
};

export const renderComponent = component => {
  let renderedVDom = component.render();
  component.base = diff(component.base, renderedVDom);
};
