const sources = [
  "https://images.pexels.com/photos/939478/pexels-photo-939478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/162829/squirrel-sciurus-vulgaris-major-mammal-mindfulness-162829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

type ImageProps = {
  source: string;
};

function Image({ source }: ImageProps) {
  return (
    <div>
      <img src={source} alt="다람쥐" />
      <FlyOutMenu />
    </div>
  );
}

export default function ImagesList() {
  return sources.map((source, i) => <Image source={source} key={i} />);
}
