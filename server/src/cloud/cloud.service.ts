import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as DataURI from 'datauri';
import { extname } from 'path';

@Injectable()
export class CloudService {
    private readonly dataURI: DataURI = new DataURI();
    private readonly getImageURL = img =>
        this.dataURI.format(extname(img.originalname), img.buffer).content

    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        });
    }

    uploadImage = async (img) => cloudinary.uploader.upload(
        this.getImageURL(img),
        (error, result) => {
            // tslint:disable-next-line:no-console
            console.log(result);
        },
    )
}
