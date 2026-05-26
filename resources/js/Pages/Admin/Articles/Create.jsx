import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        category: "",
        content: "",
        author: "",
        is_published: false,
        thumbnail: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("admin.articles.store"), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Tambah Artikel" />

            <PageHeader
                title="Tambah Artikel"
                subtitle="Buat artikel baru dengan struktur yang sama seperti halaman publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Artikel", url: route("admin.articles.index") },
                    { label: "Tambah" },
                ]}
            />

            <div className=" px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Form Artikel Baru
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    Isikan semua informasi utama artikel.
                                </p>
                            </div>
                            <Badge variant="muted">Create</Badge>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2 block sm:col-span-2">
                                    <span className="block text-sm font-medium text-stone-700">
                                        Judul
                                    </span>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(event) =>
                                            setData("title", event.target.value)
                                        }
                                        className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
                                        placeholder="Judul artikel"
                                    />
                                    {errors.title && (
                                        <p className="text-xs text-rose-600">
                                            {errors.title}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2">
                                    <span className="block text-sm font-medium text-stone-700">
                                        Kategori
                                    </span>
                                    <input
                                        type="text"
                                        value={data.category}
                                        onChange={(event) =>
                                            setData(
                                                "category",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
                                        placeholder="Insight"
                                    />
                                    {errors.category && (
                                        <p className="text-xs text-rose-600">
                                            {errors.category}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2">
                                    <span className="block text-sm font-medium text-stone-700">
                                        Penulis
                                    </span>
                                    <input
                                        type="text"
                                        value={data.author}
                                        onChange={(event) =>
                                            setData(
                                                "author",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
                                        placeholder="Admin"
                                    />
                                    {errors.author && (
                                        <p className="text-xs text-rose-600">
                                            {errors.author}
                                        </p>
                                    )}
                                </label>
                            </div>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Konten
                                </span>
                                <textarea
                                    value={data.content}
                                    onChange={(event) =>
                                        setData("content", event.target.value)
                                    }
                                    rows={10}
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm leading-7 text-stone-900 outline-none transition focus:border-stone-400"
                                    placeholder="Tulis isi artikel di sini"
                                />
                                {errors.content && (
                                    <p className="text-xs text-rose-600">
                                        {errors.content}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Thumbnail
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) =>
                                        setData(
                                            "thumbnail",
                                            event.target.files?.[0] ?? null,
                                        )
                                    }
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 file:mr-4 file:rounded-xl file:border-0 file:bg-stone-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-stone-50"
                                />
                                {errors.thumbnail && (
                                    <p className="text-xs text-rose-600">
                                        {errors.thumbnail}
                                    </p>
                                )}
                            </label>

                            <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={data.is_published}
                                    onChange={(event) =>
                                        setData(
                                            "is_published",
                                            event.target.checked,
                                        )
                                    }
                                    className="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-400"
                                />
                                <span className="text-sm text-stone-700">
                                    Publikasikan artikel ini
                                </span>
                            </label>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    Simpan Artikel
                                </button>
                                <Link
                                    href={route("admin.articles.index")}
                                    className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                >
                                    Batal
                                </Link>
                            </div>
                        </form>
                    </Card>

                    <Card className="overflow-hidden border-stone-200 bg-[#0F172A] p-6 text-stone-100 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Preview
                        </p>
                        <h4 className="mt-3 text-3xl font-semibold text-white">
                            Judul artikel akan tampil seperti ini
                        </h4>
                        <p className="mt-4 text-sm leading-7 text-stone-300">
                            Gunakan gaya penulisan yang ringkas dan informatif.
                            Konten di halaman publik akan menampilkan judul,
                            kategori, penulis, thumbnail, dan isi artikel.
                        </p>

                        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                Contoh blok
                            </p>
                            <div className="mt-4 space-y-3">
                                <div className="h-3 w-24 rounded-full bg-white/10" />
                                <div className="h-10 w-full rounded-2xl bg-white/10" />
                                <div className="h-3 w-5/6 rounded-full bg-white/10" />
                                <div className="h-3 w-4/6 rounded-full bg-white/10" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
