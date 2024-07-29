import Backend from "/framework/backend/module.js";

import * as constants from "/app/constants.js";
import OnlyWebTheme from "/app/pages/shared-theme.js";

const route = "/";

Backend.Page.Register(route, {
  handleRequest: async (request) => {
    const inliner = await Backend.Page.Inliner(request, "/app/assets/messages");

    const logoSrc =
      (request.url.origin.match(/localhost/)
        ? request.url.origin
        : constants.KEYCDN_IMAGE_ZONE_URL) +
      "/app/assets/images/logo/black.svg";

    const inverseLogoSrc =
      (request.url.origin.match(/localhost/)
        ? request.url.origin
        : constants.KEYCDN_IMAGE_ZONE_URL) +
      "/app/assets/images/logo/white.svg";

    return Backend.Page.Response.html`<head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/app/assets/manifest.json" />

      ${inliner.metadata({
        title: "2",
        description: inliner.message(
          "only web. only web. only web. only web. only web. only web. only web. only web. only web. only web. only web. only web"
        ),
        previewImage: "/app/assets/images/root-preview.png",
        iconImage: "/app/assets/images/logo/maskable.png",
        splashImage: "/app/assets/images/logo/splash.png",
        url: "https://onlyweb.dev/"
      })}

      ${inliner.elements(
        "/app/elements/core/loading/skeleton.js",
        "/app/elements/core/image.js",
        "/app/elements/core/link.js",
        "/app/elements/core/text.js",
        "/app/elements/core/input.js",
        "/app/elements/demo/frame.js",
        "/app/elements/demo/link.js"
      )}

      <meta
        name="theme-color"
        content="${constants.THEME_COLOR_BACKGROUND}"
      />
      ${OnlyWebTheme}

      <style>
        main {
          display: flex;
          flex-direction: row;
          min-height: 100svh;
          width: 100vw;
        }

        nav {
          background: var(--color-foreground);
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          height: 100svh;
          max-width: min-content;
          text-align: center;
          transform: translateX(0%);
          transition: transform var(--animation-duration) var(--animation-timing-function);
          will-change: transform;
          z-index: 1;
        }

        nav header {
          margin: var(--size-default);
        }

        nav header core-text {
          --core-text-color-title: var(--color-background);
          --core-text-size-title: 1.5rem;
          flex-shrink: 0;
          white-space: nowrap;
        }

        nav core-input {
          --color-foreground: var(--color-background);
          text-align: left;
        }

        .input-wrapper {
          padding: 0 var(--size-narrow);
        }

        nav ul {
          all: initial;
          font-family: system-ui;
          flex-grow: 1;
          margin-top: var(--size-default);
        }

        nav ul li {
          list-style-type: none;
        }

        nav ul li a {
          all: initial;
          cursor: pointer;
          display: block;
          font-family: system-ui;
          padding: var(--size-narrow);
          text-align: right;
          transition: background-color var(--animation-duration-fast) var(--animation-timing-function);
          user-select: none;
        }

        nav ul li a:hover {
          background-color: var(--color-highlight);
          color: var(--color-background);
        }

        article {
          box-sizing: border-box;
          color: var(--color-background);
          flex-grow: 1;
          padding: var(--size-large);
          will-change: width;
        }

        section {
          display: flex;
          flex-direction: column;
          gap: var(--size-narrow);
          margin: var(--size-huge) 0;
        }

        @media screen and (max-width: 768px) {
          nav {
            transform: translateX(calc(var(--size-narrow) - 100%));
            position: fixed;
            top: 0;
          }

          nav:hover, nav:focus-within, nav:active {
            transform: translateX(0%);
          }
        }
      </style>
    </head>
    <body>
      <main>
      <nav>
        <header>
          <core-image src="${logoSrc}" alt="logo" width="64px" height="64px"></core-image>
          <core-text type="title">${inliner.message("only web 2")}</core-text>
        </header>
        <div class="input-wrapper">
          <core-input id="search" type="search" label="Search..."></core-input>
        </div>
        <ul id="sidebar-options"></ul>
      </nav>
        <article>
          <section>
            <div style="display:flex;align-items:center;gap:3px;">
              <core-image src="${inverseLogoSrc}" alt="logo" width="96px" height="96px"></core-image>
              <core-text type="title">nly Web</core-text>
            </div>
          </section>
          <section>
            <core-text type="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </core-text>
          </section>
          <section>
            <demo-link id="synthesizer"
              title="Audio: Synthesizer ↗️"
              author="Ableton"
              src="https://learningsynths.ableton.com/en/playground"
            >
              <core-text>
                Laboriosam qui vel minus id voluptatem est. Qui consectetur magnam pariatur dolorum. Non in fugiat quo.
              </core-text>
            </demo-link>
          </section>
          <section>
            <demo-frame id="chord-reader"
              title="Audio: Chord Reader"
              src="https://codepen.io/daniellacosse/full/VwMQEOz"
              height=600
            >
              <core-text>
              Natus corporis ut voluptatem itaque. Ut eos rerum autem odit. Magni quo rem explicabo delectus consectetur voluptatem.
              </core-text>
            </demo-frame>
          </section>
          <section>
            <demo-frame id="diablo"
              title="Web Assembly: Diablo"
              src="https://d07riv.github.io/diabloweb/"
              height=650
              author="d07riv"
            >
              <core-text>
                This is the original Diablo game, compiled to Web Assembly.  Optio minima cumque autem molestias. Nulla optio cumque rerum ea neque laboriosam laudantium. Dolores voluptate aperiam quis quo magnam est natus ut.
              </core-text>
            </demo-frame>
          </section>
          <section>
            <demo-frame id="frustrum-culling"
              title="WebGPU: Frustrum Culling"
              src="https://toji.github.io/webgpu-bundle-culling/"
              author="toji"  
            >
              <core-text>
                Frustrum culling is a technique used in 3D graphics to only render what the camera can see.
                This demo uses WebGPU to render a scene with a large number of objects.
                Nulla aliquam minima possimus unde deleniti placeat. Sit voluptatem et aliquid totam. Et assumenda et illo fugiat ut laborum eius exercitationem. Libero deserunt officiis et doloribus ab.
              </core-text>
            </demo-frame>
        </article>
      </main>
      <script type="module">
        import Frontend from "/framework/frontend/module.js";

        const sidebarMenuContents = [
          { content: "Audio: Synthesizer", href: "#synthesizer" },
          { content: "Audio: Chord Reader", href: "#chord-reader" },
          { content: "Web Assembly: Diablo", href: "#diablo" },
          { content: "WebGPU: Frustrum Culling", href: "#frustrum-culling" }
        ];

        const sidebarSearchElement = globalThis.document.getElementById("search");
        const sidebarOptionsListElement = globalThis.document.getElementById("sidebar-options");

        const renderSidebarMenuContents = (contents) => {
          sidebarOptionsListElement.replaceChildren(
            // TODO(#195): how do I/can I/should I nest templates?
            ...contents.flatMap(({href, content}) => Array.from(Frontend.Element.html(["<li><a href='", "'>", "</a></li>"], href, content)))
          );
        };

        renderSidebarMenuContents(sidebarMenuContents);

        sidebarSearchElement.addEventListener("input", (event) => {
          requestAnimationFrame(() => {
            const searchValue = sidebarSearchElement.value.toLowerCase();
            const filteredContents = sidebarMenuContents.filter(({content}) =>
              content.toLowerCase().startsWith(searchValue)
            );

            renderSidebarMenuContents(filteredContents);
          })
        });
      </script>
    </body>`;
  },
  handleServiceWorker: () => Backend.Page.Response.js`
      self.addEventListener("install", (event) => {
        event.waitUntil(
          caches.open("${route}").then((cache) => {
            return cache.addAll([
              "${route}",
              "/app/assets/manifest.json"
            ]);
          })
        );
      });
  
      self.addEventListener("fetch", (event) => {
        event.respondWith(caches.open("${route}").then((cache) => {
          return cache.match(event.request).then((cachedResponse) => {
            const fetchedResponse = fetch(event.request).then((networkResponse) => {
              cache.put(event.request, networkResponse.clone());
  
              return networkResponse;
            });
  
            return cachedResponse || fetchedResponse;
          });
        }));
      });`
});
