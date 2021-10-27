import { Text } from "bold-ui";

interface AuthorViewProps {
  author?: any;
}

export function AuthorView({ author }: AuthorViewProps) {
  return (
    <Text>
      Autor #{author?.id}: {author?.name}
    </Text>
  );
}
