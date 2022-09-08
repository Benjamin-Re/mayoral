import Product from '../types'

function sortByName(products: Product[]) {
    const sortedProducts: Product[] = products.sort((a, b) => {
        const nameA: string = a.description.toUpperCase();
        const nameB: string = b.description.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return sortedProducts
}

export default sortByName