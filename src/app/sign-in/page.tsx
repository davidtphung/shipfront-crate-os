import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { withBase } from "@/lib/paths";

export const metadata = {
  title: "Sign in - Shipfront",
};

export default function SignInPage() {
  return (
    <section className="mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-5 py-28">
      <h1 className="text-3xl font-medium tracking-tight">Sign in</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
        Workspace sign-in is not live in this preview. Request access to get a
        Crate workspace.
      </p>
      <form className="mt-8 grid gap-4" action={withBase("/request-access")}>
        <div className="grid gap-2 text-sm">
          <label htmlFor="signin-email" className="text-ink-2">
            Work email
          </label>
          <input
            id="signin-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            required
            className="h-11 rounded-[12px] border border-line bg-bg-2 px-3 text-[15px]"
          />
        </div>
        <div className="grid gap-2 text-sm">
          <label htmlFor="signin-password" className="text-ink-2">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
            className="h-11 rounded-[12px] border border-line bg-bg-2 px-3 text-[15px]"
          />
        </div>
        <Button type="submit" variant="ghost" className="w-full">
          Continue
        </Button>
      </form>
      <p className="mt-6 text-[14px] text-ink-2">
        Need a workspace?{" "}
        <Link href="/request-access" className="text-ink underline-offset-4 hover:underline">
          Request access
        </Link>
      </p>
    </section>
  );
}
