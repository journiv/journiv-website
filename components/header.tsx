import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/journiv-logo.png" alt="Journiv" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-semibold">Journiv</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#demo"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Demo
          </Link>
          <Link
            href="https://github.com/journiv/journiv-app"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/journiv/journiv-app/wiki"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="#demo">Watch Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
