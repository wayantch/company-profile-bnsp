<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Client;
use App\Models\Contact;
use App\Models\Article;
use App\Models\Event;
use App\Models\PageContent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Admin User
        User::updateOrCreate(
            ['email' => 'admin@wynnsea.com'],
            [
                'name' => 'Admin Wynnsea',
                'password' => Hash::make('password'),
            ]
        );

        // 2. Products
        $products = [
            [
                'name' => 'Web Development',
                'short_description' => 'Aplikasi web berkinerja tinggi, responsif, dan disesuaikan dengan kebutuhan bisnis Anda.',
                'full_description' => 'Layanan Web Development kami mencakup pembuatan aplikasi web tingkat enterprise, portal e-commerce, sistem manajemen internal (ERP/CRM), dan integrasi API. Kami menggunakan framework modern seperti Laravel, React, dan Tailwind CSS untuk menjamin kecepatan, keamanan, dan skalabilitas.',
                'icon' => 'Code',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'name' => 'Mobile App Development',
                'short_description' => 'Aplikasi mobile native & cross-platform untuk platform iOS dan Android.',
                'full_description' => 'Kami membangun aplikasi mobile berkinerja tinggi menggunakan React Native dan Flutter, serta pengembangan native Swift/Kotlin. Wynnsea berfokus pada UI/UX yang mulus, integrasi fitur offline, notifikasi push, dan integrasi payment gateway untuk solusi mobile Anda.',
                'icon' => 'Smartphone',
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'name' => 'IT Consulting',
                'short_description' => 'Konsultasi IT strategis untuk menyelaraskan infrastruktur teknologi dengan tujuan bisnis Anda.',
                'full_description' => 'Konsultan ahli kami membantu Anda merancang arsitektur IT, merencanakan migrasi digital, memilih teknologi stack yang tepat, dan mengoptimalkan anggaran teknologi. Kami memastikan investasi IT Anda memberikan ROI maksimal bagi operasional bisnis.',
                'icon' => 'Compass',
                'is_featured' => true,
                'order' => 3,
            ],
            [
                'name' => 'Cloud & DevOps Services',
                'short_description' => 'Percepat siklus rilis dan skalabilitas infrastruktur Anda dengan solusi cloud otomatis.',
                'full_description' => 'Kami menyediakan layanan migrasi cloud (AWS, GCP, Azure), setup CI/CD pipeline otomatis, kontainerisasi dengan Docker & Kubernetes, serta pemantauan server 24/7. DevOps Wynnsea memastikan aplikasi Anda berjalan tanpa downtime dan siap menangani jutaan pengguna.',
                'icon' => 'Cloud',
                'is_featured' => false,
                'order' => 4,
            ],
        ];

        foreach ($products as $prod) {
            Product::updateOrCreate(['name' => $prod['name']], $prod);
        }

        // Seed categories
        $this->call(\Database\Seeders\CategorySeeder::class);

        // 3. Clients
        $clients = [
            [
                'name' => 'TechCorp',
                'website' => 'https://techcorp.com',
                'description' => 'Perusahaan solusi enterprise global.',
                'order' => 1,
            ],
            [
                'name' => 'NusaDigital',
                'website' => 'https://nusadigital.co.id',
                'description' => 'Agensi pemasaran digital terkemuka di Indonesia.',
                'order' => 2,
            ],
            [
                'name' => 'Kreasi Studio',
                'website' => 'https://kreasistudio.com',
                'description' => 'Studio kreatif pengembang game dan konten interaktif.',
                'order' => 3,
            ],
            [
                'name' => 'BuilderPro',
                'website' => 'https://builderpro.com',
                'description' => 'Platform teknologi properti modern.',
                'order' => 4,
            ],
            [
                'name' => 'SmartRetail',
                'website' => 'https://smartretail.id',
                'description' => 'Penyedia sistem kasir POS dan solusi retail pintar.',
                'order' => 5,
            ],
        ];

        foreach ($clients as $client) {
            Client::updateOrCreate(['name' => $client['name']], $client);
        }

        // 3b. Dummy Contact messages
        $contacts = [
            [
                'name' => 'Budi Santoso',
                'email' => 'budi@example.com',
                'phone' => '+62 812-3456-7890',
                'subject' => 'Permintaan demo produk',
                'message' => 'Halo, saya tertarik dengan layanan Web Development. Bisa atur demo minggu depan?',
                'is_read' => false,
            ],
            [
                'name' => 'Siti Aminah',
                'email' => 'siti@example.co.id',
                'phone' => '+62 811-2222-333',
                'subject' => 'Kerja sama integrasi API',
                'message' => 'Kami butuh integrasi antara sistem kasir dan ERP. Mohon kirim penawaran.',
                'is_read' => false,
            ],
            [
                'name' => 'PT Maju Jaya',
                'email' => 'info@majujaya.id',
                'phone' => '',
                'subject' => 'Pertanyaan lisensi',
                'message' => 'Apakah ada lisensi khusus untuk penggunaan enterprise?',
                'is_read' => true,
            ],
        ];

        foreach ($contacts as $ct) {
            Contact::updateOrCreate([
                'email' => $ct['email'],
                'subject' => $ct['subject'],
            ], $ct);
        }

        // 4. Articles
        $articles = [
            [
                'title' => 'Pentingnya Arsitektur Microservices untuk Skalabilitas Bisnis',
                'category' => 'Konsep TI',
                'content' => 'Arsitektur microservices memecah aplikasi monolitik besar menjadi komponen-komponen kecil yang independen dan saling berkomunikasi melalui API ringan. Pendekatan ini memungkinkan tim developer untuk mengembangkan, menguji, dan menyebarkan layanan secara mandiri tanpa memengaruhi sistem keseluruhan. Wynnsea percaya microservices sangat penting untuk startup yang sedang tumbuh cepat karena menawarkan fleksibilitas teknologi, fault isolation yang lebih baik, dan skalabilitas horizontal yang mudah disesuaikan dengan beban lalu lintas pengguna.',
                'author' => 'Admin Wynnsea',
                'is_published' => true,
            ],
            [
                'title' => '10 Tips Menulis Clean Code di React 18',
                'category' => 'Tips Dev',
                'content' => 'Menulis kode yang bersih di React tidak hanya mempermudah pemeliharaan tetapi juga meningkatkan efisiensi rendering. Beberapa tips terbaik meliputi: 1) Gunakan component modular dengan tanggung jawab tunggal. 2) Manfaatkan React Hooks kustom untuk memisahkan logika bisnis dari UI. 3) Selalu bersihkan side effects pada useEffect. 4) Gunakan TypeScript atau PropTypes untuk validasi tipe data. 5) Terapkan teknik lazy loading untuk mempercepat loading page. Ikuti panduan Wynnsea ini untuk code modern!',
                'author' => 'Admin Wynnsea',
                'is_published' => true,
            ],
            [
                'title' => 'Studi Kasus: Migrasi Sistem Monolitik Wynnsea ke Infrastruktur Cloud',
                'category' => 'Case Study',
                'content' => 'Dalam studi kasus ini, kami mendokumentasikan migrasi infrastruktur klien ritel kami dari hosting tradisional ke AWS Cloud. Dengan menerapkan arsitektur serverless, database RDS terkluster, dan auto-scaling group, klien berhasil menurunkan biaya operasional bulanan hingga 35% sekaligus menghilangkan downtime selama promo puncak belanja nasional. Kami merinci setiap fase dari penilaian infrastruktur awal, strategi replikasi data real-time, hingga pengujian beban (load testing) sebelum go-live.',
                'author' => 'Admin Wynnsea',
                'is_published' => true,
            ],
            [
                'title' => 'Masa Depan AI Generatif dalam Pengembangan Perangkat Lunak 2026',
                'category' => 'Industry News',
                'content' => 'Tahun 2026 menandai era baru di mana AI generatif bukan lagi sekadar pelengkap, melainkan co-pilot utama bagi software engineer. Dari pembuatan unit test otomatis hingga konversi desain UI sketsa menjadi code fungsional, AI mempercepat siklus pengiriman perangkat lunak. Namun, Wynnsea menekankan bahwa peran manusia tetap vital dalam hal arsitektur tingkat tinggi, pemecahan masalah kompleks, dan etika keamanan data.',
                'author' => 'Admin Wynnsea',
                'is_published' => true,
            ],
            [
                'title' => 'Meningkatkan Keamanan REST API Laravel 11',
                'category' => 'Tips Dev',
                'content' => 'Membangun API yang aman adalah keharusan di era digital. Di Laravel 11, Anda dapat memanfaatkan middleware bawaan untuk membatasi laju permintaan (rate limiting), menggunakan Laravel Sanctum untuk autentikasi token yang ringan, serta memvalidasi setiap input pengguna menggunakan Form Requests untuk mencegah SQL Injection dan XSS. Kami juga membahas pentingnya mengenkripsi data sensitif dalam database dan mengaktifkan HTTPS wajib.',
                'author' => 'Admin Wynnsea',
                'is_published' => true,
            ],
            [
                'title' => 'Panduan Memahami CI/CD Pipelines Bagi Pemula',
                'category' => 'Konsep TI',
                'content' => 'Continuous Integration dan Continuous Deployment (CI/CD) adalah tulang punggung dari metodologi DevOps modern. Artikel ini menjelaskan cara kerja CI/CD secara sederhana, dimulai dari proses commit kode di GitHub, build otomatis, pengetesan otomatis dengan PHPUnit atau Jest, hingga penyebaran otomatis ke server staging atau produksi menggunakan GitHub Actions. Pahami konsep ini untuk mempercepat karir coding Anda!',
                'author' => 'Admin Wynnsea',
                'is_published' => true,
            ],
        ];

        foreach ($articles as $art) {
            // try to find category by slug
            $slug = \Illuminate\Support\Str::slug($art['category'] ?? '');
            $category = \App\Models\Category::where('slug', $slug)->first();
            if ($category) {
                $art['category_id'] = $category->id;
                $art['category'] = $category->name;
            }
            Article::updateOrCreate(['title' => $art['title']], $art);
        }

        // 5. Events
        $events = [
            [
                'title' => 'Wynnsea Tech Talk: Scaling Modern Web Apps',
                'description' => 'Seminar virtual interaktif bersama arsitek software Wynnsea. Kami akan mengupas tuntas teknik caching Redis, arsitektur CDN, dan strategi pengoptimalan query database.',
                'event_date' => '2026-06-15',
                'location' => 'Wynnsea Headquarters, Gedung Sudirman & Zoom Webinar',
                'is_published' => true,
            ],
            [
                'title' => 'Workshop React 18 & Inertia.js v2 Deep Dive',
                'description' => 'Ikuti sesi coding langsung (hands-on) membangun aplikasi SPA modern dengan Laravel backend dan React frontend tanpa ribet membuat REST API terpisah. Cocok untuk full-stack dev.',
                'event_date' => '2026-07-20',
                'location' => 'Live Streaming YouTube & Zoom',
                'is_published' => true,
            ],
            [
                'title' => 'DevOps Workshop: Kubernetes Cluster Deployment',
                'description' => 'Belajar men-deploy, mengelola, dan memantau aplikasi ter-kontainerisasi dalam kluster Kubernetes di cloud provider lokal dan AWS. Sesi ini menyertakan demo setup ingress controller.',
                'event_date' => '2026-08-05',
                'location' => 'Co-Working Space Bandung & Hybrid YouTube Live',
                'is_published' => true,
            ],
        ];

        foreach ($events as $evt) {
            Event::updateOrCreate(['title' => $evt['title']], $evt);
        }

        // 6. Page Contents
        $contents = [
            // Hero section
            ['section' => 'hero', 'key' => 'title', 'value' => 'Bridging Ideas to Digital Reality'],
            ['section' => 'hero', 'key' => 'subtitle', 'value' => 'Wynnsea menghadirkan solusi teknologi mutakhir untuk pengembangan software kustom, aplikasi web & mobile, konsultasi IT, serta layanan Cloud/DevOps guna mempercepat pertumbuhan bisnis Anda.'],
            ['section' => 'hero', 'key' => 'cta_primary', 'value' => 'Lihat Produk'],
            ['section' => 'hero', 'key' => 'cta_secondary', 'value' => 'Hubungi Kami'],
            ['section' => 'hero', 'key' => 'image', 'value' => ''],

            // About section
            ['section' => 'about', 'key' => 'title', 'value' => 'Tentang Wynnsea'],
            ['section' => 'about', 'key' => 'description', 'value' => 'Didirikan dengan semangat inovasi dan keunggulan teknologi, Wynnsea adalah mitra transformasi digital terpercaya Anda. Kami berkomitmen menjembatani ide bisnis kreatif dengan solusi digital yang tangguh, aman, dan berkinerja tinggi. Kami membantu perusahaan di berbagai industri berkembang di era digital.'],
            ['section' => 'about', 'key' => 'history_title', 'value' => 'Sejarah Perjalanan Kami'],
            ['section' => 'about', 'key' => 'image', 'value' => ''],

            // Visi Misi section
            ['section' => 'visi_misi', 'key' => 'title', 'value' => 'Visi & Misi Kami'],
            ['section' => 'visi_misi', 'key' => 'visi', 'value' => 'Menjadi pemimpin global penyedia solusi teknologi informasi yang inovatif, terpercaya, dan berorientasi pada kesuksesan jangka panjang bisnis klien kami.'],
            ['section' => 'visi_misi', 'key' => 'misi', 'value' => "1. Memberikan solusi perangkat lunak kustom berkualitas tinggi yang melebihi ekspektasi klien.\n2. Menyediakan layanan konsultasi teknologi strategis untuk meningkatkan efisiensi operasional.\n3. Mengimplementasikan otomatisasi DevOps & infrastruktur Cloud yang modern dan dapat diskalakan.\n4. Membina tim profesional IT yang berdedikasi tinggi, terus belajar, dan menjunjung integritas."],

            // Contact section
            ['section' => 'contact', 'key' => 'title', 'value' => 'Hubungi Kami'],
            ['section' => 'contact', 'key' => 'address', 'value' => 'Menara Sudirman Lantai 12, Jl. Jend. Sudirman Kav. 60, Jakarta 12190, Indonesia'],
            ['section' => 'contact', 'key' => 'phone', 'value' => '+62 21 5088 1234'],
            ['section' => 'contact', 'key' => 'email', 'value' => 'contact@wynnsea.com'],
            ['section' => 'contact', 'key' => 'map_embed', 'value' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.27364673646!2d106.821434314769!3d-6.22758899549195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb7f9d8f3b%3A0x6b09bd7d686036a1!2sMenara%20Sudirman!5e0!3m2!1sid!2sid!4v1625000000000!5m2!1sid!2sid'],
        ];

        foreach ($contents as $content) {
            PageContent::updateOrCreate(
                ['section' => $content['section'], 'key' => $content['key']],
                ['value' => $content['value']]
            );
        }
    }
}
