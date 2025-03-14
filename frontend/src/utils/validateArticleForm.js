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

    const tagsAsString = Array.isArray(formData.tags) ? formData.tags.join(", ") : formData.tags;    
  
    if (!tagsAsString.trim()) {
      errors.tags = "At least one tag is required."
    }
  
    return errors 
  }
  
  export default validateArticleForm
  