import { HeadingSection, Text, VFlow } from "bold-ui"
import { useState } from "react"
import { Book, BookFragment } from "../../graphql/types.generated"
import { CreateBookForm } from "./CreateBookForm"
import { BookView } from "../BookView"

export function CreateBookView() {
  const [newBooks, setNewBooks] = useState<Book[]>([])

  const updateNewBooks = (newBook: BookFragment) => {
    console.log(`New book = ${newBook.title}`)
    setNewBooks([...newBooks, newBook])
  }

  const hasNewBooks = newBooks.length > 0

  return (
    <HeadingSection level={1} title="Criar livro">
      <VFlow>
        <CreateBookForm onSubmitCompleted={updateNewBooks} />
        <HeadingSection level={2} title="Livros criados:">
          {hasNewBooks ? (
            newBooks.map((book: Book) => <BookView book={book} />)
          ) : (
            <Text>Nenhum livro criado ainda</Text>
          )}
        </HeadingSection>
      </VFlow>
    </HeadingSection>
  )
}
