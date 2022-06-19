import { Button, HFlow, VFlow } from "bold-ui"
import { Form, FormRenderProps } from "react-final-form"
import {
  BookFragment,
  CreateBookMutation,
  useCreateBookMutation,
} from "../../graphql/types.generated"
import { CampoTexto } from "../CampoTexto"

interface BookFormModel {
  title: string
  description: string
  totalPages: number
  rent: number
  authorName: string
}

interface CreateBookFormProps {
  onSubmitCompleted(newBook: BookFragment): void
}

export function CreateBookForm(props: CreateBookFormProps) {
  const { onSubmitCompleted } = props

  const onCompleted = (data: CreateBookMutation) =>
    onSubmitCompleted(data.createBook)

  const [createBook] = useCreateBookMutation({
    onCompleted,
    onError: (error) => console.log(error),
  })

  const handleSubmit = (values: BookFormModel) => {
    console.log(values)
    createBook({ variables: { input: { ...values } } })
  }

  const renderForm = (formProps: FormRenderProps<BookFormModel>) => {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <VFlow>
          <CampoTexto label="Título" component="input" name="title" />
          <CampoTexto label="Descrição" component="input" name="description" />
          <CampoTexto
            label="Nome do autor"
            component="input"
            name="authorName"
          />
          <HFlow hSpacing={2}>
            <CampoTexto
              label="Quantida de páginas"
              component="input"
              name="totalPages"
              maxLength={3}
            />
            <CampoTexto
              label="Valor para alugar o livro"
              component="input"
              name="rent"
              maxLength={3}
            />
          </HFlow>
          <Button kind="primary" type="submit">
            Criar
          </Button>
        </VFlow>
      </form>
    )
  }

  return <Form<BookFormModel> onSubmit={handleSubmit} render={renderForm} />
}
