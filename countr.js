async function gautiInformacijaApieSali(pavadinimas) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${pavadinimas}`);
        const duomenys = await response.json();
        return duomenys;
    } catch (error) {
        console.error('Klaida gavant informaciją:', error);
        return null;
    }
}

function parodytiInformacija(duomenys) {
    const salis = duomenys[0];
    console.log("Šalies pavadinimas:", salis.name.common);
    console.log("Populiacija:", salis.population);
    console.log("Plotas:", salis.area, "km²");
    console.log("Valiuta:", Object.keys(salis.currencies).join(", "));
    console.log("Kalba:", Object.keys(salis.languages).join(", "));
    console.log("Vėliava:", salis.flags?.png);
    console.log("Herbas:", salis.flags?.svg);
}

async function main() {
    const pavadinimas = prompt("Įveskite šalies pavadinimą:");
    if (pavadinimas) {
        const duomenys = await gautiInformacijaApieSali(pavadinimas);
        if (duomenys) {
            parodytiInformacija(duomenys);
        } else {
            console.log("Šalis nerasta arba įvyko klaida.");
        }
    }
}

main();