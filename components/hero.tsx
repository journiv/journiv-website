import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex max-w-4xl flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Open source and self-hosted
            </div>

            <h1 className="text-balance font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Your thoughts,
              <br />
              <span className="text-muted-foreground">your sanctuary</span>
            </h1>

            <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A beautiful, privacy-first journaling app with mood tracking, daily prompts, and powerful insights.
              Self-host your memories and keep them truly yours.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <Link href="https://github.com/journiv/journiv-app">
                  <Star className="h-4 w-4" />
                  Star on GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
