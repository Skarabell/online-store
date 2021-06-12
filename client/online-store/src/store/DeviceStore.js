import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: "Холодильники"},
            {id:2, name: "Смартфоны"}
        ]
        this._brands = [
            {id:1, name: "Samsung"},
            {id:2, name: "Apple"}
        ]
        this._devices = [
            {id:1, name: "Iphone 12 pro", price: 3500, rating: 5, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fswappie.com%2Fpl-en%2Fmodel%2Fiphone-12-pro-max%2F&psig=AOvVaw0pF72IUwNoliD7RGMqQzUB&ust=1623572705728000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC4oe7VkfECFQAAAAAdAAAAABAD"},
            {id:2, name: "Samsung A71", price: 1500, rating: 4, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2F5element.by%2Fproducts%2F657377-smartfon-samsung-galaxy-a71-goluboy&psig=AOvVaw0H7YM59G2I5mMwqK3Zy8SN&ust=1623572787736000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOD69o7WkfECFQAAAAAdAAAAABAD"},
            {id:3, name: "Some other", price: 1900, rating: 3, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fswappie.com%2Fpl-en%2Fmodel%2Fiphone-12-pro-max%2F&psig=AOvVaw0pF72IUwNoliD7RGMqQzUB&ust=1623572705728000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC4oe7VkfECFQAAAAAdAAAAABAD"}
        ]
        makeAutoObservable(this)
    }

    setType(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}