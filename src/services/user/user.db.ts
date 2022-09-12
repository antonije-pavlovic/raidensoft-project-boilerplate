import { getModelForClass } from '@typegoose/typegoose';
import { index, prop } from 'typegoose';
import { IUser } from './user.models';

@index({ age: 1 })
class User implements IUser {
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

