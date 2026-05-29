import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        website: "",
        description: "",
        order: 0,
        logo: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("admin.clients.store"), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Tambah Klien" />

            <PageHeader
                title="Tambah Klien"
                subtitle="Buat data klien baru yang akan tampil di halaman publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Klien", url: route("admin.clients.index") },
                    { label: "Tambah" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Klien Baru
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Form Klien Baru
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Lengkapi identitas brand klien dan profil
                                    singkat.
                                </p>
                            </div>
                            <Badge variant="muted">Create</Badge>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >
                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Nama Klien
                                </span>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(event) =>
                                        setData("name", event.target.value)
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                    placeholder="PT Contoh Sejahtera"
                                />
                                {errors.name && (
                                    <p className="text-xs text-rose-600">
                                        {errors.name}
                                    </p>
                                )}
                            </label>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-text">
                                        Website
                                    </span>
                                    <input
                                        type="url"
                                        value={data.website}
                                        onChange={(event) =>
                                            setData(
                                                "website",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                        placeholder="https://example.com"
                                    />
                                    {errors.website && (
                                        <p className="text-xs text-rose-600">
                                            {errors.website}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-text">
                                        Urutan
                                    </span>
                                    <input
                                        type="number"
                                        min={0}
                                        value={data.order}
                                        onChange={(event) =>
                                            setData("order", event.target.value)
                                        }
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                    />
                                    {errors.order && (
                                        <p className="text-xs text-rose-600">
                                            {errors.order}
                                        </p>
                                    )}
                                </label>
                            </div>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Deskripsi
                                </span>
                                <textarea
                                    value={data.description}
                                    onChange={(event) =>
                                        setData(
                                            "description",
                                            event.target.value,
                                        )
                                    }
                                    rows={6}
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm leading-7 text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                    placeholder="Profil singkat kerja sama dengan klien"
                                />
                                {errors.description && (
                                    <p className="text-xs text-rose-600">
                                        {errors.description}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Logo
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) =>
                                        setData(
                                            "logo",
                                            event.target.files?.[0] ?? null,
                                        )
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text file:mr-4 file:rounded-xl file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                                />
                                {errors.logo && (
                                    <p className="text-xs text-rose-600">
                                        {errors.logo}
                                    </p>
                                )}
                            </label>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    Simpan Klien
                                </button>
                                <Link
                                    href={route("admin.clients.index")}
                                    className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    Batal
                                </Link>
                            </div>
                        </form>
                    </Card>

                    <Card className="overflow-hidden border-border/80 bg-surface/90 p-6 text-text shadow-sm shadow-ink/5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                            Preview
                        </p>
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-text [overflow-wrap:anywhere]">
                            {data.name || "Nama klien akan tampil di sini"}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-muted">
                            <span>Order {data.order || 0}</span>
                        </div>

                        <div className="mt-6 rounded-3xl border border-border/50 bg-base/80 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Deskripsi
                            </p>
                            <p className="mt-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-muted">
                                {data.description ||
                                    "Deskripsi klien akan muncul di sini."}
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
