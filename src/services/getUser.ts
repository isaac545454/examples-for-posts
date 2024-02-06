import { apiCore } from "./apiCore"

export type ListData = {
  id: number
  username: string
  email: string
}

type RequestFormat<TData, TParams, TFormat> = {
  format?: (data: TData) => TFormat
  params?: TParams
}

export type RequestUser = {
  id: string
}

export const getList = async <TFormat = ListData[]>(
  props: RequestFormat<ListData[], RequestUser, TFormat>
): Promise<TFormat> => {
  const { format = (data) => data as TFormat, params } = props
  const { data } = await apiCore.get<ListData[]>("/user", {
    params,
  })

  return format(data)
}
export type ListSelect = {
  value: number
  label: string
}

const userSelectFormat = (user: ListData[]): ListSelect[] => {
  return user.map((item) => ({ label: item.username, value: item.id }))
}

export const fetChData_test_1 = async () => {
  const response = await getList<ListSelect[]>({
    format: (data) => userSelectFormat(data),
    params: { id: "2" },
  })
  return response
}

type FetchDataTest<TData> = {
  isError?: (error: unknown) => void
  isSuccess?: (data: TData) => void
  isFinally?: () => void
}

export const fetChData_test_2 = async (props: FetchDataTest<ListData[]>) => {
  const {
    isError = () => {},
    isFinally = () => {},
    isSuccess = () => {},
  } = props

  try {
    const response = await getList({ params: { id: "2" } })
    isSuccess(response)
    return response
  } catch (error) {
    isError(error)
  } finally {
    isFinally()
  }
}

export  const Test = async () => {
  const responseTest = await fetChData_test_2({
    isError(error) {
      console.log(error)
    },
    isSuccess(data) {
      console.log(data)
    },
    isFinally() {
      console.log("promise Finalizada")
    },
  })
}
