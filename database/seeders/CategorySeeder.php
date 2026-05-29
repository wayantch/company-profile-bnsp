<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $default = [
            ['name' => 'Berita', 'order' => 0],
            ['name' => 'Pengumuman', 'order' => 1],
            ['name' => 'Artikel', 'order' => 2],
            ['name' => 'Tips', 'order' => 3],
        ];

        foreach ($default as $item) {
            Category::firstOrCreate([
                'slug' => \Illuminate\Support\Str::slug($item['name'])
            ], $item);
        }
    }
}
