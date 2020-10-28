import { render } from '@testing-library/react';
import Tab from '../../components/Tab';

describe("Tab Component", function () {
    test("it renders a container with .tab class", () => {
        let view = render(<Tab />);

        expect(view.baseElement.querySelector("div.tab")).not.toBeNull();
    });
});
