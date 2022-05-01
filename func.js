export function func(s, a, b) {
    if (s == '' || a[1]) return -1

    const aIndex = s.lastIndexOf(a)
    const bIndex = s.lastIndexOf(b)

    return Math.max(aIndex, bIndex)
}
