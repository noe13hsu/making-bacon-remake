import dayjs from "dayjs"

export const formatDate = (isoString: string) => {
  return dayjs(isoString).format("DD MMM YYYY HH:mm")
}
