import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Screenshots() {
  const screenshots = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-BwUOzLatTysmSyGbzC9sfC6RXXFDy0.jpg",
      alt: "Journiv home screen with daily prompts, on this day memories, and recent entries in light mode",
      title: "Daily Prompts & Entries",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-aC1wGwReqeduXKh7a0oRf6xGAxeTS7.jpg",
      alt: "Detailed journal entry about morning in Ljubljana with landscape photo and mood tracking in light mode",
      title: "Rich Journal Entries",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-rqj9kN02X6oigv78XqCAIVvl3rFRAQ.jpg",
      alt: "Mood tracking insights dashboard with 7-day trend graph and mood distribution chart in dark mode",
      title: "Mood Insights",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-KmVUSObDMWMnIf9hMJxMJ9q4NhtIK9.jpg",
      alt: "Journal entries list view showing multiple entries with dates and thumbnails in light mode",
      title: "All Your Memories",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-eZXWzXzJNWrxJ9JU18EihAqEnhSi8I.jpg",
      alt: "Media gallery grid view showing photos and videos from journal entries in light mode",
      title: "Media Gallery",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-KnjKVFj9Ardk0C9U233FVztzijg2hi.jpg",
      alt: "Detailed journal entry with multiple media attachments and tags in dark mode",
      title: "Organize with Tags",
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Beautiful by design</h2>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              A thoughtfully crafted interface that makes journaling a joy. Available in light and dark modes.
            </p>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/50 transition-all hover:border-border hover:shadow-lg"
              >
                <div className="relative aspect-[9/16] w-full bg-muted/30">
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{screenshot.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
