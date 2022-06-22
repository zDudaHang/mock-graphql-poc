import { Heading, HFlow, Tag, VFlow, Text, Button } from "bold-ui"
import { BookFragment } from "../graphql/types.generated"
import { AuthorView } from "./AuthorView"

interface BookViewProps {
  book: BookFragment
}

export function BookView(props: BookViewProps) {
  const {
    book: { id, author, description, isRented, rent, title },
  } = props

  return (
    <VFlow>
      <HFlow>
        <Heading level={4} title={`Livro #${id}: ${title}`} />
        <Tag type={isRented ? "danger" : "success"}>
          {isRented ? "Alugado" : "Disponível"}
        </Tag>
      </HFlow>
      <Text variant="secondary">{description}</Text>
      <AuthorView author={author} />
      {!isRented && <Button kind="primary">Alugar por R${rent}</Button>}
    </VFlow>
  )
}
