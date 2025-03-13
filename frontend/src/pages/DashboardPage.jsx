
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Dialog } from "../components/ui/Dialog"
import DashboardLayout from "../components/DashboardLayout"

function DashboardPage() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Future of Space Exploration",
      excerpt:
        "NASA's Artemis program aims to return humans to the Moon by 2024, with the ultimate goal of establishing a sustainable lunar presence...",
      category: "Space",
      author: "Jane Smith",
      date: "May 15, 2025",
      likes: 124,
      dislikes: 8,
      image: "https://placehold.co/400x200",
    },
    {
      id: 2,
      title: "Advancements in Quantum Computing",
      excerpt:
        "Researchers have achieved a breakthrough in quantum computing, demonstrating quantum supremacy with a 128-qubit processor...",
      category: "Technology",
      author: "John Doe",
      date: "May 12, 2025",
      likes: 89,
      dislikes: 3,
      image: "https://placehold.co/400x200",
    },
    {
      id: 3,
      title: "The Impact of Climate Change on Global Agriculture",
      excerpt:
        "Rising temperatures and changing precipitation patterns are affecting crop yields worldwide, with implications for food security...",
      category: "Science",
      author: "Alex Johnson",
      date: "May 10, 2025",
      likes: 156,
      dislikes: 12,
      image: "https://placehold.co/400x200",
    },
  ])

  const [selectedArticle, setSelectedArticle] = useState(null)
  const [showDialog, setShowDialog] = useState(false)

  const openArticleDialog = (article) => {
    setSelectedArticle(article)
    setShowDialog(true)
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Feed</h1>
        <Link to="/dashboard/create-article">
          <Button>
            <span className="mr-1">+</span> Create Article
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 mt-6">
        {articles.map((article) => (
          <Card key={article.id}>
            <div className="p-6">
              <div className="grid md:grid-cols-[1fr_300px] gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>

                  <h2
                    className="text-2xl font-bold cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => openArticleDialog(article)}
                  >
                    {article.title}
                  </h2>

                  <p className="text-gray-500">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {article.author[0]}
                      </div>
                      <span className="text-sm font-medium">{article.author}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-500">❤️ {article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-500">👎 {article.dislikes}</span>
                      </div>
                      <div className="relative">
                        <button className="p-1 rounded-md hover:bg-gray-100">⋮</button>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-[200px] object-cover rounded-md"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Article Dialog */}
      <Dialog isOpen={showDialog} onClose={() => setShowDialog(false)} title={selectedArticle?.title}>
        {selectedArticle && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              By {selectedArticle.author} • {selectedArticle.date}
            </p>
            <img
              src={selectedArticle.image || "/placeholder.svg"}
              alt={selectedArticle.title}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <p>{selectedArticle.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                ❤️ Like ({selectedArticle.likes})
              </Button>
              <Button variant="outline" size="sm">
                👎 Dislike ({selectedArticle.dislikes})
              </Button>
              <Button variant="outline" size="sm">
                Block
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </DashboardLayout>
  )
}

export default DashboardPage

