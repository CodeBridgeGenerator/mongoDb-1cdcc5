import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectEnvPage from "../ProjectEnvPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectEnv page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectEnvPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectEnv-datatable")).toBeInTheDocument();
    expect(screen.getByRole("projectEnv-add-button")).toBeInTheDocument();
});
