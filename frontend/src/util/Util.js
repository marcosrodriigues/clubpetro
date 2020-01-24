function formatFloat(value, fixed)  {
    return value.toFixed(fixed).replace('.', ',')
}

export default formatFloat;