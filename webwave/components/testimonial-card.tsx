import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  name: string
  title: string
  company: string
  avatarSrc?: string
}

export default function TestimonialCard({ quote, name, title, company, avatarSrc }: TestimonialProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="text-primary/20">
            <Quote size={48} />
          </div>

          <p className="text-lg italic text-muted-foreground">{quote}</p>

          <div className="flex items-center pt-4">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">
                {title}, {company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
