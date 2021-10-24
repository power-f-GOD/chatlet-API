import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  Connection
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectConnection } from '@nestjs/typeorm';

EventSubscriber();
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(@InjectConnection() connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  beforeInsert(e: InsertEvent<User>) {
    console.info('Before User inserted: ', e.entity);
  }
}
