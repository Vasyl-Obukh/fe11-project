import {Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class JsonParsePipe implements PipeTransform {
    private fields: string[];

    constructor(...fields: string[]) {
        this.fields = fields;
    }

    transform(value: any) {
        this.fields.forEach(key => {
            if (key in value) {
                value[key] = JSON.parse(value[key]);
            }
        });
        return value;
    }
}
