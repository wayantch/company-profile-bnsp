import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ article }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "put",
        title: article.title || "",
        category: article.category || "",
        content: article.content || "",
        author: article.author || "",
        is_published: Boolean(article.is_published),
        thumbnail: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("admin.articles.update", article.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit Artikel - ${article.title}`} />

            <PageHeader
                title={`Edit Artikel: ${article.title}`}
                subtitle="Perbarui konten artikel dan sesuaikan tampilannya di publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Artikel", url: route("admin.articles.index") },
                    { label: "Edit" },
                ]}
            />

            <div className=" px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Form Edit Artikel
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    ID {article.id} · {article.slug}
                                </p>
                            </div>
                            <Badge
                                variant={
                                    article.is_published ? "primary" : "muted"
                                }
                            >
                                {article.is_published ? "Published" : "Draft"}
                            </Badge>
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
                                    />
                                    {errors.title && (
                                        <p className="text-xs text-rose-600">
                                            {errors.title}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2 block">
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
                                    />
                                    {errors.category && (
                                        <p className="text-xs text-rose-600">
                                            {errors.category}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2 block">
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
                                />
                                {errors.content && (
                                    <p className="text-xs text-rose-600">
                                        {errors.content}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Thumbnail baru
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
                                {article.thumbnail && (
                                    <a
                                        href={article.thumbnail}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block text-xs font-medium text-stone-900 underline decoration-stone-300 underline-offset-4"
                                    >
                                        Thumbnail saat ini
                                    </a>
                                )}
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
                                    Simpan Perubahan
                                </button>
                                <Link
                                    href={route("admin.articles.index")}
                                    className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </form>
                    </Card>

                    <Card className="overflow-hidden border-stone-200 bg-[#0F172A] p-6 text-stone-100 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Preview
                        </p>
                        <h4 className="mt-3 text-3xl font-semibold text-white">
                            {data.title || article.title}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-stone-300">
                            <span>{data.category || article.category}</span>
                            <span>
                                {data.author || article.author || "Admin"}
                            </span>
                        </div>

                        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                Konten
                            </p>
                            <p className="mt-4 whitespace-pre-wrap text-sm leading-8 text-stone-300">
                                {data.content || article.content}
                            </p>
                        </div>

                        {article.thumbnail && (
                            <img
                                src={article.thumbnail}
                                alt={article.title}
                                className="mt-6 h-56 w-full rounded-3xl object-cover"
                            />
                        )}
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
