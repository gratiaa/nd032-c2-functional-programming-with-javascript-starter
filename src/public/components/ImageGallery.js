const ImageGallery = ({ photos }) => {
  return `${photos
    .map((photo) => {
      return `
				<li class="item">
					<a href="${photo.img_src}" target="_blank">
						<img src=${photo.img_src} alt="" id="${photo.id}" />
					</a>
				</li>
			`;
    })
    .join("")}`;
};

export default ImageGallery;
