import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

export default function Show({ pageContent }) {
    return (
        <AdminLayout>
            <Head title={`Detail Konten - ${pageContent.key}`} />

            <PageHeader
                title={`Detail Konten: ${pageContent.key}`}
                subtitle="Lihat isi dan metadata konten halaman."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    {
                        label: "Konten Halaman",
                        url: route("admin.page-contents.index"),
                    },
                    { label: "Detail" },
                ]}
            />

            <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
                <Card className="border-stone-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-stone-900">
                                {pageContent.section}
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                Key: {pageContent.key}
                            </p>
                        </div>
                        <Badge variant="muted">Show Page</Badge>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                                Section
                            </p>
                            <p className="mt-2 text-sm font-medium text-stone-900">
                                {pageContent.section}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                                Key
                            </p>
                            <p className="mt-2 text-sm font-medium text-stone-900">
                                {pageContent.key}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                            Value
                        </p>
                        <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-stone-700">
                            {pageContent.value || "-"}
                        </p>
                    </div>

                    {pageContent.file_path && (
                        <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                                File
                            </p>
                            <a
                                href={pageContent.file_path}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-block text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4"
                            >
                                Buka file terkait
                            </a>
                        </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href={route(
                                "admin.page-contents.edit",
                                pageContent.id,
                            )}
                            className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                        >
                            Edit
                        </Link>
                        <Link
                            href={route("admin.page-contents.index")}
                            className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                        >
                            Kembali
                        </Link>
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
}
