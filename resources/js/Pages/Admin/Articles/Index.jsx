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
                    // { label: "Dashboard", url: route("dashboard") },
                    { label: "Artikel" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Artikel Publik
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Semua Artikel
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Total artikel: {articles.length}
                                </p>
                            </div>

                            <Link
                                href={route("admin.articles.create")}
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/10 transition hover:opacity-90"
                            >
                                Tambah Artikel
                            </Link>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {articles.length ? (
                                articles.map((article) => (
                                    <article
                                        key={article.id}
                                        className="group overflow-hidden rounded-[1.75rem] border border-border bg-base/80 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-secondary/40 hover:shadow-lg hover:shadow-ink/5"
                                    >
                                        <div className="aspect-[16/10] bg-secondary">
                                            {article.thumbnail ? (
                                                <img
                                                    src={article.thumbnail}
                                                    alt={article.title}
                                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary to-base text-xs font-semibold uppercase tracking-[0.24em] text-muted">
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
                                                            : "muted"
                                                    }
                                                >
                                                    {article.is_published
                                                        ? "Terbit"
                                                        : "Draf"}
                                                </Badge>
                                            </div>

                                            <h4 className="mt-4 line-clamp-2 text-xl font-semibold tracking-tight text-text">
                                                {article.title}
                                            </h4>

                                            <p className="mt-3 line-clamp-2 text-sm leading-7 text-muted">
                                                {article.content}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between text-xs text-muted">
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
                                                    className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                >
                                                    Lihat
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.articles.edit",
                                                        article.id,
                                                    )}
                                                    className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(article.id)
                                                    }
                                                    className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-300 hover:bg-rose-100"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-border bg-base/70 p-6 text-sm text-muted sm:col-span-2 xl:col-span-3">
                                    Belum ada artikel.
                                </div>
                            )}
                        </div>
                    </Card>

                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                            Ringkasan
                        </p>
                        <h4 className="mt-3 text-2xl font-bold tracking-tight text-text">
                            Statistik artikel
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-muted">
                            Ikhtisar singkat untuk membantu memantau status
                            artikel tanpa perlu membuka daftar utama.
                        </p>

                        <div className="mt-6 space-y-3 rounded-3xl border border-border bg-base/80 p-5">
                            <div className="flex items-center justify-between border-b border-border pb-2 text-sm text-text">
                                <span>Total</span>
                                <span className="font-semibold">
                                    {articles.length}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-border pb-2 text-sm text-text">
                                <span>Terbit</span>
                                <span className="font-semibold">
                                    {
                                        articles.filter(
                                            (article) => article.is_published,
                                        ).length
                                    }
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-text">
                                <span>Draf</span>
                                <span className="font-semibold">
                                    {
                                        articles.filter(
                                            (article) => !article.is_published,
                                        ).length
                                    }
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
