import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { LibraryView } from "./LibraryView"
import { CREATE_BOOK_ROUTE, HOME_ROUTE, SEARCH_BOOK_ROUTE } from "../routes"
import { CreateBookView } from "./create/CreateBookView"
import { SearchBookView } from "./search/SearchBookView"

export function HomeRootView() {
  return (
    <Router>
      <Switch>
        <Route path={HOME_ROUTE} component={LibraryView} exact />
        <Route path={SEARCH_BOOK_ROUTE} component={SearchBookView} />
        <Route path={CREATE_BOOK_ROUTE} component={CreateBookView} />
      </Switch>
    </Router>
  )
}
