const Carouselitem = ({ img, alt }) => {
  return (
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt={alt}/>
    </div>
  );
};

export default Carouselitem;
