import { HeadingSection } from "bold-ui";
import { Book } from "../graphql/types.generated";
import { AuthorView } from "./AuthorView";

interface BookViewProps {
  book: Book;
}

export function BookView({ book }: BookViewProps) {
  return (
    <HeadingSection
      level={4}
      title={`Livro #${book.id}: ${book.title}`}
    >
        <AuthorView author={book.author}/>
    </HeadingSection>
  );
}
