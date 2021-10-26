import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { HomeView } from './components/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <HomeView/>
    </ApolloProvider>
  );
}

export default App;
