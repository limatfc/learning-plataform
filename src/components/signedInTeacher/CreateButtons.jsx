export default function CreateButtons({ actions }) {
  const { onOpenFileForm, onOpenLinkForm } = actions;
  return (
    <header>
      <button onClick={onOpenFileForm} value="file">
        Create a file
      </button>
      <button onClick={onOpenLinkForm} value="video">
        Create a video
      </button>
      <button onClick={onOpenFileForm} value="image">
        Create an image
      </button>
      <button onClick={onOpenLinkForm} value="game">
        Create a game
      </button>
    </header>
  );
}
