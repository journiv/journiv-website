"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, MessageCircle } from "lucide-react"

export function EmailSignup() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <Card className="mx-auto max-w-2xl border-border/50 p-8 sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Stay updated</h2>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground">
                Star us on GitHub to follow development updates and join our Discord community to connect with other
                users.
              </p>
            </div>

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1 gap-2">
                <a href="https://github.com/journiv/journiv-app" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 gap-2 bg-transparent">
                <a href="https://discord.gg/CuEJ8qft46" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
