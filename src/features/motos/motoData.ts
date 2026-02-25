import type { MotoModeloPageData } from './MotoModeloPage'

const DEFAULT_IMAGE =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='20' font-family='Arial'%3EImagen%3C/text%3E%3C/svg%3E"

const WHATSAPP_NUMBER_PLACEHOLDER = '5490000000000'

function buildWhatsappHref(modelo: string) {
    const msg = `Hola, quiero consultar por la ${modelo}`
    return `https://wa.me/${WHATSAPP_NUMBER_PLACEHOLDER}?text=${encodeURIComponent(msg)}`
}

export const MOTO_DATA = {
    // DOMINAR
    'dominar-d400-ug': {
        brand: 'Bajaj',
        model: 'Dominar',
        version: 'D400 UG',
        images: [
            'https://i.ibb.co/mW59MS0/aae46895e143.webp',
            'https://i.ibb.co/Ps6xtR16/614a222bf256.webp',
        ],
        whatsappHref: buildWhatsappHref('Dominar D400 UG'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Dominar D400 UG' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'TOURING' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '373.3 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T DOHC' },
                    { label: 'Tanque', value: '13 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V 8Ah' },
                    { label: 'Autonomía', value: '350 km' },
                ],
            },
        ],
    },
    'dominar-d250': {
        brand: 'Bajaj',
        model: 'Dominar',
        version: 'D250',
        images: [
            'https://i.ibb.co/rr838Hw/45ed7afa44a7.webp',
            'https://i.ibb.co/LddYjT3Z/882df12b1b7d.webp',
            'https://i.ibb.co/SXttg09Z/12eefd6399b7.webp',
        ],
        whatsappHref: buildWhatsappHref('Dominar D250'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Dominar D250' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'TOURING' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '248.8 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T DOHC' },
                    { label: 'Tanque', value: '13 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V 8Ah' },
                    { label: 'Autonomía', value: '380 km' },
                ],
            },
        ],
    },

    // ROUSER
    'rouser-ns-400': {
        brand: 'Bajaj',
        model: 'Rouser',
        version: 'NS 400Z',
        images: [
            'https://i.ibb.co/svXcrp5L/7740855363c7.webp',
            'https://i.ibb.co/nsyfTxtQ/cace36df5976.webp',
            'https://i.ibb.co/ZRKrpr2K/8fa26243a2dc.webp',
            'https://i.ibb.co/xqG6d3Jg/ca65f2119e4d.webp',
        ],
        whatsappHref: buildWhatsappHref('Rouser NS 400Z'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Rouser NS 400Z' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '373 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T DOHC' },
                    { label: 'Tanque', value: '12 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V - 8Ah' },
                    { label: 'Autonomía', value: '12V' },
                ],
            },
        ],
    },
    'rouser-ns-200': {
        brand: 'Bajaj',
        model: 'Rouser',
        version: 'NS 200',
        images: [
            'https://i.ibb.co/RpBXRg0v/811147b24547.webp',
            'https://i.ibb.co/GQqp2sYP/cc6b13b3ec74.webp',
            'https://i.ibb.co/MycmvZ0y/258e57cfea76.webp',
            'https://i.ibb.co/NdcC9VF2/1b9b0f56a33d.webp',
        ],
        whatsappHref: buildWhatsappHref('Rouser NS 200'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Rouser NS 200' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '199.5 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T SOHC DTS-i' },
                    { label: 'Tanque', value: '12 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V 8Ah' },
                    { label: 'Autonomía', value: '400 km' },
                ],
            },
        ],
    },
    'rouser-ns-200-fi': {
        brand: 'Bajaj',
        model: 'Rouser',
        version: 'NS 200 FI',
        images: [
            'https://i.ibb.co/CFM1xGp/58211c4f9c78.webp',
            'https://i.ibb.co/DgWTB6GY/d4b1b488aa8c.webp',
        ],
        whatsappHref: buildWhatsappHref('Rouser NS 200 FI'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Rouser NS 200 FI' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '199.5 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T SOHC' },
                    { label: 'Tanque', value: '12 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V' },
                    { label: 'Autonomía', value: '400 km' },
                ],
            },
        ],
    },
    'rouser-ns-160': {
        brand: 'Bajaj',
        model: 'Rouser',
        version: 'NS 160',
        images: ['https://i.ibb.co/0RtwjLs3/48a406fda5dd.webp'],
        whatsappHref: buildWhatsappHref('Rouser NS 160'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Rouser NS 160' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '160.3 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T SOHC DTS-i' },
                    { label: 'Tanque', value: '12 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V' },
                    { label: 'Autonomía', value: '500 km' },
                ],
            },
        ],
    },
    'rouser-ns-125': {
        brand: 'Bajaj',
        model: 'Rouser',
        version: 'NS 125',
        images: [
            'https://i.ibb.co/qGcjxSP/2d78cacd74b7.webp',
            'https://i.ibb.co/4ZrT9T38/aa091c2d2323.webp',
            'https://i.ibb.co/1tJGgs1s/97030bf6b7bf.webp',
            'https://i.ibb.co/s90GY9Cb/cf74bc4c8fef.webp',
        ],
        whatsappHref: buildWhatsappHref('Rouser NS 125'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Rouser NS 125' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '124.4 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T SOHC DTS-i' },
                    { label: 'Tanque', value: '12 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V 5Ah' },
                    { label: 'Autonomía', value: '550 km' },
                ],
            },
        ],
    },
    'rouser-n250': {
        brand: 'Bajaj',
        model: 'Rouser',
        version: 'N250',
        images: [
            'https://i.ibb.co/gFyfDqk1/aca9b82b977b.webp',
            'https://i.ibb.co/PvrDdq67/c40880c17af3.webp',
            'https://i.ibb.co/wNSYnf0T/7b66f0a89da8.webp',
        ],
        whatsappHref: buildWhatsappHref('Rouser N250'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Rouser N250' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '249.07 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T SOHC' },
                    { label: 'Tanque', value: '14 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V' },
                    { label: 'Autonomía', value: '500 km' },
                ],
            },
        ],
    },
    'rouser-p150': {
        brand: 'Bajaj',
        model: 'Rouser',
        version: 'P150',
        images: [
            'https://i.ibb.co/qw6p0Ky/7b70d019f79f.webp',
            'https://i.ibb.co/HLJkrsyV/7461ef80ad90.webp',
        ],
        whatsappHref: buildWhatsappHref('Rouser P150'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Rouser P150' },
                    { label: 'Tipo de Moto', value: 'Naked' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '149.6 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T SOHC' },
                    { label: 'Tanque', value: '14 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V' },
                    { label: 'Autonomía', value: '600 km' },
                ],
            },
        ],
    },

    // BOXER
    'boxer-150-at': {
        brand: 'Bajaj',
        model: 'Boxer',
        version: '150 AT',
        images: [
            'https://i.ibb.co/rKs0nRqT/c1a78581fadb.webp',
            'https://i.ibb.co/DH8m83yJ/9ad1045bf571.webp',
            'https://i.ibb.co/JwjmkdhF/c95afe589de1.webp',
        ],
        whatsappHref: buildWhatsappHref('Boxer 150 AT'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Boxer 150 AT' },
                    { label: 'Tipo de Moto', value: 'Trabajo' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: '144.8 cc' },
                    { label: 'Motor', value: 'Monocilíndrico 4T SOHC' },
                    { label: 'Tanque', value: '11 L' },
                    { label: 'Combustible', value: 'Nafta' },
                    { label: 'Batería', value: '12V 5Ah' },
                    { label: 'Autonomía', value: '500 km' },
                ],
            },
        ],
    },
    'boxer-ct-100': {
        brand: 'Bajaj',
        model: 'Boxer',
        version: 'CT 100',
        images: [DEFAULT_IMAGE],
        whatsappHref: buildWhatsappHref('Boxer CT 100'),
        specSections: [
            {
                title: 'Información General',
                items: [
                    { label: 'Marca', value: 'Bajaj' },
                    { label: 'Modelo y Versión', value: 'Boxer CT 100' },
                    { label: 'Tipo de Moto', value: 'Trabajo' },
                    { label: 'Segmento', value: 'NAKED' },
                ],
            },
            {
                title: 'Motor y Rendimiento',
                items: [
                    { label: 'Cilindrada', value: undefined },
                    { label: 'Motor', value: undefined },
                    { label: 'Tanque', value: undefined },
                    { label: 'Combustible', value: undefined },
                    { label: 'Batería', value: undefined },
                    { label: 'Autonomía', value: undefined },
                ],
            },
        ],
    },
} as const satisfies Record<string, MotoModeloPageData>

export type MotoKey = keyof typeof MOTO_DATA

export function getMotoDataByKey(key: MotoKey): MotoModeloPageData {
    return MOTO_DATA[key]
}
