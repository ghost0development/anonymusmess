import { l as attr, e as escape_html } from './attributes-moU86uOg.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let isGenerating = false;
    $$renderer2.push(`<div class="auth-card svelte-1uha8ag"><h1 class="svelte-1uha8ag">P2P Chat Enterprise</h1> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button class="primary svelte-1uha8ag"${attr("disabled", isGenerating, true)}>${escape_html("Generate Peer ID")}</button> <div class="or svelte-1uha8ag">or</div> <input type="text" placeholder="Enter peer ID" class="svelte-1uha8ag"/> <button class="secondary svelte-1uha8ag">Connect</button> <button class="premium-link svelte-1uha8ag">View Premium Features</button>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DtDkqn6g.js.map
