// SlidingImages.tsx
const SlidingImages = () => {
  return (
    <div className="overflow-hidden border-[1px] border-stone-600 p-3 rounded-[8px]">
      <div className="flex animate-slide">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            <img src="https://images.pexels.com/photos/33927026/pexels-photo-33927026.jpeg" draggable={false} className="w-[300px] h-[200px] object-cover" />
            <img src="https://images.pexels.com/photos/34316104/pexels-photo-34316104.jpeg" draggable={false} className="w-[300px] h-[200px] object-cover" />
            <img src="https://images.pexels.com/photos/34136522/pexels-photo-34136522.jpeg" draggable={false} className="w-[300px] h-[200px] object-cover" />
            <img src="https://images.pexels.com/photos/33383830/pexels-photo-33383830.jpeg" draggable={false} className="w-[300px] h-[200px] object-cover" />
            <img src="https://images.pexels.com/photos/23021280/pexels-photo-23021280.jpeg" draggable={false} className="w-[300px] h-[200px] object-cover" />
            <img src="https://images.pexels.com/photos/34a275045/pexels-photo-34275045.jpeg" draggable={false} className="w-[300px] h-[200px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingImages;