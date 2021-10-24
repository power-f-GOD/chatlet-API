import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';

const mockUsers: User[] = [
  {
    id: 1,
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane_doe@example.com',
    username: 'jane_doe',
    password: '123jane'
  },
  {
    id: 2,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john_doe',
    username: 'john_doe',
    password: '123john'
  }
];

describe('UsersService', () => {
  let service: UsersService;
  let repo: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: new UserRepository()
        }
        // {
        //   provide: 'UserRepository',
        //   useValue: {
        //     find: jest.fn(),
        //     findOne: jest.fn(),
        //     delete: jest.fn()
        //   }
        // }
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<UserRepository>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should resolve with a user', async () => {
    jest.spyOn(repo, 'findOne').mockResolvedValueOnce(mockUsers[1]);
    await expect(service.getUserById(1)).resolves.toMatchObject(mockUsers[1]);
  });

  it('should resolve with a list of all users', async () => {
    jest.spyOn(repo, 'find').mockResolvedValueOnce(mockUsers);
    await expect(service.getAllUsers()).resolves.toMatchObject(mockUsers);
  });

  it('should resolve with deleted user', async () => {
    jest.spyOn(repo, 'delete').mockResolvedValueOnce(undefined);
    await expect(service.deleteUser(2)).resolves.toBeUndefined;
  });
});
