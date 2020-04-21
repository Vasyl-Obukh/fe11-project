import { Image } from './interfaces/image.interface';

const CLOUDINARY_DOMAIN_NAME = 'res.cloudinary.com';

enum HTTP_TYPE {
    HTTP = 'http',
    HTTPS = 'https',
}

export const mapData = ({ resource_type, type, version, public_id, format}: Readonly<Image>): Image =>
    ({ resource_type, type, version, public_id, format });

export const createUrl = (
    { resource_type, type, version, public_id, format}: Readonly<Image>,
    secure?: boolean,
): string => {
    const httpType: HTTP_TYPE = secure ? HTTP_TYPE.HTTPS : HTTP_TYPE.HTTP;
    return `${httpType}://${CLOUDINARY_DOMAIN_NAME}/${process.env.CLOUD_NAME}/${resource_type}/${type}/v${version}/${public_id}.${format}`;
};
