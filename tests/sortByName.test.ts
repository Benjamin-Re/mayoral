import { sortBy } from "cypress/types/lodash";
import sortByName from "../utils/sortByName";
import Product from '../types'

test("Input array should be sorted alphabetically", ()=> {
    const testInputArray: Product[] = [
        {
            id: 1,
            description:"Pantalon",
            price: 2,
            imgUrl: "test/test.jpg"
        },
        {
            id: 1,
            description:"Camisa",
            price: 2,
            imgUrl: "test/test.jpg"
        },
        {
            id: 1,
            description:"Zapatos",
            price: 2,
            imgUrl: "test/test.jpg"
        }
    ]
    expect(sortByName(testInputArray)[0].description).toBe("Camisa")
})