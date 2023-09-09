import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserType } from './object-type/user.type';
import { UserService } from './user-service/user.service';
import { CreateUserInput } from './input-type/user.input';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => [UserType])
  getAllusers() {
    return this.userService.getAllUsers();
  }
  @Mutation(() => UserType)
  creatUser(@Args('createUser') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
