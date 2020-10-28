import { render } from '@testing-library/react';
import Tabs from '../../components/Tabs';

describe("Tabs Component", function () {
    test("it renders a container with .tabs class", () => {
        let view = render(<Tabs />);

        expect(view.baseElement.querySelector("div.tabs")).not.toBeNull();
    });
});
