import { Storage, Drivers } from "@ionic/storage";

var storage = false;

export const createStore = async (name = "__mydb") => {

    storage = new Storage({

        name,
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    });

    await storage.create();
}


export const set = async (key, val) => {

    storage.set(key, val);
}

export const get = key => {

    const val = storage.get(key);
    return val;
}

export const remove = async key => {

    await storage.remove(key);
}

export const clear = async () => {

    await storage.clear();
}