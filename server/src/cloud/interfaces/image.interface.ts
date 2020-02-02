export interface Image {
    resource_type: string;
    type: string;
    version: number;
    public_id: string;
    format: string;
    [propName: string]: any;
}
