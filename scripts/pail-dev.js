import { spawn } from "node:child_process";

if (process.platform === "win32") {
    console.log("Pail is unavailable on Windows; keeping the process idle.");
    setInterval(() => {}, 1000);
} else {
    const child = spawn("php", ["artisan", "pail", "--timeout=0"], {
        stdio: "inherit",
    });

    child.on("exit", (code) => {
        process.exit(code ?? 0);
    });
}
