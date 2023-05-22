import ice1 from "./image/ice1.png";
import icelatte from "./image/icelatte.png";
import latte1 from "./image/latte1.png";
import limon from "./image/limon.png";
import limon2 from "./image/limon2.png";
import tea from "./image/tea.png";
import tea2 from "./image/tea2.png";
import teaR from "./image/teaR.png";
import im3 from "../Profile/Frame 36.svg";
import espr from "./image/espr.png";
import im1 from "./image/amer.png";
import capuch from "./image/cap.png";

const products = [
    {id: '1', title: 'Свежезаваренный', price: 200, description: '350 мл', count: 0, type: "classic", img: im1, esse:'кбжу х х х х'},
    {id: '2', title: 'Эспрессо', price: 180, description: '50 мл', count: 0, type: "classic", img: espr, esse:'кбжу х х х х'},
    {id: '3', title: 'Капучино', price: 250, description: '350 мл', count: 0, type: "classic", img: capuch, esse:'кбжу х х х х'},
    {id: '4', title: 'Латте', price: 200, description: '350 мл', count: 0, type: "classic", img: latte1, esse:'кбжу х х х х'},
    {id: '5', title: 'Флэт Уайт', price: 200, description: '350 мл', count: 0, type: "classic", img: im3, esse:'кбжу х х х х'},
    {id: '6', title: 'Домашнее какао', price: 180, description: '350 мл', count: 0, type: "classic", img: im3, esse:'кбжу х х х х'},
    {id: '7', title: 'Раф ореховый', price: 250, description: '350 мл', count: 0, type: "author_coffee", img: im3, esse:'кбжу х х х х'},
    {id: '8', title: 'Капчино - карамель', price: 250, description: '350 мл', count: 0, type: "author_coffee", img: im3, esse:'кбжу х х х х'},
    {id: '9', title: 'Раф сибирский', price: 290, description: '350 мл', count: 0, type: "author_coffee", img: im3, esse:'кбжу х х х х'},
    {id: '10', title: 'Раф цитрусовый', price: 280, description: '350 мл', count: 0, type: "author_coffee", img: im3, esse:'кбжу х х х х'},
    {id: '11', title: 'Сырный матча латте', price: 230, description: '350 мл', count: 0, type: "author_coffee", img: im3, esse:'кбжу х х х х'},
    {id: '12', title: 'Латте фисташка', price: 250, description: '350 мл', count: 0, type: "author_coffee", img: ice1, esse:'кбжу х х х х'},
    {id: '13', title: 'Раф цикорий', price: 250, description: '350 мл', count: 0, type: "author_coffee", img: im3, esse:'кбжу х х х х'},
    {id: '14', title: 'Матча капучино', price: 200, description: '350 мл', count: 0, type: "author_coffee", img: im3, esse:'кбжу х х х х'},
    {id: '15', title: 'Латте Таро', price: 300, description: '350 мл', count: 0, type: "new", img: icelatte, esse:'кбжу х х х х'},
    {id: '16', title: 'Чай тишина', price: 180, description: '350 мл', count: 0, type: "new", img: im3, esse:'кбжу х х х х'},
    {id: '17', title: 'Чай с дубом', price: 200, description: '350 мл', count: 0, type: "new", img: im3, esse:'кбжу х х х х'},
    {id: '18', title: 'Раф от пряни', price: 250, description: '350 мл', count: 0, type: "new", img: im3, esse:'кбжу х х х х'},
    {id: '19', title: 'Смузи манго', price: 200, description: '350 мл', count: 0, type: "new", img: im3, esse:'кбжу х х х х'},
    {id: '20', title: 'Раф Organic Cola', price: 250, description: '350 мл', count: 0, type: "new", img: im3, esse:'кбжу х х х х'},
    {id: '21', title: 'Лимонад маракуйя', price: 200, description: '350 мл', count: 0, type: "cold", img: limon2, esse:'кбжу х х х х'},
    {id: '22', title: 'Лимонад Organic Cola', price: 200, description: '350 мл', count: 0, type: "cold", img: im3, esse:'кбжу х х х х'},
    {id: '23', title: 'Смузи манго', price: 250, description: '350 мл', count: 0, type: "cold", img: im3, esse:'кбжу х х х х'},
    {id: '24', title: 'Смузи зеленый', price: 230, description: '350 мл', count: 0, type: "cold", img: im3, esse:'кбжу х х х х'},
    {id: '25', title: 'Лимонад домашний', price: 200, description: '350 мл', count: 0, type: "cold", img: limon, esse:'кбжу х х х х'},
    {id: '26', title: 'Гречишный', price: 170, description: '350 мл', count: 0, type: "tea", img: im3, esse:'кбжу х х х х'},
    {id: '27', title: 'Чай с ромашкой', price: 170, description: '350 мл', count: 0, type: "tea", img: teaR, esse:'кбжу х х х х'},
    {id: '28', title: 'Чай тишина', price: 190, description: '350 мл', count: 0, type: "tea", img: tea2, esse:'кбжу х х х х'},
    {id: '29', title: 'Чай абрикосовый', price: 200, description: '350 мл', count: 0, type: "tea", img: tea, esse:'кбжу х х х х'},
    {id: '30', title: 'Витаминный', price: 200, description: '350 мл', count: 0, type: "tea", img: im3, esse:'кбжу х х х х'},
    {id: '31', title: 'Черносмородиновый', price: 200, description: '350 мл', count: 0, type: "tea", img: im3, esse:'кбжу х х х х'},
    {id: '32', title: 'Классический', price: 150, description: '350 мл', count: 0, type: "tea", img: im3, esse:'кбжу х х х х'},
]
export function getData() {
    return products;
}

// Кофе классический, авторский кофе, новинки, холодные наптки, чай
export function getDataCategory(typeProduct) {
    return products.filter(type => type.type === typeProduct)
}
export function getDataClassicCoffe() {
    return products.filter(type => type.type === "author_coffee")
}
// export function getDataNew() {
//     return products.filter(type => type.type === "new")
// }
// export function getDataColdCoffe() {
//     return products.filter(type => type.type === "cold")
// }
// export function getDataTea() {
//     return products.filter(type => type.type === "tea")
// }

