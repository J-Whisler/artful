import React from "react";
import "./FullShop.scss";

import products from "../../data";
import ProductCard from "../ProductCard/ProductCard";

const FullShop = () => {
  const filteredPhotos = products.filter((photoProduct) =>
    photoProduct.type === "Photo" ? photoProduct : ""
  );
  const filteredPaintings = products.filter((paintingProduct) =>
    paintingProduct.type === "Painting" ? paintingProduct : ""
  );
  const filteredIllustrations = products.filter((illustrationProduct) =>
    illustrationProduct.type === "Illustration" ? illustrationProduct : ""
  );
  return (
    <div className="fullShop">
      <div className="fullShop__header">
        <div className="fullShop__headerDiv"></div>
        <h2 className="fullShop__headerText">Full Shop</h2>
        <div className="fullShop__headerDiv"></div>
      </div>

      <div className="fullShop__content">
        <div className="fullShop__contentSection">
          <div className="fullShop__contentSectionTitle">
            <h3>Photos</h3>
          </div>
          <div className="fullShop__contentSectionCards">
            {filteredPhotos.map((photo) => (
              <ProductCard
                product={photo}
                key={photo._id}
                image={photo.image}
                name={photo.name}
                type={photo.type}
                price={photo.price}
                rating={photo.rating}
                numReviews={photo.numReviews}
              />
            ))}
          </div>
        </div>

        <div className="fullShop__contentSection">
          <div className="fullShop__contentSectionTitle">
            <h3>Paintings</h3>
          </div>
          <div className="fullShop__contentSectionCards">
            {filteredPaintings.map((painting) => (
              <ProductCard
                product={painting}
                key={painting._id}
                image={painting.image}
                name={painting.name}
                type={painting.type}
                price={painting.price}
                rating={painting.rating}
                numReviews={painting.numReviews}
              />
            ))}
          </div>
        </div>
        <div className="fullShop__contentSection">
          <div className="fullShop__contentSectionTitle">
            <h3>Illustrations</h3>
          </div>
          <div className="fullShop__contentSectionCards">
            {filteredIllustrations.map((illustration) => (
              <ProductCard
                product={illustration}
                key={illustration._id}
                image={illustration.image}
                name={illustration.name}
                type={illustration.type}
                price={illustration.price}
                rating={illustration.rating}
                numReviews={illustration.numReviews}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="test">
        {filteredPhotos.map((photo) => (
          <FullShopCard product={photo} key={photo._id} />
        ))}
      </div> */}

      {/* <div className="fullShop__content">
        <div className="fullShop__contentSection">
          <h3 className="fullShop__contentSectionTitle">Photos</h3>
          <div className="fullShop__contentSectionCards">
            {filteredPhotos.map((photo) => (
              <FullShopCard product={photo} key={photo._id} />
            ))}
          </div>
        </div>
        <div className="fullShop__contentSection">
          <h3 className="fullShop__contentSectionTitle">Paintings</h3>
        </div>
        <div className="fullShop__contentSection">
          <h3 className="fullShop__contentSectionTitle">Illustrations</h3>
        </div>
      </div> */}

      {/* <div className="fullShop__content">

        <div className="fullShop__section">
          <h3 className="fullShop__sectionTitle">Photos</h3>
          <div className="fullShop__sectionCards">
            {filteredPhotos.map((photo) => (
              <FullShopCard product={photo} key={photo.id} />
            ))}
          </div>
        </div>

        <div className="fullShop__section">
          <h3 className="fullShop__sectionTitle">Paintings</h3>
          <div className="fullShop__sectionCards">
            {filteredPaintings.map((painting) => (
              <FullShopCard product={painting} key={painting.id} />
            ))}
          </div>
        </div>

        <div className="fullShop__section">
          <h3 className="fullShop__sectionTitle">Illustrations</h3>
          <div className="fullShop__sectionCards">
            {filteredIllustrations.map((illustration) => (
              <FullShopCard product={illustration} key={illustration.id} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FullShop;
