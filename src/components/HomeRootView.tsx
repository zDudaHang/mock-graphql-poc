import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { LibraryView } from "./LibraryView"
import { CREATE_BOOK_ROUTE, HOME_ROUTE, SEARCH_BOOK_ROUTE } from "../routes"

export function HomeRootView() {
  return (
    <Router>
      <Switch>
        <Route path={HOME_ROUTE} component={LibraryView} exact />
        <Route path={SEARCH_BOOK_ROUTE} component={() => <p>Search Book</p>} />
        <Route path={CREATE_BOOK_ROUTE} component={() => <p>Create Book</p>} />
      </Switch>
    </Router>
  )
}
