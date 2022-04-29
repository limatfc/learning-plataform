import { filterBySection } from "../scripts/logic/filterBySection";
import ActivityCard from "./ActivityCard";

export default function FilterCards({ activities }) {
  const filteredvideos = filterBySection(activities, "Videos");
  const videosItem = filteredvideos.map((item) => <ActivityCard item={item} />);
  const filteredBooks = filterBySection(activities, "Books");
  const BooksItem = filteredBooks.map((item) => <ActivityCard item={item} />);
  const filteredGames = filterBySection(activities, "Games");
  const GamesItem = filteredGames.map((item) => <ActivityCard item={item} />);
  const filteredImages = filterBySection(activities, "Images");
  const ImagesItem = filteredImages.map((item) => <ActivityCard item={item} />);
  const filteredHome = filterBySection(activities, "Home");
  const HomeItem = filteredHome.map((item) => <ActivityCard item={item} />);

  return (
    <div>
      <h3>Videos</h3>
      <ul>{videosItem}</ul>
      <h3>Book activities</h3>
      <div>{BooksItem}</div>
      <h3>Games</h3>
      <div>{GamesItem}</div>
      <h3>Images</h3>
      <div>{ImagesItem}</div>
      <h3>Have fun at home</h3>
      <div>{HomeItem}</div>
    </div>
  );
}
