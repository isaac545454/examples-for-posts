import { Container } from "../../../components/Container"
import { useAcademicWorks } from "./AcademicWorks.model"
import { FormBody } from "./sessions/FormBody"
import { FormFooter } from "./sessions/FormFooter"
import { FormHeader } from "./sessions/FormHeader"

export type ViewAcademicWorks = ReturnType<typeof useAcademicWorks>

export const ViewAcademicWorks = (methods: ViewAcademicWorks) => {
  return (
    <Container>
      <>
        <FormHeader {...methods} />
        <FormBody {...methods} />
        <FormFooter {...methods} />
      </>
    </Container>
  )
}
