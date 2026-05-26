import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

export default function Show({ gallery, relatedGalleries = [] }) {
    return (
        <AdminLayout>
            <Head title={gallery.title} />

            <PageHeader
                title={gallery.title}
                subtitle="Detail foto gallery untuk memastikan kualitas publikasi."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Gallery", url: route("admin.galleries.index") },
                    { label: "Detail" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr]">
                    <Card className="overflow-hidden border-stone-200 bg-white shadow-sm">
                        {gallery.image_path && (
                            <img
                                src={gallery.image_path}
                                alt={gallery.title}
                                className="h-96 w-full object-cover"
                            />
                        )}

                        <div className="p-6 lg:p-8">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="accent">
                                    {gallery.category || "Umum"}
                                </Badge>
                                <Badge variant="muted">
                                    Order {gallery.order ?? 0}
                                </Badge>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 [overflow-wrap:anywhere]">
                                {gallery.title}
                            </h2>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={route(
                                        "admin.galleries.edit",
                                        gallery.id,
                                    )}
                                    className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                                >
                                    Edit Foto
                                </Link>
                                <Link
                                    href={route("admin.galleries.index")}
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
                                Foto Lainnya
                            </p>
                            <div className="mt-4 space-y-4">
                                {relatedGalleries.length ? (
                                    relatedGalleries.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "admin.galleries.show",
                                                item.id,
                                            )}
                                            className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:border-stone-400 hover:bg-white"
                                        >
                                            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                                                {item.category || "Umum"}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-stone-900 [overflow-wrap:anywhere]">
                                                {item.title}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-stone-500">
                                        Belum ada foto lainnya.
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
