function sorting(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        console.error("Paramètre 'order' invalide. Doit être 'asc' ou 'desc'.")
        return numbers;
    }
}