import { Alert, Button, HFlow, VFlow } from "bold-ui"
import { useState } from "react"
import { Form, FormRenderProps } from "react-final-form"
import { useCreateBookMutation } from "../graphql/types.generated"
import { CampoTexto } from "./CampoTexto"

interface BookFormModel {
  title: string
  description: string
  totalPages: number
  rent: number
  authorName: string
}

export function BookForm() {
  const [createBook, data] = useCreateBookMutation({
    onCompleted: () => setIsAlertVisible(true),
    onError: (error) => console.log(error),
  })
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false)

  const handleSubmit = (values: BookFormModel) => {
    console.log(values)
    createBook({ variables: { input: { ...values } } })
  }

  const renderForm = (formProps: FormRenderProps<BookFormModel>) => {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <VFlow style={{ marginTop: "1rem" }}>
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

  const newBook = data.data?.createBook

  return (
    <VFlow>
      {isAlertVisible && newBook && (
        <Alert type="success" inline>
          Livro {newBook.title} #{newBook.id} foi criado com sucesso!{" "}
        </Alert>
      )}
      <Form<BookFormModel> onSubmit={handleSubmit} render={renderForm} />
    </VFlow>
  )
}
