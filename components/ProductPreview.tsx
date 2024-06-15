import React from "react";

export default function ProductPreview({ name, price, onClick }: any) {
  return (
    <div className="product-preview">
      <button
        className="product-preview__add"
        onClick={() => onClick()}
        title="Add to the offer"
      >
        <span>+</span>
      </button>
      <span className="product-preview__name">{name}</span>
      <span className="product-preview__price">from {price}</span>
    </div>
  );
}
