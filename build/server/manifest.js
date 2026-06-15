const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DlWsm_6h.js",app:"_app/immutable/entry/app.D2Oc_ATE.js",imports:["_app/immutable/entry/start.DlWsm_6h.js","_app/immutable/chunks/Vbzt7Iy5.js","_app/immutable/chunks/ZvyuU45-.js","_app/immutable/chunks/BdmMa37z.js","_app/immutable/entry/app.D2Oc_ATE.js","_app/immutable/chunks/ZvyuU45-.js","_app/immutable/chunks/vIn53rQo.js","_app/immutable/chunks/BWSpD_8W.js","_app/immutable/chunks/2zKAFhyx.js","_app/immutable/chunks/BdmMa37z.js","_app/immutable/chunks/BOiDQm-k.js","_app/immutable/chunks/CNgIahaO.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-FH77yduC.js')),
			__memo(() => import('./chunks/1-BVIiHutT.js')),
			__memo(() => import('./chunks/2-BWw_TM-4.js')),
			__memo(() => import('./chunks/3-DYRCF1Iu.js')),
			__memo(() => import('./chunks/4-iq5Px9oa.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/chat",
				pattern: /^\/chat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/premium",
				pattern: /^\/premium\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
