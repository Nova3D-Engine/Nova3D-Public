# Nova3D Website

This folder contains a dependency-free static website for the engine.

## Open locally

- Open `index.html` directly in a browser.
- Open `api.html` for the API reference view.

## Replace temporary screenshots

- Temporary screenshot assets live in `assets/screenshots/`.
- You can replace them with real captures by keeping the same filenames.
- If you want different filenames or formats, update the `<img src="...">` paths in `index.html`.

## Expand the API reference

- The API content data lives in `assets/site.js`.
- Add new modules, headers, and symbols there to extend the reference without changing page structure.
- The Lua API section is intentionally marked as planned so it can be filled in when that layer exists.