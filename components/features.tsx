import { Lock, Server, Heart, BookOpen, Search, BarChart3, Tag, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Lock,
      title: "Privacy First",
      description:
        "Your thoughts stay yours. Self-host on your own infrastructure with complete data ownership and control.",
    },
    {
      icon: Server,
      title: "Self-Hosted",
      description: "Deploy with Docker in minutes. Run on your server, your rules. No third-party access to your data.",
    },
    {
      icon: Heart,
      title: "Mood Tracking",
      description:
        "Track your emotional journey with intuitive mood logging and beautiful visualizations of your patterns.",
    },
    {
      icon: BookOpen,
      title: "Prompt Journaling",
      description: "Never face a blank page. Get thoughtful writing prompts to inspire reflection and self-discovery.",
    },
    {
      icon: Search,
      title: "Full-Text Search",
      description: "Find any memory instantly with powerful search across all your entries, tags, and metadata.",
    },
    {
      icon: BarChart3,
      title: "Insights & Analytics",
      description:
        "Understand yourself better with mood trends, writing patterns, and personalized insights over time.",
    },
    {
      icon: Tag,
      title: "Multiple Journals",
      description:
        "Organize your life with separate journals for work, travel, personal growth, and more. Tag everything.",
    },
    {
      icon: Calendar,
      title: "On This Day",
      description: "Rediscover your past with memories from previous years, helping you see how far you've come.",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to journal
            </h2>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              Powerful features designed for mindful reflection, all while keeping your data private and secure.
            </p>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 transition-all hover:border-border hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
