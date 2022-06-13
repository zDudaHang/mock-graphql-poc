import { VFlow, Text } from "bold-ui"
import { Book } from "../graphql/types.generated"
import { BookView } from "./BookView"

interface ListBookViewProps {
  books?: Book[]
}

export function ListBookView({ books }: ListBookViewProps) {
  if (books && books.length > 0) {
    return (
      <VFlow>
        <Text>Quantidade de livros: {books.length}</Text>
        {books.map((book: Book) => (
          <BookView book={book} />
        ))}
      </VFlow>
    )
  } else {
    return <Text>Sem livros</Text>
  }
}
