import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {Form} from './form';


@Injectable()
export class FormService {

  constructor(@InjectModel('Form') private readonly FormModel: Model<Form>) {

  }

  // private readonly formInfos: Form[] = [];

  async insertFormInfo(inputForm: Form): Promise<boolean> {
    // this.formInfos.push(inputForm);
    console.log("RECEIVED DATA: ");
    console.log(inputForm);

    const newForm = new this.FormModel(inputForm);
    const result = await newForm.save();
    console.log("result: ", result)

    return true;
  }
}