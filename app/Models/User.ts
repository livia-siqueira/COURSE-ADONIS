import { v4 as uuidv4 } from 'uuid'

import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, beforeSave } from '@ioc:Adonis/Lucid/Orm'

import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  public static table = 'users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: uuidv4

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignUuid(user: User) {
    user.secure_id = uuidv4()
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
