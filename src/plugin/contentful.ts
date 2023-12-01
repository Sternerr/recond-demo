import type { EntryFieldTypes, EntryFieldType } from "contentful";

import contentful from "contentful"
import { createClient } from "contentful";

const createClientFunc = process.env.NODE_ENV === "development" ? createClient : contentful.createClient;
// const runtimeConfig = useRuntimeConfig();

const client = createClientFunc({
    space: "gdx5tbunxfl4",
    accessToken: "l9g72s9Z_7UqSSFA9AXfedwoWzlqbEusb5e0HarB_08",
})

export type HeaderType = {
    contentTypeId: "Header",
    fields: {
        singletonID: EntryFieldTypes.Integer,
        logotype: EntryFieldTypes.AssetLink,
        button: EntryFieldTypes.Text,
    }
}

export type FooterType = {
    contentTypeId: "footer",
    fields: {
        singletonID: EntryFieldTypes.Integer,
        logotype: EntryFieldTypes.AssetLink,
        phonenumber: EntryFieldTypes.Text,
        email: EntryFieldTypes.Text,
        address: EntryFieldTypes.Text,
        timeOpen: EntryFieldTypes.Text,
        googleMapLocation: EntryFieldTypes.Text,
        instagram: EntryFieldTypes.Text,
        facebook: EntryFieldTypes.Text,
    }
}

export type HomePageType = {
    contentTypeId: "homepage",
    fields: {
        singletonId: EntryFieldTypes.Integer,
        heroTitle: EntryFieldTypes.Symbol,
        heroDesc: EntryFieldTypes.Text,
        heroButton: EntryFieldTypes.Symbol,
        heroCarousel: EntryFieldTypes.Array,
        featureText: EntryFieldTypes.Symbol
        featureButton: EntryFieldTypes.Symbol
        serviceTitle: EntryFieldTypes.Symbol
        services: EntryFieldTypes.Array,
    }
}

export type ServiceType = {
    contentTypeId: "services",
    fields: {
        title: EntryFieldTypes.Symbol,
        description: EntryFieldTypes.Text,
        price: EntryFieldTypes.Symbol,
        isActive: EntryFieldTypes.Boolean,
    }
}

export const getData = async<T extends contentful.EntrySkeletonType>(contentModel: string) => {
    return await client.getEntries<T>({
        content_type: contentModel
    })
}

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            client: client,
        }
    }
})