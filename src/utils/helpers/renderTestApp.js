import {createReduxStore} from "../../redux/store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../App";
import {render} from "@testing-library/react";
import {store} from "../../redux/store";

export const renderTestApp = (component, options) => {
  // const store = createReduxStore(options.store)

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options.routes]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  )
}

