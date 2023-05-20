
const products = [
    {id: '1', title: 'Свежезаваренный', price: 1, description: '350 л', count: 0, type: "classic"},
    {id: '2', title: 'Эспрессо', price: 1, description: '350 мл', count: 0, type: "classic"},
    {id: '3', title: 'Капучино', price: 1, description: '350 мл', count: 0, type: "classic"},
    {id: '4', title: 'Латте', price: 1, description: '350 мл', count: 0, type: "classic"},
    {id: '5', title: 'Флэт Уайт', price: 1, description: '350 мл', count: 0, type: "classic"},
    {id: '6', title: 'Домашнее какао', price: 1, description: '350 мл', count: 0, type: "classic"},
    {id: '7', title: 'Раф ореховый', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '8', title: 'Капчино соленая карамель', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '9', title: 'Раф сибирский', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '10', title: 'Раф цитрусовый', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '11', title: 'Сырный матча латте', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '12', title: 'Латте фисташка-малина', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '13', title: 'Раф цикорий', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '14', title: 'Матча капучино', price: 1, description: '350 мл', count: 0, type: "author_coffee"},
    {id: '15', title: 'Латте Таро', price: 1, description: '350 мл', count: 0, type: "new"},
    {id: '16', title: 'Чай тишина', price: 1, description: '350 мл', count: 0, type: "new"},
    {id: '17', title: 'Чай абрикосовый с дубом', price: 1, description: '350 мл', count: 0, type: "new"},
    {id: '18', title: 'Раф от пряни', price: 1, description: '350 мл', count: 0, type: "new"},
    {id: '19', title: 'Смузи манго', price: 1, description: '350 мл', count: 0, type: "new"},
    {id: '20', title: 'Раф Organic Cola', price: 1, description: '350 мл', count: 0, type: "new"},
    {id: '21', title: 'Лимонад маракуйя с косточкой', price: 1, description: '350 мл', count: 0, type: "cold"},
    {id: '22', title: 'Лимонад Organic Cola', price: 1, description: '350 мл', count: 0, type: "cold"},
    {id: '23', title: 'Смузи манго', price: 1, description: '350 мл', count: 0, type: "cold"},
    {id: '24', title: 'Смузи зеленый', price: 1, description: '350 мл', count: 0, type: "cold"},
    {id: '25', title: 'Лимонад домашний', price: 1, description: '350 мл', count: 0, type: "cold"},
    {id: '26', title: 'Гречишный', price: 1, description: '350 мл', count: 0, type: "tea"},
    {id: '27', title: 'Чай земляничный с ромашкой', price: 1, description: '350 мл', count: 0, type: "tea"},
    {id: '28', title: 'Чай тишина', price: 1, description: '350 мл', count: 0, type: "tea"},
    {id: '29', title: 'Чай абрикосовый с дубом', price: 1, description: '350 мл', count: 0, type: "tea"},
    {id: '30', title: 'Витаминный', price: 1, description: '350 мл', count: 0, type: "tea"},
    {id: '31', title: 'Черносмородиновый с мятой', price: 1, description: '350 мл', count: 0, type: "tea"},
    {id: '32', title: 'Классический', price: 1, description: '350 мл', count: 0, type: "tea"},
]
export function getData() {
    return products;
}

// Кофе классический, авторский кофе, новинки, холодные наптки, чай
export function getDataClassicCoffe() {
    return products.filter(type => type.type === "classic")
}
export function getDataAuthorCoffe() {
    return products.filter(type => type.type === "author_coffee")
}
export function getDataNew() {
    return products.filter(type => type.type === "new")
}
export function getDataColdCoffe() {
    return products.filter(type => type.type === "cold")
}
export function getDataTea() {
    return products.filter(type => type.type === "tea")
}

