const apiReference = {
    overviewPage: {
        slug: "overview",
        title: "API Overview",
        eyebrow: "Engine Docs",
        summary: "This is the simple map of the engine. Start from the part you care about, then drill into the headers behind it.",
        sections: [
            {
                title: "Start Here",
                items: [
                    "Start with the editor page for the main workflow.",
                    "Open the scene pages for import and world state.",
                    "Jump into the renderer pages for visuals and tools.",
                    "Use the asset and memory pages when tracing load and resource setup."
                ]
            },
            {
                title: "What Is Here Now",
                items: [
                    "Module pages for the main engine areas.",
                    "Header pages with the key symbols.",
                    "A sidebar layout ready to grow later."
                ]
            }
        ],
        calloutTitle: "Scripting later",
        calloutBody: "The structure is ready for scripting docs, but the focus right now is the engine that already exists."
    },
    futurePage: {
        slug: "lua-planned",
        title: "Lua API Placeholder",
        eyebrow: "Planned Track",
        summary: "Lua support is planned, but not here yet. When it lands, this section can grow into scripting guides and examples.",
        sections: [
            {
                title: "Planned Scope",
                items: [
                    "Runtime object and world access.",
                    "Scene loading, spawning, and game-side changes.",
                    "Editor automation and content-pipeline helpers.",
                    "Useful math, input, and lifecycle hooks for gameplay code."
                ]
            },
            {
                title: "Why It Is Listed Now",
                items: [
                    "The docs layout is already set up for it.",
                    "Search and navigation will not need a redesign later.",
                    "Engine docs stay separate from future scripting docs."
                ]
            }
        ],
        calloutTitle: "Current priority",
        calloutBody: "For now, the documented surface is the engine itself."
    },
    modules: [
        {
            slug: "nova-core",
            name: "NovaCore",
            badge: "Shared runtime core",
            summary: "Shared startup, scene state, and the basics the rest of the engine builds on.",
            page: {
                slug: "nova-core",
                title: "NovaCore Module",
                eyebrow: "Module Overview",
                summary: "NovaCore is the foundation layer for startup, scenes, and shared engine state.",
                sections: [
                    {
                        title: "Owns",
                        items: [
                            "Launch and module selection through NovaAppConfig.",
                            "Canonical scene containers such as NovaSceneData.",
                            "Flecs-backed scene state through NovaSceneWorld.",
                            "Windowing, timing, and input bridge functions used by the renderer and editor."
                        ]
                    },
                    {
                        title: "Read These Headers First",
                        items: [
                            "nova_app_config.h",
                            "nova_scene_data.h",
                            "nova_scene_ecs.h",
                            "app_window.h"
                        ]
                    }
                ],
                calloutTitle: "Why it matters",
                calloutBody: "Start here before diving into rendering or tools."
            },
            headers: [
                {
                    slug: "nova-app-config",
                    title: "nova_app_config.h",
                    path: "src/NovaCore/nova_app_config.h",
                    summary: "Top-level launch options for the engine.",
                    symbols: ["NovaModuleFlags", "NovaAppConfig", "nova_app_config_init_default", "nova_app_config_resolve"],
                    responsibilities: [
                        "Define which engine modules are active for a run.",
                        "Store project file path and editor launch intent.",
                        "Provide default and resolved config setup helpers."
                    ]
                },
                {
                    slug: "nova-scene-data",
                    title: "nova_scene_data.h",
                    path: "src/NovaCore/nova_scene_data.h",
                    summary: "The shared scene format used across import, editing, and rendering.",
                    symbols: ["NovaSceneTexture", "NovaSceneMaterial", "NovaSceneVertex", "NovaSceneObject", "NovaSceneData", "NovaSceneGpuMaterial", "nova_scene_data_init", "nova_scene_data_release"],
                    responsibilities: [
                        "Represent imported or constructed scene assets in one shared format.",
                        "Hold geometry, material, texture, and object metadata.",
                        "Provide initialization and release helpers for scene lifetime."
                    ]
                },
                {
                    slug: "nova-scene-ecs",
                    title: "nova_scene_ecs.h",
                    path: "src/NovaCore/nova_scene_ecs.h",
                    summary: "The live scene world used to keep objects, lights, and editor state together.",
                    symbols: ["NovaSceneWorld", "NovaSceneObjectRecord", "NovaSceneLightRecord", "nova_scene_world_initialize", "nova_scene_world_sync_objects", "nova_scene_world_sync_lights", "nova_scene_world_sync_from_ui", "nova_scene_world_sync_to_ui"],
                    responsibilities: [
                        "Store world-level ownership for objects, lights, and imported-scene runtime data.",
                        "Synchronize renderer-compatible scene caches with editor-facing UI state.",
                        "Expose object and light records that downstream renderer code can consume."
                    ]
                },
                {
                    slug: "app-window",
                    title: "app_window.h",
                    path: "src/NovaCore/app_window.h",
                    summary: "Window, input, timing, and Vulkan surface setup.",
                    symbols: ["app_window_init", "app_window_create", "app_window_create_surface", "app_window_poll_events", "app_window_get_required_instance_extensions"],
                    responsibilities: [
                        "Create and destroy the host window.",
                        "Expose the instance extensions required for Vulkan surface integration.",
                        "Provide lightweight input, timing, and event polling helpers."
                    ]
                }
            ]
        },
        {
            slug: "nova-memory-manager",
            name: "NovaMemoryManager",
            badge: "CPU and GPU memory",
            summary: "GPU resources and temporary memory used across rendering work.",
            page: {
                slug: "nova-memory-manager",
                title: "NovaMemoryManager Module",
                eyebrow: "Module Overview",
                summary: "NovaMemoryManager handles buffers, images, and scratch memory for renderer work.",
                sections: [
                    {
                        title: "Owns",
                        items: [
                            "Allocator bootstrap and shutdown.",
                            "CPU allocation helpers and scratch arenas.",
                            "Buffer and image creation helpers used by the renderer."
                        ]
                    }
                ],
                calloutTitle: "Why it matters",
                calloutBody: "This keeps resource setup in one place."
            },
            headers: [
                {
                    slug: "nova-memory-manager-header",
                    title: "nova_memory_manager.h",
                    path: "src/NovaMemoryManager/nova_memory_manager.h",
                    summary: "Main memory header for allocator setup and resource creation.",
                    symbols: ["NovaMemoryManager", "NovaMemoryBlock", "NovaCpuArena", "nova_memory_manager_initialize", "nova_allocate_cpu", "nova_cpu_arena_create", "nova_create_buffer", "nova_create_image"],
                    responsibilities: [
                        "Initialize and shut down shared allocation state.",
                        "Offer CPU allocation, reallocation, and arena-based scratch APIs.",
                        "Create and destroy Vulkan buffers and images through the engine allocator layer."
                    ]
                }
            ]
        },
        {
            slug: "nova-asset-manager",
            name: "NovaAssetManager",
            badge: "Scene import",
            summary: "Scene import for content the editor and renderer can both use.",
            page: {
                slug: "nova-asset-manager",
                title: "NovaAssetManager Module",
                eyebrow: "Module Overview",
                summary: "NovaAssetManager turns supported scene files into a shared in-engine format.",
                sections: [
                    {
                        title: "Owns",
                        items: [
                            "Scene import entry points for glTF and generic scene loading.",
                            "Cleanup helpers for the shared scene-data result.",
                            "Translation from importer-specific formats into NovaSceneData."
                        ]
                    }
                ],
                calloutTitle: "Why it matters",
                calloutBody: "A small import surface keeps loading simple."
            },
            headers: [
                {
                    slug: "gltf-loader",
                    title: "gltf_loader.h",
                    path: "src/NovaAssetManager/gltf_loader.h",
                    summary: "Scene import entry points and cleanup helpers.",
                    symbols: ["scene_load_scene_data", "scene_free_scene_data", "scene_load_scene", "scene_free_scene", "gltf_load_scene", "gltf_free_scene"],
                    responsibilities: [
                        "Load scenes into the canonical NovaSceneData shape.",
                        "Support both generic scene loading and direct glTF-focused entry points.",
                        "Provide cleanup helpers for imported scene ownership."
                    ]
                }
            ]
        },
        {
            slug: "nova-renderer-vk",
            name: "NovaRendererVK",
            badge: "Vulkan backend",
            summary: "Lighting, shadows, ray tracing, raster rendering, picking, and frame flow.",
            page: {
                slug: "nova-renderer-vk",
                title: "NovaRendererVK Module",
                eyebrow: "Module Overview",
                summary: "NovaRendererVK powers the real-time picture, ray tracing, shadows, debug tools, and editor rendering support.",
                sections: [
                    {
                        title: "Owns",
                        items: [
                            "Vulkan instance, device, and platform bootstrap.",
                            "Ray tracing pipelines, BLAS and TLAS updates, and SBT setup.",
                            "Raster pipeline creation, draw-path support, descriptors, Hi-Z, picking, and renderer cleanup."
                        ]
                    },
                    {
                        title: "Key Pages",
                        items: [
                            "app_vulkan.h",
                            "app_raytracing.h",
                            "raster_pipelines.h",
                            "hiz.h",
                            "app_descriptors.h",
                            "app_picking.h"
                        ]
                    }
                ],
                calloutTitle: "Reading order",
                calloutBody: "Start with Vulkan and ray tracing, then move into raster, descriptors, Hi-Z, and picking."
            },
            headers: [
                {
                    slug: "app-vulkan",
                    title: "app_vulkan.h",
                    path: "src/NovaRendererVK/app_vulkan.h",
                    summary: "Vulkan setup, shutdown, and capability checks.",
                    symbols: ["AppVulkanInstanceContext", "AppVulkanDeviceContext", "app_vulkan_create_instance", "app_vulkan_pick_physical_device", "app_vulkan_create_device", "app_vulkan_shutdown"],
                    responsibilities: [
                        "Configure overlay and validation environment.",
                        "Create instance, surface, physical-device selection, and logical device state.",
                        "Query ray tracing capabilities and provide clean shutdown helpers."
                    ]
                },
                {
                    slug: "app-raytracing",
                    title: "app_raytracing.h",
                    path: "src/NovaRendererVK/app_raytracing.h",
                    summary: "Ray tracing setup, acceleration structures, and RT runtime data.",
                    symbols: ["BlasResource", "RayTracingResources", "app_raytracing_load_device_functions", "app_raytracing_create_pipeline", "app_raytracing_create_sbt", "app_raytracing_build_or_update_blas", "app_raytracing_rebuild_tlas", "app_raytracing_destroy_runtime_resources"],
                    responsibilities: [
                        "Load Vulkan RT device function pointers.",
                        "Create the RT pipeline and shader binding table.",
                        "Build, update, and destroy BLAS and TLAS runtime resources."
                    ]
                },
                {
                    slug: "raster-pipelines",
                    title: "raster_pipelines.h",
                    path: "src/NovaRendererVK/raster_pipelines.h",
                    summary: "Raster and shadow pipeline setup for fast scene rendering.",
                    symbols: ["AppRasterPipelineContext", "AppShadowGraphicsPipelineContext", "app_raster_create_pipeline", "app_shadow_create_graphics_pipeline", "app_raster_destroy_pipeline_resources"],
                    responsibilities: [
                        "Create opaque and alpha-tested raster pipelines.",
                        "Create shadow graphics pipelines matching the raster material split.",
                        "Destroy pipeline layouts and graphics pipeline objects cleanly."
                    ]
                },
                {
                    slug: "hiz",
                    title: "hiz.h",
                    path: "src/NovaRendererVK/hiz.h",
                    summary: "Depth-pyramid build and visibility debug tools.",
                    symbols: ["AppHiZRuntimeContext", "app_hiz_create_runtime_resources", "app_hiz_refresh_runtime_resources", "app_hiz_build_depth_pyramid_runtime", "app_hiz_dispatch_visualization_runtime"],
                    responsibilities: [
                        "Create the build and visualization resources for the depth pyramid.",
                        "Refresh descriptor wiring when render targets change.",
                        "Dispatch pyramid build and visualization passes."
                    ]
                },
                {
                    slug: "app-descriptors",
                    title: "app_descriptors.h",
                    path: "src/NovaRendererVK/app_descriptors.h",
                    summary: "Binding setup for frame, material, and renderer resources.",
                    symbols: ["Descriptor setup contexts", "Frame descriptor allocation", "Resource binding refresh"],
                    responsibilities: [
                        "Own frame and scene descriptor layout setup.",
                        "Allocate descriptor pools and sets for renderer runtime resources.",
                        "Refresh bindings when render targets or scene resources change."
                    ]
                },
                {
                    slug: "app-picking",
                    title: "app_picking.h",
                    path: "src/NovaRendererVK/app_picking.h",
                    summary: "Picking support for accurate viewport selection.",
                    symbols: ["Picking resource setup", "Picking dispatch", "Picking readback"],
                    responsibilities: [
                        "Create and maintain picking render targets and dependent resources.",
                        "Run the picking path used by the editor viewport.",
                        "Read back selected pixel/object data for editor-side resolution."
                    ]
                }
            ]
        },
        {
            slug: "nova-editor",
            name: "NovaEditor",
            badge: "Editor host",
            summary: "Viewport interaction, startup flow, scene tools, and early in-engine modeling.",
            page: {
                slug: "nova-editor",
                title: "NovaEditor Module",
                eyebrow: "Module Overview",
                summary: "NovaEditor brings together viewport controls, startup flow, UI, picking, and the first modeling tools.",
                sections: [
                    {
                        title: "Owns",
                        items: [
                            "The editor-backed engine entry point.",
                            "Startup, main-loop, and cleanup orchestration.",
                            "Mesh editing and viewport UI behavior."
                        ]
                    }
                ],
                calloutTitle: "Current state",
                calloutBody: "This is where rendering, tools, and scene editing meet."
            },
            headers: [
                {
                    slug: "editor-application",
                    title: "editor_application.h",
                    path: "src/NovaEditor/editor_application.h",
                    summary: "Top-level entry point for the current editor workflow.",
                    symbols: ["nova_editor_run"],
                    responsibilities: [
                        "Expose the current public entry point for booting the editor-backed runtime.",
                        "Accept resolved app configuration from NovaCore.",
                        "Bridge top-level app launch into editor orchestration."
                    ]
                },
                {
                    slug: "editor-orchestration",
                    title: "editor_orchestration.h",
                    path: "src/NovaEditor/editor_orchestration.h",
                    summary: "Coordinates startup, frame flow, and shutdown.",
                    symbols: ["Startup orchestration", "Frame loop orchestration", "Cleanup orchestration"],
                    responsibilities: [
                        "Coordinate startup and shutdown paths.",
                        "Own the high-level frame loop and editor/runtime sequencing.",
                        "Keep application-shell logic separated from lower-level renderer helpers."
                    ]
                },
                {
                    slug: "mesh-editor",
                    title: "mesh_editor.h",
                    path: "src/NovaEditor/mesh_editor.h",
                    summary: "Early modeling tools for replacing primitives and editing meshes in-engine.",
                    symbols: ["Mesh editing state", "Extrude and inset operations", "Preview and bake hooks"],
                    responsibilities: [
                        "Store mesh-editing session state.",
                        "Support primitive replacement and direct editing operations.",
                        "Bridge preview and bake workflows back into runtime-scene rebuilds."
                    ]
                },
                {
                    slug: "ui-editor",
                    title: "ui_editor.h",
                    path: "src/NovaEditor/ui_editor.h",
                    summary: "Editor UI for panels, viewport interaction, gizmos, and controls.",
                    symbols: ["Viewport UI", "Gizmo controls", "Dock panels"],
                    responsibilities: [
                        "Build the editor-facing UI and dock layout.",
                        "Expose viewport interaction state used by input and picking.",
                        "Host user-facing controls for renderer and modeling features."
                    ]
                }
            ]
        }
    ]
};

