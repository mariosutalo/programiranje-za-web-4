function productSpecsToArray(specsString) {
    if (specsString) {
        const specs = specsString.split(";")
        console.log('Product specs items are:', specs)
        return specs
    }
    return []
}

export default productSpecsToArray