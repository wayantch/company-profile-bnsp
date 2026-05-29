import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ categories = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus kategori ini?")) {
            router.delete(route("admin.categories.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Kelola Kategori" />

            <PageHeader
                title="Kelola Kategori"
                subtitle="Daftar kategori artikel yang dipakai di halaman publik dan admin."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Kategori" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Master Kategori
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Semua Kategori
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Total kategori: {categories.length}
                                </p>
                            </div>

                            <Link
                                href={route("admin.categories.create")}
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/10 transition hover:opacity-90"
                            >
                                Tambah Kategori
                            </Link>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-base/80">
                            <table className="min-w-full divide-y divide-border text-sm">
                                <thead className="bg-secondary/50 text-muted">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Nama
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Slug
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Artikel
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Urutan
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border bg-base/80">
                                    {categories.length ? (
                                        categories.map((category) => (
                                            <tr
                                                key={category.id}
                                                className="hover:bg-secondary/40"
                                            >
                                                <td className="px-4 py-3 font-medium text-text">
                                                    {category.name}
                                                </td>
                                                <td className="px-4 py-3 text-muted">
                                                    {category.slug}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <Badge variant="accent">
                                                        {category.articles_count ??
                                                            0}
                                                    </Badge>
                                                </td>
                                                <td className="px-4 py-3 text-muted">
                                                    {category.order ?? 0}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            href={route(
                                                                "admin.categories.show",
                                                                category.id,
                                                            )}
                                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                        >
                                                            Lihat
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "admin.categories.edit",
                                                                category.id,
                                                            )}
                                                            className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    category.id,
                                                                )
                                                            }
                                                            className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-300 hover:bg-rose-100"
                                                        >
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                className="px-4 py-10 text-center text-muted"
                                                colSpan={5}
                                            >
                                                Belum ada kategori.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
