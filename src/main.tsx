import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { store } from "./redux/store.ts";
import ErrorBoundary from "./Layout/ErrorBoundary.tsx";
import { ErrorFallback } from "./Layout/ErrorFallback.tsx";


const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  );
}
