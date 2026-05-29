import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Index({ articles, categories, currentCategory }) {
    return (
        <PublicLayout title="Artikel">
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                        Artikel
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-text sm:text-5xl">
                        Wawasan dan artikel terbaru
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                        Pilih kategori untuk melihat artikel yang paling relevan
                        dan temukan insight terbaru dari tim kami.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 rounded-3xl border border-border bg-surface/90 p-3 shadow-sm shadow-ink/5 backdrop-blur-sm">
                        <Link
                            href={route("articles.index")}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${!currentCategory ? "bg-gradient-to-r from-primary to-accent text-white shadow-sm shadow-primary/10" : "border border-border bg-base text-text hover:border-primary/25 hover:bg-secondary/70"}`}
                        >
                            Semua
                        </Link>
                        {(categories || []).map((category) => (
                            <Link
                                key={category.id}
                                href={route("articles.index", {
                                    category: category.slug,
                                })}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${currentCategory === category.slug ? "bg-gradient-to-r from-primary to-accent text-white shadow-sm shadow-primary/10" : "border border-border bg-base text-text hover:border-primary/25 hover:bg-secondary/70"}`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {(articles?.data || []).map((article) => (
                            <article
                                key={article.id}
                                className="rounded-3xl border border-border bg-surface/90 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-ink/5"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                                    {article.category?.name ||
                                        article.category ||
                                        "Artikel"}
                                </p>
                                <h2 className="mt-4 text-2xl font-bold tracking-tight text-text">
                                    {article.title}
                                </h2>
                                <p className="mt-4 line-clamp-5 text-sm leading-7 text-muted">
                                    {article.content}
                                </p>
                                <Link
                                    href={route("articles.show", article.slug)}
                                    className="mt-5 inline-flex items-center rounded-2xl border border-border bg-base px-4 py-2 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    Baca selengkapnya
                                </Link>
                            </article>
                        ))}
                        {!articles?.data?.length && (
                            <div className="rounded-3xl border border-dashed border-border bg-surface/80 p-6 text-sm text-muted md:col-span-2 xl:col-span-3">
                                Artikel belum tersedia.
                            </div>
                        )}
                    </div>

                    {articles?.links?.length > 3 && (
                        <div className="mt-10 flex flex-wrap gap-2">
                            {articles.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || ""}
                                    preserveScroll
                                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${link.active ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-sm shadow-primary/10" : "border-border bg-base text-text hover:border-primary/25 hover:bg-secondary/70"}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