const apiModules = apiReference.modules;

function flattenApiPages() {
    const pages = [
        {
            type: "overview",
            moduleName: null,
            moduleBadge: null,
            path: null,
            include: null,
            ...apiReference.overviewPage
        }
    ];

    apiReference.modules.forEach((module) => {
        pages.push({
            type: "module",
            moduleName: module.name,
            moduleBadge: module.badge,
            path: null,
            include: null,
            ...module.page
        });

        module.headers.forEach((header) => {
            pages.push({
                type: "header",
                moduleName: module.name,
                moduleBadge: module.badge,
                include: `#include \"${header.title}\"`,
                sections: [],
                ...header
            });
        });
    });

    pages.push({
        type: "future",
        moduleName: "Lua API",
        moduleBadge: "Planned",
        path: null,
        include: null,
        ...apiReference.futurePage
    });

    return pages;
}

const apiPages = flattenApiPages();

function setActiveNav() {
    const page = document.body.dataset.page;
    const links = document.querySelectorAll(".site-nav a");
    links.forEach((link) => {
        const isOverview = page === "home" && link.getAttribute("href") === "index.html";
        const isApi = page === "api" && link.getAttribute("href") === "api.html";
        if (isOverview || isApi) {
            link.classList.add("is-active");
        }
    });
}

