import { ApolloProvider } from "@apollo/client"
import { client } from "./apollo/client"
import { HomeRootView } from "./components/HomeRootView"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <HomeRootView />
    </ApolloProvider>
  )
}

export default App
