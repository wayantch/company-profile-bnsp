import { useForm, usePage } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Kontak({ contact }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const submit = (event) => {
        event.preventDefault();
        post(route("kontak.send"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout title="Kontak">
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-primary">
                                Kontak
                            </p>
                            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
                                {contact?.title || "Hubungi Kami"}
                            </h1>
                            <p className="text-base leading-8 text-muted">
                                Kirim pesan untuk kebutuhan proyek, konsultasi,
                                atau pertanyaan umum. Tim kami akan membalas
                                secepatnya.
                            </p>

                            <div className="space-y-4 rounded-3xl border border-border bg-surface/80 p-6 text-sm text-muted shadow-sm shadow-ink/5 backdrop-blur-sm">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                        Alamat
                                    </p>
                                    <p className="mt-2 leading-7">
                                        {contact?.address ||
                                            "Alamat perusahaan belum tersedia."}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                        Telepon
                                    </p>
                                    <p className="mt-2">
                                        {contact?.phone || "-"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                        Email
                                    </p>
                                    <p className="mt-2">
                                        {contact?.email || "-"}
                                    </p>
                                </div>
                            </div>

                            {flash?.success && (
                                <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 text-sm text-text">
                                    {flash.success}
                                </div>
                            )}
                        </div>

                        <div className="rounded-3xl border border-border bg-surface/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm">
                            <form onSubmit={submit} className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="space-y-2 text-sm text-muted">
                                        <span>Nama</span>
                                        <input
                                            value={data.name}
                                            onChange={(event) =>
                                                setData(
                                                    "name",
                                                    event.target.value,
                                                )
                                            }
                                            className="w-full rounded-xl border border-border bg-base px-4 py-3 text-text outline-none ring-0 placeholder:text-muted/60 focus:border-primary/30"
                                            placeholder="Nama Anda"
                                        />
                                        {errors.name && (
                                            <p className="text-xs text-red-500">
                                                {errors.name}
                                            </p>
                                        )}
                                    </label>
                                    <label className="space-y-2 text-sm text-muted">
                                        <span>Email</span>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(event) =>
                                                setData(
                                                    "email",
                                                    event.target.value,
                                                )
                                            }
                                            className="w-full rounded-xl border border-border bg-base px-4 py-3 text-text outline-none placeholder:text-muted/60 focus:border-primary/30"
                                            placeholder="email@domain.com"
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </label>
                                </div>

                                <label className="block space-y-2 text-sm text-muted">
                                    <span>Telepon</span>
                                    <input
                                        value={data.phone}
                                        onChange={(event) =>
                                            setData("phone", event.target.value)
                                        }
                                        className="w-full rounded-xl border border-border bg-base px-4 py-3 text-text outline-none placeholder:text-muted/60 focus:border-primary/30"
                                        placeholder="08xxxxxxxxxx"
                                    />
                                    {errors.phone && (
                                        <p className="text-xs text-red-500">
                                            {errors.phone}
                                        </p>
                                    )}
                                </label>

                                <label className="block space-y-2 text-sm text-muted">
                                    <span>Subjek</span>
                                    <input
                                        value={data.subject}
                                        onChange={(event) =>
                                            setData(
                                                "subject",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-xl border border-border bg-base px-4 py-3 text-text outline-none placeholder:text-muted/60 focus:border-primary/30"
                                        placeholder="Pertanyaan layanan"
                                    />
                                    {errors.subject && (
                                        <p className="text-xs text-red-500">
                                            {errors.subject}
                                        </p>
                                    )}
                                </label>

                                <label className="block space-y-2 text-sm text-muted">
                                    <span>Pesan</span>
                                    <textarea
                                        rows="5"
                                        value={data.message}
                                        onChange={(event) =>
                                            setData(
                                                "message",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-xl border border-border bg-base px-4 py-3 text-text outline-none placeholder:text-muted/60 focus:border-primary/30"
                                        placeholder="Ceritakan kebutuhan Anda"
                                    />
                                    {errors.message && (
                                        <p className="text-xs text-red-500">
                                            {errors.message}
                                        </p>
                                    )}
                                </label>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {processing ? "Mengirim..." : "Kirim Pesan"}
                                </button>
                            </form>

                            {contact?.map_embed && (
                                <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                                    <iframe
                                        src={contact.map_embed}
                                        title="Map"
                                        className="h-72 w-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
