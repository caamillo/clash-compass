const DEFAULT_RECORD = { right: 50, top: 50 }

const sanitizeProgress = (progress=[]) => {
    if (!progress) progress = []
    return progress
}

const sanitizeRecord = (record={ ...DEFAULT_RECORD }) => {
    if (!record || (isNaN(record.top) && isNaN(record.right))) return { ...DEFAULT_RECORD }
    if (isNaN(record.right)) record.right = DEFAULT_RECORD.right
    if (isNaN(record.top)) record.top = DEFAULT_RECORD.top
    return record
}

export const getNextCard = (progress, cards) => {
    progress = sanitizeProgress(progress)
    if (progress.length < cards.length) return cards[progress.length]
    return -1
}

export const saveProgress = (process, record) => {
    process = sanitizeProgress(process)
    record = sanitizeRecord(record)
    console.log(record)

    process.push(record)
    return process
}