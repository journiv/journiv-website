import Link from "next/link"
import { Github, FileText, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">J</span>
              </div>
              <span className="text-xl font-semibold">Journiv</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your private, self-hosted journal for mindful reflection and personal growth.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Product</h3>
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#demo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Demo
            </Link>
            <Link
              href="https://github.com/orgs/journiv/discussions"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Roadmap
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Resources</h3>
            <Link
              href="https://github.com/journiv/journiv-app/wiki"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/journiv/journiv-app"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/orgs/journiv/discussions"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
            <Link
              href="https://github.com/journiv/journiv-app/issues"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Connect</h3>
            <Link
              href="https://github.com/journiv/journiv-app"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://github.com/journiv/journiv-app/wiki"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileText className="h-4 w-4" />
              Documentation
            </Link>
            <Link
              href="mailto:journiv@protonmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Journiv. Copyright © {new Date().getFullYear()}{" "}
            <Link href="https://github.com/swalabtech">SwalabTech.</Link>
          </p>
          <div className="flex gap-6">
            <Link href="#privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#license" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
