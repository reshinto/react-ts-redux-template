import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import App from "./index";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/Posts/i)).toBeInTheDocument();
});
