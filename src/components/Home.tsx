import { VFlow } from "bold-ui";
import { Library } from "../graphql/types.generated";
import { LibraryView } from "./LibraryView";

export function HomeView() {
    const mockedData : Library = {
        id: '1',
        name: 'Machado Deodoro',
        address: 'Avenida Salvador di Bernardi, 588',
        books: [
            {id: '1', author: {id: '1', name: 'Mariana da Silva Santos'}, title: 'Cinderela'}
        ]
    }
  return (
    <VFlow>
      <LibraryView library={mockedData}/>
    </VFlow>
  );
}
