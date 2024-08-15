import { translate } from "./translate.js";

export function choseLanguage(){
    const chips = document.querySelectorAll('.language-chip');
    chips[0].classList.add('selected');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
        });
    });
}


export function changeLanguage(value){ 
    document.getElementById('menu').textContent ="Antonio Pizzaria " + translate[value].menu;
    document.getElementById('language-selection').textContent = translate[value].languageSelection;
    document.getElementById("margherita-igredients").textContent = translate[value].TomatoMozzarellaBasil;
    document.getElementById("pepperoni-igredients").textContent = translate[value].PepperoniMozzarellaTomatoSauce;
    document.getElementById("vegetarian-id").textContent = translate[value].Vegetarian;
    document.getElementById("vegetarian-igredients").textContent = translate[value].MixedVegetablesMozzarella;
    document.getElementById("portuguese-id").textContent = translate[value].Portuguese;
    document.getElementById("portuguese-igredients" ).textContent = translate[value].MixedVegetablesEggsHamolive;
    document.getElementById("chicken-id" ).textContent = translate[value].BBQChicken;
    document.getElementById("chicken-igredients").textContent = translate[value].TomatoshreddedchickenhomeBBQsauce;
    document.getElementById("pineapple-id").textContent = translate[value].Pineapple;
    document.getElementById("pineapple-igredients" ).textContent = translate[value].Pineapplesvegancheesewithsweetsauce;

    document.getElementById("dessert-pizzas" ).textContent = translate[value].DessertPizzas;
    document.getElementById("nutella-id").textContent = translate[value].Nutellaversion;
    document.getElementById("nutella-ingredients" ).textContent = translate[value].NutellaStrawberriesAlmonds;
    document.getElementById("banana-id").textContent = translate[value].BananaCaramel;
    document.getElementById("banana-ingredients" ).textContent = translate[value].BananaCaramelDrizzleChocolate;
    document.getElementById("apple-id").textContent = translate[value].AppleCrisp;
    document.getElementById("apple-ingredients" ).textContent = translate[value].AppleSlicesCinnamonCrumble;

    document.getElementById("drinks").textContent = translate[value].Drinks;
    document.getElementById("soda-id").textContent = translate[value].Soda;
    document.getElementById("orange-id").textContent = translate[value].OrangeJuice;
    document.getElementById("tea-id").textContent = translate[value].Icedtea;
    document.getElementById("lemonade-id").textContent = translate[value].Lemonade;
}