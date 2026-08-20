interface CardProps {
  title: string;
  description: string;
  imageURL?: string;
  isLoading?: boolean
}

export default function ServiceCard({title, description, imageURL, isLoading}: CardProps) {
  return (
    <div className="ServiceCard">
      {isLoading ? (
        <div>
          <h1>Loading.......</h1>
        </div>
      ):(
        <div>
          {imageURL && <img src={imageURL} alt={title} style={{height: '500px'}} />}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}