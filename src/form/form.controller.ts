import { Controller, Post, Body } from '@nestjs/common';
import { Form } from './form';
import { FormService } from './form.service';

// domain.com/forms
@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async submitData(@Body() newForm: Form): Promise<string> {
    if (await this.formService.insertFormInfo(newForm)){
        return "SUCCESS";
    }
    return "ERROR";
  }
}