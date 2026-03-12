"use client";

const MOP_PHOTOS = [
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/Dore_fotos_9435.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/Dore_fotos_9493.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/Dore_fotos_9539.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/IMG_9379.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/IMG_9386.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/IMG_9413.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/IMG_9421.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/IMG_9425.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/IMG_9432.JPG",
  "https://raw.githubusercontent.com/maherakhatoonprojxon-tech/momentum-assets/main/IMG_9448.JPG",
];

const PHOTOS_DOUBLED = [...MOP_PHOTOS, ...MOP_PHOTOS];

export function MopPhotoCarousel() {
  return (
    <div className="mop-carousel-v2">
      <div className="mop-carousel-v2-viewport">
        <div className="mop-carousel-v2-track mop-carousel-v2-track--scroll">
          {PHOTOS_DOUBLED.map((src, index) => (
            <div key={index} className="mop-carousel-v2-slot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={index < MOP_PHOTOS.length ? `Momentum Office Party ${index + 1}` : ""} className="mop-carousel-v2-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
