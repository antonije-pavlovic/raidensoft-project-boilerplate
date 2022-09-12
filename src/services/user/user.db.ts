import { getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { index, prop } from 'typegoose';
import { IUser } from './user.types';

@index({ age: 1 })
export class User implements IUser {

  @prop()
  public _id: ObjectId

  @prop()
  public name: string;

  @prop()
  public age: number;
}

const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true
  }
});


export default UserModel;

