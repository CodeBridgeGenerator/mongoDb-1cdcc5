import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectEnvCreateDialogComponent from "../ProjectEnvCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectEnv create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectEnvCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectEnv-create-dialog-component")).toBeInTheDocument();
});
