import { Text } from "bold-ui"
import { Author } from "../graphql/types.generated"

interface AuthorViewProps {
  author?: Author
}

export function AuthorView({ author }: AuthorViewProps) {
  return (
    <Text>
      Autor #{author?.id}: {author?.name}
    </Text>
  )
}
