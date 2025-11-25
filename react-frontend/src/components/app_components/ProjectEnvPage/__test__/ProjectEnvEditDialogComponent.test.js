import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectEnvEditDialogComponent from "../ProjectEnvEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectEnv edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectEnvEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectEnv-edit-dialog-component")).toBeInTheDocument();
});
