import React from "react";
import { render, screen } from "@testing-library/react";

import DatabaseUserPage from "../DatabaseUserPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders databaseUser page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DatabaseUserPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("databaseUser-datatable")).toBeInTheDocument();
    expect(screen.getByRole("databaseUser-add-button")).toBeInTheDocument();
});
