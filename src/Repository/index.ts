import { AppDataSource } from "../configs/dataSource";
import { User } from "../Database/entity/user.entity";
import { Students } from "../Database/entity/student.entity";

export const userRepository = AppDataSource.getRepository(User);
export const studentRepository = AppDataSource.getRepository(Students);


