export const selectUser = (n) => {
    // console.log('code is in action', n)
    return { type: 'SELECT_USER', payload: n}
}