import { a9 as ensure_array_like, aa as attr_class } from './index-BaUpFax-.js';
import { e as escape_html, l as attr } from './attributes-moU86uOg.js';

function formatPeerId(id) {
  return id.slice(0, 8) + "..." + id.slice(-4);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let messages = [];
    let message = "";
    let peerId = "";
    $$renderer2.push(`<div class="chat-card svelte-23dtxz"><div class="chat-header svelte-23dtxz"><button class="secondary svelte-23dtxz">Back</button> <strong>P2P Chat</strong> <span class="peer-id-display svelte-23dtxz">${escape_html(formatPeerId(peerId))}</span></div> <div class="messages svelte-23dtxz"><!--[-->`);
    const each_array = ensure_array_like(messages);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let msg = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`message ${msg.from === peerId ? "own" : ""}`, "svelte-23dtxz")}><strong>${escape_html(msg.from === peerId ? "You" : msg.from)}:</strong> ${escape_html(msg.text)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="input-area svelte-23dtxz"><input${attr("value", message)} type="text" placeholder="Type a message..." class="svelte-23dtxz"/> <button class="primary svelte-23dtxz">Send</button></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DyMTNFQ7.js.map
