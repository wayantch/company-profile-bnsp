import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ pageContent }) {
    const { data, setData, put, processing, errors } = useForm({
        section: pageContent.section || "",
        key: pageContent.key || "",
        value: pageContent.value || "",
        file_path: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        put(route("admin.page-contents.update", pageContent.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit Konten - ${pageContent.key}`} />

            <PageHeader
                title={`Edit Konten: ${pageContent.key}`}
                subtitle="Perbarui section, key, value, atau file pendukung."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    {
                        label: "Konten Halaman",
                        url: route("admin.page-contents.index"),
                    },
                    { label: "Edit" },
                ]}
            />

            <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
                <Card className="border-stone-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-stone-900">
                                Form Edit Konten
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                ID {pageContent.id} · {pageContent.section}
                            </p>
                        </div>
                        <Badge variant="muted">Edit Page</Badge>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Section
                                </span>
                                <input
                                    type="text"
                                    value={data.section}
                                    onChange={(event) =>
                                        setData("section", event.target.value)
                                    }
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-stone-400"
                                />
                                {errors.section && (
                                    <p className="text-xs text-rose-600">
                                        {errors.section}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Key
                                </span>
                                <input
                                    type="text"
                                    value={data.key}
                                    onChange={(event) =>
                                        setData("key", event.target.value)
                                    }
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-stone-400"
                                />
                                {errors.key && (
                                    <p className="text-xs text-rose-600">
                                        {errors.key}
                                    </p>
                                )}
                            </label>
                        </div>

                        <label className="space-y-2 block">
                            <span className="block text-sm font-medium text-stone-700">
                                Value
                            </span>
                            <textarea
                                value={data.value}
                                onChange={(event) =>
                                    setData("value", event.target.value)
                                }
                                rows={6}
                                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-stone-400"
                            />
                            {errors.value && (
                                <p className="text-xs text-rose-600">
                                    {errors.value}
                                </p>
                            )}
                        </label>

                        <div className="space-y-2 block">
                            <span className="block text-sm font-medium text-stone-700">
                                Ganti file pendukung
                            </span>
                            <input
                                type="file"
                                onChange={(event) =>
                                    setData(
                                        "file_path",
                                        event.target.files?.[0] ?? null,
                                    )
                                }
                                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 file:mr-4 file:rounded-xl file:border-0 file:bg-stone-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-stone-50"
                            />
                            {pageContent.file_path && (
                                <a
                                    href={pageContent.file_path}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-xs font-medium text-stone-900 underline decoration-stone-300 underline-offset-4"
                                >
                                    File saat ini
                                </a>
                            )}
                            {errors.file_path && (
                                <p className="text-xs text-rose-600">
                                    {errors.file_path}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Simpan Perubahan
                            </button>
                            <Link
                                href={route("admin.page-contents.index")}
                                className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                            >
                                Kembali
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>
        </AdminLayout>
    );
}
