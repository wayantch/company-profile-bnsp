import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

const formatDate = (value) => {
    if (!value) {
        return "-";
    }

    return new Date(value).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

export default function Index({ articles = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus artikel ini?")) {
            router.delete(route("admin.articles.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Kelola Artikel" />

            <PageHeader
                title="Kelola Artikel"
                subtitle="Daftar artikel publik yang tampil di website."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Artikel" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 ">
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Semua Artikel
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    Total artikel: {articles.length}
                                </p>
                            </div>

                            <Link
                                href={route("admin.articles.create")}
                                className="inline-flex items-center justify-center rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                            >
                                Tambah Artikel
                            </Link>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-4">
                            {articles.length ? (
                                articles.map((article) => (
                                    <article
                                        key={article.id}
                                        className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white"
                                    >
                                        <div className="aspect-[16/10] bg-stone-200">
                                            {article.thumbnail ? (
                                                <img
                                                    src={article.thumbnail}
                                                    alt={article.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center bg-gradient-to-br from-stone-200 to-stone-100 text-xs uppercase tracking-[0.24em] text-stone-500">
                                                    No Thumbnail
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-center justify-between gap-3">
                                                <Badge variant="accent">
                                                    {article.category}
                                                </Badge>
                                                <Badge
                                                    variant={
                                                        article.is_published
                                                            ? "primary"
                                                            : "accent  "
                                                    }
                                                >
                                                    {article.is_published
                                                        ? "Published"
                                                        : "Draft"}
                                                </Badge>
                                            </div>

                                            <h4 className="mt-4 line-clamp-2 text-xl font-semibold tracking-tight text-stone-900">
                                                {article.title}
                                            </h4>

                                            <p className="mt-3 line-clamp-4 text-sm leading-7 text-stone-600">
                                                {article.content}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between text-xs text-stone-400">
                                                <span>
                                                    {article.author || "Admin"}
                                                </span>
                                                <span>
                                                    {formatDate(
                                                        article.created_at,
                                                    )}
                                                </span>
                                            </div>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                <Link
                                                    href={route(
                                                        "admin.articles.show",
                                                        article.id,
                                                    )}
                                                    className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                                >
                                                    Lihat
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.articles.edit",
                                                        article.id,
                                                    )}
                                                    className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(article.id)
                                                    }
                                                    className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-medium text-rose-600 transition hover:border-rose-300 hover:bg-rose-50"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-stone-200 bg-stone-50 p-6 text-sm text-stone-500 md:col-span-2 xl:col-span-3">
                                    Belum ada artikel.
                                </div>
                            )}
                        </div>
                    </Card>

                    <Card className="overflow-hidden border-stone-200 bg-[#0F172A] p-6 text-stone-100 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Gaya Publik
                        </p>
                        <h4 className="mt-3 text-3xl font-semibold text-white">
                            Tampilan yang lebih dekat dengan user
                        </h4>
                        <p className="mt-4 text-sm leading-7 text-stone-300">
                            Kartu artikel admin dibuat lebih visual agar
                            konsisten dengan nuansa halaman artikel publik:
                            tajuk besar, kartu dengan sudut lembut, dan
                            ringkasan singkat.
                        </p>

                        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                Quick Info
                            </p>
                            <div className="mt-4 space-y-3 text-sm text-stone-300">
                                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                    <span>Total</span>
                                    <span>{articles.length}</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                    <span>Published</span>
                                    <span>
                                        {
                                            articles.filter(
                                                (article) =>
                                                    article.is_published,
                                            ).length
                                        }
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Draft</span>
                                    <span>
                                        {
                                            articles.filter(
                                                (article) =>
                                                    !article.is_published,
                                            ).length
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
