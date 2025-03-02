
import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCheckCircle,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

// Add Font Awesome icons to the library
library.add(faCheckCircle, faExclamationTriangle);

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Redirect to home page if accessing root URL
        if (window.location.pathname === "/") {
            window.location.href = "/home";
        }

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
