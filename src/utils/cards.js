export async function getCards() {
    const response = await fetch('https://royaleapi.github.io/cr-api-data/json/cards.json')
    return await response?.json()
}

export const getAsset = (id) =>
    `https://cdns3.royaleapi.com/cdn-cgi/image/w=150,h=180,format=auto/static/img/cards/v1-843264bf/${ id }.png`