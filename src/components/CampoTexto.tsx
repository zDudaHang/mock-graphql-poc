import { VFlow } from "bold-ui"
import { Field, FieldProps } from "react-final-form"

type CampoTextoProps = FieldProps<string, any, any> & { label: string }

export function CampoTexto(props: CampoTextoProps) {
  const { label, ...fieldProps } = props
  return (
    <VFlow vSpacing={0.2}>
      <label>{label}</label>
      <Field {...fieldProps} />
    </VFlow>
  )
}
