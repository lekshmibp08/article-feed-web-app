const validateArticleForm = (formData, imageUrl) => {
    let errors = {}
  
    if (!formData.title.trim()) {
      errors.title = "Title is required."
    }
  
    if (!formData.category) {
      errors.category = "Category is required."
    }
  
    if (!formData.description.trim()) {
      errors.description = "Description is required."
    }
  
    if (!formData.content.trim()) {
      errors.content = "Content is required."
    }
  
    if (!imageUrl) {
      errors.imageUrl = "Please upload an image."
    }
  
    if (!formData.tags.trim()) {
      errors.tags = "At least one tag is required."
    }
  
    return errors // ✅ Returns an object with errors
  }
  
  export default validateArticleForm
  