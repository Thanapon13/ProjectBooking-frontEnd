export default function GalleryRoom() {
  const galleryRooms = [
    {
      title: "Room Name",
      galleryRooms1:
        "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/160b4c17-1db0-4659-ad98-c81567b4ed6c.jpeg?im_w=1200",
      galleryRooms2:
        "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/e6afe269-b0c7-468d-b93c-ea55b6592cf2.jpeg?im_w=720",
      galleryRooms3:
        "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/f0d9b54f-5395-4d79-bc40-ac06fb772e83.jpeg?im_w=720",
      galleryRooms4:
        "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/f0d9b54f-5395-4d79-bc40-ac06fb772e83.jpeg?im_w=1200",
      galleryRooms5:
        "https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/48dafd6f-65ec-4891-8a85-df07ee8b9829.jpeg?im_w=720"
    }
  ];
  return (
    <div>
      {galleryRooms.map((el, idx) => (
        <div key={idx} className="flex gap-3 cursor-pointer">
          {/* Image Left */}
          <div className=" rounded-s-3xl">
            <img
              alt="img"
              className="w-[600px] h-[382px] rounded-l-xl"
              src={el.galleryRooms1}
            ></img>
          </div>
          {/* Image Right */}
          <div className="flex gap-3">
            {/* Right box 1 */}
            <div className="flex flex-col gap-3 ">
              <img
                alt="img"
                className="w-[300px] h-[185px]"
                src={el.galleryRooms2}
              ></img>
              <img
                alt="img"
                className="w-[300px] h-[185px]"
                src={el.galleryRooms3}
              ></img>
            </div>

            {/* Right box 2 */}
            <div className="flex flex-col gap-3 ">
              <img
                alt="img"
                className="w-[300px] h-[185px] rounded-t-xl"
                src={el.galleryRooms4}
              ></img>
              <img
                alt="img"
                className="w-[300px] h-[185px] rounded-br-xl"
                src={el.galleryRooms5}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
