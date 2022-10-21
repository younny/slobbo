import Moment from "moment"

export const sortByDate = (arr, key) => {
  return arr.sort(
    (postA, postB) =>
      Moment(postB.updatedAt).unix() - Moment(postA.updatedAt).unix()
  )
}

export const formatDate = (date) => {
  return Moment(date).format("DD MMM YYYY HH:MM")
}
