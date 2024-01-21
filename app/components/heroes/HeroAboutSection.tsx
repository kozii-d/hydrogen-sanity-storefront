type Props = {
  content?: string;
};

export default function HeroAboutSection({content}: Props) {
  if (!content) {
    return null;
  }

  return (
    <div>
      <h2 className="text-4xl">About</h2>
      <p className="text-lg">{content}</p>
    </div>
  );
}
