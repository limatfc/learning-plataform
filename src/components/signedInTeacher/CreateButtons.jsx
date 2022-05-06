export default function CreateButtons({ actions }) {
  const { onOpenFileForm, onOpenLinkForm } = actions;
  return (
    <header className="create-buttons">
      <button className="label pri" onClick={onOpenFileForm} value="file">
        Create a file
      </button>
      <button className="label pri" onClick={onOpenLinkForm} value="video">
        Create a video
      </button>
      <button className="label pri" onClick={onOpenFileForm} value="image">
        Create an image
      </button>
      <button className="label pri last" onClick={onOpenLinkForm} value="game">
        Create a game
      </button>
    </header>
  );
}
