import { Card } from "@/components/ui/card"

export function Demo() {
  return (
    <section id="demo" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-12">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Experience Journiv</h2>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              Watch this showcase video to see how Journiv transforms your journaling experience with beautiful design,
              mood tracking, and thoughtful features.
            </p>
          </div>

          <Card className="w-full max-w-md overflow-hidden border-border/50">
            <div className="relative w-full bg-muted" style={{ aspectRatio: "9/16" }}>
              <video
                src="https://xtgsourjxouxlzy3.public.blob.vercel-storage.com/demo720p.mov"
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                aria-label="Journiv Demo Video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </Card>

          <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
            <Card className="border-border/50 p-6">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">Trust</div>
                <div className="text-sm text-muted-foreground">Source Available</div>
              </div>
            </Card>
            <Card className="border-border/50 p-6">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">Docker</div>
                <div className="text-sm text-muted-foreground">Easy Deployment</div>
              </div>
            </Card>
            <Card className="border-border/50 p-6">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">Cross-Platform</div>
                <div className="text-sm text-muted-foreground">Web & Mobile</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
