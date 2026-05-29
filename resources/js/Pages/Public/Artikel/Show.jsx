import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Show({ article, relatedArticles }) {
    return (
        <PublicLayout title={article.title}>
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[1fr_0.4fr]">
                        <article className="rounded-3xl border border-border bg-surface/90 p-6 lg:p-8 shadow-sm shadow-ink/5 backdrop-blur-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                                {article.category?.name ||
                                    article.category ||
                                    "Artikel"}
                            </p>
                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text">
                                {article.title}
                            </h1>
                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                                <span>{article.author || "Admin Wynnsea"}</span>
                                <span>{article.created_at}</span>
                            </div>
                            <div className="prose mt-8 max-w-none prose-p:text-muted prose-headings:text-text prose-a:text-primary">
                                <p className="whitespace-pre-line leading-8 text-muted">
                                    {article.content}
                                </p>
                            </div>
                        </article>

                        <aside className="space-y-4">
                            <div className="rounded-3xl border border-border bg-surface/90 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm">
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                                    Artikel Terkait
                                </p>
                                <div className="mt-4 space-y-4">
                                    {(relatedArticles || []).map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "articles.show",
                                                item.slug,
                                            )}
                                            className="block rounded-2xl border border-border bg-base p-4 transition hover:border-primary/25 hover:bg-secondary/70"
                                        >
                                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                                                {item.category?.name ||
                                                    item.category ||
                                                    "Artikel"}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-text">
                                                {item.title}
                                            </p>
                                        </Link>
                                    ))}
                                    {!relatedArticles?.length && (
                                        <p className="text-sm text-muted">
                                            Belum ada artikel terkait.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
