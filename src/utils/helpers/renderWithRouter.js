import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../App";
import {render} from "@testing-library/react";

export const renderWithRouter = (component, initialRoute) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  )
}