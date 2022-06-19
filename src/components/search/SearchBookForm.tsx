import { Grid, Cell, Button } from "bold-ui"
import { Form, FormProps, FormRenderProps } from "react-final-form"
import { CampoTexto } from "../CampoTexto"

export interface SearchBookFormModel {
  name: string
}

interface SearchBookFormProps
  extends Pick<FormProps<SearchBookFormModel>, "onSubmit"> {}

export function SearchBookForm(props: SearchBookFormProps) {
  const { onSubmit } = props

  const renderForm = (formProps: FormRenderProps<SearchBookFormModel>) => {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <Grid alignItems="center">
          <Cell size={6} md={4}>
            <CampoTexto label="Nome do livro" name="name" component="input" />
          </Cell>
          <Cell size={6} md={4}>
            <Button type="submit" kind="primary">
              Buscar
            </Button>
          </Cell>
        </Grid>
      </form>
    )
  }

  return <Form<SearchBookFormModel> onSubmit={onSubmit} render={renderForm} />
}
