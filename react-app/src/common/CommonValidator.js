class CommonValidator {
    isValidDate(date) {
        return date instanceof Date && !isNaN(date.getTime());
    }
}

export default CommonValidator;