import { render } from '@testing-library/react';
import Dish from '../../components/Dish';

describe("Dish Component", function () {
    test("it renders a container with .dish class", () => {
        let view = render(<Dish />);

        expect(view.baseElement.querySelector("div.dish")).not.toBeNull();
    });
});
