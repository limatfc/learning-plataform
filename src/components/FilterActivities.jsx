import { filterBySection } from "../scripts/logic/filterBySection";
import ActivityCard from "./ActivityCard";
import useReadData from "../hooks/useReadData";
import useUserProvider from "../store/useUserProvider";

export default function FilterActivities({ find }) {
  const { activitiesHandler, activities } = useUserProvider();
  const { status2 } = useReadData(
    activitiesHandler,
    `courses/${find.id}/content`
  );

  if (status2 === 0) return null;

  const filteredvideos = filterBySection(activities, "Videos");
  const videosItem = filteredvideos.map((item) => (
    <ActivityCard item={item} key={item.id} />
  ));
  const filteredBooks = filterBySection(activities, "Books");
  const BooksItem = filteredBooks.map((item) => (
    <ActivityCard item={item} key={item.id} />
  ));
  const filteredGames = filterBySection(activities, "Games");
  const GamesItem = filteredGames.map((item) => (
    <ActivityCard item={item} key={item.id} />
  ));
  const filteredImages = filterBySection(activities, "Images");
  const ImagesItem = filteredImages.map((item) => (
    <ActivityCard item={item} key={item.id} />
  ));
  const filteredHome = filterBySection(activities, "Home");
  const HomeItem = filteredHome.map((item) => (
    <ActivityCard item={item} key={item.id} />
  ));

  return (
    <div>
      {filteredvideos.length !== 0 && <h3>Videos</h3>}
      <ul>{videosItem}</ul>
      {filteredBooks.length !== 0 && <h3>Book activities</h3>}
      <div>{BooksItem}</div>
      {filteredGames.length !== 0 && <h3>Games</h3>}
      <div>{GamesItem}</div>
      {filteredImages.length !== 0 && <h3>Images</h3>}
      <div>{ImagesItem}</div>
      {filteredHome.length !== 0 && <h3>Have fun at home</h3>}
      <div>{HomeItem}</div>
    </div>
  );
}
