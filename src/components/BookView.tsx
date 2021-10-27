import { HeadingSection } from "bold-ui";
import { AuthorView } from "./AuthorView";

interface BookViewProps {
  book: any;
}

export function BookView({ book }: BookViewProps) {
  return (
    <HeadingSection level={4} title={`Livro #${book.id}: ${book.title}`}>
      <AuthorView author={book.author} />
    </HeadingSection>
  );
}
