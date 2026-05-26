import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

const formatValue = (content) => {
    if (content.value) {
        return content.value;
    }

    if (content.file_path) {
        return content.file_path;
    }

    return "-";
};

export default function Index({ pageContents = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus konten halaman ini?")) {
            router.delete(route("admin.page-contents.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Konten Halaman" />

            <PageHeader
                title="Konten Halaman"
                subtitle="Kelola teks dan file yang dipakai di halaman publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Konten Halaman" },
                ]}
            />

            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <Card className="border-stone-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-stone-900">
                                Daftar Konten
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                Total item: {pageContents.length}
                            </p>
                        </div>

                        <Link
                            href={route("admin.page-contents.create")}
                            className="inline-flex items-center justify-center rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                        >
                            Tambah Konten
                        </Link>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
                        <table className="min-w-full divide-y divide-stone-200 text-sm">
                            <thead className="bg-stone-50 text-stone-500">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Section
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Key
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Value / File
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 bg-white">
                                {pageContents.length ? (
                                    pageContents.map((content) => (
                                        <tr
                                            key={content.id}
                                            className="align-top hover:bg-stone-50/80"
                                        >
                                            <td className="px-4 py-4">
                                                <Badge variant="muted">
                                                    {content.section}
                                                </Badge>
                                            </td>
                                            <td className="px-4 py-4 font-medium text-stone-900">
                                                {content.key}
                                            </td>
                                            <td className="px-4 py-4 text-stone-600">
                                                <p className="max-w-xl whitespace-pre-wrap leading-6">
                                                    {formatValue(content)}
                                                </p>
                                                {content.file_path && (
                                                    <a
                                                        href={content.file_path}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="mt-2 inline-block text-xs font-medium text-stone-900 underline decoration-stone-300 underline-offset-4"
                                                    >
                                                        Lihat file
                                                    </a>
                                                )}
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="flex flex-wrap gap-2">
                                                    <Link
                                                        href={route(
                                                            "admin.page-contents.show",
                                                            content.id,
                                                        )}
                                                        className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                                    >
                                                        Lihat
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "admin.page-contents.edit",
                                                            content.id,
                                                        )}
                                                        className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDelete(
                                                                content.id,
                                                            )
                                                        }
                                                        className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-medium text-rose-600 transition hover:border-rose-300 hover:bg-rose-50"
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
                                            className="px-4 py-10 text-center text-stone-500"
                                            colSpan={4}
                                        >
                                            Belum ada konten halaman.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
}
