import { render } from '@testing-library/react';
import App from '../App';

describe("App Component", function () {
    test("it renders a container with .app class", () => {
        const screen = render(<App />);

        expect(screen.baseElement.querySelector(".app")).not.toBeNull();
    });
});
