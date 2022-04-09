const asyncWrapper = `async function AsyncWrapper(func) {
    try {
        let result = await func();
        return [result, undefined];
    } catch (error) {
        return [undefined, error];
    }
}

module.exports = AsyncWrapper;
`;

export default asyncWrapper;
