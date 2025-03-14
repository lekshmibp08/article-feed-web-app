
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Dialog } from "../components/ui/Dialog"
import DashboardLayout from "../components/DashboardLayout"
import { useSelector } from "react-redux"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


function MyArticlesPage() {
  const user = useSelector((state) => state.auth.user)
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [articleToDelete, setArticleToDelete] = useState(null)

  const fetchArticles = async () => {
    try {
        const response = await axios.get(`/api/my-articles/${user._id}`);
        setArticles(response.data);
    } catch (error) {
        setError("Failed to load articles.")
        console.error("Error fetching articles:", error)
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    if (user?._id) {
        fetchArticles()
    }
  }, [user?._id])

  const handleDelete = async () => {
    if (!articleToDelete) return
    try {
        await axios.delete(`/api/articles/${articleToDelete}`);
        setArticles((prevArticles) =>
            prevArticles.filter((article) => article._id !== articleToDelete)
        );
        setShowDeleteDialog(false)
        setArticleToDelete(null)  
        toast.success("Article deleted successfully!", { position: "top-center" });              
    } catch (error) {
        toast.error("Failed to delete article.", { position: "top-center" });
    }      
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Articles</h1>
        <Link to="/dashboard/create-article">
          <Button>
            <span className="mr-1">+</span> Create Article
          </Button>
        </Link>
      </div>
      {loading ? (
        <p className="mt-6">Loading articles...</p>
      ) : error ? (
        <p className="mt-6 text-red-500">{error}</p>
      ) : articles.length === 0 ? ( 
        <p className="text-gray-500 mt-6">No articles found.</p>
      ) : (
      <div className="grid gap-6 mt-6">
        {articles.map((article) => (
          <Card key={article.id}>
            <div className="p-6">
              <div className="grid md:grid-cols-[1fr_200px] gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                    <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">
                      {article.status}
                    </span>
                    <span className="text-sm text-gray-500">
                    {new Date(article.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold">{article.title}</h2>
                  <p className="text-gray-500">{article.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm">Likes: {article.likesCount}</span>
                      <span className="text-sm">Dislikes: {article.dislikesCount}</span>
                      <span className="text-sm">Blocks: {article.blocksCount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 rounded-md hover:bg-gray-100">👁️</button>
                      <Link to={`/dashboard/edit-article/${article._id}`}>
                        <button className="p-1 rounded-md hover:bg-gray-100">✏️</button>
                      </Link>
                      <div className="relative">
                        <button
                          className="p-1 rounded-md hover:bg-gray-100"
                          onClick={() => {
                            setArticleToDelete(article._id)
                            setShowDeleteDialog(true)
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={article.imageUrl || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-[100px] object-cover rounded-md"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
        
      )}


      {/* Delete Dialog */}
      <Dialog isOpen={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} title="Delete Article">
        <div className="space-y-4">
          <p>Are you sure you want to delete this article? This action cannot be undone.</p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
      <ToastContainer position="top-center" autoClose={3000} />
    </DashboardLayout>
  )
}

export default MyArticlesPage

