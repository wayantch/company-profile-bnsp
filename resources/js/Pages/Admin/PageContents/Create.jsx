import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        section: "",
        key: "",
        value: "",
        file_path: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("admin.page-contents.store"), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Tambah Konten" />

            <PageHeader
                title="Tambah Konten"
                subtitle="Buat data baru untuk section konten halaman publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    {
                        label: "Konten Halaman",
                        url: route("admin.page-contents.index"),
                    },
                    { label: "Tambah" },
                ]}
            />

            <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
                <Card className="border-stone-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-stone-900">
                                Form Konten Baru
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                Isi field teks atau unggah file pendukung.
                            </p>
                        </div>
                        <Badge variant="muted">Create Page</Badge>
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
                                    placeholder="home"
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
                                    placeholder="hero_title"
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
                                placeholder="Teks konten yang akan tampil di halaman publik"
                            />
                            {errors.value && (
                                <p className="text-xs text-rose-600">
                                    {errors.value}
                                </p>
                            )}
                        </label>

                        <label className="space-y-2 block">
                            <span className="block text-sm font-medium text-stone-700">
                                File pendukung
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
                            {errors.file_path && (
                                <p className="text-xs text-rose-600">
                                    {errors.file_path}
                                </p>
                            )}
                            <p className="text-xs text-stone-500">
                                Isi value atau file, minimal salah satu.
                            </p>
                        </label>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Simpan
                            </button>
                            <Link
                                href={route("admin.page-contents.index")}
                                className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                            >
                                Batal
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>
        </AdminLayout>
    );
}
