import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - School Uniform Tips & Insights | Manali Fashion",
  description:
    "Expert insights on school uniforms, fabric care, trends, and tips for educational institutions. Stay updated with the latest in school uniform industry.",
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Choose the Right School Uniform Fabric",
      excerpt:
        "Selecting the perfect fabric for school uniforms is crucial for comfort, durability, and maintenance. Learn about different fabric options and their benefits.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Manali Fashion Team",
      date: "March 15, 2024",
      category: "Fabric Guide",
      slug: "choose-right-school-uniform-fabric",
    },
    {
      title: "Why Comfort Matters in Uniform Design",
      excerpt:
        "Comfortable uniforms contribute to better student performance and well-being. Discover the key factors that make uniforms comfortable for daily wear.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Dr. Priya Sharma",
      date: "March 10, 2024",
      category: "Design Tips",
      slug: "comfort-matters-uniform-design",
    },
    {
      title: "2024 Trends in School Uniform Customization",
      excerpt:
        "Explore the latest trends in school uniform customization, from modern cuts to innovative embroidery techniques that schools are adopting.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Fashion Expert",
      date: "March 5, 2024",
      category: "Trends",
      slug: "2024-trends-school-uniform-customization",
    },
    {
      title: "Maintaining School Uniforms: A Complete Guide",
      excerpt:
        "Proper care and maintenance can significantly extend the life of school uniforms. Learn the best practices for washing, storing, and maintaining uniforms.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Care Specialist",
      date: "February 28, 2024",
      category: "Maintenance",
      slug: "maintaining-school-uniforms-guide",
    },
    {
      title: "The Psychology of School Uniforms",
      excerpt:
        "Understanding how uniforms affect student behavior, self-esteem, and academic performance. Research-backed insights for educators.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Educational Psychologist",
      date: "February 20, 2024",
      category: "Psychology",
      slug: "psychology-school-uniforms",
    },
    {
      title: "Sustainable Practices in Uniform Manufacturing",
      excerpt:
        "Learn about eco-friendly approaches to uniform production and how schools can make environmentally conscious choices.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Sustainability Expert",
      date: "February 15, 2024",
      category: "Sustainability",
      slug: "sustainable-practices-uniform-manufacturing",
    },
  ]

  const categories = ["All", "Fabric Guide", "Design Tips", "Trends", "Maintenance", "Psychology", "Sustainability"]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">School Uniform Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, industry insights, and practical advice for educational institutions. Stay informed about the
            latest trends and best practices in school uniform selection and care.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 ? "bg-navy-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-navy-900"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-navy-100 text-navy-900 px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-navy-900">{blogPosts[0].title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{blogPosts[0].excerpt}</p>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="inline-flex items-center text-navy-900 font-medium hover:text-navy-700"
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">Latest Articles</h2>
            <div className="w-20 h-1 bg-navy-900"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-navy-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-navy-900 font-medium text-sm hover:text-navy-700"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, tips, and trends in school uniform industry.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <button className="bg-white text-navy-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
