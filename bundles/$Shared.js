const __default = ({ template, insertions, handleInsertion })=>insertions.reduce((result, insertion, index)=>{ let handledInsertion = ""; if (Array.isArray(insertion)) { insertion.forEach((subInsertion)=>{ handledInsertion += handleInsertion(subInsertion); }); } else { handledInsertion = handleInsertion(insertion); } return result + (template.at(index) ?? "") + handledInsertion; }, "") + (template.at(-1) ?? ""); const escapedCharacters = new Map([ [ "&", "&amp;" ], [ "<", "&lt;" ], [ ">", "&gt;" ], [ "'", "&#39;" ], [ '"', "&quot;" ] ]); const __default1 = (html)=>{ let result = ""; for (const __char of String(html)){ result += escapedCharacters.get(__char) ?? __char; } return result; }; const __default2 = (text)=>{ return text.replaceAll(/[^\:\\]\/\/.*/g, "").replaceAll(/\s+/g, " ").replaceAll(/<\!--.*?-->|\/\*.*?\*\//g, "").trim(); }; const ENGINE_CHECKERS = { Firefox: /Firefox\/(?<version>\S+)/, Seamonkey: /Seamonkey\/(?<version>\S+)/, Chrome: /Chrome\/(?<version>\S+)/, Chromium: /Chromium\/(?<version>\S+)/, Edge: /Edg.*\/(?<version>\S+)/, Safari: /Safari\/(?<version>\S+)/, OperaLegacy: /Opera\/(?<version>\S+)/, Opera: /OPR\/(?<version>\S+)/ }; const RENDERER_CHECKERS = { Gecko: /Gecko\/(?<version>\S+)/, WebKit: /WebKit\/(?<version>\S+)/, Blink: /Blink\/(?<version>\S+)/, Presto: /Presto\/(?<version>\S+)/, EdgeHTML: /Edge\/(?<version>\S+)/ }; const __default3 = (userAgent)=>{ const platform = {}; for(const untypedRendererName in RENDERER_CHECKERS){ const rendererName = untypedRendererName; const result = userAgent.match(RENDERER_CHECKERS[rendererName]); if (result?.groups?.version) { platform.renderer = { name: rendererName, version: parseFloat(result.groups.version) }; break; } } const engines = {}; for(const untypedEngineName in ENGINE_CHECKERS){ const engineName = untypedEngineName; const result = userAgent.match(ENGINE_CHECKERS[engineName]); if (result?.groups?.version) { engines[engineName] = { name: engineName, version: parseFloat(result.groups.version) }; } } if (engines.Firefox && !engines.Seamonkey) platform.engine = engines.Firefox; if (engines.Seamonkey) platform.engine = engines.Seamonkey; if (engines.Chrome && !engines.Chromium && !engines.Edge) platform.engine = engines.Chrome; if (engines.Chromium) platform.engine = engines.Chromium; if (engines.Safari && !engines.Chrome && !engines.Chromium) platform.engine = engines.Safari; if (engines.OperaLegacy) platform.engine = engines.OperaLegacy; if (engines.Opera) platform.engine = engines.Opera; return Object.freeze(platform); }; const __default4 = ({ engine, renderer }, requirements)=>{ let result = true; if (requirements.engine) { result &&= (engine.version ?? 0) >= (requirements.engine[engine.name] ?? 0); } if (requirements.renderer) { result &&= (renderer.version ?? 0) >= (requirements.renderer[renderer.name] ?? 0); } return result; }; const __default5 = (...requirements)=>{ const result = requirements[0]; for (const requirement of requirements){ if (!requirement) continue; if (requirement.engine) { result.engine ??= {}; for(const untypedEngineName in requirement.engine){ const engineName = untypedEngineName; result.engine[engineName] = Math.max(result.engine[engineName] ?? 0, requirement.engine[engineName] ?? 0); } } if (requirement.renderer) { result.renderer ??= {}; for(const untypedRendererName in requirement.renderer){ const rendererName = untypedRendererName; result.renderer[rendererName] = Math.max(result.renderer[rendererName] ?? 0, requirement.renderer[rendererName] ?? 0); } } } return result; }; const MAX_DETAIL_LENGTH = 256; const LOG_LEVELS = { debug: 0, info: 1, data: 2, warn: 3, error: 4, critical: 5 }; const Log = ({ message, detail, level = "info", _console = console })=>{ const logObject = { o: new Date().toISOString(), l: LOG_LEVELS[level], m: message.trim().slice(0, 128) }; if (logObject.m.length === 128) { logObject.m += "…"; } if (detail) { logObject.d = __default2(JSON.stringify(detail)).slice(0, MAX_DETAIL_LENGTH); if (logObject.d.length === 256) { logObject.d += "…"; } } _console[level](JSON.stringify(logObject)); }; const LogError = (error)=>Log({ message: error.message, detail: error, level: "error" }); globalThis.$Shared = { UserAgent: { parse: __default3, check: __default4, merge: __default5 }, HTML: { escape: __default1, minify: __default2 }, Log, LogError, handleTemplate: __default }; const __default6 = globalThis.$Shared; export { __default6 as default };