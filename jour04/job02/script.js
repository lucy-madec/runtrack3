function jsonValueKey(jsonString, key) {
    // Convert the JSON string into a JavaScript object
    let jsonObject = JSON.parse(jsonString);

    // Return the value associated with the given key
    return jsonObject[key];
}

let jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(jsonValueKey(jsonString, "city"));