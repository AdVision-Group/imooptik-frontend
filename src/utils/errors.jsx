export const fetchError = (err, getMessage = () => {}, callback = () => {}) => {
    console.log(err)
    getMessage("Niečo sa pokazilo")
    callback()
} 