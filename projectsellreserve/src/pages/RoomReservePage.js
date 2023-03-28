import GalleryRoom from "../components/GalleryRoom";

export default function RoomReservePage() {
  return (
    <div>
      <div className="w-[80%] border-2 m-auto">
        {/* room title box 1 */}
        <div>
          <h1 className="font-bold text-[26px]">Room Name</h1>
        </div>
        {/* room image box 2 */}
        <div>
          <GalleryRoom />
        </div>
      </div>
    </div>
  );
}
