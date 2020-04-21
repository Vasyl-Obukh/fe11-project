import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as DataURI from 'datauri';
import { extname } from 'path';
import { Image } from './interfaces/image.interface';

@Injectable()
export class CloudService {
  private readonly dataURI: DataURI = new DataURI();
  private readonly getImageURL = image =>
    this.dataURI.format(extname(image.originalname), image.buffer).content

  static validateImage(image): boolean | never {
    if (image?.originalname && image.buffer) {
      return true;
    }

    throw new Error('CloudService Error: image is not found');
  }

  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
  }

  async uploadImage(image: Image, config = {}): Promise<Image> | never {
    const isValid: boolean = CloudService.validateImage(image);
    if (isValid) {
      return cloudinary.uploader.upload(
        this.getImageURL(image),
        config,
        error => {
          // tslint:disable-next-line:no-console
          console.error(error);
        },
      );
    }
  }

  updateImage = async (image: Image, publicId: string): Promise<Image> | never =>
    this.uploadImage(image, { public_id: publicId })
}
