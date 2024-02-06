import { useAcademicWorks } from "./AcademicWorks.model"
import { ViewAcademicWorks } from "./AcademicWorks.view"

export const AcademicWorks = () => {
  return <ViewAcademicWorks {...useAcademicWorks()} />
}
