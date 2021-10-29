import { Text, VFlow } from "bold-ui";
import { useLibraryQuery } from "../graphql/types.generated";
import { LibraryView } from "./LibraryView";

export function HomeView() {

  const { data } = useLibraryQuery();

  if (data && data.library) {
    return (
      <VFlow>
        <LibraryView library={data.library} />
      </VFlow>
    );
  } else return <Text>Nenhum dado encontrado</Text>;
}
