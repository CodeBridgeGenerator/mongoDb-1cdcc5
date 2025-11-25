import React from "react";
import { render, screen } from "@testing-library/react";

import DatabaseUserCreateDialogComponent from "../DatabaseUserCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders databaseUser create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DatabaseUserCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("databaseUser-create-dialog-component")).toBeInTheDocument();
});
