import React from "react";
import { render, screen } from "@testing-library/react";

import IpAddressCreateDialogComponent from "../IpAddressCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders ipAddress create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <IpAddressCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("ipAddress-create-dialog-component")).toBeInTheDocument();
});
