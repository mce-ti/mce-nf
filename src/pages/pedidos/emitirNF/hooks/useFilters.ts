import { useFormik } from "formik"
import { initialValues } from "../constants"

const useFilters = () => {

  const formik = useFormik({
    initialValues,
    onSubmit: () => {}
  })

  return {
    formik
  }
}

export { useFilters }