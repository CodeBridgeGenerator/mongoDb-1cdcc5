import React from "react";
import { render, screen } from "@testing-library/react";

import TiersPage from "../TiersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tiers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TiersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tiers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("tiers-add-button")).toBeInTheDocument();
});
