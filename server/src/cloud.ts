import { v2 as cloudinary } from 'cloudinary';
import * as DataURI from 'datauri';
import { extname } from 'path';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const dataUri = new DataURI();

const getImageURL = img => dataUri.format(extname(img.originalname), img.buffer).content;

export const uploadImage = img => cloudinary.uploader.upload(
    getImageURL(img),
    (error, result) => {
        // tslint:disable-next-line:no-console
        console.log(result);
    },
);
