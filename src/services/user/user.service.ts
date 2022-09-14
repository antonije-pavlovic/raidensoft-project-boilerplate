import UserModel from './user.db';
import UserRepository from './user.repository';
import { IUser } from './user.types';

export default class UserService {

  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository(UserModel);
  }

  public async create(user: IUser): Promise<IUser> {
    return await this.userRepository.create(user);
  }
}