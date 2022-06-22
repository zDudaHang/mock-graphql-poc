import { ApolloProvider } from "@apollo/client"
import { VFlow } from "bold-ui"
import { client } from "./apollo/client"
import { HomeRootView } from "./components/HomeRootView"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <ApolloProvider client={client}>
      <VFlow>
        <Navbar />
        <HomeRootView />
      </VFlow>
    </ApolloProvider>
  )
}

export default App
