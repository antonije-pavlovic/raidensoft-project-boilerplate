import { getModelForClass, index, prop } from '@typegoose/typegoose';
import { IUserDB } from './user.types';

@index({ age: 1 })
export class User implements IUserDB {

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

