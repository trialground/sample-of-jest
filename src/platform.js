// jest-changed-files
const { getChangedFilesForRoots } = require('jest-changed-files')
getChangedFilesForRoots(['./'], { lastCommit: true }).then((result) => {
    console.log(result)
    // It will contain:
    // 1. the changed files (result.changedFiles)
    // 2. the git repos (result.repos.git)
    // 3. the hg repos (result.repos.hg)
})

// jest-diff
const diff = require('jest-diff')
const a = { a: { b: { c: 5 } } }
const b = { a: { b: { c: 6 } } }

console.log(diff(a, b))

// jest-docblock
const { parseWithComments } = require('jest-docblock')
const code = `
/**
 * This is a variable
 *
 * @var {string}
 */
const greetWords = 'Hello, world!'
`
const parsed = parseWithComments(code)
console.log(parsed)

// jest-get-type
const getType = require('jest-get-type')

const array = [1, 2, 3]
const nullValue = null
const undefinedValue = undefined

console.log(getType(array))
console.log(getType(nullValue))
console.log(getType(undefinedValue))

// jest-worker
const Worker = require('jest-worker').default
async function main() {
    const worker = new Worker(require.resolve('./workerScripts'))
    const results = await Promise.all([
        worker.heavyTasks(1e10),
        worker.heavyTasks(1e11)
    ])
    console.log(results)
}
main()

// pretty-format
const prettyFormat = require('pretty-format')

const val = { object: {} }
val.circularReference = val
val[Symbol('foo')] = 'foo'
val.map = new Map([['prop', 'value']])
val.array = [-0, Infinity, NaN]

console.log(prettyFormat(val))