import { VFlow, Text, HeadingSection } from "bold-ui"
import { Library } from "../graphql/types.generated"
import { ListBookView } from "./ListBookView"

interface LibraryViewProps {
  library: Library
}

export function LibraryView({ library }: LibraryViewProps) {
  return (
    <HeadingSection
      level={3}
      title={`Biblioteca #${library.id}: ${library.name}`}
    >
      <VFlow>
        <Text>Endereço: {library.address}</Text>
        <ListBookView books={library.books} />
      </VFlow>
    </HeadingSection>
  )
}