function renderModuleOverview() {
    const container = document.getElementById("module-overview");
    if (!container) {
        return;
    }

    const cards = apiModules.map((module) => `
        <article class="architecture-card">
            <div class="architecture-card-head">
                <span class="chip">${module.badge}</span>
                <span class="architecture-card-meta">${module.headers.length} header${module.headers.length === 1 ? "" : "s"}</span>
            </div>
            <h3>${module.name}</h3>
            <p>${module.summary}</p>
            <a class="architecture-card-link" href="${buildPageHref(module.page.slug)}" data-page-slug="${module.page.slug}">Open module reference</a>
        </article>
    `);

    container.innerHTML = cards.join("");
}

function getApiPageBySlug(slug) {
    return apiPages.find((page) => page.slug === slug);
}

function getCurrentApiSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "overview";
}

function setCurrentApiSlug(slug, replaceState = false) {
    const params = new URLSearchParams(window.location.search);
    if (slug === "overview") {
        params.delete("page");
    } else {
        params.set("page", slug);
    }
    const next = `${window.location.pathname}${params.toString() ? `?${params}` : ""}`;
    const state = { page: slug };
    if (replaceState) {
        window.history.replaceState(state, "", next);
    } else {
        window.history.pushState(state, "", next);
    }
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function buildPageHref(slug) {
    return slug === "overview" ? "api.html" : `api.html?page=${encodeURIComponent(slug)}`;
}

function buildPageSearchText(page) {
    return [
        page.title,
        page.moduleName || "",
        page.moduleBadge || "",
        page.summary || "",
        page.path || "",
        ...(page.symbols || []),
        ...(page.responsibilities || []),
        ...((page.sections || []).flatMap((section) => [section.title, ...section.items]))
    ].join(" ").toLowerCase();
}

function renderApiSidebar(filterText = "") {
    const container = document.getElementById("api-sidebar-nav");
    if (!container) {
        return;
    }

    const currentSlug = getCurrentApiSlug();
    const query = filterText.trim().toLowerCase();
    const overviewMatches = buildPageSearchText(apiReference.overviewPage).includes(query);
    const futureMatches = buildPageSearchText(apiReference.futurePage).includes(query);

    const moduleGroups = apiReference.modules.map((module) => {
        const entries = [module.page, ...module.headers];
        const visibleEntries = entries.filter((entry) => buildPageSearchText({ ...entry, moduleName: module.name, moduleBadge: module.badge }).includes(query));
        if (query.length > 0 && visibleEntries.length === 0 && !module.name.toLowerCase().includes(query) && !module.summary.toLowerCase().includes(query)) {
            return "";
        }

        const open = currentSlug === module.page.slug || module.headers.some((header) => header.slug === currentSlug) || query.length > 0;
        const links = [
            `<a class="api-nav-link${currentSlug === module.page.slug ? " is-current" : ""}" href="${buildPageHref(module.page.slug)}" data-page-slug="${module.page.slug}">Module overview</a>`,
            ...module.headers
                .filter((header) => query.length === 0 || buildPageSearchText({ ...header, moduleName: module.name, moduleBadge: module.badge }).includes(query))
                .map((header) => `<a class="api-nav-link api-nav-link-sub${currentSlug === header.slug ? " is-current" : ""}" href="${buildPageHref(header.slug)}" data-page-slug="${header.slug}">${header.title}</a>`)
        ];

        return `
            <details class="api-nav-group" ${open ? "open" : ""}>
                <summary>
                    <span>
                        <strong>${module.name}</strong>
                        <small>${module.badge}</small>
                    </span>
                </summary>
                <div class="api-nav-links">
                    ${links.join("")}
                </div>
            </details>
        `;
    }).filter(Boolean);

    container.innerHTML = `
        <div class="api-nav-top-links">
            ${query.length === 0 || overviewMatches ? `<a class="api-nav-link${currentSlug === "overview" ? " is-current" : ""}" href="${buildPageHref("overview")}" data-page-slug="overview">API overview</a>` : ""}
            ${query.length === 0 || futureMatches ? `<a class="api-nav-link${currentSlug === apiReference.futurePage.slug ? " is-current" : ""}" href="${buildPageHref(apiReference.futurePage.slug)}" data-page-slug="${apiReference.futurePage.slug}">Lua API placeholder</a>` : ""}
        </div>
        ${moduleGroups.length > 0 ? moduleGroups.join("") : `<p class="api-empty-state">No API pages match this filter.</p>`}
    `;
}

function renderApiPagination(page) {
    const index = apiPages.findIndex((candidate) => candidate.slug === page.slug);
    const previous = index > 0 ? apiPages[index - 1] : null;
    const next = index >= 0 && index < apiPages.length - 1 ? apiPages[index + 1] : null;

    return `
        <nav class="api-pagination" aria-label="Page navigation">
            ${previous ? `<a class="api-pagination-link" href="${buildPageHref(previous.slug)}" data-page-slug="${previous.slug}"><span>Previous</span><strong>${previous.title}</strong></a>` : `<span class="api-pagination-link is-disabled"><span>Previous</span><strong>Start of reference</strong></span>`}
            ${next ? `<a class="api-pagination-link" href="${buildPageHref(next.slug)}" data-page-slug="${next.slug}"><span>Next</span><strong>${next.title}</strong></a>` : `<span class="api-pagination-link is-disabled"><span>Next</span><strong>End of reference</strong></span>`}
        </nav>
    `;
}

function renderApiSections(page) {
    const sectionBlocks = [];

    if (page.path) {
        sectionBlocks.push(`
            <section class="api-content-section">
                <h2>Header Path</h2>
                <p class="api-section-copy">Public header location in the source tree.</p>
                <div class="api-inline-note">${page.path}</div>
                ${page.include ? `<pre class="api-code-block"><code>${escapeHtml(page.include)}</code></pre>` : ""}
            </section>
        `);
    }

    if (page.responsibilities && page.responsibilities.length > 0) {
        sectionBlocks.push(`
            <section class="api-content-section">
                <h2>Responsibilities</h2>
                <ul class="api-bullet-list">
                    ${page.responsibilities.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </section>
        `);
    }

    if (page.symbols && page.symbols.length > 0) {
        sectionBlocks.push(`
            <section class="api-content-section">
                <h2>Key Symbols</h2>
                <div class="symbol-list api-symbol-list">
                    ${page.symbols.map((symbol) => `<span>${symbol}</span>`).join("")}
                </div>
            </section>
        `);
    }

    if (page.sections && page.sections.length > 0) {
        page.sections.forEach((section) => {
            sectionBlocks.push(`
                <section class="api-content-section">
                    <h2>${section.title}</h2>
                    <ul class="api-bullet-list">
                        ${section.items.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                </section>
            `);
        });
    }

    if (page.moduleName) {
        const related = apiPages.filter((candidate) => candidate.slug !== page.slug && candidate.moduleName === page.moduleName).slice(0, 4);
        if (related.length > 0) {
            sectionBlocks.push(`
                <section class="api-content-section">
                    <h2>Related Pages</h2>
                    <div class="api-related-list">
                        ${related.map((item) => `<a class="api-related-link" href="${buildPageHref(item.slug)}" data-page-slug="${item.slug}">${item.title}</a>`).join("")}
                    </div>
                </section>
            `);
        }
    }

    if (page.calloutTitle || page.calloutBody) {
        sectionBlocks.push(`
            <section class="api-content-section api-callout-panel">
                <h2>${page.calloutTitle || "Notes"}</h2>
                <p class="api-section-copy">${page.calloutBody || ""}</p>
            </section>
        `);
    }

    return sectionBlocks.join("");
}

function renderApiContent() {
    const container = document.getElementById("api-page-content");
    if (!container) {
        return;
    }

    let page = getApiPageBySlug(getCurrentApiSlug());
    if (!page) {
        page = getApiPageBySlug("overview");
        setCurrentApiSlug(page.slug, true);
    }

    const breadcrumbs = ["API"];
    if (page.moduleName) {
        breadcrumbs.push(page.moduleName);
    }
    if (page.title !== "API Overview") {
        breadcrumbs.push(page.title);
    }

    const metaItems = [
        page.moduleBadge ? `<span class="chip">${page.moduleBadge}</span>` : "",
        page.path ? `<span class="api-meta-path">${page.path}</span>` : "",
        page.type === "future" ? `<span class="chip muted-chip">Planned</span>` : ""
    ].filter(Boolean).join("");

    container.innerHTML = `
        <div class="api-page-head">
            <p class="api-breadcrumbs">${breadcrumbs.join(" / ")}</p>
            <p class="eyebrow">${page.eyebrow || "Reference Page"}</p>
            <h1>${page.title}</h1>
            <div class="api-meta-row">${metaItems}</div>
            <p class="hero-text api-page-summary">${page.summary}</p>
        </div>
        <div class="api-page-body">
            ${renderApiSections(page)}
        </div>
        ${renderApiPagination(page)}
    `;
}

function wireApiReference() {
    const nav = document.getElementById("api-sidebar-nav");
    const searchInput = document.getElementById("api-sidebar-search");
    if (!nav || !searchInput) {
        return;
    }

    renderApiSidebar();
    renderApiContent();

    searchInput.addEventListener("input", (event) => {
        renderApiSidebar(event.target.value);
    });

    document.addEventListener("click", (event) => {
        const target = event.target.closest("[data-page-slug]");
        if (!target) {
            return;
        }
        event.preventDefault();
        setCurrentApiSlug(target.dataset.pageSlug);
        renderApiSidebar(searchInput.value);
        renderApiContent();
    });

    window.addEventListener("popstate", () => {
        renderApiSidebar(searchInput.value);
        renderApiContent();
    });
}

setActiveNav();
renderModuleOverview();
wireApiReference();