import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'virk@adonisjs.com',
        password: 'virksenha',
      },
      {
        email: 'romain@adonisjs.com',
        password: 'romainsenha',
      },
      {
        email: 'manoel@adonisjs.com',
        password: 'senhamanoel',
      },
    ])
  }
}
