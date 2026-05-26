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
                    <Card className="overflow-hidden border-stone-200 bg-white shadow-sm">
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
                                    {article.category}
                                </Badge>
                                <Badge
                                    variant={
                                        article.is_published
                                            ? "success"
                                            : "muted"
                                    }
                                >
                                    {article.is_published
                                        ? "Published"
                                        : "Draft"}
                                </Badge>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">
                                {article.title}
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-stone-500">
                                <span>Oleh {article.author || "Admin"}</span>
                                <span>{formatDate(article.created_at)}</span>
                                <span>Slug: {article.slug}</span>
                            </div>

                            <div className="mt-8 whitespace-pre-wrap rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm leading-8 text-stone-700">
                                {article.content}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={route(
                                        "admin.articles.edit",
                                        article.id,
                                    )}
                                    className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                                >
                                    Edit Artikel
                                </Link>
                                <Link
                                    href={route("admin.articles.index")}
                                    className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <aside className="space-y-4">
                        <Card className="border-stone-200 bg-white p-6 shadow-sm">
                            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                                Related Articles
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
                                            className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:border-stone-400 hover:bg-white"
                                        >
                                            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                                                {item.category}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-stone-900">
                                                {item.title}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-stone-500">
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
