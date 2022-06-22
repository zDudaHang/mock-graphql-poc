import { HFlow, Link } from "bold-ui"
import { CREATE_BOOK_ROUTE, HOME_ROUTE, SEARCH_BOOK_ROUTE } from "../routes"

export function Navbar() {
  return (
    <HFlow>
      <Link href={HOME_ROUTE}>Home</Link>
      <Link href={CREATE_BOOK_ROUTE}>Criar livro</Link>
      <Link href={SEARCH_BOOK_ROUTE}>Buscar livro</Link>
    </HFlow>
  )
}
