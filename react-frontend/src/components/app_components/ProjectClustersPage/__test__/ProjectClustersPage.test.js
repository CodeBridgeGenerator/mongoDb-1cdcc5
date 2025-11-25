import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectClustersPage from "../ProjectClustersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectClusters page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectClustersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectClusters-datatable")).toBeInTheDocument();
    expect(screen.getByRole("projectClusters-add-button")).toBeInTheDocument();
});
