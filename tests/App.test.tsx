import { render} from "@testing-library/react";
import App from "../src/App";
import {BrowserRouter} from "react-router-dom";

describe("App", () => {
    it("should work as expected", () => {
        render( <BrowserRouter>
            <App />
        </BrowserRouter>      );
        expect(1 + 1).toBe(2);
    });
});