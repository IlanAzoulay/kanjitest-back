import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'

@Schema({collection: "forms"})
export class Form {
    @Prop()
    image: String

    @Prop()
    blockchain: String

    @Prop()
    platform: String

    @Prop()
    name: String

    @Prop()
    symbol: String

    @Prop()
    amount: Number

    @Prop()
    owner: String

    @Prop()
    description: String
}

export const FormSchema = SchemaFactory.createForClass(Form);

// export const FormSchema = new mongoose.Schema({
//     blockchain: String,
//     platform: String,
//     name: String,
//     symbol: String,
//     amount: Number,
//     owner: String,
//     description: String
// })

// export interface Form {
//     // _id: string,
//     blockchain: string,
//     platform: string,
//     name: string,
//     symbol: string,
//     amount: number,
//     owner: string,
//     description: string
// }

// export class Form {
//     constructor(
//         // public image: string,
//         public blockchain: string,
//         public platform: string,
//         public name: string,
//         public symbol: string,
//         public amount: number,
//         public owner: string,
//         public description: string){
//     }
// }