function productSpecsToArray(specsString) {
    if (specsString) {
        const specs = specsString.split(";")
        return specs
    }
    return []
}

export default productSpecsToArray