import { VFlow, Text } from "bold-ui"
import { BookFragment } from "../graphql/types.generated"
import { BookView } from "./BookView"

interface ListBookViewProps {
  books: BookFragment[]
}

export function ListBookView({ books }: ListBookViewProps) {
  if (books && books.length > 0) {
    return (
      <VFlow>
        <Text>Quantidade de livros: {books.length}</Text>
        {books.map((book: BookFragment) => (
          <BookView book={book} />
        ))}
      </VFlow>
    )
  } else {
    return <Text>Sem livros</Text>
  }
}
