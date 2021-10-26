import { HeadingSection } from "bold-ui";
import { Author } from "../graphql/types.generated";

interface AuthorViewProps {
    author: Author
  }
  
  export function AuthorView({ author }: AuthorViewProps) {
    return (
      <HeadingSection
        level={5}
        title={`Autor #${author.id}: ${author.name}`}
      ></HeadingSection>
    );
  }
  