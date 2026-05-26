import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Show({ article, relatedArticles }) {
    return (
        <PublicLayout title={article.title}>
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[1fr_0.4fr]">
                        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-8">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">{article.category}</p>
                            <h1 className="mt-4 text-4xl font-semibold text-white">{article.title}</h1>
                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
                                <span>{article.author || 'Admin Wynnsea'}</span>
                                <span>{article.created_at}</span>
                            </div>
                            <div className="prose prose-invert mt-8 max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-cyan-300">
                                <p className="whitespace-pre-line leading-8 text-slate-300">{article.content}</p>
                            </div>
                        </article>

                        <aside className="space-y-4">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Related Articles</p>
                                <div className="mt-4 space-y-4">
                                    {(relatedArticles || []).map((item) => (
                                        <Link key={item.id} href={route('articles.show', item.slug)} className="block rounded-2xl border border-white/10 bg-[#111827]/70 p-4 transition hover:border-cyan-400/40 hover:bg-white/10">
                                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">{item.category}</p>
                                            <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                                        </Link>
                                    ))}
                                    {!relatedArticles?.length && (
                                        <p className="text-sm text-slate-400">Belum ada artikel terkait.</p>
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