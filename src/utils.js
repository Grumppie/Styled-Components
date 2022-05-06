export const colors = {
    primary: 'white',
}

export const setupBorder = ({ width, type = 'solid', color }) => {
    return `${width} ${type} ${color}`
}