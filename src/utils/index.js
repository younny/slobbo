import Moment from 'moment'

export function sortByDate (arr, key) {
    return arr.sort((postA, postB) => Moment(postB.updatedAt).unix() - Moment(postA.updatedAt).unix())
}

export function formatDate (date) {
    return Moment(date).format("DD MMMM YYYY")
}