import React from "react";
import { render, screen } from "@testing-library/react";

import IpAddressPage from "../IpAddressPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders ipAddress page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <IpAddressPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("ipAddress-datatable")).toBeInTheDocument();
    expect(screen.getByRole("ipAddress-add-button")).toBeInTheDocument();
});
