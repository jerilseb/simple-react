export default function hyperscript(nodeName, attributes, ...children) {
  if (Array.isArray(children[0])) children = children[0];

  return { nodeName, attributes, children };
}
