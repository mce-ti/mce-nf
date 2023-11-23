import { useFormik } from "formik"
import { initialValues } from "../constants"

const useEmitirNF = () => {

  const formik = useFormik({
    initialValues,
    onSubmit: () => {}
  })

  return {
    formik
  }
}

export { useEmitirNF }