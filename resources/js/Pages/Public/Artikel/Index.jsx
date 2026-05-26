import { Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Index({ articles, categories, currentCategory }) {
    return (
        <PublicLayout title="Artikel">
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Artikel</p>
                    <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Wawasan dan insight terbaru</h1>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href={route('articles.index')}
                            className={`rounded-full px-4 py-2 text-sm transition ${!currentCategory ? 'bg-cyan-400 text-[#0A0F1E]' : 'border border-white/10 bg-white/5 text-white'}`}
                        >
                            Semua
                        </Link>
                        {(categories || []).map((category) => (
                            <Link
                                key={category}
                                href={route('articles.index', { category })}
                                className={`rounded-full px-4 py-2 text-sm transition ${currentCategory === category ? 'bg-cyan-400 text-[#0A0F1E]' : 'border border-white/10 bg-white/5 text-white'}`}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {(articles?.data || []).map((article) => (
                            <article key={article.id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{article.category}</p>
                                <h2 className="mt-4 text-2xl font-semibold text-white">{article.title}</h2>
                                <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-300">
                                    {article.content}
                                </p>
                                <Link href={route('articles.show', article.slug)} className="mt-5 inline-block text-sm text-cyan-300 hover:text-cyan-200">
                                    Baca selengkapnya
                                </Link>
                            </article>
                        ))}
                        {!articles?.data?.length && (
                            <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-sm text-slate-400 md:col-span-2 xl:col-span-3">
                                Artikel belum tersedia.
                            </div>
                        )}
                    </div>

                    {articles?.links?.length > 3 && (
                        <div className="mt-10 flex flex-wrap gap-2">
                            {articles.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || ''}
                                    preserveScroll
                                    className={`rounded-lg border px-4 py-2 text-sm transition ${link.active ? 'border-cyan-400 bg-cyan-400 text-[#0A0F1E]' : 'border-white/10 bg-white/5 text-white'}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}