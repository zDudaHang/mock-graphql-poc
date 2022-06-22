import { HeadingSection, Text, VFlow } from "bold-ui"
import {
  BookFragment,
  useBookByNameLazyQuery,
} from "../../graphql/types.generated"
import { BookView } from "../BookView"
import { SearchBookForm, SearchBookFormModel } from "./SearchBookForm"

export function SearchBookView() {
  const [buscar, { data }] = useBookByNameLazyQuery()

  const onSubmit = (values: SearchBookFormModel) => {
    console.log(values)
    buscar({ variables: { name: values.name } })
  }

  const hasBooks = data?.bookByName?.length > 0

  return (
    <HeadingSection level={1} title="Buscar livro">
      <VFlow vSpacing={2}>
        <SearchBookForm onSubmit={onSubmit} />
        <HeadingSection level={2} title="Livros encontrados">
          {hasBooks ? (
            data.bookByName.map((book: BookFragment) => (
              <BookView book={book} />
            ))
          ) : (
            <Text>Nenhum livro encontrado</Text>
          )}
        </HeadingSection>
      </VFlow>
    </HeadingSection>
  )
}
