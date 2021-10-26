import { VFlow, Text, HeadingSection } from "bold-ui";
import { Library } from "../graphql/types.generated";
import { BookView } from "./BookView";

interface LibraryViewProps {
  library: Library;
}

export function LibraryView({ library }: LibraryViewProps) {
  return (
    <HeadingSection
      level={3}
      title={`Biblioteca #${library.id}: ${library.name}`}
    >
      <VFlow>
        <Text>Endereço: {library.address}</Text>
        <Text>Quantidade de livros: {library.books?.length}</Text>

        {library.books?.map((book) => book && <BookView book={book} />)}
      </VFlow>
    </HeadingSection>
  );
}
