import { VFlow, Text, HeadingSection } from "bold-ui"
import { useLibraryQuery } from "../graphql/types.generated"
import { ListBookView } from "./ListBookView"

export function LibraryView() {
  const { data } = useLibraryQuery()

  if (data && data.library) {
    return (
      <HeadingSection
        level={3}
        title={`Biblioteca #${data.library.id}: ${data.library.name}`}
      >
        <VFlow>
          <Text>Endereço: {data.library.address}</Text>
          <ListBookView books={data.library.books} />
        </VFlow>
      </HeadingSection>
    )
  } else return <Text>Nenhum dado encontrado</Text>
}
