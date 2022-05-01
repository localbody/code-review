export function func(s, a, b) {
    if (a[1] || s == '') return -1

    const aIndex = s.lastIndexOf(a)
    const bIndex = s.lastIndexOf(b)

    return Math.max(aIndex, bIndex)
}
