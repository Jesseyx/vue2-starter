<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
           [
               'id' => 1,
               'name' => '哈哈',
               'email' => 'test1@admin.com',
               'password' => bcrypt('123456'),
               'created_at' => '2016-09-26 04:58:26',
               'updated_at' => '2016-09-26 04:58:26',
           ],
        ]);
    }
}
