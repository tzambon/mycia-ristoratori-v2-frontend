import { render } from '@testing-library/react';
import Tab from '../../components/Tab';

describe("Tab Component", function () {
    test("it renders a container with .tab class", () => {
        let view = render(<Tab />);

        expect(view.baseElement.querySelector("div.tab")).not.toBeNull();
    });

    test("it renders button with a label", () => {
        let view = render(<Tab label="Dettaglio Piatto" />);

        expect(view.getByRole("button", { "name": new RegExp("dettaglio piatto", "i") })).toBeInTheDocument();
    });

    test("it renders a button with another label", () => {
        let view = render(<Tab label="Carica Foto" />);

        expect(view.getByRole("button", { "name": new RegExp("carica foto", "i") })).toBeInTheDocument();
    });
});
