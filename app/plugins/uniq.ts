import uuid from 'uuid'

export default function uniqId() {
    return uuid.v4().replace(/-/g, '')
}