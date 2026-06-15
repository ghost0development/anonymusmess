function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="bg svelte-12qhfyh"></div> <div class="app svelte-12qhfyh">`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-OAylOyBU.js.map
