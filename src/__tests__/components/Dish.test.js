import { render } from '@testing-library/react';
import Dish from '../../components/Dish';

describe("Dish Component", function () {
    test("it renders a container with .dish class", () => {
        let view = render(<Dish />);

        expect(view.baseElement.querySelector("div.dish")).not.toBeNull();
    });

    test("it display a weird content", () => {
        let expected = "some weird content";

        let view = render(<Dish>some weird content</Dish>);

        expect(view.getByText(expected)).toBeInTheDocument();
    });

    test("it displays normal content", () => {
        let expected = "some normal content";

        let view = render(<Dish>some normal content</Dish>);

        expect(view.getByText(expected)).toBeInTheDocument();
    });

    test("it displays complex content", () => {
        let expected = "some complex content";

        let view = render(<Dish><p>some complex content</p></Dish>);

        expect(view.getByText(expected)).toBeInTheDocument();
    });
});
