import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

const formatDate = (value) => {
    if (!value) {
        return "-";
    }

    return new Date(value).toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

export default function Show({ article, relatedArticles = [] }) {
    return (
        <AdminLayout>
            <Head title={article.title} />

            <PageHeader
                title={article.title}
                subtitle="Detail artikel admin dengan tampilan yang mengikuti gaya kartu artikel publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Artikel", url: route("admin.articles.index") },
                    { label: "Detail" },
                ]}
            />

            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr]">
                    <Card className="overflow-hidden border-border/80 bg-surface/90 shadow-sm shadow-ink/5">
                        {article.thumbnail && (
                            <img
                                src={article.thumbnail}
                                alt={article.title}
                                className="h-80 w-full object-cover"
                            />
                        )}

                        <div className="p-6 lg:p-8">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="primary">
                                    {article.category?.name || article.category}
                                </Badge>
                                <Badge
                                    variant={
                                        article.is_published
                                            ? "success"
                                            : "muted"
                                    }
                                >
                                    {article.is_published ? "Terbit" : "Draf"}
                                </Badge>
                            </div>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text">
                                {article.title}
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                                <span>Oleh {article.author || "Admin"}</span>
                                <span>{formatDate(article.created_at)}</span>
                                <span>Slug: {article.slug}</span>
                            </div>

                            <div className="mt-8 whitespace-pre-wrap rounded-3xl border border-border bg-base/80 p-5 text-sm leading-8 text-text/80">
                                {article.content}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={route(
                                        "admin.articles.edit",
                                        article.id,
                                    )}
                                    className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    Edit Artikel
                                </Link>
                                <Link
                                    href={route("admin.articles.index")}
                                    className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <aside className="space-y-4">
                        <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                                Artikel Terkait
                            </p>
                            <div className="mt-4 space-y-4">
                                {relatedArticles.length ? (
                                    relatedArticles.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "admin.articles.show",
                                                item.id,
                                            )}
                                            className="block rounded-2xl border border-border bg-base/80 p-4 transition hover:-translate-y-0.5 hover:border-primary/20 hover:bg-secondary/50"
                                        >
                                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                                                {item.category}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-text">
                                                {item.title}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted">
                                        Belum ada artikel terkait.
                                    </p>
                                )}
                            </div>
                        </Card>
                    </aside>
                </div>
            </div>
        </AdminLayout>
    );
}
